# React Email Composer Widget

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
npm install https://github.com/8848digital/react-email-composer-widget.git
```

### Peer Dependencies

This widget requires the following dependencies to be installed in your project:

```bash
npm install quill@^2.0.2 @phosphor-icons/react
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
      referenceName="Milan Pethani"       // Contact name (used for template references)
      referenceDoctype="Contact"
      activeLeadName="LEAD-001"            // If a lead is active
      activeLeadDoctype="CRM Lead"
      activeTaskName="585"                 // Falls back to task when no active lead
      activeTaskDoctype="CRM Task"
      // Connect to your app's toast system (e.g. PrimeReact, react-hot-toast)
      showNotification={(title, msg) => toast.success(msg)}
      showWarning={(title, msg) => toast.warn(msg)}
      showError={(title, msg) => toast.error(msg)}
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

### 3. Manual Modal Control (with Zustand)

If you manage your modal state externally (e.g., for global "Email Reply" shortcuts), you can use the `isOpen`, `onOpen`, and `onClose` props.

```tsx
import { EmailComposerTrigger } from "react-email-composer-widget";
import { useEmailReplyStore } from "./my-store";

const MyComponent = () => {
  const { isOpen, openModal, closeModal } = useEmailReplyStore();

  return <EmailComposerTrigger baseURL="https://api.com" token="xyz" isOpen={isOpen} onOpen={openModal} onClose={closeModal} />;
};
```

### 4. Trigger Variants (Plain Button)

If you want the trigger to look like your app’s “plain text” buttons (no envelope icon), use `variant="plain"` and (optionally) `btnClassName`.

```tsx
import { EmailComposerTrigger } from "react-email-composer-widget";
import "react-email-composer-widget/styles.css";

<EmailComposerTrigger
  buttonLabel="Email"
  variant="plain"
  btnClassName="contact-button"
  baseURL={CONSTANTS.API_BASE_URL}
  token={token}
  currentUserFullName={userFullName}
  defaultToEmails={[customerEmail]}
  activeLeadName={activeLeadName}
  activeLeadDoctype="CRM Lead"
  onOpen={() => console.log("opened")}
  onClose={() => console.log("closed")}
  showNotification={(title, msg) => toast.success(msg)}
  showWarning={(title, msg) => toast.warn(msg)}
  showError={(title, msg) => toast.error(msg)}
/>;
```

### 5. Use Composer Only (No Trigger)

`EmailComposer` renders only the composer UI. Wrap it in your own modal/dialog if you want full control of visibility.

```tsx
import { EmailComposer } from "react-email-composer-widget";

const MyEmailDialog = ({ isOpen, onClose, ...composerProps }: any) => {
  if (!isOpen) return null;

  return (
    <EmailComposer
      {...composerProps}
      onClose={onClose}
    />
  );
};
```

### 6. Use Built-in Modal (EmailComposerModal)

If you want the widget to handle the modal wrapper, use `EmailComposerModal`.

```tsx
import { EmailComposerModal } from "react-email-composer-widget";

<EmailComposerModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  baseURL={CONSTANTS.API_BASE_URL}
  token={token}
  currentUserFullName={userFullName}
  defaultToEmails={[customerEmail]}
  activeLeadName={activeLeadName}
  activeLeadDoctype="CRM Lead"
  referenceName={referenceName}
  replyData={replyData}
  showNotification={(title, msg) => toast.success(msg)}
  showWarning={(title, msg) => toast.warn(msg)}
  showError={(title, msg) => toast.error(msg)}
/>
```

## ⚙️ Properties (Props)

