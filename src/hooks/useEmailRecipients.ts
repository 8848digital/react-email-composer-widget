import { useState } from "react";
import type { RecipientTag } from "../types/email";

/** Simple email validation (same as app's validateEmail). */
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

interface UseEmailRecipientsProps {
  defaultToEmails?: string[];
}

export const useEmailRecipients = ({ defaultToEmails }: UseEmailRecipientsProps = {}) => {
  const [toRecipients, setToRecipients] = useState<RecipientTag[]>(() =>
    defaultToEmails?.length ? defaultToEmails.map((email, i) => ({ id: `default-${i}`, email })) : []
  );
  const [ccRecipients, setCcRecipients] = useState<RecipientTag[]>([]);
  const [bccRecipients, setBccRecipients] = useState<RecipientTag[]>([]);
  const [showCC, setShowCC] = useState(false);
  const [showBCC, setShowBCC] = useState(false);

  const [toInput, setToInput] = useState("");
  const [ccInput, setCcInput] = useState("");
  const [bccInput, setBccInput] = useState("");

  const addRecipient = (email: string, type: "to" | "cc" | "bcc") => {
    const trimmedEmail = email.trim();
    if (!trimmedEmail || !validateEmail(trimmedEmail)) {
      return;
    }

    const newRecipient: RecipientTag = {
      id: Date.now().toString() + Math.random().toString(36).substring(2, 11),
      email: trimmedEmail,
    };

    if (type === "to") {
      if (toRecipients.some((r) => r.email.toLowerCase() === trimmedEmail.toLowerCase())) {
        return;
      }
      setToRecipients((prev) => [...prev, newRecipient]);
      setToInput("");
    } else if (type === "cc") {
      if (ccRecipients.some((r) => r.email.toLowerCase() === trimmedEmail.toLowerCase())) {
        return;
      }
      setCcRecipients((prev) => [...prev, newRecipient]);
      setCcInput("");
    } else {
      if (bccRecipients.some((r) => r.email.toLowerCase() === trimmedEmail.toLowerCase())) {
        return;
      }
      setBccRecipients((prev) => [...prev, newRecipient]);
      setBccInput("");
    }
  };

  const handleRecipientInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, type: "to" | "cc" | "bcc") => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const input = type === "to" ? toInput : type === "cc" ? ccInput : bccInput;
      if (input) {
        addRecipient(input, type);
      }
    }
  };

  const handleRecipientInputBlur = (type: "to" | "cc" | "bcc") => {
    const input = type === "to" ? toInput : type === "cc" ? ccInput : bccInput;
    if (input) {
      addRecipient(input, type);
    }
  };

  const removeRecipient = (id: string, type: "to" | "cc" | "bcc") => {
    if (type === "to") {
      setToRecipients((prev) => prev.filter((r) => r.id !== id));
    } else if (type === "cc") {
      setCcRecipients((prev) => prev.filter((r) => r.id !== id));
    } else {
      setBccRecipients((prev) => prev.filter((r) => r.id !== id));
    }
  };

  return {
    toRecipients, setToRecipients,
    ccRecipients, setCcRecipients,
    bccRecipients, setBccRecipients,
    showCC, setShowCC,
    showBCC, setShowBCC,
    toInput, setToInput,
    ccInput, setCcInput,
    bccInput, setBccInput,
    addRecipient,
    handleRecipientInputKeyDown,
    handleRecipientInputBlur,
    removeRecipient,
  };
};
