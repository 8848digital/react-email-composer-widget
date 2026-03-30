import { Attachment, EmailWidgetApiAdapter, FileUploadRef } from '../types/email';
export declare const useEmailAttachments: (apiAdapter: EmailWidgetApiAdapter) => {
    attachments: Attachment[];
    setAttachments: import('react').Dispatch<import('react').SetStateAction<Attachment[]>>;
    fileUploadRef: import('react').RefObject<FileUploadRef | null>;
    handleFileSelect: (files: File[]) => void;
    removeAttachment: (id: string) => void;
    handleAttachClick: () => void;
};
