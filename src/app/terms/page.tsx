// /src/app/terms/page.tsx

// External libraries
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Blockchain configurations
import {
  entityMonth,
  entityDate,
  entityYear,
  entityName,
  entityAlias1,
  entityAlias2,
  // entityAddress,
  // entityEmail,
  titlePro,
  baseUrl,
  poweredBy,
  headerLogo,
  copyRight,
  officiallyLicensed,
  anchorPrivacy,
  anchorTerms,
  footerPower,
} from "@/config/osloid";

export default function Terms() {
  return (
    <>
      {/* Top Image */}
      <header className="w-full flex items-center justify-between bg-back-ground py-4 px-4 md:px-20">
        {/* Logo Section */}
        <div className="w-1/4 sm:w-1/6 flex justify-start">
          <Link href="/">
            <Image src={headerLogo} alt={titlePro} width={144} height={75} />
          </Link>
        </div>
      </header>

      {/* Content Section */}
      <div className="flex flex-col items-center gap-8 px-4 md:px-20 py-8">
        <main className="w-full max-w-3xl space-y-8">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-hitam-judul-body">
              T and C of Use
            </h1>
            <span className="text-xs leading-10 text-icon-wording">
              &#9673; &#9673; &#9673; &#9673;
            </span>
            <h2 className="text-sm font-medium text-icon-wording">
              Last updated on {entityMonth} {entityDate}, {entityYear}.
            </h2>
          </div>

          {/* Policy Overview */}
          <section className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body uppercase">
              {entityName} Terms and Conditions of Use
            </h3>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Please read these {entityName} Terms and Conditions of Use and
              Privacy Statement carefully, they contain important information
              about your rights and obligations.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              {entityAlias2} is a platform that allows you to collect, issue,
              and display NFTs. This {entityName} Terms and conditions of Use
              (&quot;Terms and Conditions&quot;, &quot;Agreement&quot;) document
              is entered into by user or users (&quot;User&quot;,
              &quot;Users&quot; or &quot;You&quot;), {entityAlias1}, and{" "}
              {entityAlias2} (&quot;
              {entityName},&quot; &quot;We&quot; or &quot;Us&quot;). It contains
              terms and conditions you have agreed to abide by upon accessing{" "}
              {baseUrl} (&quot;Site&quot;). The terms govern your access and use
              of the {entityAlias2} ecosystem, including content, features, and
              functionality. By signing up to use an account through the Site,
              or any associated websites, APIs, or mobile applications, you
              agree that you have read, understood, and accept all of the terms
              and conditions contained in this Agreement.
            </p>
          </section>
          <section className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body uppercase">
              Basic {entityAlias2} Services
            </h3>
            <ul className="list-disc list-outside space-y-2">
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                Eligibility. To be eligible to use the {entityAlias2} services,
                you must register an account on {entityName} Site.
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                {entityAlias2} Services. Your account encompasses the following
                basic services: Access to collect virtual collectibles in a form
                of Non Fungible Tokens; Access to issue and publish NFTs;
                Privilege tagged to NFTs that you, as an NFT collector
                (&quot;Collector&quot;), have collected.
              </li>
            </ul>
          </section>
          <section className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body uppercase">
              Agreement to these Terms and Conditions
            </h3>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              All Users shall use the Services in accordance with these Terms
              and Conditions. Users may not use the Services unless they agree
              to these Terms and Conditions.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Users who are minors may only use the Services by obtaining prior
              consent from their parents or legal guardians. Furthermore, if
              Users will be using the Services on behalf of, or for the purposes
              of, a business enterprise, then such business enterprise must also
              agree to these Terms and Conditions prior to using the Services.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              If there are Separate Terms and Conditions applicable to the
              Services, Users shall also comply with such Separate Terms and
              Conditions as well as these Terms and Conditions in using the
              Services.
            </p>
          </section>
          <section className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body uppercase">
              Modification to these Terms and Conditions
            </h3>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              {entityAlias2} may modify these Terms and Conditions when{" "}
              {entityAlias2} deems it to be necessary, within the scope of the
              purposes of the Services. In such a case, {entityAlias2} will
              indicate the contents of the modified version of these Terms and
              Conditions, as well as the effective date of the modification, on
              the Services or on {entityName}&apos;s website, or will publicize
              the same to Users by notifying Users in the manner prescribed by{" "}
              {entityAlias2}.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              The modified version of these Terms and Conditions shall become
              effective as of the effective date thereof.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body uppercase">
              {entityAlias2} ACCOUNT
            </h3>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Registration of {entityAlias2} account. In order to use the{" "}
              {entityName} Site, you will need to register for a {entityAlias2}{" "}
              account by providing your information (&quot;Personal
              Information&quot;), including your email address, password, and
              accepting the terms of this Agreement and our Privacy Policy. We
              may, in our sole discretion, decide to remove your account if we
              find out a violation in your activities within the {entityName}{" "}
              Site.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Access. To access the {entityName} Site, you must have the
              necessary equipment or device and the associated telecommunication
              service subscriptions to access the Internet.
            </p>
          </section>
          <section className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body uppercase">
              Role-specific terms
            </h3>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Collector. As a Collector, you will gain access to browse through
              NFTs that are displayed on the {entityName} Site. You may obtain
              the ownership of any of the available NFTs by exchanging with
              approved tokens. You may also choose to keep the NFTs as your
              collection, exchange them for tokens with other Collectors or use
              them to redeem products and services offered by our partners if
              applicable. Specifically for claiming procedures, our partners
              have the right to set their own disclaimers. {entityName} Site is
              not responsible for failure to comply with the disclaimers that
              lead to unsuccessful NFTs redemption.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              You will also gain access to publish NFTs that you have collected
              to be displayed and made available to be exchanged with approved
              tokens, if preferable. In a case where you transfer ownership of
              an NFT with a tagged product or service to another Collector, you
              will also transfer the title of the product or service.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              The ownership of the NFTs does not give you the right to have the
              ownership of the Intellectual Property rights of those NFTs.
            </p>
          </section>
          <section className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body uppercase">
              Intellectual Property Rights Protection Provisions
            </h3>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Intellectual Property Rights. The term &quot;Intellectual Property
              Rights&quot; means all (i) patents, patent applications, patent
              disclosures and inventions, (ii) Internet Domain names,
              trademarks, service marks, trade dress, trade names, logos and
              corporate names and registrations and applications for
              registration thereof together with all of the goodwill associated
              therewith, (iii) copyrights (registered or unregistered) and
              copyrightable works and registrations and applications for
              registration thereof, (iv) mask works and registrations and
              applications thereof, (v) computer software, data, databases and
              documentation thereof, (vi) trade secrets and other confidential
              information, including ideas, formulas, compositions, inventions
              (whether patentable or unpatentable and whether or not reduced to
              practice), know-how, manufacturing and production processes and
              techniques, research and development information, drawings,
              specifications, designs, plans, proposals, technical data, and
              copyrightable works, financial and marketing plans and customer
              and supplier lists and information, and (vii) copies and tangible
              embodiments thereof (in whatever form or medium).
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              This Terms and Conditions contains how you and {entityAlias2} will
              protect your Intellectual Property on {entityAlias2} services
              exclusively.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              You acknowledge that:
            </p>
            <ol className="list-disc list-outside space-y-2">
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                You are the original owner or holder of the intellectual
                property rights of NFTs published on {entityName} site.
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                You hereby declare that you fully own the intellectual property
                rights to the NFTs published on {entityName} site exclusively
                and guarantee that there are no claims from third parties for
                the ownership of the NFTs
              </li>
            </ol>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              {entityAlias2} hereby grants you a limited, non-exclusive,
              non-transferable royalty-free right to use or display the brand,
              trade name, logo, site content, headings and other distinguishing
              marks and names of {entityAlias1} and {entityAlias2} on the site
              and limited for the purpose of implementing this Agreement.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Breach of Intellectual Property. {entityAlias2} wil take
              responsibility for any finding NFTs that are infringing
              Intellectual Property Rights. If you as Collector find indications
              of infringement of intellectual property rights on NFTs in{" "}
              {entityAlias2}, you can contact {entityAlias2} and {entityAlias2}{" "}
              will help to remove them from {entityName} site. Other than that,
              it will be the responsibility of you and the IP owners and should
              be directly resolved between you and the IP owners.
            </p>
          </section>
          <section className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body uppercase">
              Restricted Matters
            </h3>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              {entityAlias2} prohibits you from engaging in any of the following
              acts when using the Services:
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              We have made every effort to display the colors and images of our
              products on our application as accurately as possible. However, we
              cannot guarantee that your computer monitor&apos;s display of any
              color will be accurate. We also do not warrant that the quality of
              any products, services, information, or other material purchased
              or obtained by you will meet your expectations or that any errors
              in the Service will be corrected.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              In particular, we currently offer the possibility to search or
              preview our products on our application. Please note that we
              reserve the right to discontinue such service and functionality,
              as well as any other service that we provide.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              We may also publish content on our social media accounts for
              information, promotion, and/or member discussions. Please note
              that we reserve the right to reject or ban any member that
              infringes on our rules. Ownership of any of our products does not
              confer the owner any right of access to such social media
              accounts, and we may block or ban the access of anyone we see fit,
              for any reason, and without any warning or notice. We may also
              terminate such accounts at any time at our sole discretion and
              without prior notice.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Characteristics of the products, such as traits, tiers, and/or
              grades, as well as their respective rarities and probabilistic
              distributions at token issuance, file artwork reveal, or later,
              and/or overall, may change or be changed according to
              circumstances and at our sole discretion.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              We may at times offer the service of integrating one of our
              products, such as an artwork, into an original NFT that you own in
              your crypto wallet. When selecting the NFT to integrate, please
              ensure that you own all copyrights and licenses concerning this
              original NFT, including for such purposes. You warrant that you
              will not resell or transfer such merged NFT to a third party
              without also transferring the original NFT to the same third party
              unless your license for use and copyright allows you to do so. The
              use of such service and the resulting product, as well as its
              trade or transfers, are done under your sole responsibility and
              liability.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              You accept that there are no explicit or implicit obligations for
              {entityName} to undertake activities or work during your period of
              control of the NFT artworks, and in particular:
            </p>
            <ul className="list-disc list-outside space-y-2">
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                There is no obligation for {entityName} to provide or maintain
                any service.
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                There is no obligation for {entityName} to provide any work.
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                There is no obligation for {entityName} to change the form or
                functionality of that artwork.
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                There is no obligation for {entityName} to support or maintain
                any value of the NFT and associated artworks.
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                There is no obligation for {entityName} to produce any marketing
                effort to promote the NFTs, the artworks, the brand name, or
                anything related to the NFT that you bought from us.
              </li>
            </ul>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              As a result, you agree that you do not have any expectation of
              work to be produced by {entityName} in connection to the NFTs that
              you bought from us.
            </p>
          </section>
        </main>
      </div>

      {/* Bottom Image */}
      <footer className="w-full bg-hitam-judul-body py-4 px-4 md:px-20">
        <div className="w-full border-t border-border-tombol mt-4 pt-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
          {/* Copyrights (Left on lg, Center on md) */}
          <div className="w-full text-xs text-center sm:text-left text-back-ground">
            <p>
              &copy; {new Date().getFullYear()} {entityAlias1}. {copyRight}
            </p>
            <p>
              {officiallyLicensed} {entityAlias1}.
            </p>
            <div className="flex justify-center sm:justify-start gap-4 mt-2">
              <Link
                href="/terms"
                target="_blank"
                className="text-xs text-center sm:text-left text-back-ground">
                {anchorPrivacy}
              </Link>
              <Link
                href="/terms"
                target="_blank"
                className="text-xs text-center sm:text-left text-back-ground">
                {anchorTerms}
              </Link>
            </div>
          </div>

          {/* Logo & Powered By (Right on lg, Center on md) */}
          <div className="w-full flex justify-center sm:justify-end cursor-pointer">
            <Image src={footerPower} alt={poweredBy} width={563} height={75} />
          </div>
        </div>
      </footer>
    </>
  );
}
