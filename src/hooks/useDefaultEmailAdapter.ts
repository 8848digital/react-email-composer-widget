import { useMemo } from "react";
import type {
  EmailWidgetApiAdapter,
  EmailWidgetConfig,
  EmailComposerLink,
  EmailTemplate,
  SendEmailPayloadAdapter,
  EmailReplyData,
} from "../types/email";
import { emailApi, createDefaultApiClient, type EmailTemplateResponse } from "../api/email";

export interface DefaultEmailAdapterParams {
  baseURL?: string;
  currentUserFullName: string;
  defaultToEmails?: string[];
  referenceName?: string | null;
  referenceDoctype?: string;
  activeLeadName?: string | null;
  activeLeadDoctype?: string;
  links?: EmailComposerLink[];
  replyData?: EmailReplyData | null;
  // External Callbacks/State
  onEmailSent?: () => void;
  showNotification?: (title: string, message: string) => void;
  showWarning?: (title: string, message: string) => void;
  showError?: (title: string, message: string) => void;
  token?: string;
}

/**
 * A standalone hook to create the default Frappe-compatible adapter and config.
 * This can be used by the package when the user doesn't provide their own.
 */
export function useDefaultEmailAdapter({
  baseURL = "/",
  currentUserFullName,
  defaultToEmails,
  referenceName,
  referenceDoctype,
  activeLeadName,
  activeLeadDoctype = "CRM Lead",
  links,
  replyData,
  onEmailSent,
  showNotification,
  showWarning,
  showError,
  token,
}: DefaultEmailAdapterParams) {

  // Initialize API methods
  const apiInstance = useMemo(() => createDefaultApiClient(baseURL, token), [baseURL, token]);
  const methods = useMemo(() => emailApi(apiInstance), [apiInstance]);

  // Combined Config
  const config: EmailWidgetConfig = useMemo(
    () => ({
      currentUserFullName,
      defaultToEmails,
      referenceName,
      doctype: activeLeadName ? activeLeadDoctype : (referenceDoctype || "Contact"),
      activeLeadName,
      activeLeadDoctype,
      links,
      replyData: replyData ?? null,
    }),
    [currentUserFullName, defaultToEmails, referenceName, referenceDoctype, activeLeadName, activeLeadDoctype, links, replyData]
  );

  // Unified API Adapter
  const apiAdapter: EmailWidgetApiAdapter = useMemo(
    () => ({
      sendEmail: async (payload: SendEmailPayloadAdapter) => {
        try {
          // Type casting since the payloads match exactly
          const res = await methods.sendEmail(payload as any);
          const responseData = res.data as any;

          // Check for Frappe-style errors
          if (responseData?._server_messages) {
            try {
              const serverMessages = JSON.parse(responseData._server_messages);
              if (Array.isArray(serverMessages) && serverMessages.length > 0) {
                const firstMessage = JSON.parse(serverMessages[0]) as { title?: string; message?: string };
                if (firstMessage.message) {
                  showError?.(firstMessage.title || "Error", firstMessage.message);
                  return {};
                }
              }
            } catch {
              if (responseData?.exception) {
                showError?.("Error", responseData.exception);
                return {};
              }
            }
          } else if (responseData?.exception) {
            showError?.("Error", responseData.exception);
            return {};
          }

          const responseMessage = responseData?.data?.message || responseData?.message || responseData;
          return { name: responseMessage?.name };
        } catch (err) {
          throw new Error("Failed to send email");
        }
      },

      uploadFile: async (file: File) => {
        const res = await methods.uploadFile(file);
        const responseData = res.data as any;
        const responseMessage = responseData?.data?.message || responseData?.message || responseData;
        return { 
          name: responseMessage?.name, 
          file_name: responseMessage?.file_name,
          file_url: responseMessage?.file_url 
        };
      },

      getTemplates: async (): Promise<EmailTemplate[]> => {
        const res = await methods.getTemplates();
        const templateList = res.data?.message || [];
        return templateList.map((template: EmailTemplateResponse) => ({
          id: template.name,
          name: template.subject || template.name,
          body: template.response || template.response_html || "",
        }));
      },

      updateCommunicationStatus: async (name: string, status: string) => {
        await methods.updateCommunication(name, status);
      },

      showNotification: (title, message) => showNotification?.(title, message),
      showWarning: (title, message) => showWarning?.(title, message),
      showError: (title, message) => showError?.(title, message),
      onEmailSent,
    }),
    [methods, onEmailSent, showNotification, showWarning, showError]
  );

  return { config, apiAdapter };
}
