import type { EmailTemplate } from "../types/email";
import EmailTemplateSkeleton from "./skeleton/EmailTemplateSkeleton";

interface EmailTemplateSelectorProps {
  templates: EmailTemplate[];
  onSelect: (templateBody: string) => void;
  isLoading?: boolean;
}

const EmailTemplateSelector = ({ templates, onSelect, isLoading = false }: EmailTemplateSelectorProps) => {
  if (isLoading) {
    return (
      <section className="ecw-template-section">
        <EmailTemplateSkeleton />
      </section>
    );
  }

  if (templates.length === 0) {
    return (
      <section className="ecw-template-section ecw-template-empty">
        <p>No templates available</p>
      </section>
    );
  }

  return (
    <section className="ecw-template-section">
      <div className="ecw-template-grid">
        {templates.map((template) => (
          <button
            key={template.id}
            type="button"
            onClick={() => onSelect(template.body)}
            className="ecw-template-card"
          >
            <h3 className="ecw-template-card-title" title={template.name}>
              {template.name}
            </h3>
            <div className="ecw-template-card-divider" aria-hidden />
            <div
              className="ecw-template-card-body"
              dangerouslySetInnerHTML={{ __html: template.body }}
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default EmailTemplateSelector;

