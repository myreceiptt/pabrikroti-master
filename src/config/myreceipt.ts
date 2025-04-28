// /src/config/myreceipt.ts

/**
 * All receipts should be exported from this file.
 */

// app metadata
export const proTitle = "Ngelaras Roso";
export const proDescription =
  "You create this space so you can then fill it up with all that you need and desire. It's about letting go, surrending... and at the same time... welcoming in, receiving.";
export const proUrl = "https://ngelarasroso.id";
export const proPublisher = "NFT Indonesia";
export const proLocale = "en-US";
export const proImage = "https://ngelarasroso.id/preview-image.png";

// error boundary
export const proErrorCought = "Error caught in ErrorBoundary:";
export const proError = "Something went wrong. Please try again later.";

// login logo
export const proLogo = "/logos/logo.png";

// login layout
export const loginArt = "/images/login-art.png";
export const loginBanner = "/images/login-banner.png";
export const loginCall = "It's about letting go,";
export const loginReason = {
  text: "and at the same time, welcoming in...",
  anchor: "...",
  link: "https://ngelarasroso.id/medias/ngelaras-roso-2024.pdf",
};
export const loginAgreement = "By connecting, you agree to the";
export const loginTermsPolicy = "Terms of Service & Privacy Policy";
export const loginPower = "/images/login-power.png";

// header section
export const headerLogo = "/images/header-logo.png";

// footer section
export const copyRight = "All rights reserved.";
export const officiallyLicensed = "Officially licensed product of";
export const anchorPrivacy = "Privacy Policy";
export const anchorTerms = "Terms of Service";
export const linkPower = "https://nftindonesia.xyz/"; // login layout
export const footerPower = "/images/footer-power.png";
export const poweredBy = "Deployed by NFT Indonesia"; // login layout

// subscribe form section
export const subscribeInput = "Please enter a valid email address.";
export const subscribeSubject = `Subscription to ${proTitle}`;
export const subscribeName = `Visitor of ${proUrl}`;
export const subscribeMessage = "I want to subscribe to your latest updates.";
export const subscribeSuccess = "Thank you for subscribing!";
export const subscribeFailed = "Subscription failed. Please try again.";
export const subscribeTitle = "Catch our latest updates";
export const subscribePlaceholder = "Enter your email address";
export const subscribeButton = "Subscribe";
export const subscribeButtonLoading = "Subscribing...";

// social links on footer
export const socialTitle = "Catch up with our update!";
export const linkXTwitter = "https://x.com/NFTindonesia_";
export const linkLinkedIn = "";
export const linkInstagram = "https://www.instagram.com/nftindonesia_/";
export const linkFacebook = "";
export const linkDiscord = "https://discord.com/invite/3AvJSYPJK6";
export const linkYouTube = "";
export const linkEmail = "mailto:hallonftindonesia@gmail.com";
export const linkWhatsApp = "";
export const linkWebsite = "https://www.nftindonesia.xyz/";

// colors hex libraries
export const colorPrimary = "#F9F9F9"; // Terang
export const colorSecondary = "#262525"; // Gelap XXX
export const colorAccent = "#171717"; // Gelap
export const colorBoxIcon = "#F0F0F0"; // Terang Dikit
export const colorIcon = "#707070"; // Abu2 Gelap
export const colorBorder = "#DFDFDF"; // Abu2 Terang

// convert hex to rgba
export default function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// featured cards - hide card by nulled the paidTitle, freeTitle, or coinTitle
export const featuredTitle1 = "Fill It Up With All";
export const featuredTitle2 = "That You Need & Desire";
export const featuredPaid = "/images/featured-paid.png";
export const paidTitle = "";
export const featuredFree = "/images/featured-free.png";
export const freeTitle = "All Free Stocks";
export const featuredCoin = "/images/featured-coin.png";
export const coinTitle = "All Claimable Shares";

