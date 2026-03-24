"use client";

import React, { useState } from "react";
import EmailComposer from "./EmailComposer";
import Modal from "./common/Modal";
import { EnvelopeIcon } from "./common/Icons";
import { useDefaultEmailAdapter } from "../hooks/useDefaultEmailAdapter";
import type { EmailWidgetApiAdapter, EmailWidgetConfig, RichTextEditorProps, EmailComposerLink, EmailReplyData } from "../types/email";
import "../styles/email-composer.css";

interface EmailComposerTriggerProps {
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

  // Components & Styling
  RichTextEditor?: React.ComponentType<RichTextEditorProps>;
  buttonLabel?: string;
  className?: string;
  modalSize?: string;

  // External Control
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;

  // External Callbacks
  onEmailSent?: () => void;
  showNotification?: (title: string, message: string) => void;
  showWarning?: (title: string, message: string) => void;
  showError?: (title: string, message: string) => void;
}

/**
 * All-in-One Component: Button + Internal Modal management.
 */
export const EmailComposerTrigger: React.FC<EmailComposerTriggerProps> = ({
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
  RichTextEditor,
  buttonLabel = "Email",
  className = "",
  modalSize = "800px",
  isOpen: externalIsOpen,
  onOpen,
  onClose,
  onEmailSent,
  showNotification,
  showWarning,
  showError,
  token,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);

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

  // If external control is provided, use it. Otherwise use internal state.
  const isExternallyControlled = externalIsOpen !== undefined;
  const isOpen = isExternallyControlled ? externalIsOpen : internalIsOpen;

  const handleOpen = () => {
    if (onOpen) {
      onOpen();
    } else if (!isExternallyControlled) {
      setInternalIsOpen(true);
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else if (!isExternallyControlled) {
      setInternalIsOpen(false);
    }
  };

  return (
    <>
      <div className={`ecw-trigger-button ${className}`} onClick={handleOpen}>
        <div className="ecw-trigger-icon-wrapper">
          <EnvelopeIcon size={20} color="#175353" />
        </div>
        <span className="ecw-trigger-label">{buttonLabel}</span>
      </div>

      <Modal
        open={isOpen}
        onClose={handleClose}
        width={modalSize}
        header={<h3 style={{ margin: 0, fontSize: "1.1rem" }}>Email Composer</h3>}
      >
        <EmailComposer apiAdapter={apiAdapter} config={config} RichTextEditor={RichTextEditor} onClose={handleClose} />
      </Modal>
    </>
  );
};

export default EmailComposerTrigger;
