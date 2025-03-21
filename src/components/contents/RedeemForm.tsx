// /src/components/contents/RedeemForm.tsx

"use client";

// External libraries
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaSackDollar, FaXmark } from "react-icons/fa6";
import { canClaim as claimCondition20 } from "thirdweb/extensions/erc20";
import { ClaimButton, useActiveAccount } from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import { bonVoyageDrop } from "@/config/contracts";

// Components libraries
import Loader from "./ReusableLoader";

const RedeemForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [amount, setAmount] = useState<string>("1");
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Check if the input is a number and within the range 1 to 11
    if (/^\d*$/.test(value)) {
      const numericValue = parseInt(value, 10);

      if (!isNaN(numericValue) && numericValue >= 1 && numericValue <= 11) {
        setAmount(value); // Valid number within range
      } else if (value === "") {
        setAmount(""); // Allow empty input for clearing the field
      }
    }
  };

  const [erc20Claimed, setErc20Claimed] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [pesanTunggu, setPesanTunggu] = useState<string | null>(null);
  const [pesanKirim, setPesanKirim] = useState<string | null>(null);
  const [pesanSukses, setPesanSukses] = useState<string | null>(null);
  const [pesanGagal, setPesanGagal] = useState<string | null>(null);

  const activeAccount = useActiveAccount();

  // Fetch ERC20 Claim Condition (to get `result`)
  useEffect(() => {
    async function fetchClaimCondition20() {
      try {
        const activeCondition20 = await claimCondition20({
          contract: bonVoyageDrop,
          claimer: activeAccount?.address ?? "",
          quantity: "1",
        });

        if (!activeCondition20.result) {
          setErc20Claimed(true);
        } else {
          setErc20Claimed(false);
        }
      } catch (error) {
        console.error("Error fetching claim condition:", error);
      }
    }

    fetchClaimCondition20();
  }, [activeAccount?.address]);

  return (
    <div className="w-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-start">
      {/* Left Column: Image */}
      <div className="relative">
        {/* Clickable Image */}
        <div
          className="rounded-3xl overflow-hidden w-full cursor-pointer"
          onClick={() => setIsOpen(true)}>
          <Image
            src="/images/bon-voyage.gif"
            alt="BON VOYAGE Token Illustration"
            width={747}
            height={747}
            className="rounded-3xl w-full"
            unoptimized
          />
        </div>

        {/* Pop-up Modal */}
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-hitam-judul-body/45 backdrop-blur-xs z-50">
            {/* Pop-up Box */}
            <div className="bg-back-ground rounded-2xl shadow-lg relative w-[89vw] h-[89vh] sm:w-[74vw] sm:h-[74vh] lg:w-[47vw] lg:h-[47vh] flex flex-col">
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center text-xl rounded-lg bg-box-icon text-icon-wording"
                onClick={() => setIsOpen(false)}>
                <FaXmark />
              </button>

              {/* Scrollable Content */}
              <div className="p-6 overflow-y-auto flex-1">
                <h2 className="text-xl font-bold text-left text-hitam-judul-body mb-2">
                  $BON Dosh!!!!
                </h2>
                <p className="text-icon-wording text-sm leading-relaxed">
                  At a certain point in time… in{" "}
                  <span className="text-icon-wording text-sm font-semibold leading-relaxed">
                    the Realm of Reality
                  </span>
                  .
                  <br />
                  <br />
                  On{" "}
                  <span className="text-icon-wording text-sm font-semibold leading-relaxed">
                    EARTH #474
                  </span>
                  , after traversing 4.5 billion years in the vastness of the
                  cosmos, a group of individuals embarked on an extraordinary
                  journey. They did not merely traverse land, but also crossed
                  the oceans and even ventured into the boundless expanse of
                  space. Thus, the{" "}
                  <span className="text-icon-wording text-sm font-semibold leading-relaxed">
                    VOYAGE
                  </span>{" "}
                  began—not merely a physical expedition, but a pursuit of
                  values, encounters, and growth.
                  <br />
                  <br />
                  As time unfolded, their efforts met challenges and
                  opportunities alike. Revenue flowed in and out, weaving a
                  pattern akin to the ceaseless tides of the sea. Every meeting
                  with a new soul, every crossroads encountered, every farewell,
                  and every joyous reunion—each left an indelible mark upon the
                  tapestry of this great journey.
                  <br />
                  <br />
                  The call{" "}
                  <span className="text-icon-wording text-sm font-semibold leading-relaxed">
                    &quot;BON VOYAGE!&quot;
                  </span>{" "}
                  grew louder, reverberating not only in the minds of those
                  undertaking the{" "}
                  <span className="text-icon-wording text-sm font-semibold leading-relaxed">
                    VOYAGE
                  </span>{" "}
                  but also weaving itself into the very fabric of decentralised
                  data traffic. What was once a mere expression of well-wishes,{" "}
                  <span className="text-icon-wording text-sm font-semibold leading-relaxed">
                    BON
                  </span>{" "}
                  had now evolved into something far greater—a unit of measure
                  for the{" "}
                  <span className="text-icon-wording text-sm font-semibold leading-relaxed">
                    VOYAGE
                  </span>{" "}
                  itself.
                  <br />
                  <br />
                </p>
                <ul className="text-icon-wording text-sm leading-relaxed">
                  <li>
                    🔹 How far has the{" "}
                    <span className="text-icon-wording text-sm font-semibold leading-relaxed">
                      VOYAGE
                    </span>{" "}
                    taken them?
                  </li>
                  <li>🔹 How much value has been forged along the way?</li>
                  <li>🔹 How many encounters have shaped the path?</li>
                  <li>
                    🔹 How much revenue has been channelled and exchanged?
                  </li>
                </ul>
                <p className="text-icon-wording text-sm leading-relaxed">
                  <br />
                  <span className="text-icon-wording text-sm font-semibold leading-relaxed">
                    BON
                  </span>{" "}
                  stands as a measure that immortalises experience, a token of
                  equivalence{" "}
                  <span className="text-icon-wording text-sm font-semibold leading-relaxed">
                    (ERC-20)
                  </span>{" "}
                  that encapsulates the influence of every participant in the{" "}
                  <span className="text-icon-wording text-sm font-semibold leading-relaxed">
                    VOYAGE
                  </span>
                  .<br />
                  <br />
                  <span className="text-icon-wording text-sm font-semibold leading-relaxed">
                    BON
                  </span>{" "}
                  is not just a figure—it is proof of the steps taken, the
                  values cultivated, and the impact left behind.
                  <br />
                  <br />
                  And at the culmination of every journey—whether at its
                  inception or after traversing great distances—one call
                  continues to resonate, carrying forth the spirit of adventure
                  and purpose:
                  <br />
                  <br />
                  <span className="text-icon-wording text-sm font-semibold leading-relaxed">
                    BON VOYAGE! 🚀
                  </span>
                  <br />
                  <br />
                  🍌☕🍌☕
                  <br />
                  <span className="text-icon-wording text-xs font-semibold leading-relaxed">
                    Prof. NOTA v.11.11.11
                  </span>
                  <br />
                  <br />
                  <Image
                    src="/images/bon-voyage.gif"
                    alt="BON VOYAGE Token Illustration"
                    width={747}
                    height={747}
                    className="rounded-3xl w-full"
                    unoptimized
                  />
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Right Column: Form */}
      <div className="flex flex-col gap-2 lg:gap-4 items-start justify-center h-full">
        <h1 className="text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-hitam-judul-body">
          Claim Your $BON Dosh
        </h1>
        <div className="flex flex-row gap-2">
          <h1 className="text-left text-sm font-medium text-icon-wording">
            by
          </h1>
          <span className="text-3xl leading-6 text-icon-wording">&#9673;</span>
          <h1 className="text-left text-sm font-medium text-icon-wording">
            <Link href="https://voyage.co.id/" target="_blank">
              VOYAGE.CO.ID
            </Link>
          </h1>
        </div>
        <h2 className="text-left text-sm font-medium text-icon-wording">
          Redeem your coins rewards by claiming the $BON Dosh, the ERC20 tokens
          on the {bonVoyageDrop.chain.name} blockchain using your Smart Account
          wallet.
          {/* on the {b0nV0yageDrop.chain.name} blockchain using your Smart Account wallet.*/}
        </h2>

        {/* Success or Error Messages */}
        {pesanTunggu && <Loader message={pesanTunggu} />}
        {pesanKirim && <Loader message={pesanKirim} />}
        {pesanSukses && <Loader message={pesanSukses} />}
        {pesanGagal && <Loader message={pesanGagal} />}

        {/* Amount Input */}
        <div className="w-full grid grid-cols-2">
          <label
            htmlFor="amount"
            className="w-full text-left text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body place-content-center">
            Amount (1-11)
          </label>
          <div className="w-full flex bg-box-icon items-center justify-center px-4 py-2 rounded-lg">
            <FaSackDollar className="w-5 h-5 text-hitam-judul-body" />
            <input
              id="amount"
              type="number"
              value={amount}
              onChange={handleAmountChange}
              min="1"
              max="11"
              placeholder={"Enter amount (1-11)"}
              className="ml-2 w-full bg-transparent outline-hidden text-xs md:text-sm text-hitam-judul-body placeholder-icon-wording"
            />
          </div>
        </div>

        {/* Claim Button */}
        <ClaimButton
          unstyled
          className={`w-full rounded-lg p-2 text-base font-semibold transition-colors duration-300 ease-in-out
            ${
              isProcessing || erc20Claimed
                ? "border-2 border-solid border-border-tombol bg-back-ground text-hitam-judul-body"
                : "border-2 border-solid border-back-ground text-back-ground bg-hitam-judul-body"
            }
          `}
          contractAddress={bonVoyageDrop.address}
          chain={bonVoyageDrop.chain}
          client={client}
          claimParams={{
            type: "ERC20",
            quantity: amount,
          }}
          disabled={Boolean(isProcessing || !amount || erc20Claimed)}
          onClick={() => {
            setIsProcessing(true);
            setPesanTunggu("Processing. Be patient and wait.");
            setPesanSukses(null);
            setPesanGagal(null);
          }}
          onTransactionSent={() => {
            setPesanTunggu(null);
            setPesanKirim("Claiming your $BON Dosh.");
          }}
          onError={(error) => {
            setIsProcessing(false);
            setPesanTunggu(null);
            setPesanKirim(null);
            setPesanGagal(`${error.message}`);
          }}
          onTransactionConfirmed={async () => {
            setIsProcessing(false);
            setPesanKirim(null);
            setPesanSukses("Successful! $BON Dosh claimed.");
            try {
              // Refetch claim condition
              const activeCondition20 = await claimCondition20({
                contract: bonVoyageDrop,
                claimer: activeAccount?.address ?? "",
                quantity: "1",
              });

              if (!activeCondition20.result) {
                setErc20Claimed(true);
              } else {
                setErc20Claimed(false);
              }
            } catch (error) {
              console.error("Error refetching claim condition:", error);
            }
          }}>
          {erc20Claimed ? "Already Claimed" : "Claim Now"}
        </ClaimButton>
      </div>
    </div>
  );
};

export default RedeemForm;
