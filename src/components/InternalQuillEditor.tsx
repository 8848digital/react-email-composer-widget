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

  // Initialize Quill only once
  useEffect(() => {
    if (!containerRef.current || quillRef.current) return;

    // Clear the container to prevent double toolbars from React StrictMode
    containerRef.current.innerHTML = "";
    const editorDiv = document.createElement("div");
    containerRef.current.appendChild(editorDiv);

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

    // Set initial value
    if (value) {
      quill.clipboard.dangerouslyPasteHTML(0, value);
    }

    quill.on("text-change", () => {
      if (isUpdatingRef.current) return;
      const html = quill.root.innerHTML;
      onChange(html === "<p><br></p>" ? "" : html);
    });

    return () => {
      // Clear the HTML so if React mounts it again (StrictMode), it starts fresh
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
      quillRef.current = null;
    };
  }, [placeholder, onChange]); // Basic config dependencies

  // Sync external value to Quill
  useEffect(() => {
    if (!quillRef.current) return;

    const currentHtml = quillRef.current.root.innerHTML;
    const normalizedCurrent = currentHtml === "<p><br></p>" ? "" : currentHtml;
    const normalizedTarget = value || "";

    if (normalizedTarget !== normalizedCurrent) {
      isUpdatingRef.current = true;
      quillRef.current.setContents([]); // Clear completely
      quillRef.current.clipboard.dangerouslyPasteHTML(0, normalizedTarget);
      setTimeout(() => {
        isUpdatingRef.current = false;
      }, 0);
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