// reusable loader section
export const loaderChecking = "Loading..."; // nfts list, nft lister, nft details, coins list, coin lister, coin details,

// nfts list
export const nftsTitle1Free = "All";
export const nftsTitle2Free = "Free Stocks";
export const nftsTitle1Paid = "All";
export const nftsTitle2Paid = "Paid Stocks";
export const nftsFailReason = "ClaimNotActive"; // nft details, coins list, coin details,
export const nftsConsoleWarn = "canClaim failed for nftId"; // nft details,
export const nftsSetError = "Failed to fetch any available stock.";
export const nftsError = "Lho, Error:"; // nft details, coins list, coin details,
export const nftsUknownError = "Kok, Error:"; // nft details, coins list, coin details,
export const nftsMessage1 = "No available stock!";
export const nftsMessage2 =
  "There are no stock available right now. Please try again later or return to the home page.";
export const nftsMessage3 = "Return to the Home Page!"; // nft details, coins list, nft fallback, coin details,
export const nftsPrevious = "Previous"; // coins list,
export const nftsNext = "Next"; // coins list,

// nft lister
export const nftButton = "Swallow Now"; // nft form,
export const nftSoon = "Available in:"; // nft form, coin lister, coin form,
export const nftInsufficient = "Insufficient Hunger"; // nft form, coin lister, coin form,
export const nftClaimed = "Swallowed"; // nft form,
export const nftClosed = "Devoured"; // nft form, coin lister, coin form,
export const nftListerImage = "/medias/artisan-bread.png"; // nft form,
export const nftListerName = "An Available Stock"; // nft form,
export const nftEditions = "Edition:";
export const nftNoData = "No data available.";

// nft fallback
export const nftFallMessage1 = "No valid stock ID used.";
export const nftFallMessage2 =
  "Please use a valid stock ID in the URL or return to the home page and start over.";
export const nftFallMessage3 = "Return to the Home Page!";

// nft details
export const nftSetError = "Failed to fetch the stock ID.";
export const nftMessage1 = "The stock ID not found.";
export const nftMessage2 =
  "The specified stock ID was not found. Please try again later or return to the home page.";

// nft form
export const nftFormByLink = "https://ngelarasroso.id/";
export const nftFormBy = "by"; // coin form,
export const nftFormByName = "Ngelaras Roso!";
export const nftFormEdition = "Edition";
export const nftFormOwned = "Swallowed"; // coin form,
export const nftFormRefresh = "Scoring"; // coin form,
export const nftFormTunggu = "Baking. Be patient and wait."; // coin form,
export const nftFormKirim = "Cooling your stock.";
export const nftFormSukses = "Stock successfully swallowed.";
export const nftFormPrice = "Price"; // coin form,
export const nftFormMax = "*Maximum"; // coin form,
export const nftFormPerWallet = "edition swallowed.";

// nft description -- hutang external link
export const nftMeMoRaTitle = "";
export const nftMeMoRa = "Read on MeMoRa MarketPlace (SOON)";
export const nftEndhonesaTitle = "";
export const nftEndhonesa = "Read on ENDHONESA.COM (GOON)";
export const nftReadLess = "Read Less";
export const nftReadMore = "Read More";

// coins list
export const coinsConsoleWarn = "canClaim failed for coinAddress:"; // coin details,
export const coinsSetError = "Failed to fetch any claimable share.";
export const coinsMessage1 = "No claimable shares";
export const coinsMessage2 =
  "There are no claimable share available right now. Please try again later or return to the home page.";
export const coinsTitle1 = "All";
export const coinsTitle2 = "Claimable Shares";

// coin lister
export const coinButton = "Claim Now"; // coin form,
export const coinNoAccess = "No Access"; // coin form,
export const coinClaimed = "Claimed"; // coin form,
export const coinListerImage = "/medias/batch-bread.png"; // coin form,
export const coinListerName = "A Claimable Share"; // coin form,
export const coinSupply = "Supply:";
export const coinOf = "of"; // coin form,

