// ─── Recipient Tag ────────────────────────────────────────────────────────────

export interface RecipientTag {
  id: string;
  email: string;
}

// ─── Email Reply Data ─────────────────────────────────────────────────────────

export interface EmailReplyData {
  in_reply_to?: string;
  subject?: string;
  to?: string;
  cc?: string;
  bcc?: string;
  content?: string;
  senderName?: string;
  date?: string;
  time?: string;
  attachments?: {
    name?: string;
    file_name?: string;
    file_url: string;
    file_size?: number;
  }[];
}

// ─── Email Template ───────────────────────────────────────────────────────────

export interface EmailTemplate {
  id: string;
  name: string;
  body: string;
}

// ─── Attachment ───────────────────────────────────────────────────────────────

export interface Attachment {
  id: string;
  file?: File;
  name?: string;
  fileName?: string;
  fileUrl?: string; // For existing files
  isUploading?: boolean;
  uploadError?: string;
}

// ─── Link ─────────────────────────────────────────────────────────────────────

export type EmailComposerLink = { link_doctype: string; link_name: string } | Record<string, unknown>;

// ─── Send Email Payload ───────────────────────────────────────────────────────

export interface SendEmailPayloadAdapter {
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

// ─── API Adapter ──────────────────────────────────────────────────────────────

export interface EmailWidgetApiAdapter {
  /** Send an email. Returns the created communication name. */
  sendEmail: (payload: SendEmailPayloadAdapter) => Promise<{ name?: string }>;
  /** Upload a file. Returns the file name from the upload response. */
  uploadFile: (file: File) => Promise<{ name?: string; file_name?: string; file_url?: string }>;
  /** Fetch email templates. */
  getTemplates?: () => Promise<EmailTemplate[]>;
  /** Update communication status (e.g. "Replied" after reply). */
  updateCommunicationStatus?: (name: string, status: string) => Promise<void>;
  /** Show a notification/toast to the user. */
  showNotification?: (title: string, message: string) => void;
  /** Show a warning notification/toast. */
  showWarning?: (title: string, message: string) => void;
  /** Show an error notification/toast. */
  showError?: (title: string, message: string) => void;
  /** Called after email is sent successfully (e.g. invalidate queries). */
  onEmailSent?: () => void;
}

// ─── Widget Config ────────────────────────────────────────────────────────────

export interface EmailWidgetConfig {
  currentUserFullName: string;
  defaultToEmails?: string[];
  referenceName?: string | null;
  doctype?: string;
  activeLeadName?: string | null;
  activeLeadDoctype?: string;
  links?: EmailComposerLink[];
  replyData?: EmailReplyData | null;
}

// ─── File Upload Ref ──────────────────────────────────────────────────────────

export interface FileUploadRef {
  click: () => void;
}

// ─── Rich Text Editor Props ───────────────────────────────────────────────────

export interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  height?: string;
}