These props are available on **`EmailComposerTrigger`**, **`EmailComposerModal`**, and **`EmailComposer`** (unless specified).

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **Core (Simple Mode)** | | | |
| `baseURL` | `string` | - | Base URL for the internal API calls. |
| `token` | `string` | - | Authorization token for the API calls. |
| `currentUserFullName` | `string` | `""` | The name of the sender. |
| `defaultToEmails` | `string[]` | `[]` | List of pre-filled recipient email addresses. |
| `referenceName` | `string \| null` | `null` | Primary document ID (e.g., "Milan Pethani"). Also used as the Contact reference name for template fetching. |
| `referenceDoctype` | `string` | - | Primary document type. |
| `activeLeadName` | `string \| null` | `null` | Context ID for the lead. When present, templates are fetched with CRM Lead + Contact references. |
| `activeLeadDoctype` | `string` | `"CRM Lead"` | Context doctype for the lead. |
| `activeTaskName` | `string \| null` | `null` | Context ID for the task (e.g., "585"). Used for template references when no active lead is present. |
| `activeTaskDoctype` | `string` | `"CRM Task"` | Context doctype for the task. |
| `links` | `EmailComposerLink[]` | `[]` | Related records to link in the communication log. |
| `replyData` | `EmailReplyData \| null` | `null` | Threading data for replies. |
| **Advanced Mode** | | | |
| `apiAdapter` | `EmailWidgetApiAdapter` | - | External API logic provider. Overrides simple mode. |
| `config` | `EmailWidgetConfig` | - | External configuration object. Overrides simple mode. |
| **Components & Styling** | | | |
| `RichTextEditor` | `React.ComponentType<RichTextEditorProps>` | - | Custom editor component (e.g., PrimeReact Editor). |
| `buttonLabel` | `string` | `"Email"` | Label for the trigger button. |
| `className` | `string` | `""` | CSS class for the trigger button container. |
| `modalSize` | `string` | `"800px"` | Width of the modal (e.g., "800px", "50%"). |
| `header` | `React.ReactNode` | - | Custom header for `EmailComposerModal`. |
| `variant` | `"default" \| "plain"` | `"default"` | Trigger button style (`EmailComposerTrigger` only). |
| `btnClassName` | `string` | `""` | Optional class for the button (`variant="plain"`) or container. |
| **Control & Callbacks** | | | |
| `isOpen` | `boolean` | - | Controls the visibility of the modal. |
| `onOpen` | `() => void` | - | Callback when the modal is opened. |
| `onClose` | `() => void` | - | Callback when requested to close. (**Required** on `EmailComposerModal` & `EmailComposer`; optional on `EmailComposerTrigger` in uncontrolled mode). |
| `onEmailSent` | `() => void` | - | Callback after a successful email send. |
| `showNotification` | `(title: string, msg: string) => void` | - | Success toast handler. |
| `showWarning` | `(title: string, msg: string) => void` | - | Warning toast handler. |
| `showError` | `(title: string, msg: string) => void` | - | Error toast handler. |

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

  // Fetch email templates (receives optional references for context-aware filtering)
  getTemplates: async (references) => {
    let url = "/api/method/get_templates";
    if (references?.length) {
      url += `?references=${encodeURIComponent(JSON.stringify(references))}`;
    }
    const response = await axios.get(url);
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
- `referenceName`: The primary document ID (e.g. "Milan Pethani"). Also used as the Contact `reference_name` when building template references.
- `activeLeadName` / `activeLeadDoctype`: Context IDs for linking the email. When present, templates are fetched with a `CRM Lead` reference.
- `activeTaskName` / `activeTaskDoctype`: Context IDs for the task. Used as the primary reference for template fetching when there is **no active lead**.
- `links`: Array of related records to link in the communication log.
- `replyData`: Object containing threading info (`in_reply_to`, `subject`, `content`).

### Dynamic Email Template References

When the user opens the template selector, the widget automatically builds a `references` array and passes it to the `getTemplates` API:

| Scenario | References Sent |
| :--- | :--- |
| Active lead exists | `[{"reference_doctype": "CRM Lead", "reference_name": "<leadName>"}, {"reference_doctype": "Contact", "reference_name": "<contactName>"}]` |
| No active lead, task exists | `[{"reference_doctype": "CRM Task", "reference_name": "<taskName>"}, {"reference_doctype": "Contact", "reference_name": "<contactName>"}]` |
| Neither | No references sent (default behavior) |

**API Example:**

```
GET /api/method/crm_integration.crm_integration.api.email.get_email_templates?references=[{"reference_doctype":"CRM Lead","reference_name":"LEAD-001"},{"reference_doctype":"Contact","reference_name":"Milan Pethani"}]
```

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
import { useSendEmail, useUploadEmailFile, useUpdateCommunicationStatus, useGetEmailTemplatesFetcher } from "@/hooks/email/useEmailHooks";

export function useEmailComposerAdapters({ defaultToEmails, referenceName, links }) {
  const queryClient = useQueryClient();
  const fullName = useAuthStore((s) => s.full_name) ?? "";
  const { name: activeLeadName, doctype: activeLeadDoctype } = useLeadStore();
  const replyData = useEmailReplyStore((s) => s.replyData);
  const { showWarning, showError, showSuccess } = useNotification();

  const { mutateAsync: sendEmailMutation } = useSendEmail();
  const { mutateAsync: uploadFileMutation } = useUploadEmailFile();
  const { mutate: updateStatusMutation } = useUpdateCommunicationStatus();
  const getEmailTemplatesFetcher = useGetEmailTemplatesFetcher();

  // Step 1
  const config = useMemo(
    () => ({
      currentUserFullName: fullName,
      defaultToEmails,
      referenceName,
      activeLeadName,
      activeLeadDoctype,
      links,
      replyData: replyData ?? null,
    }),
    [fullName, defaultToEmails, referenceName, activeLeadName, activeLeadDoctype, links, replyData]
  );

  // Step 2
  const apiAdapter = useMemo(
    () => ({
      sendEmail: async (payload) => {
        const data = await sendEmailMutation(payload);
        // Optional: Handle Frappe-style server messages...
        return { name: data?.name };
      },
      uploadFile: async (file) => {
        const data = await uploadFileMutation(file);
        return { name: data?.name, file_url: data?.file_url };
      },
      getTemplates: async (references) => {
        const res = await getEmailTemplatesFetcher(references);
        return (res?.message || []).map((t) => ({
          id: t.name,
          name: t.subject || t.name,
          body: t.response_html || t.response || "",
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
    }),
    [
      sendEmailMutation,
      uploadFileMutation,
      updateStatusMutation,
      getEmailTemplatesFetcher,
      queryClient,
      showSuccess,
      showWarning,
      showError,
    ]
  );

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

MIT
