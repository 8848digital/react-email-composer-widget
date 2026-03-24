# React Email Composer Widget

A professional, decoupled React Email Composer widget designed with an adapter-based architecture. Built by **8848 Digital**, this package provides a seamless way to integrate email functionality into any React application using your own API and data storage logic.

## 🚀 Key Features

- **Decoupled Architecture**: Logic is separated from UI using an adapter pattern.
- **Dual Mode Support**:
  - **Simple Mode**: Use built-in Frappe-compatible logic with simple props (`baseURL`, `token`, etc.).
  - **Advanced Mode**: Provide your own full `apiAdapter` and `config` for complete control.
- **Built-in Rich Text Editor**: Integrated Quill-hosted editor (no `primereact` required).
- **Threading Support**: Built-in support for `in_reply_to` and email thread quoting.
- **Modular Components**:
  - `EmailComposerTrigger`: Complete Button + Modal combo for instant integration.
  - `EmailComposerModal`: Direct Modal for custom triggering logic.
  - `EmailComposer`: The raw composer UI for custom layout needs.
- **Attachment Management**: Built-in file upload handling (integrated with your API).
- **Template Support**: Fetch and select from your own system templates.
- **State Management Friendly**: Supports external visibility control via global stores (e.g., Zustand).

## 🛠️ Installation

```bash
# If using Git installation
npm install https://github.com/your-username/react-email-composer-widget.git
```

## 📋 Usage

### 1. Simple Mode (Using Built-in Adapter)

The easiest way to integrate. The widget handles all API calls internally using the provided `baseURL` and `token`.

```tsx
import { EmailComposerTrigger } from "react-email-composer-widget";
import "react-email-composer-widget/styles.css";

const MyComponent = () => {
  return (
    <EmailComposerTrigger
      buttonLabel="Email"
      baseURL="https://your-frappe-api.com"
      token="your-auth-token"
      currentUserFullName="John Doe"
      defaultToEmails={["customer@example.com"]}
      activeLeadName="LEAD-001"
      activeLeadDoctype="CRM Lead"
      // Connect to your app's toast system (e.g. PrimeReact, react-hot-toast)
      showNotification={(title, msg) => toast.success(msg)} // title: "Success", msg: "Email sent successfully"
      showWarning={(title, msg) => toast.warn(msg)}      // title: "Validation Error", msg: "Please add a recipient"
      showError={(title, msg) => toast.error(msg)}        // title: "Error", msg: "Failed to send email"
    />

  );
};
```

### 2. Advanced Mode (Using External Adapters)

Provide your own full `apiAdapter` and `config` for maximum flexibility. This is useful if you have a custom backend or specialized upload logic.

```tsx
import { EmailComposerTrigger } from "react-email-composer-widget";
import { myApiAdapter, myConfig } from "./my-adapters";

const MyComponent = () => {
  return <EmailComposerTrigger buttonLabel="Send Email" apiAdapter={myApiAdapter} config={myConfig} />;
};
```

### 3. Manual Modal Control (with Zustand/Redux)

If you manage your modal state externally (e.g., for global "Email Reply" shortcuts), you can use the `isOpen`, `onOpen`, and `onClose` props.

```tsx
import { EmailComposerTrigger } from "react-email-composer-widget";
import { useEmailReplyStore } from "./my-store";

const MyComponent = () => {
  const { isOpen, openModal, closeModal } = useEmailReplyStore();

  return <EmailComposerTrigger baseURL="https://api.com" token="xyz" isOpen={isOpen} onOpen={openModal} onClose={closeModal} />;
};
```

## ⚙️ Configuration (Adapters)

### `EmailWidgetApiAdapter` Example

If you are using **Advanced Mode**, you should implement an object matching this interface:

```typescript
const myApiAdapter = {
  // Send the final email payload
  sendEmail: async (payload) => {
    const response = await axios.post("/api/method/send_email", payload);
    return { name: response.data.message.name };
  },

  // Handle attachment uploads
  uploadFile: async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    const response = await axios.post("/api/method/upload_file", formData);
    return { name: response.data.message.name, file_url: response.data.message.file_url };
  },

  // Fetch email templates
  getTemplates: async () => {
    const response = await axios.get("/api/method/get_templates");
    return response.data.message; // Array of { id, name, body }
  },

  // (Optional) Update communication status on reply
  updateCommunicationStatus: async (name, status) => {
    await axios.post("/api/method/update_status", { name, status });
  },

  // Notification Callbacks
  showNotification: (title, message) => toast.success(message),
  showWarning: (title, message) => toast.warn(message),
  showError: (title, message) => toast.error(message),
};
```

### `EmailWidgetConfig`

Define the data context:

