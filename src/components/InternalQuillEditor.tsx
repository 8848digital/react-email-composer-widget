import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import type { RichTextEditorProps } from "../types/email";

/**
 * Internal Quill-based Rich Text Editor for the widget.
 * Replaces PrimeReact Editor while maintaining compatibility with Quill 2.
 */
const InternalQuillEditor: React.FC<RichTextEditorProps> = ({
  value,
  onChange,
  placeholder = "Compose your email...",
  className = "",
  height = "200px",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);
  const isUpdatingRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear the container to prevent double toolbars from re-renders/Strict Mode
    containerRef.current.innerHTML = "";
    const editorDiv = document.createElement("div");
    containerRef.current.appendChild(editorDiv);

    // Initialize Quill on the new div
    const quill = new Quill(editorDiv, {
      theme: "snow",
      placeholder,
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          ["clean"],
        ],
      },
    });

    quillRef.current = quill;

    // Handle text change
    quill.on("text-change", () => {
      if (isUpdatingRef.current) return;
      const html = quill.root.innerHTML;
      onChange(html === "<p><br></p>" ? "" : html);
    });

    // Cleanup
    return () => {
      quillRef.current = null;
    };
  }, [placeholder, onChange]);

  // Sync external value to Quill
  useEffect(() => {
    if (!quillRef.current || isUpdatingRef.current) return;

    const currentHtml = quillRef.current.root.innerHTML;
    if (value !== currentHtml && value !== (currentHtml === "<p><br></p>" ? "" : currentHtml)) {
      isUpdatingRef.current = true;
      quillRef.current.root.innerHTML = value || "";
      isUpdatingRef.current = false;
    }
  }, [value]);

  return (
    <div className={`ecw-internal-editor ${className}`}>
      <div 
        ref={containerRef} 
        style={{ minHeight: height, borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }} 
      />
    </div>
  );
};

export default InternalQuillEditor;
