// /src/components/logins/SubscribeForm.tsx

// External libraries
import { useState } from "react";

// Blockchain configurations
import {
  inputEmail,
  subscribeSubject,
  subscribeName,
  subscribeMessage,
  subscribeSuccess,
  subscribeFailed,
  subscribeTitle,
  subscribePlaceholder,
} from "@/config/osloid";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatusMessage(""); // Clear previous messages

    // Basic Email Validation
    if (!email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setStatusMessage(inputEmail);
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
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
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
      <h3 className="text-center sm:text-left text-xs sm:text-sm md:text-base font-semibold text-back-ground">
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
            className="text-xs md:text-sm w-2/3 lg:w-3/5 px-2 py-0 border border-border-tombol rounded-l-lg bg-transparent focus:outline-hidden placeholder-border-tombol text-back-ground"
            disabled={loading}
          />
          <button
            type="submit"
            className="text-xs md:text-sm px-6 py-2 bg-back-ground font-semibold rounded-r-lg text-hitam-judul-body cursor-pointer"
            disabled={loading}>
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </div>
      </form>

      {/* Success/Error Message */}
      {statusMessage && (
        <h4 className="text-center sm:text-left text-sm font-medium text-back-ground mt-2">
          {statusMessage}
        </h4>
      )}
    </>
  );
}
