import { default as React } from 'react';
import { EmailWidgetApiAdapter, EmailWidgetConfig, RichTextEditorProps, EmailComposerLink, EmailReplyData } from '../types/email';
interface EmailComposerModalProps {
    apiAdapter?: EmailWidgetApiAdapter;
    config?: EmailWidgetConfig;
    baseURL?: string;
    currentUserFullName?: string;
    defaultToEmails?: string[];
    referenceName?: string | null;
    activeLeadName?: string | null;
    activeLeadDoctype?: string;
    activeTaskName?: string | null;
    activeTaskDoctype?: string;
    links?: EmailComposerLink[];
    replyData?: EmailReplyData | null;
    token?: string;
    isOpen: boolean;
    onClose: () => void;
    RichTextEditor?: React.ComponentType<RichTextEditorProps>;
    modalSize?: string;
    header?: React.ReactNode;
    onEmailSent?: () => void;
    showNotification?: (title: string, message: string) => void;
    showWarning?: (title: string, message: string) => void;
    showError?: (title: string, message: string) => void;
}
export declare const EmailComposerModal: React.FC<EmailComposerModalProps>;
export default EmailComposerModal;