// coin fallback
export const coinFallMessage1 = "Invalid address page!";
export const coinFallMessage2 =
  "Please use a valid address of the claimable share in the URL or return to the home page and start over.";

// coin details
export const coinSetError = "Failed to fetch the share.";
export const coinMessage1 = "The share not found.";
export const coinMessage2 =
  "The specified address of the share was not found. Please try again later or return to the home page.";
export const coinAccessMessage1 = "You don't have access!";

// coin access
export const coinAccessMessage2 =
  "Please get your access by swallowing any available stock at least one edition.";
export const coinAccessButton = "Swallow Available Stock!";
export const coinAccessBanner = "/images/content-banner.png";

// coin form
export const coinFormSupply = "Supply";
export const coinFormKirim = "Cooling your share.";
export const coinFormSukses = "Share successfully claimed.";
export const coinFormPerWallet = "supply claimed.";

// claim free coin fts
export const loginFirst = "Please log in first.";

// bon dosh modal fts
export const bonTitle = "$BON Dosh!!!!";
export const bonP1 = "At a certain point in time… in the Realm of Reality.";
export const bonP2 =
  "On EARTH #474, after traversing 4.5 billion years in the vastness of the cosmos, a group of individuals embarked on an extraordinary journey. They did not merely traverse land, but also crossed the oceans and even ventured into the boundless expanse of space. Thus, the VOYAGE began—not merely a physical expedition, but a pursuit of values, encounters, and growth.";
export const bonP3 =
  "As time unfolded, their efforts met challenges and opportunities alike. Revenue flowed in and out, weaving a pattern akin to the ceaseless tides of the sea. Every meeting with a new soul, every crossroads encountered, every farewell, and every joyous reunion—each left an indelible mark upon the tapestry of this great journey.";
export const bonP4 =
  "The call &quot;BON VOYAGE!&quot; grew louder, reverberating not only in the minds of those undertaking the VOYAGE but also weaving itself into the very fabric of decentralised data traffic. What was once a mere expression of well-wishes, BON had now evolved into something far greater—a unit of measure for the VOYAGE itself.";
export const bonUlLi1 = "🔹 How far has the VOYAGE taken them?";
export const bonUlLi2 = "🔹 How much value has been forged along the way?";
export const bonUlLi3 = "🔹 How many encounters have shaped the path?";
export const bonUlLi4 =
  "🔹 How much revenue has been channelled and exchanged?";
export const bonP5 =
  "BON stands as a measure that immortalises experience, a token of equivalence (ERC-20) that encapsulates the influence of every participant in the VOYAGE .";
export const bonP6 =
  "BON is not just a figure—it is proof of the steps taken, the values cultivated, and the impact left behind.";
export const bonP7 =
  "And at the culmination of every journey—whether at its inception or after traversing great distances—one call continues to resonate, carrying forth the spirit of adventure and purpose:";
export const bonP8 = "BON VOYAGE! 🚀";
export const bonP9 = "🍌☕🍌☕";
export const bonP10 = "Prof. NOTA v.11.11.11";
export const bonImage = "/medias/bon-voyage.gif";
export const bonImageAlt = "BON VOYAGE Token Illustration";

// free coin form fts

// terms page
export const entityName = "Ngelaras Roso X NFT Indonesia";
export const entityAlias1 = "Ngelaras Roso"; // footer section
export const entityAlias2 = "NFT Indonesia";
export const entityAddress =
  "Jl. Al Inayah No.86, Rawakalong, Kec. Gn. Sindur, Kabupaten Bogor, Jawa Barat 16340, INDONESIA"; // nulled
