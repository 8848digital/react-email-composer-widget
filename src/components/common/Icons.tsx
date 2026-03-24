import React from "react";
import {
  User as PhUser,
  Paperclip as PhPaperclip,
  X as PhX,
  FileText as PhFileText,
  Envelope as PhEnvelope,
} from "@phosphor-icons/react";

/** Lightweight wrapper for Phosphor icons used by the email composer widget. */

export interface IconProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
}

export const UserIcon = (props: IconProps) => <PhUser {...props} />;
export const XIcon = (props: IconProps) => <PhX {...props} />;
export const PaperclipIcon = (props: IconProps) => <PhPaperclip {...props} />;
export const FileTextIcon = (props: IconProps) => <PhFileText {...props} />;
export const EnvelopeIcon = (props: IconProps) => <PhEnvelope {...props} />;


