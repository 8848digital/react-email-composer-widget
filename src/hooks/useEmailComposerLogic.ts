import { useState, useEffect, useCallback } from "react";
import type {
  EmailWidgetApiAdapter,
  EmailWidgetConfig,
  EmailTemplate,
  EmailTemplateReference,
  EmailComposerLink,
  RecipientTag,
  EmailReplyData,
} from "../types/email";
import { useEmailRecipients } from "./useEmailRecipients";
import { useEmailAttachments } from "./useEmailAttachments";

interface UseEmailComposerLogicProps {
  apiAdapter: EmailWidgetApiAdapter;
  config: EmailWidgetConfig;
  onClose: () => void;
}

export const useEmailComposerLogic = ({ apiAdapter, config, onClose }: UseEmailComposerLogicProps) => {
  const [subject, setSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);

  // Templates
  const [emailTemplates, setEmailTemplates] = useState<EmailTemplate[]>([]);
  const [isLoadingTemplates, setIsLoadingTemplates] = useState(false);

  // Recipients
  const {
    toRecipients, setToRecipients,
    ccRecipients, setCcRecipients,
    bccRecipients, setBccRecipients,
    showCC, setShowCC,
    showBCC, setShowBCC,
    toInput, setToInput,
    ccInput, setCcInput,
    bccInput, setBccInput,
    handleRecipientInputKeyDown,
    handleRecipientInputBlur,
    removeRecipient,
  } = useEmailRecipients({ defaultToEmails: config.defaultToEmails });

  // Attachments
  const {
    attachments,
    setAttachments,
    fileUploadRef,
    handleFileSelect,
    removeAttachment,
    handleAttachClick,
  } = useEmailAttachments(apiAdapter);

  // ── Reply Logic ──────────────────────────────────────────────────────────────
  const replyData = config.replyData;

  // When replyData arrives, seed the from/to/cc/bcc/subject fields
  useEffect(() => {
    if (!replyData) return;

    const seedReplyFields = () => {
      if (replyData.subject) {
        setSubject(replyData.subject.toLowerCase().startsWith("re:") ? replyData.subject : `Re: ${replyData.subject}`);
      }

      const parseEmails = (emailsStr?: string): RecipientTag[] => {
        if (!emailsStr) return [];
        return emailsStr.split(",").map((e) => e.trim()).filter(Boolean).map((email) => ({
          id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
          email,
        }));
      };

      if (replyData.to) {
        setToRecipients(parseEmails(replyData.to));
      }

      if (replyData.cc) {
        const cc = parseEmails(replyData.cc);
        if (cc.length > 0) {
          setCcRecipients(cc);
          setShowCC(true);
        }
      }

      if (replyData.bcc) {
        const bcc = parseEmails(replyData.bcc);
        if (bcc.length > 0) {
          setBccRecipients(bcc);
          setShowBCC(true);
        }
      }

      if (replyData.attachments?.length) {
        setAttachments(replyData.attachments.map((a) => ({
          id: a.name || a.file_name || Math.random().toString(36).substr(2, 9),
          name: a.name,
          fileUrl: a.file_url,
          isUploading: false,
        })));
      }
    };

    queueMicrotask(seedReplyFields);
  }, [replyData, setSubject, setToRecipients, setCcRecipients, setShowCC, setBccRecipients, setShowBCC, setAttachments]);

  // When defaultToEmails arrives after mount, seed To if still empty
  useEffect(() => {
    if (!config.defaultToEmails?.length || replyData?.to) return;
    const emails = config.defaultToEmails;
    const seedDefaultToEmails = () => {
      setToRecipients((prev) =>
        prev.length === 0 ? emails.map((email, i) => ({ id: `default-${i}`, email })) : prev
      );
    };
    queueMicrotask(seedDefaultToEmails);
  }, [config.defaultToEmails, replyData, setToRecipients]);

  // Build quoted content and in_reply_to for reply payloads
  const getReplyPayloadData = useCallback(() => {
    let quotedContent = "";
    let inReplyTo: string | undefined = undefined;

    if (replyData?.content) {
      const dateStr = replyData.date && replyData.time ? `${replyData.date} at ${replyData.time}` : "the previous message";
      const senderNameStr = replyData.senderName || replyData.to || "User";
      quotedContent = `<br><hr><br><div><b>From:</b> ${senderNameStr}<br><b>Sent:</b> ${dateStr}<br><b>Subject:</b> ${replyData.subject || ""}</div><br><div>${replyData.content}</div>`;
    }

    if (replyData?.in_reply_to) {
      inReplyTo = replyData.in_reply_to;
    }

    return { quotedContent, inReplyTo };
  }, [replyData]);

  // ── Fetch Templates ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (!isTemplateModalOpen || !apiAdapter.getTemplates) return;
    let mounted = true;

    // Build references array for context-aware template fetching
    // If active lead → [lead ref, contact ref]; otherwise → [task ref, contact ref]
    const references: EmailTemplateReference[] = [];
    if (config.activeLeadName?.trim()) {
      references.push({
        reference_doctype: config.activeLeadDoctype || "CRM Lead",
        reference_name: config.activeLeadName,
      });
    } else if (config.activeTaskName?.trim()) {
      references.push({
        reference_doctype: config.activeTaskDoctype || "CRM Task",
        reference_name: config.activeTaskName,
      });
    }
    // Always include the contact reference
    if (config.referenceName?.trim()) {
      references.push({
        reference_doctype: "Contact",
        reference_name: config.referenceName,
      });
    }

    // Only set loading if we don't have templates yet to avoid scroll resets on re-fetch
    if (emailTemplates.length === 0) {
      setIsLoadingTemplates(true);
    }

    apiAdapter.getTemplates(references.length > 0 ? references : undefined).then((templates) => {
      if (mounted) {
        setEmailTemplates(templates);
        setIsLoadingTemplates(false);
      }
    }).catch(() => {
      if (mounted) setIsLoadingTemplates(false);
    });
    return () => { mounted = false; };
  }, [isTemplateModalOpen, apiAdapter, emailTemplates.length, config.activeLeadName, config.activeLeadDoctype, config.activeTaskName, config.activeTaskDoctype, config.referenceName]);


  const handleTemplateSelect = (templateBody: string) => {
    setEmailBody(templateBody);
    setIsTemplateModalOpen(false);
  };

  // ── Send Email ───────────────────────────────────────────────────────────────
  const handleSend = async () => {
    // Validate required fields
    if (toRecipients.length === 0) {
      apiAdapter.showWarning?.("Validation Error", "Please add at least one recipient");
      return;
    }

    if (!subject.trim()) {
      apiAdapter.showWarning?.("Validation Error", "Please enter a subject");
      return;
    }

    // Check if any attachments are still uploading
    const uploadingAttachments = attachments.filter((a) => a.isUploading);
    if (uploadingAttachments.length > 0) {
      apiAdapter.showWarning?.("Upload In Progress", "Please wait for all files to finish uploading");
      return;
    }

    // Check if any attachments failed to upload
    const failedAttachments = attachments.filter((a) => a.uploadError);
    if (failedAttachments.length > 0) {
      apiAdapter.showWarning?.("Upload Error", "Some files failed to upload. Please remove them and try again.");
      return;
    }

    // Convert recipients arrays to comma-separated strings
    const recipients = toRecipients.map((r) => r.email).join(", ");
    const cc = ccRecipients.length > 0 ? ccRecipients.map((r) => r.email).join(", ") : undefined;
    const bcc = bccRecipients.length > 0 ? bccRecipients.map((r) => r.email).join(", ") : undefined;

    // Get file names from successfully uploaded attachments
    const attachmentFileNames = attachments.filter((a) => a.name).map((a) => a.name as string);

    // Wrap content in div with ql-editor class (matching Frappe's expected format)
    let htmlContent = emailBody ? `<div class="ql-editor read-mode">${emailBody}</div>` : "";

    // Append quoted reply email if any
    const { quotedContent, inReplyTo } = getReplyPayloadData();
    htmlContent += quotedContent;

    // Build links: task/contact links from config + active lead link
    const combinedLinks: EmailComposerLink[] = [...(config.links ?? [])];
    if (config.activeLeadName?.trim()) {
      const hasLead = combinedLinks.some(
        (l) => (l as { link_doctype?: string; link_name?: string }).link_doctype === config.activeLeadDoctype &&
          (l as { link_doctype?: string; link_name?: string }).link_name === config.activeLeadName
      );
      if (!hasLead) {
        combinedLinks.push({ link_doctype: config.activeLeadDoctype, link_name: config.activeLeadName });
      }
    }


    const payloadLinks = combinedLinks.length > 0 ? combinedLinks : undefined;

    // Prepare payload
    const payload = {
      recipients,
      subject,
      content: htmlContent,
      cc,
      bcc,
      doctype: config.activeLeadName ? config.activeLeadDoctype : (config.doctype || "Contact"),
      name: config.activeLeadName ? config.activeLeadName : config.referenceName,
      attachments: attachmentFileNames.length > 0 ? attachmentFileNames : undefined,

      links: payloadLinks,
      ...(inReplyTo ? { in_reply_to: inReplyTo } : {}),
    };

    setIsPending(true);
    try {
      const result = await apiAdapter.sendEmail(payload);

      if (result?.name) {
        // Update communication status if it's a reply
        if (inReplyTo && apiAdapter.updateCommunicationStatus) {
          apiAdapter.updateCommunicationStatus(inReplyTo, "Replied").catch(() => { });
        }

        // Notify app
        apiAdapter.showNotification?.("Success", "Email sent successfully");
        apiAdapter.onEmailSent?.();
        onClose();
      }
    } catch {
      apiAdapter.showError?.("Error", "Failed to send email");
    } finally {
      setIsPending(false);
    }
  };

  return {
    // State
    subject,
    setSubject,
    toRecipients,
    ccRecipients,
    bccRecipients,
    showCC,
    setShowCC,
    showBCC,
    setShowBCC,
    emailBody,
    setEmailBody,
    toInput,
    setToInput,
    ccInput,
    setCcInput,
    bccInput,
    setBccInput,
    attachments,
    isTemplateModalOpen,
    setIsTemplateModalOpen,
    fileUploadRef,
    isPending,
    emailTemplates,
    isLoadingTemplates,
    replyData,
    // Handlers
    handleRecipientInputKeyDown,
    handleRecipientInputBlur,
    removeRecipient,
    handleFileSelect,
    removeAttachment,
    handleAttachClick,
    handleSend,
    handleTemplateSelect,
  };
};
