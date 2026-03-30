import { EmailWidgetApiAdapter, EmailWidgetConfig, EmailComposerLink, EmailReplyData } from '../types/email';
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
export declare function useDefaultEmailAdapter({ baseURL, currentUserFullName, defaultToEmails, referenceName, referenceDoctype, activeLeadName, activeLeadDoctype, links, replyData, onEmailSent, showNotification, showWarning, showError, token, }: DefaultEmailAdapterParams): {
    config: EmailWidgetConfig;
    apiAdapter: EmailWidgetApiAdapter;
};
