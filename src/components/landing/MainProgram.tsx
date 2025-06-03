// /src/components/landing/MainProgram.tsx

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

export default function MainProgram() {
  const { receipt } = getActiveReceipt();

  return (
    <section
      id="when"
      style={{
        backgroundColor: receipt.colorPrimer,
        borderColor: receipt.colorTertiary,
      }}
      className="px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-6">
        <h2
          style={{
            color: receipt.colorSecondary,
          }}
          className="text-3xl font-bold">
          First Project: Festival Mbok Sri 2025
        </h2>
        <p
          style={{
            color: receipt.colorSekunder,
          }}>
          <span className="font-extrabold">NFT FAR</span> launches with support
          for <span className="font-extrabold">Festival Mbok Sri 2025</span>,
          taking place
          <span className="font-extrabold">5-7 September 2025</span> in
          Delanggu, Klaten, Central Java.
        </p>
        <p
          style={{
            color: receipt.colorSekunder,
          }}>
          This rural cultural festival celebrates agrarian traditions, youth
          farming initiatives, community cooperatives, and folk arts. It
          embodies the theme: &quot;
          <span className="font-extrabold">
            Farming, Villages &amp; Cultural Resilience
          </span>
          .&quot;
        </p>
        <p
          style={{
            color: receipt.colorSekunder,
          }}>
          NFT artworks collected in this edition will:
        </p>
        <ul
          style={{
            color: receipt.colorSekunder,
          }}
          className="list-disc pl-6">
          <li>Reflect on life in rural Indonesia</li>
          <li>Support grassroots cultural events</li>
          <li>Be exhibited during the festival</li>
          <li>
            Deliver proceeds to the festival committee{" "}
            <span className="font-extrabold">before</span> the event begins
          </li>
        </ul>
        <h3
          style={{
            color: receipt.colorSecondary,
          }}
          className="text-2xl font-semibold">
          About Festival Mbok Sri
        </h3>
        <p
          style={{
            color: receipt.colorSekunder,
          }}>
          Festival Mbok Sri is a celebration of agrarian culture that grows from
          the grassroots of the Delanggu Village community in Klaten, Central
          Java. First held in 2017 by{" "}
          <span className="font-extrabold">Sanggar Rojolele</span> under the
          name <span className="italic">Festival Mbok Sri Mulih</span>, the
          festival was born from a longing to revive the spirit of togetherness
          (<span className="italic">keguyuban</span>) and mutual cooperation (
          <span className="italic">gotong royong</span>) that lie at the heart
          of traditional Javanese agricultural culture.
        </p>
        <p
          style={{
            color: receipt.colorSekunder,
          }}>
          Based on the belief that agrarian culture is not solely about food
          production, but also encompasses social bonding, spirituality, and
          ecological relationships, Festival Mbok Sri presents a series of
          activities that directly involve farmers and villagers—from communal
          kitchens and participatory program planning to decorations inspired by
          local wisdom.
        </p>
        <p
          style={{
            color: receipt.colorSekunder,
          }}>
          In the midst of a shifting agricultural system increasingly driven by
          industrialization, wage labor, and capital ownership, Festival Mbok
          Sri offers both a space for contemplation and a moment of celebration.
          It invites rural communities to remember—and preserve—the noble values
          that once thrived in their fields.
        </p>
        <h3
          style={{
            color: receipt.colorSecondary,
          }}
          className="text-2xl font-semibold">
          Vision of Festival Mbok Sri
        </h3>
        <p
          style={{
            color: receipt.colorSekunder,
          }}>
          Festival Mbok Sri positions itself as a cultural practice that aligns
          with and supports the people, guided by three core visions:
        </p>
        <ol
          style={{
            color: receipt.colorSekunder,
          }}
          className="list-decimal pl-6">
          <li>
            <span className="font-extrabold">
              Strengthening the independence of farming communities
            </span>{" "}
            by creating spaces for interaction, knowledge exchange, and
            regeneration based on local values.
          </li>
          <li>
            <span className="font-extrabold">
              Encouraging new forms of economic value creation
            </span>{" "}
            rooted in community and agrarian culture, as an alternative to
            dependence on unjust food distribution systems.
          </li>
          <li>
            <span className="font-extrabold">
              Affirming agrarian cultural identity
            </span>
            , not as a nostalgic past, but as a source of knowledge,
            spirituality, and sustainable living.
          </li>
        </ol>
        <h3
          style={{
            color: receipt.colorSecondary,
          }}
          className="text-2xl font-semibold">
          Festival Mbok Sri 2025 — &quot;Sewindu di Delanggu&quot;
        </h3>
        <p
          style={{
            color: receipt.colorSekunder,
          }}>
          Theme:{" "}
          <span className="italic">
            The Art of the Farmers&apos; Resilience
          </span>
        </p>
        <p
          style={{
            color: receipt.colorSekunder,
          }}>
          The year 2025 marks an important milestone for Festival Mbok Sri—eight
          years of this grassroots festival reaffirming the dignity of farmers
          and agrarian culture in the heart of rural Java. To commemorate
          Indonesia&apos;s National Farmers Day and its eighth anniversary,
          Festival Mbok Sri returns on{" "}
          <span className="font-extrabold">5-7 September 2025</span>, held at{" "}
          <span className="font-extrabold">Sanggar Rojolele</span>, Dukuh
          Kaibon, Delanggu Village, Klaten Regency, Central Java, under the
          special theme: &quot;
          <span className="font-extrabold">Sewindu di Delanggu</span>&quot; (
          <span className="font-extrabold">Eight Years in Delanggu</span>).
        </p>
        <p
          style={{
            color: receipt.colorSekunder,
          }}>
          Carrying the theme &quot;
          <span className="font-extrabold">
            The Art of the Farmers&apos; Resilience
          </span>
          ,&quot; this eighth edition is a powerful statement: that farming
          today is not merely a lifestyle choice, but an art of survival—in the
          face of economic uncertainty, minimal policy support, and lack of
          infrastructure.
        </p>
        <p
          style={{
            color: receipt.colorSekunder,
          }}>
          This theme was born from a painful reality: the regeneration of
          farmers is alarmingly slow, as farming is no longer seen as a
          promising profession. Amid the forces of industrialization and
          urbanization, farmers remain among the most vulnerable, often
          unrepresented in national development agendas.
        </p>
        <p
          style={{
            color: receipt.colorSekunder,
          }}>
          More about Festival Mbok Sri{" "}
          <a
            href="https://rojolele.org"
            target="_blank"
            className="underline text-blue-600">
            www.rojolele.org
          </a>{" "}
          | Instagram
          <a
            href="https://instagram.com/sanggar_rojolele"
            target="_blank"
            className="underline text-blue-600">
            @sanggar_rojolele
          </a>
        </p>
      </div>
    </section>
  );
}
