import { default as React } from 'react';
import { EmailWidgetApiAdapter, EmailWidgetConfig, RichTextEditorProps, EmailComposerLink, EmailReplyData } from '../types/email';
interface EmailComposerTriggerProps {
    apiAdapter?: EmailWidgetApiAdapter;
    config?: EmailWidgetConfig;
    baseURL?: string;
    currentUserFullName?: string;
    defaultToEmails?: string[];
    referenceName?: string | null;
    referenceDoctype?: string;
    activeLeadName?: string | null;
    activeLeadDoctype?: string;
    links?: EmailComposerLink[];
    replyData?: EmailReplyData | null;
    token?: string;
    RichTextEditor?: React.ComponentType<RichTextEditorProps>;
    buttonLabel?: string;
    className?: string;
    /**
     * Matches the pattern used by `WhatsappChatTrigger`.
     * - `default`: shows envelope icon + label (current behavior)
     * - `plain`: renders a plain text button (label only)
     */
    variant?: "default" | "plain";
    /**
     * Optional class for the trigger element (useful for `variant="plain"`).
     * Example: `btnClassName="contact-button"`
     */
    btnClassName?: string;
    modalSize?: string;
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    onEmailSent?: () => void;
    showNotification?: (title: string, message: string) => void;
    showWarning?: (title: string, message: string) => void;
    showError?: (title: string, message: string) => void;
}
/**
 * All-in-One Component: Button + Internal Modal management.
 */
export declare const EmailComposerTrigger: React.FC<EmailComposerTriggerProps>;
export default EmailComposerTrigger;