- `currentUserFullName`: Displayed "From" name.
- `defaultToEmails`: Array of pre-filled recipients.
- `referenceName`: The primary document ID (e.g. "CONTACT-001").
- `activeLeadName` / `activeLeadDoctype`: Context IDs for linking the email.
- `links`: Array of related records to link in the communication log.
- `replyData`: Object containing threading info (`in_reply_to`, `subject`, `content`).

## 🔔 Notification Handling

The widget is designed to be UI-agnostic regarding notifications. Instead of bundling a heavy toast library, it provides "slots" for you to connect your own.

The following props (available on `EmailComposerTrigger`, `EmailComposerModal`, and `EmailComposer`) follow the same function signature: `(title: string, message: string) => void`.

- **`showNotification`**: Called on successful email send.
- **`showWarning`**: Called for validation errors (missing recipients, etc.) or "Upload in Progress".
- **`showError`**: Called for catastrophic failures (API down) or server-side exceptions (Quota exceeded).

### How it works internally

The widget triggers these methods whenever an operation completes. For example, upon a successful send:

```typescript
// Upon successful send:
apiAdapter.showNotification?.("Success", "Email sent successfully");

// Upon validation/process warnings:
apiAdapter.showWarning?.("Validation Error", "Please add at least one recipient");

// Upon catastrophic or server-side failures:
apiAdapter.showError?.("Error", "Failed to send email");

```

### Example with custom handlers:


```tsx
<EmailComposerTrigger
  {...props}
  showNotification={(title, message) => myToast.show({ title, body: message, type: "success" })}
  showError={(title, message) => myToast.show({ title, body: message, type: "error" })}
/>
```

## 🏗️ Advanced Integration Example (Production Hook)

Below is a real-world example of how to implement the `EmailWidgetApiAdapter` and `EmailWidgetConfig` using **TanStack Query** and custom state stores as seen in production.

```tsx
import { useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { EmailComposerTrigger } from "react-email-composer-widget";
import { useNotification } from "@/components/common/NotificationProvider";
import { useAuthStore } from "@/stores/authStore";
import { useLeadStore } from "@/stores/leadStore";
import { useEmailReplyStore } from "@/stores/emailReplyStore";
import {
  useSendEmail,
  useUploadEmailFile,
  useUpdateCommunicationStatus,
  useGetEmailTemplatesFetcher,
} from "@/hooks/email/useEmailHooks";

export function useEmailComposerAdapters({
  defaultToEmails,
  referenceName,
  links,
}) {
  const queryClient = useQueryClient();
  const fullName = useAuthStore((s) => s.full_name) ?? "";
  const { name: activeLeadName, doctype: activeLeadDoctype } = useLeadStore();
  const replyData = useEmailReplyStore((s) => s.replyData);
  const { showWarning, showError, showSuccess } = useNotification();

  const { mutateAsync: sendEmailMutation } = useSendEmail();
  const { mutateAsync: uploadFileMutation } = useUploadEmailFile();
  const { mutate: updateStatusMutation } = useUpdateCommunicationStatus();
  const getEmailTemplatesFetcher = useGetEmailTemplatesFetcher();

  const config = useMemo(() => ({
    currentUserFullName: fullName,
    defaultToEmails,
    referenceName,
    activeLeadName,
    activeLeadDoctype,
    links,
    replyData: replyData ?? null,
  }), [fullName, defaultToEmails, referenceName, activeLeadName, activeLeadDoctype, links, replyData]);

  const apiAdapter = useMemo(() => ({
    sendEmail: async (payload) => {
      const data = await sendEmailMutation(payload);
      // Optional: Handle Frappe-style server messages...
      return { name: data?.name };
    },
    uploadFile: async (file) => {
      const data = await uploadFileMutation(file);
      return { name: data?.name, file_url: data?.file_url };
    },
    getTemplates: async () => {
      const res = await getEmailTemplatesFetcher();
      return (res?.message || []).map(t => ({
        id: t.name,
        name: t.subject || t.name,
        body: t.response_html || t.response || ""
      }));
    },
    updateCommunicationStatus: async (name, status) => {
      updateStatusMutation({ name, payload: { status } });
    },
    showNotification: (title, message) => showSuccess(title, message),
    showWarning: (title, message) => showWarning(title, message),
    showError: (title, message) => showError(title, message),
    onEmailSent: () => {
      queryClient.invalidateQueries({ queryKey: ["incomingCommunications"] });
    },
  }), [sendEmailMutation, uploadFileMutation, updateStatusMutation, getEmailTemplatesFetcher, queryClient, showSuccess, showWarning, showError]);

  return { config, apiAdapter };
}
```

## 📦 Building for Production


If you are developing locally or contributing:

```bash
cd packages/react-email-composer-widget
npm run build
```

This generates the `dist/` folder containing the optimized JS and CSS files.

## 📄 License

MIT © 8848 Digital
