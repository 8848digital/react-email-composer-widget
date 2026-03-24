import { default as React } from 'react';
import { RichTextEditorProps } from '../types/email';
/**
 * Internal Quill-based Rich Text Editor for the widget.
 * Replaces PrimeReact Editor while maintaining compatibility with Quill 2.
 */
declare const InternalQuillEditor: React.FC<RichTextEditorProps>;
export default InternalQuillEditor;
