import { default as React } from 'react';
/** Lightweight wrapper for Phosphor icons used by the email composer widget. */
export interface IconProps {
    size?: number | string;
    color?: string;
    className?: string;
    style?: React.CSSProperties;
    weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
}
export declare const UserIcon: (props: IconProps) => import("react/jsx-runtime").JSX.Element;
export declare const XIcon: (props: IconProps) => import("react/jsx-runtime").JSX.Element;
export declare const PaperclipIcon: (props: IconProps) => import("react/jsx-runtime").JSX.Element;
export declare const FileTextIcon: (props: IconProps) => import("react/jsx-runtime").JSX.Element;
export declare const EnvelopeIcon: (props: IconProps) => import("react/jsx-runtime").JSX.Element;
