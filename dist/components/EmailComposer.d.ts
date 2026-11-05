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
    activeTaskName?: string | null;
    activeTaskDoctype?: string;
    links?: EmailComposerLink[];
    replyData?: EmailReplyData | null;
    token?: string;
    onClose: () => void;
    onEmailSent?: () => void;
    /** App provides its own RichTextEditor component (e.g. PrimeReact Editor). */
    RichTextEditor?: React.ComponentType<RichTextEditorProps>;
    showNotification?: (title: string, message: string) => void;
    showWarning?: (title: string, message: string) => void;
    showError?: (title: string, message: string) => void;
}
declare const EmailComposer: ({ apiAdapter: externalApiAdapter, config: externalConfig, baseURL, currentUserFullName, defaultToEmails, referenceName, activeLeadName, activeLeadDoctype, activeTaskName, activeTaskDoctype, links, replyData: propsReplyData, token, onClose, onEmailSent, RichTextEditor, showNotification, showWarning, showError, }: EmailComposerProps) => import("react/jsx-runtime").JSX.Element;
export default EmailComposer;
