import { AxiosInstance } from 'axios';
export type EmailComposerLink = {
    link_doctype: string;
    link_name: string;
} | Record<string, unknown>;
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
/**
 * Creates an API client with standard Frappe configuration.
 */
export declare const createDefaultApiClient: (baseURL?: string, token?: string) => AxiosInstance;
/**
 * Direct API methods.
 * These can be used by the default adapter.
 */
export declare const emailApi: (api: AxiosInstance) => {
    sendEmail: (payload: SendEmailPayload) => Promise<import('axios').AxiosResponse<any, any, {}>>;
    getTemplates: (references?: EmailTemplateReference[]) => Promise<import('axios').AxiosResponse<{
        message: EmailTemplateResponse[];
    }, any, {}>>;
    uploadFile: (file: File) => Promise<import('axios').AxiosResponse<any, any, {}>>;
    updateCommunication: (name: string, status: string) => Promise<import('axios').AxiosResponse<any, any, {}>>;
};
