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
  referenceDoctype?: string;
  activeLeadName?: string | null;
  activeLeadDoctype?: string;
  activeTaskName?: string | null;
  activeTaskDoctype?: string;
  links?: EmailComposerLink[];
  replyData?: EmailReplyData | null;
  token?: string;

  // Components & Styling
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
  referenceDoctype,
  activeLeadName = null,
  activeLeadDoctype = "CRM Lead",
  activeTaskName = null,
  activeTaskDoctype = "CRM Task",
  links = [],
  replyData = null,
  RichTextEditor,
  buttonLabel = "Email",
  className = "",
  variant = "default",
  btnClassName = "",
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
    referenceDoctype,
    activeLeadName,
    activeLeadDoctype,
    activeTaskName,
    activeTaskDoctype,
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
    if (!isExternallyControlled) {
      setInternalIsOpen(true);
    }
    onOpen?.();
  };

  const handleClose = () => {
    if (!isExternallyControlled) {
      setInternalIsOpen(false);
    }
    onClose?.();
  };

  return (
    <>
      {variant === "plain" ? (
        <button
          type="button"
          className={btnClassName || className || ""}
          onClick={handleOpen}
          style={{
            position: "relative",
            ...(btnClassName && typeof btnClassName === "string" && btnClassName.includes("button")
              ? {}
              : { border: "none", background: "none", cursor: "pointer", padding: 0 }),
          }}
        >
          {buttonLabel}
        </button>
      ) : (
        <div className={`ecw-trigger-button ${className} ${btnClassName}`} onClick={handleOpen}>
          <div className="ecw-trigger-icon-wrapper">
            <EnvelopeIcon size={20} color="#175353" />
          </div>
          <span className="ecw-trigger-label">{buttonLabel}</span>
        </div>
      )}

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
