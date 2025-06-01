// /src/components/landing/TheFeatures.tsx

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

const { receipt } = getActiveReceipt();

export default function TheFeatures() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-6">
        <h2
          style={{
            color: receipt.colorSecondary,
          }}
          className="text-3xl font-bold">
          Why It Matters
        </h2>
        <p
          style={{
            color: receipt.colorSekunder,
          }}>
          <span className="font-extrabold">NFT FAR</span> challenges the notion
          that digital art lives only online. It turns pixels into community
          support, stories into resources, and creativity into cultural
          continuity.
        </p>
        <p
          style={{
            color: receipt.colorSekunder,
          }}>
          It is more than a fundraising model—it is a{" "}
          <span className="font-extrabold">solidarity movement</span> for
          artists, cultural workers, and communities to shape the Web3 era
          together.
        </p>
        <h3
          style={{
            color: receipt.colorSecondary,
          }}
          className="text-2xl font-semibold">
          Web3 Tools for Transparency
        </h3>
        <ul
          style={{
            color: receipt.colorSekunder,
          }}
          className="list-disc pl-6">
          <li>
            <span className="font-extrabold">
              Multisignature Custodial Wallets
            </span>{" "}
            for fund safety
          </li>
          <li>
            <span className="font-extrabold">Smart Contracts</span> to automate
            and verify fund allocation (where applicable)
          </li>
          <li>
            <span className="font-extrabold">Public Fund Dashboard</span> with
            real-time reporting
          </li>
          <li>
            <span className="font-extrabold">NFT Showcase</span> page with
            artist bios, artwork, and sale info
          </li>
          <li>
            <span className="font-extrabold">Future DAO Potential</span> for
            community-based governance and expansion
          </li>
        </ul>
        <h3
          style={{
            color: receipt.colorSecondary,
          }}
          className="text-2xl font-semibold">
          For Artists: How to Participate
        </h3>
        <ul
          style={{
            color: receipt.colorSekunder,
          }}
          className="list-disc pl-6">
          <li>Must be a citizen of Indonesia (WNI)</li>
          <li>Submit original, previously unpublished digital artworks</li>
          <li>Accepted formats: JPG, PNG, GIF, MP4 (maximum 50MB)</li>
          <li>Each selected artist retains full copyright of their work</li>
          <li>
            Artists will receive <span className="font-extrabold">25%</span> of
            sales as a one-time honorarium
          </li>
        </ul>
        <h3
          style={{
            color: receipt.colorSecondary,
          }}
          className="text-2xl font-semibold">
          Roadmap for Sustainability
        </h3>
        <p
          style={{
            color: receipt.colorSekunder,
          }}>
          <span className="font-extrabold">NFT FAR</span> is designed to scale
          and adapt across future cultural initiatives in Indonesia and beyond:
        </p>
        <ul
          style={{
            color: receipt.colorSekunder,
          }}
          className="list-disc pl-6">
          <li>
            Expand into environmental, educational, or social justice-themed NFT
            drops
          </li>
          <li>Develop long-term NFT-based community funding ecosystems</li>
          <li>
            Establish international partnerships with DAOs and decentralized
            galleries
          </li>
        </ul>
        <h2
          style={{
            color: receipt.colorSecondary,
          }}
          className="text-3xl font-bold">
          Project Management System
        </h2>
        <ol
          style={{
            color: receipt.colorSekunder,
          }}
          className="list-decimal pl-6">
          <li>
            Curation and Open Call
            <ul className="list-disc pl-6">
              <li>
                NFT artists apply through an open system by submitting their
                artwork and a brief description of their dedication to a
                social/cultural cause.
              </li>
              <li>
                An independent curatorial team will select artworks based on
                quality, relevance, and narrative integrity.
              </li>
            </ul>
          </li>
          <li>
            Minting &amp; Listing
            <ul className="list-disc pl-6">
              <li>
                Selected works will be minted on a chosen blockchain (Ethereum,
                Polygon, etc.) via the organizer&apos;s wallet.
              </li>
              <li>
                All artworks will be publicly listed and sold through reputable
                NFT marketplaces.
              </li>
            </ul>
          </li>
          <li>
            Fund Distribution Scheme
            <ul className="list-disc pl-6">
              <li>
                <span className="font-extrabold">72%</span>: To community or
                supported project
              </li>
              <li>
                <span className="font-extrabold">25%</span>: To the artist
                (initial fee/royalty)
              </li>
              <li>
                <span className="font-extrabold">3%</span>: For operational
                costs (minting, admin, platform management)
              </li>
            </ul>
          </li>
          <li>
            Fund Management
            <ul className="list-disc pl-6">
              <li>
                Proceeds are stored in a dedicated custodial wallet for the
                project.
              </li>
              <li>
                Each recipient project must provide a whitepaper and fund
                utilization roadmap.
              </li>
              <li>
                Fund usage reports will be published quarterly for public
                access.
              </li>
            </ul>
          </li>
        </ol>
        <h3
          style={{
            color: receipt.colorSecondary,
          }}
          className="text-2xl font-semibold">
          NFT Sales Post-Festival
        </h3>
        <p
          style={{
            color: receipt.colorSekunder,
          }}>
          Unsold NFTs during the festival period will remain active and
          available on the marketplace. If these works are sold at a later time,
          the same fund distribution and management system applies, with updated
          timelines and periodic reporting.
        </p>
        <h3
          style={{
            color: receipt.colorSecondary,
          }}
          className="text-2xl font-semibold">
          Post-Festival Fund Distribution &amp; Reporting
        </h3>
        <ol
          style={{
            color: receipt.colorSekunder,
          }}
          className="list-decimal pl-6">
          <li>
            Sales Monitoring
            <ul className="list-disc pl-6">
              <li>
                The minting wallet is linked to a real-time monitoring system.
              </li>
              <li>Each NFT transaction is automatically recorded.</li>
            </ul>
          </li>
          <li>
            Fund Distribution (Smart Contract / Manual)
            <ul className="list-disc pl-6">
              <li>
                If technically feasible, proceeds are automatically distributed
                via smart contract.
              </li>
              <li>
                If not, manual distribution is processed within 14 working days
                after the transaction.
              </li>
            </ul>
          </li>
          <li>
            Public Reporting
            <ul className="list-disc pl-6">
              <li>
                If not, manual distribution is processed within 14 working days
                after the transaction.
              </li>
              <li>
                NFT artists and recipient communities will be notified directly
                via email or official communication channels.
              </li>
            </ul>
          </li>
        </ol>
        <h3
          style={{
            color: receipt.colorSecondary,
          }}
          className="text-2xl font-semibold">
          NFT Retention &amp; Delisting Policy
        </h3>
        <p
          style={{
            color: receipt.colorSekunder,
          }}>
          NFTs will remain on display in the marketplace indefinitely, except in
          the following cases:
        </p>
        <ul
          style={{
            color: receipt.colorSekunder,
          }}
          className="list-disc pl-6">
          <li>
            The NFT artist requests withdrawal (with an official statement and
            valid reason).
          </li>
          <li>
            A new policy by the organizer requires delisting (to be officially
            announced beforehand).
          </li>
        </ul>
        <h2
          style={{
            color: receipt.colorSecondary,
          }}
          className="text-3xl font-bold">
          Terms &amp; Conditions for NFT Artists
        </h2>
        <ol
          style={{
            color: receipt.colorSekunder,
          }}
          className="list-decimal pl-6">
          <li>
            Eligibility
            <ul className="list-disc pl-6">
              <li>Open to all Indonesian NFT artists (WNI).</li>
              <li>Submitted work must be original and not previously sold.</li>
              <li>
                Themes are open but must relate to Indonesian social/cultural
                issues.
              </li>
            </ul>
          </li>
          <li>
            Rights &amp; Obligations
            <ul className="list-disc pl-6">
              <li>Artists retain full copyright of their work.</li>
              <li>
                By participating, the artist grants the organizer permission to:
                <ul className="list-disc pl-6">
                  <li>Mint and sell the artwork</li>
                  <li>Use visuals for promotion and program documentation</li>
                </ul>
              </li>
              <li>
                Artists receive 25% of sales as a one-time honorarium (not
                ongoing royalties unless agreed otherwise).
              </li>
            </ul>
          </li>
          <li>
            Technical Requirements
            <ul className="list-disc pl-6">
              <li>File format: JPG, PNG, GIF, or MP4 (max 50MB)</li>
              <li>
                Metadata must include: title, year, digital medium, and cultural
                meaning/interpretation
              </li>
              <li>
                Artist wallet address will be included in the NFT metadata for
                transparency
              </li>
            </ul>
          </li>
          <li>
            Rejection &amp; Withdrawal
            <ul className="list-disc pl-6">
              <li>
                The organizer reserves the right to reject artworks that:
                <ul className="list-disc pl-6">
                  <li>
                    Contain discriminatory, violent, or plagiarized content
                  </li>
                  <li>Contradict the spirit of community support</li>
                </ul>
              </li>
              <li>
                Artists may withdraw their participation before the minting
                process.
              </li>
            </ul>
          </li>
          <li>
            Fairness &amp; Transparency
            <ul className="list-disc pl-6">
              <li>
                All curation and fund distribution processes will be conducted
                transparently.
              </li>
              <li>Each artist will receive a report of their NFT sales.</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
