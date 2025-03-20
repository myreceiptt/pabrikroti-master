// /src/components/logins/SubscribeForm.tsx

import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatusMessage(""); // Clear previous messages

    // Basic Email Validation
    if (!email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setStatusMessage("Please enter a valid email address.");
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
          subject: "Subscription to HI-Bukhari Islamic Art Digital Gallery.",
          name: "Visitor of HI-Bukhari Islamic Art Digital Gallery.",
          email,
          message:
            "Assalamualaikum! I want to subscribe to your latest updates.",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatusMessage("Thank you for subscribing!");
        setEmail(""); // Clear input field
      } else {
        setStatusMessage("Subscription failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full flex flex-col justify-center sm:justify-start items-center sm:items-start">
      <h3 className="text-center sm:text-left text-sm md:text-base font-semibold text-back-ground">
        Catch our latest updates
      </h3>

      <form onSubmit={handleSubmit} className="w-full">
        <div className="w-full flex flex-row justify-center sm:justify-start mt-2">
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-xs md:text-sm w-2/3 lg:w-3/5 px-2 py-0 border border-border-tombol rounded-l-lg bg-transparent focus:outline-hidden placeholder-icon-wording text-border-tombol"
            disabled={loading}
          />
          <button
            type="submit"
            className="text-xs md:text-sm px-6 py-2 bg-back-ground font-semibold rounded-r-lg text-hitam-judul-body"
            disabled={loading}>
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </div>
      </form>

      {/* Success/Error Message */}
      {statusMessage && (
        <h4 className="text-left text-sm font-medium text-icon-wording mt-2">
          {statusMessage}
        </h4>
      )}
    </div>
  );
}
