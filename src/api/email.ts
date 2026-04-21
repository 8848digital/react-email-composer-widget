import axios, { type AxiosInstance } from "axios";

// ─── Shared Types ───

export type EmailComposerLink = { link_doctype: string; link_name: string } | Record<string, unknown>;

export interface SendEmailPayload {
  recipients: string;
  subject: string;
  content: string;
  cc?: string;
  bcc?: string;
  doctype?: string;
  name?: string | null;
  attachments?: string[];
  links?: EmailComposerLink[];
  in_reply_to?: string;
}

export interface EmailTemplateResponse {
  name: string;
  subject: string;
  response_html: string | null;
  response: string;
}

export interface EmailTemplateReference {
  reference_doctype: string;
  reference_name: string;
}

// ─── Default API Implementation (Frappe) ───

/**
 * Creates an API client with standard Frappe configuration.
 */
export const createDefaultApiClient = (baseURL: string = "/", token?: string): AxiosInstance => {
  const headers: Record<string, string> = {};
  if (token) {
    headers["Authorization"] = `token ${token}`;
  }

  return axios.create({
    baseURL,
    withCredentials: true,
    headers,
  });
};


/**
 * Direct API methods.
 * These can be used by the default adapter.
 */
export const emailApi = (api: AxiosInstance) => ({
  sendEmail: async (payload: SendEmailPayload) => {
    const url = "/api/method/crm_integration.crm_integration.api.email.make";
    const formData = new FormData();

    formData.append("recipients", payload.recipients);
    formData.append("subject", payload.subject);
    formData.append("content", payload.content);

    if (payload.cc) formData.append("cc", payload.cc);
    if (payload.bcc) formData.append("bcc", payload.bcc);
    if (payload.doctype) formData.append("doctype", payload.doctype);
    if (payload.name) formData.append("name", payload.name);
    if (payload.links && payload.links.length > 0) formData.append("links", JSON.stringify(payload.links));
    if (payload.in_reply_to) formData.append("in_reply_to", payload.in_reply_to);

    formData.append("send_email", "1");
    formData.append("now", "True");

    if (payload.attachments && payload.attachments.length > 0) {
      const attachmentsString = `[${payload.attachments.map((name) => `"${name}"`).join(",")}]`;
      formData.append("attachments", attachmentsString);
    }

    return api.post(url, formData);
  },

  getTemplates: async (references?: EmailTemplateReference[]) => {
    let url = `/api/method/crm_integration.crm_integration.api.email.get_email_templates`;
    if (references && references.length > 0) {
      url += `?references=${encodeURIComponent(JSON.stringify(references))}`;
    }
    return api.get<{ message: EmailTemplateResponse[] }>(url);
  },

  uploadFile: async (file: File) => {
    const url = "/api/method/upload_file";
    const formData = new FormData();
    formData.append("file", file);
    return api.post(url, formData);
  },

  updateCommunication: async (name: string, status: string) => {
    const encoded = encodeURIComponent(String(name));
    const url = `/api/resource/Communication/${encoded}`;
    const formData = new FormData();
    formData.append("status", status);
    return api.put(url, formData);
  },
});
