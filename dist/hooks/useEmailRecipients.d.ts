import { RecipientTag } from '../types/email';
interface UseEmailRecipientsProps {
    defaultToEmails?: string[];
}
export declare const useEmailRecipients: ({ defaultToEmails }?: UseEmailRecipientsProps) => {
    toRecipients: RecipientTag[];
    setToRecipients: import('react').Dispatch<import('react').SetStateAction<RecipientTag[]>>;
    ccRecipients: RecipientTag[];
    setCcRecipients: import('react').Dispatch<import('react').SetStateAction<RecipientTag[]>>;
    bccRecipients: RecipientTag[];
    setBccRecipients: import('react').Dispatch<import('react').SetStateAction<RecipientTag[]>>;
    showCC: boolean;
    setShowCC: import('react').Dispatch<import('react').SetStateAction<boolean>>;
    showBCC: boolean;
    setShowBCC: import('react').Dispatch<import('react').SetStateAction<boolean>>;
    toInput: string;
    setToInput: import('react').Dispatch<import('react').SetStateAction<string>>;
    ccInput: string;
    setCcInput: import('react').Dispatch<import('react').SetStateAction<string>>;
    bccInput: string;
    setBccInput: import('react').Dispatch<import('react').SetStateAction<string>>;
    addRecipient: (email: string, type: "to" | "cc" | "bcc") => void;
    handleRecipientInputKeyDown: (e: React.KeyboardEvent<HTMLInputElement>, type: "to" | "cc" | "bcc") => void;
    handleRecipientInputBlur: (type: "to" | "cc" | "bcc") => void;
    removeRecipient: (id: string, type: "to" | "cc" | "bcc") => void;
};
export {};
