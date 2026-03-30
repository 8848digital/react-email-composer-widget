import React from "react";
import { UserIcon, XIcon, PaperclipIcon, FileTextIcon } from "./common/Icons";
import FileUpload from "./common/FileUpload";
import EmailTemplateSelector from "./EmailTemplateSelector";
import Modal from "./common/Modal";
import InternalQuillEditor from "./InternalQuillEditor";
import { useEmailComposerLogic } from "../hooks/useEmailComposerLogic";
import { useDefaultEmailAdapter } from "../hooks/useDefaultEmailAdapter";
import type { EmailWidgetApiAdapter, EmailWidgetConfig, RichTextEditorProps, EmailComposerLink, EmailReplyData } from "../types/email";
import "../styles/email-composer.css";

interface EmailComposerProps {
  // Option 1: Provide full adapter + config (Advanced)
  apiAdapter?: EmailWidgetApiAdapter;
  config?: EmailWidgetConfig;

  // Option 2: Provide simple parameters (Internal Mode)
  baseURL?: string;
  currentUserFullName?: string;
  defaultToEmails?: string[];
  referenceName?: string | null;
  activeLeadName?: string | null;
  activeLeadDoctype?: string;
  links?: EmailComposerLink[];
  replyData?: EmailReplyData | null;
  token?: string;

  // Control & Callbacks
  onClose: () => void;
  onEmailSent?: () => void;

  /** App provides its own RichTextEditor component (e.g. PrimeReact Editor). */
  RichTextEditor?: React.ComponentType<RichTextEditorProps>;

  // Optional Notification Overrides
  showNotification?: (title: string, message: string) => void;
  showWarning?: (title: string, message: string) => void;
  showError?: (title: string, message: string) => void;
}

/** Lightweight HTML sanitizer — removes script/style/iframe tags. */
function sanitizeHtmlLight(html: string | undefined | null): string {
  if (!html || typeof html !== "string") return "";
  if (typeof document === "undefined") return html;
  const div = document.createElement("div");
  div.innerHTML = html;
  const dangerousTags = ["style", "script", "link", "iframe"];
  dangerousTags.forEach((tag) => {
    const elements = div.querySelectorAll(tag);
    elements.forEach((el) => el.remove());
  });
  return div.innerHTML;
}

