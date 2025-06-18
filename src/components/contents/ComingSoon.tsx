// /src/components/contents/ComingSoon.tsx

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

// Components libraries
import Loader from "@/components/sections/ReusableLoader";
import Message from "@/components/sections/ReusableMessage";

export default function ComingSoon() {
  const { receipt } = getActiveReceipt();

  return (
    <main className="grid gap-4 place-items-center">
      <Loader message={receipt.csLoader} />

      <Message
        message1={receipt.csMessage1}
        message2={receipt.csMessage2}
        message3={receipt.nftsMessage3}
      />
    </main>
  );
}
