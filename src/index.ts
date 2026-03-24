// Components
export { default as EmailComposer } from "./components/EmailComposer";
export { default as EmailComposerModal } from "./components/EmailComposerModal";
export { default as EmailComposerTrigger } from "./components/EmailComposerTrigger";
export { default as EmailTemplateSelector } from "./components/EmailTemplateSelector";

// Context
export { EmailComposerProvider, useEmailComposerContext } from "./context/EmailComposerContext";

// Hooks
export { useEmailComposerLogic } from "./hooks/useEmailComposerLogic";
export { useEmailRecipients } from "./hooks/useEmailRecipients";
export { useEmailAttachments } from "./hooks/useEmailAttachments";

// Types
export * from "./types/email";

// Styles
import "./styles/email-composer.css";