const EmailComposer = ({
  apiAdapter: externalApiAdapter,
  config: externalConfig,
  baseURL,
  currentUserFullName = "",
  defaultToEmails = [],
  referenceName = null,
  activeLeadName = null,
  activeLeadDoctype = "CRM Lead",
  links = [],
  replyData: propsReplyData = null,
  token,
  onClose,
  onEmailSent,
  RichTextEditor,
  showNotification,
  showWarning,
  showError,
}: EmailComposerProps) => {
  // Initialize default adapter if none provided externally
  const { config: internalConfig, apiAdapter: internalApiAdapter } = useDefaultEmailAdapter({
    baseURL,
    currentUserFullName,
    defaultToEmails,
    referenceName,
    activeLeadName,
    activeLeadDoctype,
    links,
    replyData: propsReplyData,
    onEmailSent,
    showNotification,
    showWarning,
    showError,
    token,
  });

  // Use external or internal adapter/config
  const apiAdapter = externalApiAdapter || internalApiAdapter;
  const config = externalConfig || internalConfig;

  const {
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
  } = useEmailComposerLogic({ apiAdapter, config, onClose });

  return (
    <div className="ecw-email-composer">
      <div className="ecw-email-composer-header">
        <div className="ecw-email-composer-from">
          <span className="ecw-email-composer-label">From:</span>
          <div className="ecw-email-composer-avatar">
            <UserIcon size={16} color="#175353" />
          </div>
          <span className="ecw-email-composer-sender-name">{config.currentUserFullName?.trim() || "User"}</span>
        </div>
      </div>

      <div className="ecw-email-composer-field">
        <span className="ecw-email-composer-label">Subject:</span>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Enter subject"
          className="ecw-email-composer-subject-input"
        />
      </div>

      <div className="ecw-email-composer-field">
        <span className="ecw-email-composer-label">To:</span>
        <div className="ecw-email-composer-recipients-container">
          <div className="ecw-email-composer-recipients">
            {toRecipients.map((recipient) => (
              <div key={recipient.id} className="ecw-email-composer-tag">
                <span>{recipient.email}</span>
                <button type="button" className="ecw-email-composer-tag-remove" onClick={() => removeRecipient(recipient.id, "to")}>
                  <XIcon size={14} />
                </button>
              </div>
            ))}
            <input
              type="email"
              value={toInput}
              onChange={(e) => setToInput(e.target.value)}
              onKeyDown={(e) => handleRecipientInputKeyDown(e, "to")}
              onBlur={() => handleRecipientInputBlur("to")}
              placeholder={toRecipients.length === 0 ? "Enter email address" : ""}
              className="ecw-email-composer-recipient-input"
            />
          </div>
          <div className="ecw-email-composer-actions">
            <button type="button" className="ecw-email-composer-cc-bcc-btn" onClick={() => setShowCC(!showCC)}>
              CC
            </button>
            <button type="button" className="ecw-email-composer-cc-bcc-btn" onClick={() => setShowBCC(!showBCC)}>
              BCC
            </button>
          </div>
        </div>
      </div>

      {showCC && (
        <div className="ecw-email-composer-field">
          <span className="ecw-email-composer-label">CC:</span>
          <div className="ecw-email-composer-recipients">
            {ccRecipients.map((recipient) => (
              <div key={recipient.id} className="ecw-email-composer-tag">
                <span>{recipient.email}</span>
                <button type="button" className="ecw-email-composer-tag-remove" onClick={() => removeRecipient(recipient.id, "cc")}>
                  <XIcon size={14} />
                </button>
              </div>
            ))}
            <input
              type="email"
              value={ccInput}
              onChange={(e) => setCcInput(e.target.value)}
              onKeyDown={(e) => handleRecipientInputKeyDown(e, "cc")}
              onBlur={() => handleRecipientInputBlur("cc")}
              placeholder={ccRecipients.length === 0 ? "Enter email address" : ""}
              className="ecw-email-composer-recipient-input"
            />
          </div>
        </div>
      )}

      {showBCC && (
        <div className="ecw-email-composer-field">
          <span className="ecw-email-composer-label">BCC:</span>
          <div className="ecw-email-composer-recipients">
            {bccRecipients.map((recipient) => (
              <div key={recipient.id} className="ecw-email-composer-tag">
                <span>{recipient.email}</span>
                <button type="button" className="ecw-email-composer-tag-remove" onClick={() => removeRecipient(recipient.id, "bcc")}>
                  <XIcon size={14} />
                </button>
              </div>
            ))}
            <input
              type="email"
              value={bccInput}
              onChange={(e) => setBccInput(e.target.value)}
              onKeyDown={(e) => handleRecipientInputKeyDown(e, "bcc")}
              onBlur={() => handleRecipientInputBlur("bcc")}
              placeholder={bccRecipients.length === 0 ? "Enter email address" : ""}
              className="ecw-email-composer-recipient-input"
            />
          </div>
        </div>
      )}

      <div className="ecw-email-composer-body">
        <div className="ecw-email-composer-editor-wrapper">
          {RichTextEditor ? (
            <RichTextEditor
              value={emailBody}
              onChange={setEmailBody}
              placeholder="Compose your email..."
              className="ecw-email-composer-rich-text-editor"
            />
          ) : (
            <InternalQuillEditor
              value={emailBody}
              onChange={setEmailBody}
              placeholder="Compose your email..."
              className="ecw-email-composer-rich-text-editor"
              height="200px"
            />
          )}
          {replyData?.content && (
            <div className="ecw-trail-email-preview">
              <hr className="ecw-trail-divider" />
              <div className="ecw-trail-meta">
                <b>From:</b> {replyData.senderName || replyData.to || "User"}
                <br />
                <b>Sent:</b> {replyData.date && replyData.time ? `${replyData.date} at ${replyData.time}` : "the previous message"}
                <br />
                <b>Subject:</b> {replyData.subject || ""}
              </div>
              <div dangerouslySetInnerHTML={{ __html: sanitizeHtmlLight(replyData.content) }} />
            </div>
          )}
        </div>
        {attachments.length > 0 && (
          <div className="ecw-email-composer-attachments">
            {attachments.map((attachment) => (
              <div key={attachment.id} className="ecw-email-composer-attachment-tag">
                <span>
                  {attachment.fileName || attachment.name || attachment.file?.name}
                  {attachment.isUploading && " (Uploading...)"}
                  {attachment.uploadError && ` (Error: ${attachment.uploadError})`}
                  {(attachment.fileName || attachment.name) && !attachment.isUploading && !attachment.uploadError && " ✓"}
                </span>
                <button type="button" className="ecw-email-composer-tag-remove" onClick={() => removeAttachment(attachment.id)}>
                  <XIcon size={14} />
                </button>
              </div>
            ))}
          </div>
        )}
        <FileUpload ref={fileUploadRef} onSelect={handleFileSelect} multiple accept="*/*" />
      </div>

      <div className="ecw-email-composer-footer">
        <div className="ecw-email-composer-footer-left">
          <button type="button" onClick={handleAttachClick} title="Attach file" className="ecw-email-composer-icon-btn">
            <PaperclipIcon size={20} color="#175353" />
          </button>
          <button
            type="button"
            onClick={() => setIsTemplateModalOpen(true)}
            title="Select template"
            className="ecw-email-composer-icon-btn"
          >
            <FileTextIcon size={20} color="#175353" />
          </button>
        </div>
        <div className="ecw-email-composer-footer-right">
          <button type="button" onClick={onClose} className="ecw-email-composer-btn ecw-email-composer-btn-secondary" disabled={isPending}>
            Cancel
          </button>
          <button type="button" onClick={handleSend} className="ecw-email-composer-btn ecw-email-composer-btn-primary" disabled={isPending}>
            {isPending ? "Sending..." : "Send"}
          </button>
        </div>
      </div>

      <Modal
        open={isTemplateModalOpen}
        onClose={() => setIsTemplateModalOpen(false)}
        width="700px"
        height="500px"
        header={<h4 style={{ margin: 0, fontSize: "16px", fontWeight: 600, color: "#175353" }}>Select Email Template</h4>}
      >
        <EmailTemplateSelector templates={emailTemplates} onSelect={handleTemplateSelect} isLoading={isLoadingTemplates} />
      </Modal>
    </div>
  );
};

export default EmailComposer;