export const entityEmail = "hallonftindonesia@gmail.com";
export const termsTitle = "T and C of Use";
export const termsMonth = "Januari";
export const termsDate = "20";
export const termsYear = "2025";
export const termsUpdate = `Last updated on ${termsMonth} ${termsDate}, ${termsYear}.`;
export const termsSection1 = `${entityName} Terms and Conditions of Use`;
export const termsSec1P1 = `Please read these ${entityName} Terms and Conditions of Use and Privacy Statement carefully, they contain important information about your rights and obligations.`;
export const termsSec1P2 = `${entityAlias2} is a platform that allows you to collect, issue, and display NFTs. This ${entityName} Terms and conditions of Use ("Terms and Conditions", "Agreement") document is entered into by user or users ("User", "Users" or "You"), ${entityAlias1}, and ${entityAlias2} (" ${entityName}," "We" or "Us"). It contains terms and conditions you have agreed to abide by upon accessing ${proUrl} ("Site"). The terms govern your access and use of the ${entityAlias2} ecosystem, including content, features, and functionality. By signing up to use an account through the Site, or any associated websites, APIs, or mobile applications, you agree that you have read, understood, and accept all of the terms and conditions contained in this Agreement.`;
export const termsSection2 = `Basic ${entityAlias2} Services`;
export const termsSec2Ul1Li1 = `Eligibility. To be eligible to use the ${entityAlias2} services, you must register an account on ${entityName} Site.`;
export const termsSec2Ul1Li2 = `${entityAlias2} Services. Your account encompasses the following basic services: Access to collect virtual collectibles in a form of Non Fungible Tokens; Access to issue and publish NFTs; Privilege tagged to NFTs that you, as an NFT collector ("Collector"), have collected.`;
export const termsSection3 = "Agreement to these Terms and Conditions";
export const termsSec3P1 =
  "All Users shall use the Services in accordance with these Terms and Conditions. Users may not use the Services unless they agree to these Terms and Conditions.";
export const termsSec3P2 =
  "Users who are minors may only use the Services by obtaining prior consent from their parents or legal guardians. Furthermore, if Users will be using the Services on behalf of, or for the purposes of, a business enterprise, then such business enterprise must also agree to these Terms and Conditions prior to using the Services.";
export const termsSec3P3 =
  "If there are Separate Terms and Conditions applicable to the Services, Users shall also comply with such Separate Terms and Conditions as well as these Terms and Conditions in using the Services.";
export const termsSection4 = "Modification to these Terms and Conditions";
export const termsSec4P1 = `${entityAlias2} may modify these Terms and Conditions when ${entityAlias2} deems it to be necessary, within the scope of the purposes of the Services. In such a case, ${entityAlias2} will indicate the contents of the modified version of these Terms and Conditions, as well as the effective date of the modification, on the Services or on ${entityName}'s website, or will publicize the same to Users by notifying Users in the manner prescribed by ${entityAlias2}.`;
export const termsSec4P2 =
  "The modified version of these Terms and Conditions shall become effective as of the effective date thereof.";
export const termsSection5 = `${entityAlias2} ACCOUNT`;
export const termsSec5P1 = `Registration of ${entityAlias2} account. In order to use the ${entityName} Site, you will need to register for a ${entityAlias2} account by providing your information ("Personal Information"), including your email address, password, and accepting the terms of this Agreement and our Privacy Policy. We may, in our sole discretion, decide to remove your account if we find out a violation in your activities within the ${entityName} Site.`;
export const termsSec5P2 = `Access. To access the ${entityName} Site, you must have the necessary equipment or device and the associated telecommunication service subscriptions to access the Internet.`;
export const termsSection6 = "Role-specific terms";
export const termsSec6P1 = `Collector. As a Collector, you will gain access to browse through NFTs that are displayed on the ${entityName} Site. You may obtain the ownership of any of the available NFTs by exchanging with approved tokens. You may also choose to keep the NFTs as your collection, exchange them for tokens with other Collectors or use them to redeem products and services offered by our partners if applicable. Specifically for claiming procedures, our partners have the right to set their own disclaimers. ${entityName} Site is not responsible for failure to comply with the disclaimers that lead to unsuccessful NFTs redemption.`;
export const termsSec6P2 =
  "You will also gain access to publish NFTs that you have collected to be displayed and made available to be exchanged with approved tokens, if preferable. In a case where you transfer ownership of an NFT with a tagged product or service to another Collector, you will also transfer the title of the product or service.";
