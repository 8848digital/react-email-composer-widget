import { default as React } from 'react';
import { EmailWidgetApiAdapter, EmailWidgetConfig, RichTextEditorProps } from '../types/email';
interface EmailComposerContextProps {
    apiAdapter: EmailWidgetApiAdapter;
    config: EmailWidgetConfig;
    /** App provides its own RichTextEditor component (e.g. PrimeReact Editor). */
    RichTextEditor?: React.ComponentType<RichTextEditorProps>;
}
export declare const EmailComposerProvider: ({ apiAdapter, config, RichTextEditor, children, }: EmailComposerContextProps & {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useEmailComposerContext: () => EmailComposerContextProps;
export {};
