// /src/components/landing/AboutThis.tsx

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";
import Link from "next/link";

export default function AboutThis() {
  const { receipt } = getActiveReceipt();

  return (
    <section className="px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-6">
        <h2
          id="what"
          style={{
            color: receipt.colorSecondary,
          }}
          className="text-3xl font-bold">
          What Is NFT FOR A REASON?
        </h2>
        <p
          style={{
            color: receipt.colorSekunder,
          }}>
          <span className="font-extrabold">NFT FOR A REASON (NFT FAR)</span> is
          a Web3-based initiative that connects the power of digital art with
          the real needs of grassroots communities and cultures in Indonesia.
          This program introduces a participatory mechanism to support local
          initiatives through curated NFT artworks, which are sold publicly in
          the spirit of solidarity.
        </p>
        <p
          style={{
            color: receipt.colorSekunder,
          }}>
          Through this program, Indonesian NFT artists are invited to donate
          their works, which are then minted as digital assets. The proceeds
          from these sales are allocated transparently and measurably to support
          community activities and cultural advancement across various regions
          of Indonesia. Each supported project is accompanied by a whitepaper
          and roadmap that outline its context, plans, and fund utilization.
        </p>
        <p
          style={{
            color: receipt.colorSekunder,
          }}>
          NFT FOR A REASON is not only a collaborative space between artists,
          communities, and the public—it also offers a fair and sustainable
          funding model for cultural initiatives. The program operates on
          principles of accountability, utilizing custodial wallets and open,
          community-based oversight.
        </p>
        <p
          style={{
            color: receipt.colorSekunder,
          }}>
          With a renewed spirit of collective action, NFT FOR A REASON affirms
          that technology can be a tool for empowerment—not just consumption—and
          that digital artworks can have a real, tangible impact on social and
          cultural life.
        </p>
        <p
          style={{
            color: receipt.colorSekunder,
          }}>
          Each project is accompanied by a{" "}
          <Link
            href="/medias/nft-far-journey-and-whitepaper.pdf"
            target="_blank">
            <span className="font-extrabold underline decoration-double hover:text-shadow-md">
              whitepaper
            </span>
          </Link>{" "}
          and{" "}
          <Link href="/#who">
            <span className="font-extrabold underline decoration-double hover:text-shadow-md">
              roadmap
            </span>
          </Link>{" "}
          that clearly outline the context, fund distribution strategy, and
          long-term community impact. The initiative is powered by a coalition
          of collaborators:
        </p>
        <ul
          style={{
            color: receipt.colorSekunder,
          }}
          className="list-disc pl-6">
          <li>
            <Link href="https://futuloka.io/" target="_blank">
              <span className="font-extrabold underline decoration-double hover:text-shadow-md">
                Futuloka
              </span>
            </Link>{" "}
            - Platform and Launchpad
          </li>
          <li>
            <Link href="https://spektakel.id/" target="_blank">
              <span className="font-extrabold underline decoration-double hover:text-shadow-md">
                Spektakel
              </span>
            </Link>{" "}
            - Cultural Lead
          </li>
          <li>
            <Link href="https://nftindonesia.xyz/" target="_blank">
              <span className="font-extrabold underline decoration-double hover:text-shadow-md">
                NFTIndonesia
              </span>
            </Link>{" "}
            &amp;{" "}
            <Link href="https://land.endhonesa.com/" target="_blank">
              <span className="font-extrabold underline decoration-double hover:text-shadow-md">
                BANANOW Land
              </span>
            </Link>{" "}
            - Community Partners
          </li>
          <li>
            <Link href="https://nota.endhonesa.com/" target="_blank">
              <span className="font-extrabold underline decoration-double hover:text-shadow-md">
                Prof. NOTA Inc.
              </span>
            </Link>{" "}
            - Tech. Partner
          </li>
        </ul>
        <h3
          style={{
            color: receipt.colorSecondary,
          }}
          className="text-2xl font-semibold">
          Program Objectives
        </h3>
        <ul
          style={{
            color: receipt.colorSekunder,
          }}
          className="list-disc pl-6">
          <li>
            Connect NFT artists with real-world social and cultural initiatives
          </li>
          <li>
            Build a transparent, community-first model of funding through NFTs
          </li>
          <li>Show that digital art can have measurable, meaningful impact</li>
          <li>Sustain and regenerate traditional and local cultures</li>
        </ul>
        <h3
          style={{
            color: receipt.colorSecondary,
          }}
          className="text-2xl font-semibold">
          How It Works
        </h3>
        <ol
          style={{
            color: receipt.colorSekunder,
          }}
          className="list-decimal pl-6">
          <li>Step 1 - Open Call</li>
          <p>
            NFT artists from across Indonesia submit original artworks with
            cultural or social themes.
          </p>
          <li>Step 2 - Curation</li>
          <p>
            An independent curatorial team selects the submitted works based on
            quality, relevance, and potential impact.
          </p>
          <li>Step 3 - Minting &amp; Listing</li>
          <p>
            Selected artworks are minted as NFTs and listed on trusted
            marketplaces.
          </p>
          <li>
            Step 4 - Transparent Fund Distribution
            <ul className="list-disc pl-6">
              <li>
                72% of NFT sales go directly to the supported community or
                festival
              </li>
              <li>25% is given to the contributing artist as appreciation</li>
              <li>3% covers platform and Web3 operational costs</li>
            </ul>
          </li>
          <li>Step 5 - Public Reporting</li>
          <p>
            All funds and distributions are tracked through a public dashboard
            to ensure full transparency and accountability.
          </p>
        </ol>
      </div>
    </section>
  );
}
