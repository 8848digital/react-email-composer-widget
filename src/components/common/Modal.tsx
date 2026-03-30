import React, { useEffect } from "react";
import { XIcon } from "./Icons";
import "../../styles/email-composer.css";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  header?: string | React.ReactNode;
  children: React.ReactNode;
  width?: string;
  height?: string;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  header,
  children,
  width = "600px",
  height,
  className = "",
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className={`ecw-modal-overlay ${className}`} onClick={onClose}>
      <div 
        className="ecw-modal-container" 
        style={{ maxWidth: width, height: height }} 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="ecw-modal-header">
          <div className="ecw-modal-title">{header}</div>
          <button className="ecw-modal-close" onClick={onClose}>
            <XIcon size={20} />
          </button>
        </div>
        <div className="ecw-modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
