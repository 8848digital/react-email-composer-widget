import React, { createContext, useContext } from "react";
import type { EmailWidgetApiAdapter, EmailWidgetConfig, RichTextEditorProps } from "../types/email";

// ------------------------------------------------------------------
// Context Definition
// ------------------------------------------------------------------
interface EmailComposerContextProps {
  apiAdapter: EmailWidgetApiAdapter;
  config: EmailWidgetConfig;
  /** App provides its own RichTextEditor component (e.g. PrimeReact Editor). */
  RichTextEditor?: React.ComponentType<RichTextEditorProps>;
}

const EmailComposerContext = createContext<EmailComposerContextProps | undefined>(undefined);

export const EmailComposerProvider = ({
  apiAdapter,
  config,
  RichTextEditor,
  children,
}: EmailComposerContextProps & { children: React.ReactNode }) => {
  return (
    <EmailComposerContext.Provider value={{ apiAdapter, config, RichTextEditor }}>
      {children}
    </EmailComposerContext.Provider>
  );
};

export const useEmailComposerContext = () => {
  const context = useContext(EmailComposerContext);
  if (!context) throw new Error("Missing EmailComposerProvider");
  return context;
};
