import { default as React } from 'react';
import { EmailWidgetApiAdapter, EmailWidgetConfig, RichTextEditorProps, EmailComposerLink, EmailReplyData } from '../types/email';
interface EmailComposerProps {
    apiAdapter?: EmailWidgetApiAdapter;
    config?: EmailWidgetConfig;
    baseURL?: string;
    currentUserFullName?: string;
    defaultToEmails?: string[];
    referenceName?: string | null;
    activeLeadName?: string | null;
    activeLeadDoctype?: string;
    links?: EmailComposerLink[];
    replyData?: EmailReplyData | null;
    token?: string;
    onClose: () => void;
    onSend?: () => void;
    onEmailSent?: () => void;
    /** App provides its own RichTextEditor component (e.g. PrimeReact Editor). */
    RichTextEditor?: React.ComponentType<RichTextEditorProps>;
    showNotification?: (title: string, message: string) => void;
    showWarning?: (title: string, message: string) => void;
    showError?: (title: string, message: string) => void;
}
declare const EmailComposer: ({ apiAdapter: externalApiAdapter, config: externalConfig, baseURL, currentUserFullName, defaultToEmails, referenceName, activeLeadName, activeLeadDoctype, links, replyData: propsReplyData, token, onClose, onSend, onEmailSent, RichTextEditor, showNotification, showWarning, showError, }: EmailComposerProps) => import("react/jsx-runtime").JSX.Element;
export default EmailComposer;