export const termsSec6P3 =
  "The ownership of the NFTs does not give you the right to have the ownership of the Intellectual Property rights of those NFTs.";
export const termsSection7 =
  "Intellectual Property Rights Protection Provisions";
export const termsSec7P1 = `Intellectual Property Rights. The term "Intellectual Property Rights" means all (i) patents, patent applications, patent disclosures and inventions, (ii) Internet Domain names, trademarks, service marks, trade dress, trade names, logos and corporate names and registrations and applications for registration thereof together with all of the goodwill associated therewith, (iii) copyrights (registered or unregistered) and copyrightable works and registrations and applications for registration thereof, (iv) mask works and registrations and applications thereof, (v) computer software, data, databases and documentation thereof, (vi) trade secrets and other confidential information, including ideas, formulas, compositions, inventions (whether patentable or unpatentable and whether or not reduced to practice), know-how, manufacturing and production processes and techniques, research and development information, drawings, specifications, designs, plans, proposals, technical data, and copyrightable works, financial and marketing plans and customer and supplier lists and information, and (vii) copies and tangible embodiments thereof (in whatever form or medium).`;
export const termsSec7P2 = `This Terms and Conditions contains how you and ${entityAlias2} will protect your Intellectual Property on ${entityAlias2} services exclusively.`;
export const termsSec7P3 = "You acknowledge that:";
export const termsSec7Ol1Li1 = `You are the original owner or holder of the intellectual property rights of NFTs published on ${entityName} site.`;
export const termsSec7Ol1Li2 = `You hereby declare that you fully own the intellectual property rights to the NFTs published on ${entityName} site exclusively and guarantee that there are no claims from third parties for the ownership of the NFTs`;
export const termsSec7P4 = `${entityAlias2} hereby grants you a limited, non-exclusive, non-transferable royalty-free right to use or display the brand, trade name, logo, site content, headings and other distinguishing marks and names of ${entityAlias1} and ${entityAlias2} on the site and limited for the purpose of implementing this Agreement.`;
export const termsSec7P5 = `Breach of Intellectual Property. ${entityAlias2} wil take responsibility for any finding NFTs that are infringing Intellectual Property Rights. If you as Collector find indications of infringement of intellectual property rights on NFTs in ${entityAlias2}, you can contact ${entityAlias2} and ${entityAlias2} will help to remove them from ${entityName} site. Other than that, it will be the responsibility of you and the IP owners and should be directly resolved between you and the IP owners.`;
export const termsSection8 = "Restricted Matters";
export const termsSec8P1 = `${entityAlias2} prohibits you from engaging in any of the following acts when using the Services:`;
export const termsSec8Ul1Li1 =
  "Acts that violate the laws and regulations, court verdicts, resolutions or orders, or administrative measures that are legally binding;";
export const termsSec8Ul1Li2 =
  "Acts that may be in violation of public order, morals or customs;";
export const termsSec8Ul1Li3 = `Acts that infringe intellectual property rights, such as copyrights, trademarks and patent rights, rights to fame, privacy, and all other rights granted by law or by a contract with ${entityAlias2} and/or a third party;`;
export const termsSec8Ul1Li4 =
  "Acts of posting or transmitting excessively violent expressions; expressions that lead to discrimination by race, national origin, creed, gender, social status, family origin, etc.; expressions that induce or encourage suicide, self-injurious behavior or drug abuse; or expressions that include anti-social content and lead to the discomfort of others;";
export const termsSec8Ul1Li5 =
  "Acts that benefit or involve collaboration with anti-social groups;";
