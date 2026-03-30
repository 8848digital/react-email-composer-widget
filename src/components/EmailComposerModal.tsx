"use client";

import React from "react";
import EmailComposer from "./EmailComposer";
import Modal from "./common/Modal";
import { useDefaultEmailAdapter } from "../hooks/useDefaultEmailAdapter";
import type { EmailWidgetApiAdapter, EmailWidgetConfig, RichTextEditorProps, EmailComposerLink, EmailReplyData } from "../types/email";

interface EmailComposerModalProps {
  // Option 1: Provide full adapter + config (Advanced)
  apiAdapter?: EmailWidgetApiAdapter;
  config?: EmailWidgetConfig;

  // Option 2: Provide simple parameters (Internal Mode)
  baseURL?: string;
  currentUserFullName?: string;
  defaultToEmails?: string[];
  referenceName?: string | null;
  activeLeadName?: string | null;
  activeLeadDoctype?: string;
  links?: EmailComposerLink[];
  replyData?: EmailReplyData | null;
  token?: string;

  // Control & Visibility
  isOpen: boolean;
  onClose: () => void;

  // Components & Styling
  RichTextEditor?: React.ComponentType<RichTextEditorProps>;
  modalSize?: string;
  header?: React.ReactNode;

  // Callbacks
  onEmailSent?: () => void;
  showNotification?: (title: string, message: string) => void;
  showWarning?: (title: string, message: string) => void;
  showError?: (title: string, message: string) => void;
}

export const EmailComposerModal: React.FC<EmailComposerModalProps> = ({
  apiAdapter: externalApiAdapter,
  config: externalConfig,
  baseURL,
  currentUserFullName = "",
  defaultToEmails = [],
  referenceName = null,
  activeLeadName = null,
  activeLeadDoctype = "CRM Lead",
  links = [],
  replyData = null,

  token,
  isOpen,
  onClose,
  onEmailSent,
  showNotification,
  showWarning,
  showError,
  RichTextEditor,
  modalSize = "800px",
  header = <h3 style={{ margin: 0, fontSize: "1.1rem" }}>Email Composer</h3>,
}) => {
  // Initialize default adapter if none provided externally
  const { config: internalConfig, apiAdapter: internalApiAdapter } = useDefaultEmailAdapter({
    baseURL,
    currentUserFullName,
    defaultToEmails,
    referenceName,
    activeLeadName,
    activeLeadDoctype,
    links,
    replyData,
    onEmailSent,
    showNotification,
    showWarning,
    showError,
    token,
  });

  // Use external or internal adapter/config
  const apiAdapter = externalApiAdapter || internalApiAdapter;
  const config = externalConfig || internalConfig;

  return (
    <Modal open={isOpen} onClose={onClose} width={modalSize} header={header}>
      <EmailComposer apiAdapter={apiAdapter} config={config} RichTextEditor={RichTextEditor} onClose={onClose} />
    </Modal>
  );
};

export default EmailComposerModal;
