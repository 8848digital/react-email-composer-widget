# React Email Composer Widget

A drop-in email composer for React apps. It covers To/CC/BCC recipients, a rich text editor, attachments, email templates and threaded replies. All server calls go through an **adapter**, so the UI is decoupled from your backend. A Frappe-compatible adapter is built in.

[![npm](https://img.shields.io/npm/v/react-email-composer-widget.svg)](https://www.npmjs.com/package/react-email-composer-widget)

---

## Table of contents

- [Features](#-features)
- [Requirements](#-requirements)
- [Installation](#-installation)
- [Quick start](#-quick-start)
- [Components](#-components)
- [Usage examples](#-usage-examples)
- [Props reference](#-props-reference)
- [Simple mode vs advanced mode](#-simple-mode-vs-advanced-mode)
- [The API adapter](#-the-api-adapter-emailwidgetapiadapter)
- [The config object](#-the-config-object-emailwidgetconfig)
- [How sending works](#-how-sending-works)
- [Replies and threading](#-replies-and-threading)
- [Email templates](#-email-templates)
- [Attachments](#-attachments)
- [Recipients and validation](#-recipients-and-validation)
- [Notifications](#-notifications)
- [Built-in Frappe backend](#-built-in-frappe-backend)
- [Custom rich text editor](#-custom-rich-text-editor)
- [Styling](#-styling)
- [Using with Next.js](#-using-with-nextjs)
- [Exports](#-exports)
- [TypeScript types](#-typescript-types)
- [Security notes for integrators](#-security-notes-for-integrators)
- [Development](#-development)
- [Releasing a new version](#-releasing-a-new-version)
- [Changelog](#-changelog)
- [License](#-license)

---

## ✨ Features

- **Adapter-based architecture**: the widget never calls your backend directly. It calls an `EmailWidgetApiAdapter` that you provide, or the built-in Frappe adapter.
- **Two integration modes**:
  - **Simple mode**: pass `baseURL` and `token`, and the built-in Frappe adapter handles every call.
  - **Advanced mode**: pass your own `apiAdapter` and/or `config` for full control.
- **Built-in rich text editor**: Quill 2 with the Snow theme. It's bundled, so you don't need to install anything extra. You can swap in your own editor with the `RichTextEditor` prop.
- **Recipients**: To, CC and BCC as tag inputs, with email validation and de-duplication.
- **Attachments**: files upload as soon as they're picked, with an uploading/done/error state for each one.
- **Templates**: a template picker loads templates from your backend. Lead, task and contact references are sent along, so the server can fill in record data.
- **Threaded replies**: `in_reply_to`, a `Re:` subject, pre-filled recipients, the quoted original email, and the original Communication marked as **Replied** after sending.
- **Record linking**: emails are logged against the active lead or contact, plus any extra `links` you pass.
- **UI-agnostic notifications**: plug in your own toast system.
- **Three entry points**: a trigger button with a modal, a stand-alone modal, or the bare composer.

---

## 📋 Requirements

| Dependency | Version | Notes |
| :--- | :--- | :--- |
| `react` / `react-dom` | **19.x** | The current build is verified with React 19. See the note below. |
| `@phosphor-icons/react` | `^2.x` | Peer dependency, used for icons. |
| `axios` | `^1.13` | Installed automatically (regular dependency). |
| `quill` | — | **Not needed.** Quill 2 is bundled into the package. |

> **React 18:** `package.json` lists `^18.0.0 || ^19.0.0` as the peer range. However, the current build inlines React 19's JSX runtime, so React 18 apps are not supported until that is fixed. Use React 19.

---

## 🛠️ Installation

From npm (recommended):

```bash
npm install react-email-composer-widget @phosphor-icons/react
```

From GitHub (for unreleased branches):

```bash
npm install github:8848digital/react-email-composer-widget#<branch-or-tag>
```

Installing from Git runs the `prepare` script, which builds `dist/` on install.

---

## 🚀 Quick start

```tsx
import { EmailComposerTrigger } from "react-email-composer-widget";
import "react-email-composer-widget/styles.css"; // optional, see "Styling"

export function ContactEmailButton() {
  return (
    <EmailComposerTrigger
      buttonLabel="Email"
      baseURL="https://crm.example.com"
      token={authToken}
      currentUserFullName="John Doe"
      defaultToEmails={["customer@example.com"]}
      referenceName="CONTACT-0001"
      showNotification={(title, msg) => toast.success(msg)}
      showWarning={(title, msg) => toast.warn(msg)}
      showError={(title, msg) => toast.error(msg)}
    />
  );
}
```

Clicking the button opens a modal with the composer. On a successful send, it shows a success notification, calls `onEmailSent` and closes.

---

## 🧩 Components

| Component | Renders | Use it when |
| :--- | :--- | :--- |
| `EmailComposerTrigger` | A button and a modal containing the composer | You want a ready-made "Email" button. It can be uncontrolled or controlled with `isOpen`. |
| `EmailComposerModal` | A modal containing the composer | You have your own button or shortcut and only need the dialog. |
| `EmailComposer` | The composer UI only | You want to place the composer in your own layout, drawer or dialog. |
| `EmailTemplateSelector` | The template grid | You're building a custom composer and want the same picker. |

The composer is unmounted whenever its modal is closed, so every open starts with a fresh draft.

---

## 📖 Usage examples

### 1. Simple mode (built-in Frappe adapter)

```tsx
<EmailComposerTrigger
  buttonLabel="Email"
  baseURL="https://crm.example.com"
  token={authToken}
  currentUserFullName="John Doe"
  defaultToEmails={["customer@example.com"]}
  referenceName="CONTACT-0001"      // Contact name, also used for template references
  referenceDoctype="Contact"
  activeLeadName="LEAD-001"         // when a lead is active
  activeLeadDoctype="CRM Lead"
  activeTaskName="585"              // used for templates when there is no active lead
  activeTaskDoctype="CRM Task"
  links={[{ link_doctype: "CRM Task", link_name: "585" }]}
  onEmailSent={() => queryClient.invalidateQueries({ queryKey: ["communications"] })}
  showNotification={(title, msg) => toast.success(msg)}
  showWarning={(title, msg) => toast.warn(msg)}
  showError={(title, msg) => toast.error(msg)}
/>
```

### 2. Advanced mode (your own adapter and config)

```tsx
import { EmailComposerTrigger } from "react-email-composer-widget";
import { myApiAdapter, myConfig } from "./email-adapters";

<EmailComposerTrigger buttonLabel="Send Email" apiAdapter={myApiAdapter} config={myConfig} />;
```

### 3. Built-in adapter with your own config (mixed mode)

`apiAdapter` and `config` fall back **independently**. You can pass only a `config` object and still use the built-in Frappe adapter through `baseURL` and `token`:

```tsx
<EmailComposerTrigger
  baseURL={API_BASE_URL}
  token={token}
  config={{
    currentUserFullName: fullName,
    defaultToEmails,
    referenceName,
    doctype: "Contact",
    links,
    activeLeadName,
    activeLeadDoctype: "CRM Lead", // set explicitly, see note below
    activeTaskName,
    activeTaskDoctype: "CRM Task",
    replyData,
  }}
  isOpen={isOpen}
  onOpen={open}
  onClose={close}
  showNotification={showSuccess}
  showWarning={showWarning}
  showError={showError}
/>
```

> When you pass your own `config`, the prop defaults (`activeLeadDoctype = "CRM Lead"`, `activeTaskDoctype = "CRM Task"`, `doctype = "Contact"`) are **not** applied to it. Set them explicitly in the object.
>
> Also, keep `config` stable with `useMemo` where you can, so the widget's effects don't re-run on every parent render.

### 4. Controlled visibility (e.g. a Zustand store)

```tsx
const { isOpen, openModal, closeModal } = useEmailReplyStore();

<EmailComposerTrigger
  baseURL={API_BASE_URL}
  token={token}
  isOpen={isOpen}
  onOpen={openModal}
  onClose={closeModal}
/>;
```

If `isOpen` is passed, the trigger is **controlled**: clicking it only calls `onOpen`, and you must flip `isOpen` yourself. Without `isOpen` the trigger manages its own state and still calls `onOpen` and `onClose`.

### 5. Plain-text trigger

```tsx
<EmailComposerTrigger
  buttonLabel="Email"
  variant="plain"
  btnClassName="contact-button"
  baseURL={API_BASE_URL}
  token={token}
  currentUserFullName={userFullName}
  defaultToEmails={[customerEmail]}
/>
```

With `variant="plain"`, the trigger is a `<button>` with no icon. If `btnClassName` contains the word `button`, your class is in charge of styling. Otherwise the border, background and padding are reset.

### 6. Stand-alone modal

```tsx
<EmailComposerModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  header={<h3>Reply to customer</h3>}
  modalSize="900px"
  baseURL={API_BASE_URL}
  token={token}
  currentUserFullName={userFullName}
  referenceName={referenceName}
  replyData={replyData}
/>
```

### 7. Composer only

```tsx
import { EmailComposer } from "react-email-composer-widget";

function EmailDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <Drawer open onClose={onClose}>
      <EmailComposer baseURL={API_BASE_URL} token={token} currentUserFullName="John Doe" onClose={onClose} />
    </Drawer>
  );
}
```

`onClose` is called by the Cancel button and after a successful send.

---

## ⚙️ Props reference

Legend: **T** = `EmailComposerTrigger`, **M** = `EmailComposerModal`, **C** = `EmailComposer`.

### Data and backend (simple mode)

| Prop | Type | Default | On | Description |
| :--- | :--- | :--- | :--- | :--- |
| `baseURL` | `string` | `"/"` | T M C | Base URL of the Frappe backend used by the built-in adapter. |
| `token` | `string` | — | T M C | Sent as `Authorization: token <token>` by the built-in adapter. |
| `currentUserFullName` | `string` | `""` | T M C | Shown in the "From" row. Falls back to "User". |
| `defaultToEmails` | `string[]` | `[]` | T M C | Pre-filled To recipients. They're also used if they arrive after mount, while To is still empty. |
| `referenceName` | `string \| null` | `null` | T M C | Primary record (usually the Contact name). Used as the Contact template reference, and as the record the email is logged against when there's no active lead. |
| `referenceDoctype` | `string` | `"Contact"` | **T only** | Doctype of `referenceName`. `M` and `C` always use `"Contact"` in simple mode. |
| `activeLeadName` | `string \| null` | `null` | T M C | Active lead. When set, the email is logged against the lead, the lead is added to `links`, and templates get a lead reference. |
| `activeLeadDoctype` | `string` | `"CRM Lead"` | T M C | Doctype of the active lead. |
| `activeTaskName` | `string \| null` | `null` | T M C | Active task. Used as the template reference when there's no active lead. |
| `activeTaskDoctype` | `string` | `"CRM Task"` | T M C | Doctype of the active task. |
| `links` | `EmailComposerLink[]` | `[]` | T M C | Extra records to link the Communication to (`{ link_doctype, link_name }`). |
| `replyData` | `EmailReplyData \| null` | `null` | T M C | Turns the composer into a reply. See [Replies and threading](#-replies-and-threading). |

### Advanced mode

| Prop | Type | On | Description |
| :--- | :--- | :--- | :--- |
| `apiAdapter` | `EmailWidgetApiAdapter` | T M C | Your backend implementation. Replaces the built-in adapter (and so `baseURL`, `token` and the notification props). |
| `config` | `EmailWidgetConfig` | T M C | Your data context. Replaces all the simple-mode data props above. |

### UI and control

| Prop | Type | Default | On | Description |
| :--- | :--- | :--- | :--- | :--- |
| `RichTextEditor` | `React.ComponentType<RichTextEditorProps>` | built-in Quill | T M C | Replace the editor. See [Custom rich text editor](#-custom-rich-text-editor). |
| `buttonLabel` | `string` | `"Email"` | T | Trigger text. |
| `variant` | `"default" \| "plain"` | `"default"` | T | `default`: envelope icon + label. `plain`: text-only `<button>`. |
| `className` | `string` | `""` | T | Class for the trigger. |
| `btnClassName` | `string` | `""` | T | Extra class for the trigger (mainly for `variant="plain"`). |
| `modalSize` | `string` | `"800px"` | T M | Max width of the modal. |
| `header` | `React.ReactNode` | "Email Composer" | M | Modal header. `T` always shows "Email Composer". |
| `isOpen` | `boolean` | — | T (optional), M (**required**) | Modal visibility. On `T`, passing it makes the trigger controlled. |
| `onOpen` | `() => void` | — | T | Called when the trigger is clicked. |
| `onClose` | `() => void` | — | T (optional), M C (**required**) | Called on Cancel, the modal close button, Escape, overlay click, and after a successful send. |

### Callbacks (used by the built-in adapter)

| Prop | Type | On | Description |
| :--- | :--- | :--- | :--- |
| `onEmailSent` | `() => void` | T M C | Called after a successful send, e.g. to refetch the timeline. |
| `showNotification` | `(title: string, message: string) => void` | T M C | Success toast. |
| `showWarning` | `(title: string, message: string) => void` | T M C | Validation and "upload in progress" warnings. |
| `showError` | `(title: string, message: string) => void` | T M C | Send failures and server errors. |

> When you pass your own `apiAdapter`, put these callbacks on the adapter object instead (`onEmailSent`, `showNotification`, `showWarning`, `showError`).

---

## 🔀 Simple mode vs advanced mode

Each component builds a default adapter and config from its simple props, then picks:

```ts
const apiAdapter = props.apiAdapter || internalApiAdapter; // built from baseURL, token, callbacks
const config     = props.config     || internalConfig;     // built from the data props
```

| You pass | Adapter used | Config used |
| :--- | :--- | :--- |
| Simple props only | Built-in Frappe | Built from props |
| `config` + `baseURL`/`token` | Built-in Frappe | Yours |
| `apiAdapter` + simple data props | Yours | Built from props |
| `apiAdapter` + `config` | Yours | Yours |

---

## 🔌 The API adapter (`EmailWidgetApiAdapter`)

```ts
interface EmailWidgetApiAdapter {
  sendEmail: (payload: SendEmailPayloadAdapter) => Promise<{ name?: string }>;
  uploadFile: (file: File) => Promise<{ name?: string; file_name?: string; file_url?: string }>;
  getTemplates?: (references?: EmailTemplateReference[]) => Promise<EmailTemplate[]>;
  updateCommunicationStatus?: (name: string, status: string) => Promise<void>;
  showNotification?: (title: string, message: string) => void;
  showWarning?: (title: string, message: string) => void;
  showError?: (title: string, message: string) => void;
  onEmailSent?: () => void;
}
```

Contract details:

- **`sendEmail`** must resolve to `{ name }`, the created Communication's name, for the send to count as successful. Resolving `{}` keeps the composer open; show your own error first. Throwing shows "Failed to send email".
- **`uploadFile`** must resolve to an object with `name` (the File record name). That `name` is what goes into `payload.attachments`. A missing `name` marks the upload as failed.
- **`getTemplates`** is optional. Without it, the template picker shows "No templates available".
- **`updateCommunicationStatus`** is optional. After a reply is sent, it's called with `(replyData.in_reply_to, "Replied")`. Errors are ignored.

Example:

```ts
const myApiAdapter: EmailWidgetApiAdapter = {
  sendEmail: async (payload) => {
    const res = await api.post("/api/method/send_email", payload);
    return { name: res.data.message.name };
  },
  uploadFile: async (file) => {
    const form = new FormData();
    form.append("file", file);
    form.append("is_private", "1");
    const res = await api.post("/api/method/upload_file", form);
    return { name: res.data.message.name, file_url: res.data.message.file_url };
  },
  getTemplates: async (references) => {
    const res = await api.get("/api/method/get_templates", {
      params: references?.length ? { references: JSON.stringify(references) } : {},
    });
    return res.data.message.map((t) => ({ id: t.name, name: t.subject || t.name, body: t.response_html || t.response || "" }));
  },
  updateCommunicationStatus: async (name, status) => {
    await api.put(`/api/resource/Communication/${encodeURIComponent(name)}`, { status });
  },
  showNotification: (_t, m) => toast.success(m),
  showWarning: (_t, m) => toast.warn(m),
  showError: (_t, m) => toast.error(m),
  onEmailSent: () => queryClient.invalidateQueries({ queryKey: ["communications"] }),
};
```

Memoize the adapter (`useMemo`) in your app. Its identity is an effect dependency, and a new object on every render causes template refetches.

---

## 🗂️ The config object (`EmailWidgetConfig`)

```ts
interface EmailWidgetConfig {
  currentUserFullName: string;
  defaultToEmails?: string[];
  referenceName?: string | null;
  doctype?: string;              // doctype the email is logged against when there is no active lead
  activeLeadName?: string | null;
  activeLeadDoctype?: string;
  activeTaskName?: string | null;
  activeTaskDoctype?: string;
  links?: EmailComposerLink[];
  replyData?: EmailReplyData | null;
}
```

---

## 📤 How sending works

When the user clicks **Send**, the composer goes through these steps:

1. **Validation**:
   - at least one To recipient ("Please add at least one recipient");
   - a non-empty subject ("Please enter a subject");
   - no attachment still uploading ("Please wait for all files to finish uploading");
   - no failed attachment ("Some files failed to upload…").
2. **Body**: the editor HTML is wrapped as `<div class="ql-editor read-mode">…</div>`. For replies, the quoted original is appended.
3. **Record and links**:
   - `doctype` / `name`: the active lead if there is one, otherwise `config.doctype` (default `"Contact"`) and `referenceName`.
   - `links`: `config.links` plus the active lead (added once).
4. **Payload** (`SendEmailPayloadAdapter`):

   ```ts
   {
     recipients: "a@x.com, b@y.com",   // comma-separated
     subject: "Re: Quote",
     content: "<div class=\"ql-editor read-mode\">…</div>…",
     cc?: "c@z.com",
     bcc?: "d@z.com",
     doctype?: "CRM Lead",
     name?: "LEAD-001",
     attachments?: ["<File name>", …], // File record names returned by uploadFile
     links?: [{ link_doctype: "CRM Lead", link_name: "LEAD-001" }],
     in_reply_to?: "<Communication name>",
   }
   ```

5. **After success** (`sendEmail` returned a `name`):
   - for replies, `updateCommunicationStatus(in_reply_to, "Replied")`;
   - then `showNotification("Success", "Email sent successfully")`;
   - then `onEmailSent()`;
   - then `onClose()`.

While sending, the Send and Cancel buttons are disabled and Send shows "Sending…".

---

## ↩️ Replies and threading

Pass an `EmailReplyData` object to open the composer as a reply:

```ts
interface EmailReplyData {
  in_reply_to?: string;  // name of the Communication being replied to
  subject?: string;
  to?: string;           // comma-separated
  cc?: string;           // comma-separated
  bcc?: string;          // comma-separated
  content?: string;      // HTML of the original email
  senderName?: string;
  date?: string;
  time?: string;
  attachments?: { name?: string; file_name?: string; file_url: string; file_size?: number }[];
}
```

What the composer does with it:

| Field | Effect |
| :--- | :--- |
| `subject` | Subject becomes `Re: <subject>`. No `Re:` is added if it already starts with one. |
| `to` / `cc` / `bcc` | Pre-fill the recipient lists. CC and BCC rows open automatically when they have values. `to` takes precedence over `defaultToEmails`. |
| `attachments` | Pre-attached to the reply. They're sent with it unless the user removes them. |
| `content`, `senderName`, `date`, `time` | Shown as the quoted original under the editor ("From / Sent / Subject"), and appended to the sent body after an `<hr>`. |
| `in_reply_to` | Sent as `in_reply_to`. After a successful send, the original is marked **Replied**. |

---

## 📝 Email templates

The template icon in the footer opens the template picker. Each time it opens, the widget calls `getTemplates(references)`. The references are built from the current context:

| Context | `references` sent |
| :--- | :--- |
| Active lead | `[{ reference_doctype: "CRM Lead", reference_name: <lead> }, { reference_doctype: "Contact", reference_name: <referenceName> }]` |
| No lead, active task | `[{ reference_doctype: "CRM Task", reference_name: <task> }, { reference_doctype: "Contact", reference_name: <referenceName> }]` |
| Only a contact | `[{ reference_doctype: "Contact", reference_name: <referenceName> }]` |
| Nothing | `undefined` |

The lead/task doctype values come from `activeLeadDoctype` / `activeTaskDoctype`. The server can use the references to fill record fields into the template.

The built-in adapter's request looks like this:

```
GET /api/method/crm_integration.crm_integration.api.email.get_email_templates?references=[{"reference_doctype":"CRM Lead","reference_name":"LEAD-001"},{"reference_doctype":"Contact","reference_name":"CONTACT-0001"}]
```

Each template card shows its name and an HTML preview of its body. Clicking a card **replaces** the editor content with the template body. The subject isn't changed.

The built-in adapter maps Frappe `Email Template` rows as follows:

| Widget field | Source |
| :--- | :--- |
| `id` | `name` |
| `name` | `subject`, or `name` if there's no subject |
| `body` | `response`, or `response_html` if `response` is empty |

---

## 📎 Attachments

- The paperclip opens a file picker. Multiple files are allowed and there's no type filter.
- Each file is uploaded immediately through `uploadFile`. Its tag shows "(Uploading...)", then "✓", or "(Error: …)".
- Only successfully uploaded files (those with a `name`) are sent. Sending is blocked while an upload is running or when an upload failed. Remove failed files to continue.
- Removing a tag only removes the file from this email. It doesn't delete the uploaded file on the server.

---

## 👥 Recipients and validation

- Type an address and press **Enter** or **,**, or move focus away, to turn it into a tag.
- Addresses are checked with a simple `name@domain.tld` pattern. Invalid input stays in the field and isn't added.
- Duplicates within the same list (case-insensitive) are ignored.
- The **CC** and **BCC** buttons toggle their rows.

---

## 🔔 Notifications

The widget doesn't bundle a toast library. It calls these slots, all with the signature `(title: string, message: string) => void`:

| Slot | Called for |
| :--- | :--- |
| `showNotification` | `("Success", "Email sent successfully")` |
| `showWarning` | Validation errors and attachment upload state |
| `showError` | Send failures, and Frappe `_server_messages` / `exception` responses (built-in adapter) |

In simple mode, pass them as props. In advanced mode, put them on your adapter.

---

## 🧱 Built-in Frappe backend

In simple mode, the widget uses an axios instance with `baseURL`, `withCredentials: true` and, if `token` is set, `Authorization: token <token>`.

| Action | Request |
| :--- | :--- |
| Send | `POST /api/method/crm_integration.crm_integration.api.email.make` (multipart: `recipients`, `subject`, `content`, `cc`, `bcc`, `doctype`, `name`, `links` (JSON), `in_reply_to`, `attachments` (JSON array of File names), `send_email=1`, `now=True`) |
| Templates | `GET /api/method/crm_integration.crm_integration.api.email.get_email_templates?references=<JSON>` |
| Upload | `POST /api/method/upload_file` (multipart: `file`) |
| Mark replied | `PUT /api/resource/Communication/<name>` (multipart: `status=Replied`) |

How send responses are handled:

- A response with `_server_messages` (first message has a `message`) or an `exception` is shown with `showError` and treated as not sent.
- Otherwise, the Communication name is read from `message.name`.

The backend must have the `crm_integration` app installed, or you must provide your own adapter.

---

## ✍️ Custom rich text editor

Pass any component that implements `RichTextEditorProps`:

```ts
interface RichTextEditorProps {
  value: string;                    // HTML
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  height?: string;
}
```

```tsx
import { Editor } from "primereact/editor";

const PrimeEditor = ({ value, onChange, placeholder }: RichTextEditorProps) => (
  <Editor value={value} onTextChange={(e) => onChange(e.htmlValue ?? "")} placeholder={placeholder} style={{ height: 200 }} />
);

<EmailComposerTrigger {...props} RichTextEditor={PrimeEditor} />;
```

The built-in editor is Quill 2 (Snow theme). Its toolbar has: headings (H1–H3), bold, italic, underline, strike, ordered and bullet lists, link, image, and clear formatting. An empty editor is reported as `""`.

---

## 🎨 Styling

- The package's JS entry imports its own CSS, so styles load automatically. You can also import them explicitly with `import "react-email-composer-widget/styles.css"`.
- All widget classes are prefixed with `ecw-` (for example `.ecw-email-composer`, `.ecw-modal-container`, `.ecw-template-card`). Override them in your own stylesheet.
- The bundled CSS also includes Quill's `quill.snow.css` (global `.ql-*` classes). If your app ships its own Quill styles, check that the two don't conflict.
- The modal is rendered in place, not through a portal. Make sure parent containers don't clip it (`overflow: hidden`, `transform`).

---

## ▲ Using with Next.js

The components use hooks and browser APIs, so render them from a **client component**:

```tsx
"use client";
import { EmailComposerTrigger } from "react-email-composer-widget";
```

Don't import them directly into a Server Component.

---

## 📦 Exports

```ts
// Components
export { EmailComposer, EmailComposerModal, EmailComposerTrigger, EmailTemplateSelector };

// Context (optional, for custom compositions)
export { EmailComposerProvider, useEmailComposerContext };

// Hooks (for building your own composer UI)
export { useEmailComposerLogic, useEmailRecipients, useEmailAttachments };

// Types
export type {
  RecipientTag, EmailReplyData, EmailTemplate, EmailTemplateReference, Attachment,
  EmailComposerLink, SendEmailPayloadAdapter, EmailWidgetApiAdapter, EmailWidgetConfig,
  FileUploadRef, RichTextEditorProps,
};
```

Subpath export: `react-email-composer-widget/styles.css`.

### Headless usage

`useEmailComposerLogic({ apiAdapter, config, onClose })` returns all composer state and handlers, so you can build a custom UI on top of it:

- state: `subject`, `toRecipients`, `ccRecipients`, `bccRecipients`, `emailBody`, `attachments`, `isPending`, `emailTemplates`, `isLoadingTemplates`, `replyData`, …
- handlers: `handleSend`, `handleTemplateSelect`, `handleFileSelect`, `removeAttachment`, `handleRecipientInputKeyDown`, `handleRecipientInputBlur`, `removeRecipient`, …

---

## 🔤 TypeScript types

All types live in `src/types/email.ts` and are re-exported from the package root. The package ships its own `.d.ts` files (`dist/index.d.ts`).

```ts
interface RecipientTag { id: string; email: string }
interface EmailTemplate { id: string; name: string; body: string }
interface EmailTemplateReference { reference_doctype: string; reference_name: string }
interface Attachment {
  id: string; file?: File; name?: string; fileName?: string; fileUrl?: string;
  isUploading?: boolean; uploadError?: string;
}
type EmailComposerLink = { link_doctype: string; link_name: string } | Record<string, unknown>;
interface SendEmailPayloadAdapter {
  recipients: string; subject: string; content: string; cc?: string; bcc?: string;
  doctype?: string; name?: string | null; attachments?: string[];
  links?: EmailComposerLink[]; in_reply_to?: string;
}
```

---

## 🔐 Security notes for integrators

- **Template bodies and reply content are rendered as HTML** inside your app: in the template previews, the editor and the quoted reply. Treat that HTML as untrusted:
  - make sure your backend sanitizes the email HTML it stores;
  - HTML-escape every record value it substitutes into templates.
- **Authentication**: the built-in adapter sends the `token` prop as an `Authorization` header to `baseURL`. Only point `baseURL` at your own backend. Prefer short-lived tokens or cookie sessions over long-lived API keys kept in browser storage.
- **Attachments**: the built-in adapter calls Frappe's `upload_file` without `is_private`, so files are stored as public by default. If attachments may be sensitive, use your own `uploadFile` that sends `is_private=1` (see the adapter example above).
- To report a security issue, contact the maintainers privately instead of opening a public issue.

---

## 🧑‍💻 Development

```bash
git clone https://github.com/8848digital/react-email-composer-widget.git
cd react-email-composer-widget
npm install
npm run build
```

| Script | What it does |
| :--- | :--- |
| `npm run build` | `tsc` (type declarations) followed by `vite build` (library bundle). Writes `dist/`. |
| `npm run dev` | Starts the Vite dev server. |
| `npm run preview` | Previews a Vite build. |
| `npm run lint` | ESLint over `src`. Add an ESLint config first, since none is committed yet. |
| `prepare` | Runs `build` automatically on `npm install` from Git. |

### Project structure

```
src/
├── api/email.ts                    # axios client + Frappe endpoints (built-in backend)
├── components/
│   ├── EmailComposer.tsx           # composer UI (fields, editor, reply trail, attachments, footer)
│   ├── EmailComposerModal.tsx      # modal wrapper
│   ├── EmailComposerTrigger.tsx    # button + modal wrapper (controlled/uncontrolled)
│   ├── EmailTemplateSelector.tsx   # template grid
│   ├── InternalQuillEditor.tsx     # built-in Quill 2 editor
│   ├── common/                     # FileUpload, Modal, Icons
│   └── skeleton/                   # template loading skeleton
├── context/EmailComposerContext.tsx
├── hooks/
│   ├── useDefaultEmailAdapter.ts   # builds the built-in adapter + config from simple props
│   ├── useEmailComposerLogic.ts    # composer state, reply seeding, templates, send
│   ├── useEmailRecipients.ts       # To/CC/BCC tag state and validation
│   └── useEmailAttachments.ts      # upload state per file
├── styles/email-composer.css       # ecw-* styles
├── types/email.ts                  # public types
└── index.ts                        # public entry point
```

### Build output

| File | Format |
| :--- | :--- |
| `dist/index.mjs` | ES module (`module` / `exports.import`) |
| `dist/index.js` | UMD/CommonJS (`main` / `exports.require`) |
| `dist/index.css` | Styles (`style` / `./styles.css`) |
| `dist/**/*.d.ts` | Type declarations |

`react`, `react-dom` and `@phosphor-icons/react` are external. Quill and axios are bundled.

---

## 🚢 Releasing a new version

1. Make your changes in `src/` on a `fix/…` or `feat/…` branch.
2. Bump the version: `npm version patch` (or `minor` / `major`).
3. Build: `npm run build`. The `dist/` folder is committed, so commit the rebuilt files.
4. Open a pull request into `master` and merge it.
5. Publish from `master`: `npm publish`.
6. Update consumers, for example `npm install react-email-composer-widget@^<new version>` in the CRM frontend.

---

## 🕘 Changelog

### Unreleased
- Rebuilt `dist/` with no source changes. The bundled Quill is 2.0.2, from the lockfile.
- Detailed README.

### 1.0.6
- Templates are fetched with context **references**, so the server can fill in record data:
  - active lead + contact;
  - or active task + contact when there's no lead.
- New `activeTaskName` / `activeTaskDoctype` props on all components and in `EmailWidgetConfig`.
- `getTemplates` in `EmailWidgetApiAdapter` now receives an optional `references` argument.
- The "Lead Sharing Template" is no longer filtered out on the client.

### 1.0.4 – 1.0.5
- Build fixes: `dist/` rebuilt after the 1.0.3 changes.

### 1.0.3
- `EmailComposerTrigger`: new `variant` (`"default" | "plain"`) and `btnClassName` props.
- README updated.

### 1.0.0 – 1.0.2
- Initial releases: adapter-based composer, built-in Frappe adapter, Quill editor, attachments, templates and threaded replies.

---

## 📄 License

MIT © 8848 Digital