export const termsSec8Ul1Li6 =
  "Acts that are related to religious activities or invitations to certain religious groups;";
export const termsSec8Ul1Li7 =
  "Acts of unauthorized or improper collection, disclosure, or provision of any other person's personal information, registered information, user history, or the like;";
export const termsSection9 = "Suspension, Termination, and Cancellation";
export const termsSec9P1 = `We may (a) refuse to complete or cancel your registration, (b) suspend, restrict or terminate your access to any or all of the ${entityName} Site services, and/or (c) deactivate your account with immediate effect for any reason, including but not limited to where:`;
export const termsSec9Ul1Li1 =
  "We are, in our reasonable opinion, required to do so by applicable law or any court or other authority to which we are subject in any jurisdiction;";
export const termsSec9Ul1Li2 =
  "We reasonably suspect you of acting in breach of this Agreement;";
export const termsSec9Ul1Li3 = `We have concerns that an activity is erroneous or about the security of your account or we suspect that ${entityName} Site services are being used in a fraudulent or unauthorized manner;`;
export const termsSec9Ul1Li4 = `We suspect money laundering, terrorist financing, fraud, or any other financial crime;`;
export const termsSec9Ul1Li5 = `Use of your account is subject to any pending litigation, investigation or government proceeding and/or we perceive a heightened risk of legal or regulatory non-compliance associated with your account activity;`;
export const termsSec9Ul1Li6 = `You take any action that may circumvent our controls such as abusing promotions which we may offer from time to time;`;
export const termsSec9P2 = `We may suspend, restrict, or terminate your access to any or all of ${entityName} Site services and/or deactivate or cancel your ${entityAlias2} account, without reason by giving you two months notice. You acknowledge that our decision to take certain actions, including limiting access to, suspending, or closing your ${entityAlias2} account, may be based on confidential criteria that are essential to our risk management and security protocols. You agree that we are under no obligation to disclose the details of its risk management and security procedures to you.`;
export const termsSection10 = `Liability`;
export const termsSec10P1 = `Release of ${entityAlias2}. ${entityAlias2} is a peer to peer platform that uses the distributed ledger technology, If you have a dispute with one or more users of ${entityName} Site, you agree that neither we nor our affiliates or service providers, nor any of our respective officers, directors, employees, and representatives will be liable for any claims, demands, and damages (actual and consequential) of any kind or nature rising out of or in any way connected with such disputes.`;
export const termsSec10P2 = `Indemnification. You agree to indemnify ${entityAlias2}, our affiliates and service providers, and each of our or their respective officers, directors, employees, and representatives, in respect of any costs (including attorneys' fees and any fines, fees or penalties imposed by any regulatory authority) that have been reasonably incurred in connection with any claims, demands or damages arising out of or related to your breach and / or our enforcement of this Agreement or your violation of any law, rule or regulation, or the rights of any third party.`;
export const termsSec10P3 = `Limitation of Liability. ${entityAlias2} has no liability for services and all NFTs on the Site and ${entityAlias2} shall only be liable to you for loss or damage caused directly and reasonably foreseeable by our breach of this Agreement.`;
export const termsSec10P4 = `No Warranties. ${entityName} Site services are provided on an "as is" and "as available" basis without any representation or warranty, whether express or implied, to the maximum extent permitted by applicable law: specifically we disclaim any implied warranties of title, merchantability, fitness for a particular purpose and/or non-infringement. We do not make any representations or warranties that access to ${entityName} Site, any of the ${entityAlias2} services, or any of the materials contained therein, will be continuous, uninterrupted, timely or error-free.`;
export const termsSec10P5 = `Safety and Security of Your Computer and Devices. ${entityName} Site is not liable for any damage or interruptions caused by any computer viruses, spyware, scareware, Trojan horses, worms or other malware that may affect your computer or other equipment, or any phishing, spoofing or other attack. We advise the regular use of a reputable and readily available virus screening and prevention software. You should also be aware that SMS and email services are vulnerable to spoofing and phishing attacks and should use care in reviewing messages purporting to originate from us. ${entityAlias2} customer support will never ask to screen share or otherwise seek to access your computer or account.`;
export const termsSec10P6 = `No Liability for Breach. We are not liable for any breach of the Agreement where the breach is due to abnormal and unforeseeable circumstances beyond our control, the consequences of which would have been unavoidable despite all effects to the contrary, nor are we liable where the breach is due to the application of mandatory legal rules.`;
export const termsSection11 = `Customer Feedback, Queries, Complaints, and Dispute Resolution`;
export const termsSec11P1 = `Contact ${entityAlias2}. When you contact us please provide us with your name, email, wallet address, and any other information we may need to identify you, your ${entityAlias2} account, and the activity on which you have feedback, questions, or complaints.`;
export const termsSec11P2 = `Complaints. In the event of a complaint, please set out the cause of your complaint, how you would like us to resolve the complaint and any other information you believe to be relevant. We will acknowledge receipt of your complaint. A Customer Complaints officer ("Officer") will consider your complaint. The Officer will consider your complaint without prejudice based on the information you have provided and any information provided by Voyage. Within 15 business days of our receipt of your complaint the Officer will address all points raised in your complaint by sending you an e-mail ("Resolution Notice") in which the Officer will: (i) offer to resolve your complaint in the way your requested; (ii) make a determination rejecting your complaint and set out the reasons for the rejection; or (iii) offer to resolve your complaint with an alternative solution. In exceptional circumstances, if the Officer is unable to respond to your complaint within 15 business days for reasons beyond Voyage's control, the Officer will send you a holding reply indicating the reasons for a delay in answering your complaint and specifying the deadline by which the Officer will respond to your complaint (which will be no later than 35 business days from our receipt of your complaints).`;
export const termsSec11P3 = `Offers. Any offer of resolution made to you will only become binding on us if accepted by you. An offer of resolution will not constitute any admission by us of any wrongdoing or liability regarding the subject matter of the complaint.`;
export const termsSection12 = `Data Protection`;
export const termsSec12P1 = `Personal Data. You acknowledge that we may process personal data in relation to you. Accordingly, you represent and warrant that:`;
export const termsSec12Ul1Li1 = `your disclosure to us of any personal data was or will be made in accordance with all applicable data protection and data privacy laws, and those data are accurate, up to date and relevant when disclosed;`;
export const termsSec12Ul1Li2 = `before providing any such personal data to us, you have read and understood our Privacy Policy, attached to this Agreement and a copy of which is also available at Privacy Policy, and, in the case of personal data relating to an individual other than yourself, have (or will at the time of disclosure have) provided a copy of that Privacy Policy (as amended from time to time), to that individual;`;
export const termsSec12Ul1Li3 = `and if from time to time we provide you with a replacement version of the Privacy Policy, you will promptly read that notice and provide a copy to any individual whose personal data you have provided to us;`;
export const termsSec12P2 = `Please read the Privacy Policy for details of how we may process your personal data.`;
export const termsSection13 = `General Terms and Conditions`;
export const termsSec13P1 = `Limited License. We grant you a limited, non-exclusive, non-transferable license, subject to the terms of this Agreement, to access and use ${entityName} Site, and related content, materials, information (collectively, the "Content") solely for approved purposes as permitted by us from time to time. Any other use of ${entityName} Site or Content is expressly prohibited and all other right, title, and interest in ${entityName} Site or Content is exclusively the property of ${entityAlias2} and its licensors. You agree not to copy, transmit, distribute, sell, license, reverse engineer, modify, publish, or participate in the transfer or sale of, create derivative works from, or in any other way exploit any of the Content, in whole orin part.`;
export const termsSec13P2 = `Website Accuracy. Although we intend to provide accurate and timely information on ${entityName} Site, ${entityName} Site (including, without limitation, the Content) may not always be entirely accurate, complete or current and may also include technical inaccuracies or typographical errors. In an effort to continue to provide you with as complete and accurate information as possible, information may, to the extent permitted by applicable law, be changed or updated from time to time without notice, including without limitation information regarding our policies, products and services. Accordingly, you should verify all information before relying on it, and all decisions based on information contained on ${entityName} Site are your sole responsibility and we shall have no liability for such decisions. Links to third-party materials (including without limitation websites) may be provided as a convenience but are not controlled by us. You acknowledge and agree that we are not responsible for any aspect of the information, content, or services contained in any third-party materials or on any third party sites accessible or linked to ${entityName} Site.`;
export const termsSec13P3 = `Relationship of the Parties. Nothing in this Agreement shall be deemed or is intended to be deemed, nor shall it cause, either you or ${entityAlias2} to be treated as the agent of the other.`;
export const termsSec13P4 = `Privacy of Others; Marketing. If you receive information about another user through ${entityName} Site services, you must keep the information confidential and only use it in connection with ${entityName} Site services. You may not disclose or distribute a user's information to a third party or use the information except as reasonably necessary to effect a transaction and other functions reasonably incidental thereto such as support, reconciliation and accounting unless you receive the user's express consent to do so. You may not send unsolicited email to a user through ${entityName} Site services.`;
export const termsSec13P5 = `Security Breach. If you suspect that your ${entityAlias2} account or any of your security details have been compromised or if you become aware of any fraud or attempted fraud or any other security incident (including a cyber-security attack) affecting you and/or ${entityAlias2} (together a "Security Breach"), you must notify ${entityAlias2} support as soon as possible by email free of charge at ${entityEmail} and continue to provide accurate and up to date information throughout the duration of the Security Breach. You must take any steps that we reasonably require to reduce, manage or report any Security Breach. Failure to provide prompt notification of any Security Breach may be taken into account in our determination of the appropriate resolution of the matter.`;
export const termsSec13P6 = `Contact Information. You are responsible for keeping your email address up to date in your Account Profile in order to receive any notices or alerts that we may send you (including notices or alerts of actual or suspected Security Breach).`;
export const termsSec13P7 = `Entire Agreement. This Agreement (including documents incorporated by reference herein) comprise the entire agreement between you and ${entityAlias2}.`;
export const termsSec13P8 = `Interpretation. Section headings in this Agreement are for convenience only, and shall not govern the meaning or interpretation of any provision of this Agreement.`;
export const termsSec13P9 = `Transfer. This Agreement is personal to you and you cannot transfer or assign your rights, licenses, interests and/or obligations to anyone else. We may transfer or assign our rights licenses, interests and/or our obligations at any time, including as part of a merger, acquisition or other corporate reorganisation involving ${entityAlias2}, provided that this transfer or assignment does not materially impact the quality of the ${entityAlias2} services you receive.`;
export const termsSec13P10 = `Invalidity. If any provision of this Agreement is determined to be invalid or unenforceable under any applicable law, this will not affect the validity of any other provision.`;
export const termsSec13P11 = `Enforcement of Our Rights. We may not always strictly enforce our rights under this Agreement. If we do this, it will be just a temporary measure and we may enforce our rights strictly again at any time.`;
export const termsSec13P12 = `Language. This Agreement and any information or notifications that you or we are to provide should be in Indonesian and English. Any translation of this Agreement or other documents is provided for your convenience only. In the event of any inconsistency, the Indonesian and English language version of this Agreement or other documents shall prevail.`;
export const termsSec13P13 = `Survival. All provisions of this Agreement which by their nature extend beyond the expiration or termination of this Agreement, including, without limitation, the sections relating to suspension or termination, ${entityAlias2} account cancellation, general use of ${entityName} Site, disputes with ${entityAlias2}, and general provisions, will continue to be binding and operate after the termination or expiration of this Agreement.`;
