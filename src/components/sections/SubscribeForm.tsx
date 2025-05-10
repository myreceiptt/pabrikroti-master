// /src/components/sections/SubscribeForm.tsx

// External libraries
import { useState } from "react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

const {
  colorBorder,
  colorPrimary,
  colorSecondary,
  subscribeButton,
  subscribeButtonLoading,
  subscribeFailed,
  subscribeInput,
  subscribeMessage,
  subscribeName,
  subscribePlaceholder,
  subscribeSubject,
  subscribeSuccess,
  subscribeTitle,
  subscribeWarn,
} = getActiveReceipt();

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    console.warn(subscribeWarn);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatusMessage("");
    setIsInvalid(false);

    // Basic email validation
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!email || !emailRegex.test(email)) {
      setStatusMessage(subscribeInput);
      setIsInvalid(true);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: subscribeSubject,
          name: subscribeName,
          email,
          message: subscribeMessage,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatusMessage(subscribeSuccess);
        setEmail(""); // Clear input field
      } else {
        setStatusMessage(subscribeFailed);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <h3
        style={{ color: colorPrimary }}
        className="text-center sm:text-left text-xs sm:text-sm md:text-base font-semibold">
        {subscribeTitle}
      </h3>

      <form onSubmit={handleSubmit} className="w-full">
        <div className="w-full flex flex-row justify-center sm:justify-start mt-2">
          <input
            type="email"
            name="email"
            placeholder={subscribePlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              borderColor: isInvalid ? colorPrimary : colorBorder,
              color: colorPrimary,
            }}
            className="text-xs md:text-sm w-2/3 lg:w-3/5 px-2 py-0 border rounded-l-lg bg-transparent focus:outline-none"
            disabled={loading}
            aria-invalid={isInvalid}
          />
          <button
            type="submit"
            style={{ backgroundColor: colorPrimary, color: colorSecondary }}
            className="text-xs md:text-sm px-6 py-2 font-semibold rounded-r-lg cursor-pointer"
            disabled={loading}>
            {loading ? subscribeButtonLoading : subscribeButton}
          </button>
        </div>
      </form>

      {/* Success/Error Message */}
      {statusMessage && (
        <h4
          aria-live="polite"
          style={{ color: colorPrimary }}
          className="text-center sm:text-left text-sm font-medium mt-2">
          {statusMessage}
        </h4>
      )}
    </>
  );
}
