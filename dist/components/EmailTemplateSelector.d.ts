import { EmailTemplate } from '../types/email';
interface EmailTemplateSelectorProps {
    templates: EmailTemplate[];
    onSelect: (templateBody: string) => void;
    isLoading?: boolean;
}
declare const EmailTemplateSelector: ({ templates, onSelect, isLoading }: EmailTemplateSelectorProps) => import("react/jsx-runtime").JSX.Element;
export default EmailTemplateSelector;
