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
  entityEmail,
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
            <ol className="list-decimal list-outside space-y-2">
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
            <ul className="list-disc list-outside space-y-2">
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                Acts that violate the laws and regulations, court verdicts,
                resolutions or orders, or administrative measures that are
                legally binding;
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                Acts that may be in violation of public order, morals or
                customs;
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                Acts that infringe intellectual property rights, such as
                copyrights, trademarks and patent rights, rights to fame,
                privacy, and all other rights granted by law or by a contract
                with {entityAlias2} and/or a third party;
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                Acts of posting or transmitting excessively violent expressions;
                expressions that lead to discrimination by race, national
                origin, creed, gender, social status, family origin, etc.;
                expressions that induce or encourage suicide, self-injurious
                behavior or drug abuse; or expressions that include anti-social
                content and lead to the discomfort of others;
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                Acts that benefit or involve collaboration with anti-social
                groups;
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                Acts that are related to religious activities or invitations to
                certain religious groups;
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                Acts of unauthorized or improper collection, disclosure, or
                provision of any other person&apos;s personal information,
                registered information, user history, or the like;
              </li>
            </ul>
          </section>
          <section className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body uppercase">
              Suspension, Termination, and Cancellation
            </h3>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              We may (a) refuse to complete or cancel your registration, (b)
              suspend, restrict or terminate your access to any or all of the
              {entityName} Site services, and/or (c) deactivate your account
              with immediate effect for any reason, including but not limited to
              where:
            </p>
            <ul className="list-disc list-outside space-y-2">
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                We are, in our reasonable opinion, required to do so by
                applicable law or any court or other authority to which we are
                subject in any jurisdiction;
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                We reasonably suspect you of acting in breach of this Agreement;
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                We have concerns that an activity is erroneous or about the
                security of your account or we suspect that {entityName} Site
                services are being used in a fraudulent or unauthorized manner;
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                We suspect money laundering, terrorist financing, fraud, or any
                other financial crime;
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                Use of your account is subject to any pending litigation,
                investigation or government proceeding and/or we perceive a
                heightened risk of legal or regulatory non-compliance associated
                with your account activity;
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                You take any action that may circumvent our controls such as
                abusing promotions which we may offer from time to time;
              </li>
            </ul>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              We may suspend, restrict, or terminate your access to any or all
              of {entityName} Site services and/or deactivate or cancel your
              {entityAlias2} account, without reason by giving you two months
              notice. You acknowledge that our decision to take certain actions,
              including limiting access to, suspending, or closing your{" "}
              {entityAlias2} account, may be based on confidential criteria that
              are essential to our risk management and security protocols. You
              agree that we are under no obligation to disclose the details of
              its risk management and security procedures to you.
            </p>
          </section>
          <section className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body uppercase">
              Liability
            </h3>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Release of {entityAlias2}. {entityAlias2} is a peer to peer
              platform that uses the distributed ledger technology, If you have
              a dispute with one or more users of {entityName} Site, you agree
              that neither we nor our affiliates or service providers, nor any
              of our respective officers, directors, employees, and
              representatives will be liable for any claims, demands, and
              damages (actual and consequential) of any kind or nature rising
              out of or in any way connected with such disputes.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Indemnification. You agree to indemnify {entityAlias2}, our
              affiliates and service providers, and each of our or their
              respective officers, directors, employees, and representatives, in
              respect of any costs (including attorneys&apos; fees and any
              fines, fees or penalties imposed by any regulatory authority) that
              have been reasonably incurred in connection with any claims,
              demands or damages arising out of or related to your breach and /
              or our enforcement of this Agreement or your violation of any law,
              rule or regulation, or the rights of any third party.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Limitation of Liability. {entityAlias2} has no liability for
              services and all NFTs on the Site and {entityAlias2} shall only be
              liable to you for loss or damage caused directly and reasonably
              foreseeable by our breach of this Agreement.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              No Warranties. {entityName} Site services are provided on an
              &quot;as is&quot; and &quot;as available&quot; basis without any
              representation or warranty, whether express or implied, to the
              maximum extent permitted by applicable law: specifically we
              disclaim any implied warranties of title, merchantability, fitness
              for a particular purpose and/or non-infringement. We do not make
              any representations or warranties that access to {entityName}{" "}
              Site, any of the {entityAlias2} services, or any of the materials
              contained therein, will be continuous, uninterrupted, timely or
              error-free.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Safety and Security of Your Computer and Devices. {entityName}{" "}
              Site is not liable for any damage or interruptions caused by any
              computer viruses, spyware, scareware, Trojan horses, worms or
              other malware that may affect your computer or other equipment, or
              any phishing, spoofing or other attack. We advise the regular use
              of a reputable and readily available virus screening and
              prevention software. You should also be aware that SMS and email
              services are vulnerable to spoofing and phishing attacks and
              should use care in reviewing messages purporting to originate from
              us. {entityAlias2} customer support will never ask to screen share
              or otherwise seek to access your computer or account.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              No Liability for Breach. We are not liable for any breach of the
              Agreement where the breach is due to abnormal and unforeseeable
              circumstances beyond our control, the consequences of which would
              have been unavoidable despite all effects to the contrary, nor are
              we liable where the breach is due to the application of mandatory
              legal rules.
            </p>
          </section>
          <section className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body uppercase">
              Customer Feedback, Queries, Complaints, and Dispute Resolution
            </h3>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Contact {entityAlias2}. When you contact us please provide us with
              your name, email, wallet address, and any other information we may
              need to identify you, your {entityAlias2} account, and the
              activity on which you have feedback, questions, or complaints.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Complaints. In the event of a complaint, please set out the cause
              of your complaint, how you would like us to resolve the complaint
              and any other information you believe to be relevant. We will
              acknowledge receipt of your complaint. A Customer Complaints
              officer (&quot;Officer&quot;) will consider your complaint. The
              Officer will consider your complaint without prejudice based on
              the information you have provided and any information provided by
              Voyage. Within 15 business days of our receipt of your complaint
              the Officer will address all points raised in your complaint by
              sending you an e-mail (&quot;Resolution Notice&quot;) in which the
              Officer will: (i) offer to resolve your complaint in the way your
              requested; (ii) make a determination rejecting your complaint and
              set out the reasons for the rejection; or (iii) offer to resolve
              your complaint with an alternative solution. In exceptional
              circumstances, if the Officer is unable to respond to your
              complaint within 15 business days for reasons beyond Voyage&apos;s
              control, the Officer will send you a holding reply indicating the
              reasons for a delay in answering your complaint and specifying the
              deadline by which the Officer will respond to your complaint
              (which will be no later than 35 business days from our receipt of
              your complaints).
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Offers. Any offer of resolution made to you will only become
              binding on us if accepted by you. An offer of resolution will not
              constitute any admission by us of any wrongdoing or liability
              regarding the subject matter of the complaint.
            </p>
          </section>
          <section className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body uppercase">
              Data Protection
            </h3>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Personal Data. You acknowledge that we may process personal data
              in relation to you. Accordingly, you represent and warrant that:
            </p>
            <ul className="list-disc list-outside space-y-2">
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                your disclosure to us of any personal data was or will be made
                in accordance with all applicable data protection and data
                privacy laws, and those data are accurate, up to date and
                relevant when disclosed;
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                before providing any such personal data to us, you have read and
                understood our Privacy Policy, attached to this Agreement and a
                copy of which is also available at Privacy Policy, and, in the
                case of personal data relating to an individual other than
                yourself, have (or will at the time of disclosure have) provided
                a copy of that Privacy Policy (as amended from time to time), to
                that individual;
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                and if from time to time we provide you with a replacement
                version of the Privacy Policy, you will promptly read that
                notice and provide a copy to any individual whose personal data
                you have provided to us;
              </li>
            </ul>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Please read the Privacy Policy for details of how we may process
              your personal data.
            </p>
          </section>
          <section className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body uppercase">
              General Terms and Conditions
            </h3>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Limited License. We grant you a limited, non-exclusive,
              non-transferable license, subject to the terms of this Agreement,
              to access and use {entityName} Site, and related content,
              materials, information (collectively, the &quot;Content&quot;)
              solely for approved purposes as permitted by us from time to time.
              Any other use of {entityName} Site or Content is expressly
              prohibited and all other right, title, and interest in{" "}
              {entityName} Site or Content is exclusively the property of{" "}
              {entityAlias2} and its licensors. You agree not to copy, transmit,
              distribute, sell, license, reverse engineer, modify, publish, or
              participate in the transfer or sale of, create derivative works
              from, or in any other way exploit any of the Content, in whole or
              in part.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Website Accuracy. Although we intend to provide accurate and
              timely information on {entityName} Site, {entityName} Site
              (including, without limitation, the Content) may not always be
              entirely accurate, complete or current and may also include
              technical inaccuracies or typographical errors. In an effort to
              continue to provide you with as complete and accurate information
              as possible, information may, to the extent permitted by
              applicable law, be changed or updated from time to time without
              notice, including without limitation information regarding our
              policies, products and services. Accordingly, you should verify
              all information before relying on it, and all decisions based on
              information contained on {entityName} Site are your sole
              responsibility and we shall have no liability for such decisions.
              Links to third-party materials (including without limitation
              websites) may be provided as a convenience but are not controlled
              by us. You acknowledge and agree that we are not responsible for
              any aspect of the information, content, or services contained in
              any third-party materials or on any third party sites accessible
              or linked to {entityName} Site.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Relationship of the Parties. Nothing in this Agreement shall be
              deemed or is intended to be deemed, nor shall it cause, either you
              or {entityAlias2} to be treated as the agent of the other.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Privacy of Others; Marketing. If you receive information about
              another user through {entityName} Site services, you must keep the
              information confidential and only use it in connection with{" "}
              {entityName} Site services. You may not disclose or distribute a
              user&apos;s information to a third party or use the information
              except as reasonably necessary to effect a transaction and other
              functions reasonably incidental thereto such as support,
              reconciliation and accounting unless you receive the user&apos;s
              express consent to do so. You may not send unsolicited email to a
              user through {entityName} Site services.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Security Breach. If you suspect that your {entityAlias2} account
              or any of your security details have been compromised or if you
              become aware of any fraud or attempted fraud or any other security
              incident (including a cyber-security attack) affecting you and/or
              {entityAlias2} (together a &quot;Security Breach&quot;), you must
              notify {entityAlias2} support as soon as possible by email free of
              charge at {entityEmail} and continue to provide accurate and up to
              date information throughout the duration of the Security Breach.
              You must take any steps that we reasonably require to reduce,
              manage or report any Security Breach. Failure to provide prompt
              notification of any Security Breach may be taken into account in
              our determination of the appropriate resolution of the matter.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Contact Information. You are responsible for keeping your email
              address up to date in your Account Profile in order to receive any
              notices or alerts that we may send you (including notices or
              alerts of actual or suspected Security Breach).
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Entire Agreement. This Agreement (including documents incorporated
              by reference herein) comprise the entire agreement between you and
              {entityAlias2}.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Interpretation. Section headings in this Agreement are for
              convenience only, and shall not govern the meaning or
              interpretation of any provision of this Agreement.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Transfer. This Agreement is personal to you and you cannot
              transfer or assign your rights, licenses, interests and/or
              obligations to anyone else. We may transfer or assign our rights
              licenses, interests and/or our obligations at any time, including
              as part of a merger, acquisition or other corporate reorganisation
              involving {entityAlias2}, provided that this transfer or
              assignment does not materially impact the quality of the{" "}
              {entityAlias2} services you receive.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Invalidity. If any provision of this Agreement is determined to be
              invalid or unenforceable under any applicable law, this will not
              affect the validity of any other provision.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Enforcement of Our Rights. We may not always strictly enforce our
              rights under this Agreement. If we do this, it will be just a
              temporary measure and we may enforce our rights strictly again at
              any time.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Language. This Agreement and any information or notifications that
              you or we are to provide should be in Indonesian and English. Any
              translation of this Agreement or other documents is provided for
              your convenience only. In the event of any inconsistency, the
              Indonesian and English language version of this Agreement or other
              documents shall prevail.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Survival. All provisions of this Agreement which by their nature
              extend beyond the expiration or termination of this Agreement,
              including, without limitation, the sections relating to suspension
              or termination, {entityAlias2} account cancellation, general use
              of {entityName} Site, disputes with {entityAlias2}, and general
              provisions, will continue to be binding and operate after the
              termination or expiration of this Agreement.
            </p>
          </section>
          <div className="text-center">
            <span className="text-xs leading-10 text-icon-wording">
              &#9673; &#9673; &#9673; &#9673;
            </span>
          </div>
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
