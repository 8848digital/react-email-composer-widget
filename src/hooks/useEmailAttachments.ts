import { useState, useRef } from "react";
import type { Attachment, EmailWidgetApiAdapter, FileUploadRef } from "../types/email";

export const useEmailAttachments = (apiAdapter: EmailWidgetApiAdapter) => {
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const fileUploadRef = useRef<FileUploadRef>(null);

  const handleFileSelect = (files: File[]) => {
    const newAttachments: Attachment[] = files.map((file) => ({
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      file,
      isUploading: true,
    }));

    // Add attachments to state first (with uploading status)
    setAttachments((prev) => [...prev, ...newAttachments]);

    // Upload each file via the adapter
    newAttachments.forEach((attachment) => {
      apiAdapter
        .uploadFile(attachment.file)
        .then((data) => {
          const fileName = data?.name;
          if (fileName) {
            setAttachments((prev) =>
              prev.map((att) => (att.id === attachment.id ? { ...att, fileName, isUploading: false } : att))
            );
          } else {
            setAttachments((prev) =>
              prev.map((att) => (att.id === attachment.id ? { ...att, isUploading: false, uploadError: "Upload failed" } : att))
            );
          }
        })
        .catch((error) => {
          setAttachments((prev) =>
            prev.map((att) =>
              att.id === attachment.id
                ? { ...att, isUploading: false, uploadError: error instanceof Error ? error.message : "Upload failed" }
                : att
            )
          );
        });
    });
  };

  const removeAttachment = (id: string) => {
    setAttachments((prev) => prev.filter((a) => a.id !== id));
  };

  const handleAttachClick = () => {
    fileUploadRef.current?.click();
  };

  return {
    attachments,
    setAttachments,
    fileUploadRef,
    handleFileSelect,
    removeAttachment,
    handleAttachClick,
  };
};
