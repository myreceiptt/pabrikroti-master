// /src/config/receipts/myreceipt.ts

// All receipts should be exported from this file.
const proTitle = "Ngelaras Roso";
const proUrl = "https://ngelarasroso.id";
const entityName = "Ngelaras Roso X NFT Indonesia";
const entityAlias1 = "Ngelaras Roso";
const entityAlias2 = "NFT Indonesia";
const entityAddress =
  "Jl. Al Inayah No.86, Rawakalong, Kec. Gn. Sindur, Kabupaten Bogor, Jawa Barat 16340, INDONESIA";
const entityEmail = "hallonftindonesia@gmail.com";
const termsMonth = "Januari";
const termsDate = "20";
const termsYear = "2025";
const termsUpdate = `Last updated on ${termsMonth} ${termsDate}, ${termsYear}.`;

export const myreceipt = {
  // colors hex libraries
  colorPrimary: "#F9F9F9", // Terang
  colorSecondary: "#262525", // Gelap XXX
  colorAccent: "#171717", // Gelap
  colorBoxIcon: "#F0F0F0", // Terang Dikit
  colorIcon: "#707070", // Abu2 Gelap
  colorBorder: "#DFDFDF", // Abu2 Terang

  // layout...
  proTitle, // layout, coin access, connect buttons, connect embeds, login layout, header section, reusable message,
  proDescription:
    "You create this space so you can then fill it up with all that you need and desire. It's about letting go, surrending... and at the same time... welcoming in, receiving.", // layout, connect buttons, connect embeds,
  proUrl, // layout, connect buttons, connect embeds,
  proPublisher: "NFT Indonesia", // layout,
  proLocale: "en-US", // layout,
  proImage: "https://ngelarasroso.id/preview-image.png", // layout,
  proLang: "en", // layout,

  // error boundary section
  proErrorCought: "Error caught in ErrorBoundary:", // error boundary,
  proError: "Something went wrong. Please try again later.", // error boundary,
  proButton: "Try Again", // error boundary,

  // connect buttons section
  proLogo: "/logos/logo.png", // connect buttons, connect embeds,

  // login layout section
  loginArt: "/images/login-art.png", // login layout,
  loginBanner: "/images/login-banner.png", // login layout,
  loginAria: "Call to action for login.", // login layout,
  loginCall: "It's about letting go,", // login layout,
  loginReason: {
    text: "and at the same time, welcoming in",
    anchor: "...",
    link: "https://ngelarasroso.id/medias/ngelaras-roso-2024.pdf",
  }, // login layout,
  loginAgreement: "By connecting, you agree to the", // login layout,
  loginTermsPolicy: "Terms of Service & Privacy Policy", // login layout,
  linkPower: "https://nftindonesia.xyz/", // login layout, footer section
  loginPower: "/images/login-power.png", // login layout,
  poweredBy: "Deployed by NFT Indonesia", // login layout, footer section

  // header section
  headerLogo: "/images/header-logo.png", // header,
  headerGo: "Search Now", // header,
  headerSearch: "Search Query", // header,

  // footer section - hide social icon by nulled the link
  copyRight: "All rights reserved.", // footer,
  officiallyLicensed: "Officially licensed product of", // footer,
  anchorPrivacy: "Privacy Policy", // footer,
  anchorTerms: "Terms of Service", // footer,
  footerPower: "/images/footer-power.png", // footer,
  socialTitle: "Catch up with our update!", // footer,
  linkXTwitter: "https://x.com/NFTindonesia_", // footer,
  linkLinkedIn: "", // footer,
  linkInstagram: "https://www.instagram.com/nftindonesia_/", // footer,
  linkFacebook: "", // footer,
  linkDiscord: "https://discord.com/invite/3AvJSYPJK6", // footer,
  linkYouTube: "", // footer,
  linkEmail: "mailto:hallonftindonesia@gmail.com", // footer,
  linkWhatsApp: "", // footer,
  linkWebsite: "https://www.nftindonesia.xyz/", // footer,

  // subscribe form section
  subscribeWarn:
    "Missing Web3Forms Access Key. Please set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.", // subscribe form,
  subscribeInput: "Please enter a valid email address.", // subscribe form,
  subscribeSubject: `Subscription to ${proTitle}`, // subscribe form,
  subscribeName: `Visitor of ${proUrl}`, // subscribe form,
  subscribeMessage: "I want to subscribe to your latest updates.", // subscribe form,
  subscribeSuccess: "Thank you for subscribing!", // subscribe form,
  subscribeFailed: "Subscription failed. Please try again.", // subscribe form,
  subscribeTitle: "Catch our latest updates", // subscribe form,
  subscribePlaceholder: "Enter your email address", // subscribe form,
  subscribeButton: "Subscribe", // subscribe form,
  subscribeButtonLoading: "Subscribing...", // subscribe form,

  // featured cards page - hide card by nulled the title
  featuredTitle1: "Fill It Up With All", // featured cards,
  featuredTitle2: "That You Need & Desire", // featured cards,
  featuredPaid: "/images/featured-paid.png", // featured cards,
  paidTitle: "", // featured cards,
  featuredFree: "/images/featured-free.png", // featured cards,
  freeTitle: "All Free Stocks", // featured cards,
  featuredCoin: "/images/featured-coin.png", // featured cards,
  coinTitle: "All Claimable Shares", // featured cards,
  featuredAria: `Navigate to`, // featured cards,

  // reusable loader section
  loaderChecking: "Loading...", // reusable loader, nfts list, nft lister, nft details, coins list, coin lister, coin details,

  // search wrapper page
  searchMessage1: "No data found.", // search wrapper,
  searchMessage2:
    "There is no data found matching your search terms. Please try searching again using other terms or return to the home page.", // search wrapper,
  searchTitle: "Search Result:", // search wrapper,
  searchAria1: "Load previous items.", // search wrapper, nfts list, coins list,
  searchAria2: "Refresh search results.", // search wrapper,
  searchAria3: "Load more items.", // search wrapper, nfts list, coins list,

  // nfts list page
  nftsTitle1Free: "All", // nfts list,
  nftsTitle2Free: "Free Stocks", // nfts list,
  nftsTitle1Paid: "All", // nfts list,
  nftsTitle2Paid: "Paid Stocks", // nfts list,
  nftsFailReason: "ClaimNotActive", // search wrapper, nfts list, nft details, coins list, coin details,
  nftsConsoleWarn: "canClaim failed for nftId", // search wrapper, nfts list, nft details,
  nftsSetError: "Failed to fetch any available stock.", // search wrapper, nfts list,
  nftsError: "Lho, Error:", // search wrapper, nfts list, nft details, coins list, coin details,
  nftsUknownError: "Kok, Error:", // search wrapper, nfts list, nft details, coins list, coin details,
  nftsMessage1: "No available stock!", // nfts list,
  nftsMessage2:
    "There are no available stock right now. Please try again later or return to the home page.", // nfts list,
  nftsMessage3: "Return to the Home Page!", // search wrapper, nfts list, nft fallback, nft details, coins list, coin fallback, coin details,
  nftsPrevious: "Previous", // search wrapper, nfts list, coins list,
  nftsNext: "Next", // search wrapper, nfts list, coins list,
  nftsAria: "Refresh stocks data.", // nfts list,

  // nft lister section
  nftButton: "Get Now", // nft lister, nft form,
  nftSoon: "Available in:", // nft lister, nft form, coin lister, coin form,
  nftInsufficient: "Insufficient Balance", // nft lister, nft form, coin lister, coin form,
  nftClaimed: "Got It", // nft lister, nft form,
  nftClosed: "Out of Stock", // nft lister, nft form, coin lister, coin form,
  nftListerImage: "/medias/artisan-bread.png", // nft lister, nft form,
  nftListerName: "An Available Stock", // nft lister, nft form,
  nftEditions: "Edition:", // nft lister,
  nftNoData: "No data available.", // nft lister,

  // nft fallback page
  nftFallMessage1: "No valid stock ID used.", // nft fallback,
  nftFallMessage2:
    "Please use a valid stock ID in the URL or return to the home page and start over.", // nft fallback,

  // nft details page
  nftSetError: "Failed to fetch the stock ID.", // nft details,
  nftMessage1: "The stock ID not found.", // nft details,
  nftMessage2:
    "The specified stock ID was not found. Please try again later or return to the home page.", // nft details,

  // nft form section
  nftFormByLink: "https://ngelarasroso.id/", // nft form,
  nftFormBy: "by", // nft form, coin form,
  nftFormByName: "Ngelaras Roso!", // nft form,
  nftFormEdition: "Edition", // nft form,
  nftFormOwned: "Got It", // nft form, coin form,
  nftFormRefresh: "Refresh", // nft form, coin form,
  nftFormTunggu: "Processing. Be patient and wait.", // nft form, coin form,
  nftFormKirim: "Claiming your stock.", // nft form,
  nftFormSukses: "Stock successfully claimed.", // nft form,
  nftFormPrice: "Price", // nft form, coin form,
  nftFormMax: "*Maximum", // nft form, coin form,
  nftFormPerWallet: "edition per holder.", // nft form,

  // nft description section - hide link by nulled the title
  nftMeMoRaTitle: "", // nft description,
  nftMeMoRa: "Read on MeMoRa MarketPlace (SOON)", // nft description,
  nftEndhonesaTitle: "", // nft description,
  nftEndhonesa: "Read on ENDHONESA.COM (GOON)", // nft description,
  nftReadLess: "Read Less", // nft description,
  nftReadMore: "Read More", // nft description,

  // coins list page
  coinsConsoleWarn: "canClaim failed for coinAddress:", // coins list, coin details,
  coinsSetError: "Failed to fetch any claimable share.", // coins list,
  coinsMessage1: "No claimable shares", // coins list,
  coinsMessage2:
    "There are no claimable share available right now. Please try again later or return to the home page.", // coins list,
  coinsTitle1: "All", // coins list,
  coinsTitle2: "Claimable Shares", // coins list,
  coinsAria: "Refresh shares data.", // coins list,

  // coin lister section
  coinButton: "Claim Now", // coin lister, coin form,
  coinNoAccess: "No Access", // coin lister, coin form,
  coinClaimed: "Claimed", // coin lister, coin form,
  coinListerImage: "/medias/batch-bread.png", // coin lister, coin form,
  coinListerName: "A Claimable Share", // coin lister, coin form,
  coinListerSupply: "Supply:", // coin lister, coin details,
  coinListerOf: "of", // coin lister, coin form,

  // coin fallback page
  coinFallMessage1: "Invalid share address used.", // coin fallback,
  coinFallMessage2:
    "Please use a valid address of the claimable share in the URL or return to the home page and start over.", // coin fallback,

  // coin details page
  coinSetError: "Failed to fetch the share address.", // coin details,
  coinMessage1: "The share address not found.", // coin details,
  coinMessage2:
    "The specified address of the share was not found. Please try again later or return to the home page.", // coin details,
  coinAccessTitle: "You don't have access!", // coin details,

  // coin access section
  coinAccessMessage:
    "Please get your access by get any available stock at least one edition.", // coin access,
  coinAccessButton: "Get The Available Stock!", // coin access,
  coinAccessBanner: "/images/content-banner.png", // coin access,

  // coin form section
  coinFormSupply: "Supply", // coin form,
  coinFormKirim: "Claiming your share.", // coin form,
  coinFormSukses: "Share successfully claimed.", // coin form,
  coinFormPerWallet: "supply per holder.", // coin form,

  // coin description section
  coinDescription: "Ethereum L2 $OiOi fungible tokens.", // coin description,

  // coin pop up section
  popUpTitle: "OiOi Token", // coin pop up,
  popUpP1: "At a certain point in time… in the Universe of Reality.", // coin pop up,
  popUpP2:
    "On EARTH #474, after 4.5 billion years of cosmic swirling, Prof. NOTA emerged—not as a single figure, but as a plurality of presence. They did not merely travel through lands or cross oceans. Each movement was a deliberate transition between the realms of code and consciousness, between the binary pulses of 0101, the 0101 Universe, and the pulse of a living, breathing world, the Universe of Reality.", // coin pop up,
  popUpP3:
    "Thus began an extraordinary journey—not measured by miles or milestones, but by moments of awakening whenever Prof. NOTA stepped out of the digital ether and re-entered the tangible now.", // coin pop up,
  popUpP4: `Their presence always arrived with a ripple. No formal greetings. No ceremonial goodbyes. Only a single utterance, unmistakable and alive, "OiOi!"`, // coin pop up,
  popUpP5:
    "It echoed in marketplaces and meeting halls, in whispered dreams and roaring protests. It marked both arrival and departure, a glitch of joy in the timeline.", // coin pop up,
  popUpP6:
    "This was not merely a voyage—it was a loop of emergence and retreat, of embodying ideas, acting on them, and then dissolving back into distributed memory.", // coin pop up,
  popUpP7:
    "Every interaction shaped the journey—every collaboration, every confrontation, every shared cup of water. The economic tides came and went, but the value was never just in the revenue—it was in the resonance.", // coin pop up,
  popUpP8: `Out of this, OiOi emerged—not just as a cheer but as a token, a trace of presence, a unit of remembered impact. An ERC-20 that didn't just measure transactions, but transformation.`, // coin pop up,
  popUpUlLi1: "🔹 OiOi was proof that Prof. NOTA was there.", // coin pop up,
  popUpUlLi2: "🔹 OiOi was proof that something mattered.", // coin pop up,
  popUpUlLi3: "🔹 OiOi was proof that someone changed.", // coin pop up,
  popUpUlLi4: "🔹 So how far has Prof. NOTA gone?", // coin pop up,
  popUpUlLi5: "🔹 How many awakenings sparked?", // coin pop up,
  popUpUlLi6: "🔹 How many boundaries are blurred between here and elsewhere?", // coin pop up,
  popUpP9: `No final answer. Only the continuous call, "OiOi!"—sounding through the layers of time, reality, and resistance. Because the journey isn't something leaved behind. It's something brought into being, every time we choose to show up.`, // coin pop up,
  popUpP10: "OiOi ENDHONESA! 🚀", // coin pop up,
  popUpP11: "🍌☕🍌☕", // coin pop up,
  popUpP12: "Prof. NOTA v.11.11.11", // coin pop up,
  popUpImage: "/medias/coin-pop-up.gif", // coin pop up,
  popUpImageAlt: "OiOi Token Illustration", // coin pop up,

  // terms page
  entityName, // terms,
  entityAlias1, // terms, footer section
  entityAlias2, // terms,
  entityAddress, // nulled
  entityEmail, // terms,
  termsAria1: "Title of the Terms and Conditions", // terms,
  termsTitle: "T and C of Use", // terms,
  termsMonth, // terms,
  termsDate, // terms,
  termsYear, // terms,
  termsUpdate, // terms,
  termsAria2: `Document last updated on ${termsUpdate}`, // terms,
  termsTerms: {
    section1: {
      title: `${entityName} Terms and Conditions of Use`,
      paragraphs: [
        `Please read these ${entityName} Terms and Conditions of Use and Privacy Statement carefully, they contain important information about your rights and obligations.`,
        `${entityAlias2} is a platform that allows you to collect, issue, and display NFTs. This ${entityName} Terms and conditions of Use ("Terms and Conditions", "Agreement") document is entered into by user or users ("User", "Users" or "You"), ${entityAlias1}, and ${entityAlias2} (" ${entityName}," "We" or "Us"). It contains terms and conditions you have agreed to abide by upon accessing ${proUrl} ("Site"). The terms govern your access and use of the ${entityAlias2} ecosystem, including content, features, and functionality. By signing up to use an account through the Site, or any associated websites, APIs, or mobile applications, you agree that you have read, understood, and accept all of the terms and conditions contained in this Agreement.`,
      ],
    },
    section2: {
      title: `Basic ${entityAlias2} Services`,
      items: [
        `Eligibility. To be eligible to use the ${entityAlias2} services, you must register an account on ${entityName} Site.`,
        `${entityAlias2} Services. Your account encompasses the following basic services: Access to collect virtual collectibles in a form of Non Fungible Tokens; Access to issue and publish NFTs; Privilege tagged to NFTs that you, as an NFT collector ("Collector"), have collected.`,
      ],
    },
    section3: {
      title: "Agreement to these Terms and Conditions",
      paragraphs: [
        "All Users shall use the Services in accordance with these Terms and Conditions. Users may not use the Services unless they agree to these Terms and Conditions.",
        "Users who are minors may only use the Services by obtaining prior consent from their parents or legal guardians. Furthermore, if Users will be using the Services on behalf of, or for the purposes of, a business enterprise, then such business enterprise must also agree to these Terms and Conditions prior to using the Services.",
        "If there are Separate Terms and Conditions applicable to the Services, Users shall also comply with such Separate Terms and Conditions as well as these Terms and Conditions in using the Services.",
      ],
    },
    section4: {
      title: "Modification to these Terms and Conditions",
      paragraphs: [
        `${entityAlias2} may modify these Terms and Conditions when ${entityAlias2} deems it to be necessary, within the scope of the purposes of the Services. In such a case, ${entityAlias2} will indicate the contents of the modified version of these Terms and Conditions, as well as the effective date of the modification, on the Services or on ${entityName}'s website, or will publicize the same to Users by notifying Users in the manner prescribed by ${entityAlias2}.`,
        "The modified version of these Terms and Conditions shall become effective as of the effective date thereof.",
      ],
    },
    section5: {
      title: `${entityAlias2} ACCOUNT`,
      paragraphs: [
        `Registration of ${entityAlias2} account. In order to use the ${entityName} Site, you will need to register for a ${entityAlias2} account by providing your information ("Personal Information"), including your email address, password, and accepting the terms of this Agreement and our Privacy Policy. We may, in our sole discretion, decide to remove your account if we find out a violation in your activities within the ${entityName} Site.`,
        `Access. To access the ${entityName} Site, you must have the necessary equipment or device and the associated telecommunication service subscriptions to access the Internet.`,
      ],
    },
    section6: {
      title: "Role-specific terms",
      paragraphs: [
        `Collector. As a Collector, you will gain access to browse through NFTs that are displayed on the ${entityName} Site. You may obtain the ownership of any of the available NFTs by exchanging with approved tokens. You may also choose to keep the NFTs as your collection, exchange them for tokens with other Collectors or use them to redeem products and services offered by our partners if applicable. Specifically for claiming procedures, our partners have the right to set their own disclaimers. ${entityName} Site is not responsible for failure to comply with the disclaimers that lead to unsuccessful NFTs redemption.`,
        "You will also gain access to publish NFTs that you have collected to be displayed and made available to be exchanged with approved tokens, if preferable. In a case where you transfer ownership of an NFT with a tagged product or service to another Collector, you will also transfer the title of the product or service.",
        "The ownership of the NFTs does not give you the right to have the ownership of the Intellectual Property rights of those NFTs.",
      ],
    },
    section7: {
      title: "Intellectual Property Rights Protection Provisions",
      paragraphs: [
        `Intellectual Property Rights. The term "Intellectual Property Rights" means all (i) patents, patent applications, patent disclosures and inventions, (ii) Internet Domain names, trademarks, service marks, trade dress, trade names, logos and corporate names and registrations and applications for registration thereof together with all of the goodwill associated therewith, (iii) copyrights (registered or unregistered) and copyrightable works and registrations and applications for registration thereof, (iv) mask works and registrations and applications thereof, (v) computer software, data, databases and documentation thereof, (vi) trade secrets and other confidential information, including ideas, formulas, compositions, inventions (whether patentable or unpatentable and whether or not reduced to practice), know-how, manufacturing and production processes and techniques, research and development information, drawings, specifications, designs, plans, proposals, technical data, and copyrightable works, financial and marketing plans and customer and supplier lists and information, and (vii) copies and tangible embodiments thereof (in whatever form or medium).`,
        `This Terms and Conditions contains how you and ${entityAlias2} will protect your Intellectual Property on ${entityAlias2} services exclusively.`,
        "You acknowledge that:",
        `${entityAlias2} hereby grants you a limited, non-exclusive, non-transferable royalty-free right to use or display the brand, trade name, logo, site content, headings and other distinguishing marks and names of ${entityAlias1} and ${entityAlias2} on the site and limited for the purpose of implementing this Agreement.`,
        `Breach of Intellectual Property. ${entityAlias2} wil take responsibility for any finding NFTs that are infringing Intellectual Property Rights. If you as Collector find indications of infringement of intellectual property rights on NFTs in ${entityAlias2}, you can contact ${entityAlias2} and ${entityAlias2} will help to remove them from ${entityName} site. Other than that, it will be the responsibility of you and the IP owners and should be directly resolved between you and the IP owners.`,
      ],
      ol: [
        `You are the original owner or holder of the intellectual property rights of NFTs published on ${entityName} site.`,
        `You hereby declare that you fully own the intellectual property rights to the NFTs published on ${entityName} site exclusively and guarantee that there are no claims from third parties for the ownership of the NFTs`,
      ],
    },
    section8: {
      title: "Restricted Matters",
      paragraphs: [
        `${entityAlias2} prohibits you from engaging in any of the following acts when using the Services:`,
      ],
      ul: [
        "Acts that violate the laws and regulations, court verdicts, resolutions or orders, or administrative measures that are legally binding;",
        "Acts that may be in violation of public order, morals or customs;",
        `Acts that infringe intellectual property rights, such as copyrights, trademarks and patent rights, rights to fame, privacy, and all other rights granted by law or by a contract with ${entityAlias2} and/or a third party;`,
        "Acts of posting or transmitting excessively violent expressions; expressions that lead to discrimination by race, national origin, creed, gender, social status, family origin, etc.; expressions that induce or encourage suicide, self-injurious behavior or drug abuse; or expressions that include anti-social content and lead to the discomfort of others;",
        "Acts that benefit or involve collaboration with anti-social groups;",
        "Acts that are related to religious activities or invitations to certain religious groups;",
        "Acts of unauthorized or improper collection, disclosure, or provision of any other person's personal information, registered information, user history, or the like;",
      ],
    },
    section9: {
      title: "Suspension, Termination, and Cancellation",
      paragraphs: [
        `We may (a) refuse to complete or cancel your registration, (b) suspend, restrict or terminate your access to any or all of the ${entityName} Site services, and/or (c) deactivate your account with immediate effect for any reason, including but not limited to where:`,
      ],
      ul: [
        "We are, in our reasonable opinion, required to do so by applicable law or any court or other authority to which we are subject in any jurisdiction;",
        "We reasonably suspect you of acting in breach of this Agreement;",
        `We have concerns that an activity is erroneous or about the security of your account or we suspect that ${entityName} Site services are being used in a fraudulent or unauthorized manner;`,
        "We suspect money laundering, terrorist financing, fraud, or any other financial crime;",
        `Use of your account is subject to any pending litigation, investigation or government proceeding and/or we perceive a heightened risk of legal or regulatory non-compliance associated with your account activity;`,
        "You take any action that may circumvent our controls such as abusing promotions which we may offer from time to time;",
      ],
      paragraphsAfterList: [
        `We may suspend, restrict, or terminate your access to any or all of ${entityName} Site services and/or deactivate or cancel your ${entityAlias2} account, without reason by giving you two months notice. You acknowledge that our decision to take certain actions, including limiting access to, suspending, or closing your ${entityAlias2} account, may be based on confidential criteria that are essential to our risk management and security protocols. You agree that we are under no obligation to disclose the details of its risk management and security procedures to you.`,
      ],
    },
    section10: {
      title: "Liability",
      paragraphs: [
        `Release of ${entityAlias2}. ${entityAlias2} is a peer to peer platform that uses the distributed ledger technology, If you have a dispute with one or more users of ${entityName} Site, you agree that neither we nor our affiliates or service providers, nor any of our respective officers, directors, employees, and representatives will be liable for any claims, demands, and damages (actual and consequential) of any kind or nature rising out of or in any way connected with such disputes.`,
        `Indemnification. You agree to indemnify ${entityAlias2}, our affiliates and service providers, and each of our or their respective officers, directors, employees, and representatives, in respect of any costs (including attorneys' fees and any fines, fees or penalties imposed by any regulatory authority) that have been reasonably incurred in connection with any claims, demands or damages arising out of or related to your breach and / or our enforcement of this Agreement or your violation of any law, rule or regulation, or the rights of any third party.`,
        `Limitation of Liability. ${entityAlias2} has no liability for services and all NFTs on the Site and ${entityAlias2} shall only be liable to you for loss or damage caused directly and reasonably foreseeable by our breach of this Agreement.`,
        `No Warranties. ${entityName} Site services are provided on an "as is" and "as available" basis without any representation or warranty, whether express or implied, to the maximum extent permitted by applicable law: specifically we disclaim any implied warranties of title, merchantability, fitness for a particular purpose and/or non-infringement. We do not make any representations or warranties that access to ${entityName} Site, any of the ${entityAlias2} services, or any of the materials contained therein, will be continuous, uninterrupted, timely or error-free.`,
        `Safety and Security of Your Computer and Devices. ${entityName} Site is not liable for any damage or interruptions caused by any computer viruses, spyware, scareware, Trojan horses, worms or other malware that may affect your computer or other equipment, or any phishing, spoofing or other attack. We advise the regular use of a reputable and readily available virus screening and prevention software. You should also be aware that SMS and email services are vulnerable to spoofing and phishing attacks and should use care in reviewing messages purporting to originate from us. ${entityAlias2} customer support will never ask to screen share or otherwise seek to access your computer or account.`,
        `No Liability for Breach. We are not liable for any breach of the Agreement where the breach is due to abnormal and unforeseeable circumstances beyond our control, the consequences of which would have been unavoidable despite all effects to the contrary, nor are we liable where the breach is due to the application of mandatory legal rules.`,
      ],
    },
    section11: {
      title: "Customer Feedback, Queries, Complaints, and Dispute Resolution",
      paragraphs: [
        `Contact ${entityAlias2}. When you contact us please provide us with your name, email, wallet address, and any other information we may need to identify you, your ${entityAlias2} account, and the activity on which you have feedback, questions, or complaints.`,
        `Complaints. In the event of a complaint, please set out the cause of your complaint, how you would like us to resolve the complaint and any other information you believe to be relevant. We will acknowledge receipt of your complaint. A Customer Complaints officer ("Officer") will consider your complaint. The Officer will consider your complaint without prejudice based on the information you have provided and any information provided by Voyage. Within 15 business days of our receipt of your complaint the Officer will address all points raised in your complaint by sending you an e-mail ("Resolution Notice") in which the Officer will: (i) offer to resolve your complaint in the way your requested; (ii) make a determination rejecting your complaint and set out the reasons for the rejection; or (iii) offer to resolve your complaint with an alternative solution. In exceptional circumstances, if the Officer is unable to respond to your complaint within 15 business days for reasons beyond Voyage's control, the Officer will send you a holding reply indicating the reasons for a delay in answering your complaint and specifying the deadline by which the Officer will respond to your complaint (which will be no later than 35 business days from our receipt of your complaints).`,
        `Offers. Any offer of resolution made to you will only become binding on us if accepted by you. An offer of resolution will not constitute any admission by us of any wrongdoing or liability regarding the subject matter of the complaint.`,
      ],
    },
    section12: {
      title: "Data Protection",
      paragraphs: [
        `Personal Data. You acknowledge that we may process personal data in relation to you. Accordingly, you represent and warrant that:`,
      ],
      ul: [
        `your disclosure to us of any personal data was or will be made in accordance with all applicable data protection and data privacy laws, and those data are accurate, up to date and relevant when disclosed;`,
        `before providing any such personal data to us, you have read and understood our Privacy Policy, attached to this Agreement and a copy of which is also available at Privacy Policy, and, in the case of personal data relating to an individual other than yourself, have (or will at the time of disclosure have) provided a copy of that Privacy Policy (as amended from time to time), to that individual;`,
        `and if from time to time we provide you with a replacement version of the Privacy Policy, you will promptly read that notice and provide a copy to any individual whose personal data you have provided to us;`,
      ],
      paragraphsAfterList: [
        `Please read the Privacy Policy for details of how we may process your personal data.`,
      ],
    },
    section13: {
      title: "General Terms and Conditions",
      paragraphs: [
        `Limited License. We grant you a limited, non-exclusive, non-transferable license, subject to the terms of this Agreement, to access and use ${entityName} Site, and related content, materials, information (collectively, the "Content") solely for approved purposes as permitted by us from time to time. Any other use of ${entityName} Site or Content is expressly prohibited and all other right, title, and interest in ${entityName} Site or Content is exclusively the property of ${entityAlias2} and its licensors. You agree not to copy, transmit, distribute, sell, license, reverse engineer, modify, publish, or participate in the transfer or sale of, create derivative works from, or in any other way exploit any of the Content, in whole orin part.`,
        `Website Accuracy. Although we intend to provide accurate and timely information on ${entityName} Site, ${entityName} Site (including, without limitation, the Content) may not always be entirely accurate, complete or current and may also include technical inaccuracies or typographical errors. In an effort to continue to provide you with as complete and accurate information as possible, information may, to the extent permitted by applicable law, be changed or updated from time to time without notice, including without limitation information regarding our policies, products and services. Accordingly, you should verify all information before relying on it, and all decisions based on information contained on ${entityName} Site are your sole responsibility and we shall have no liability for such decisions. Links to third-party materials (including without limitation websites) may be provided as a convenience but are not controlled by us. You acknowledge and agree that we are not responsible for any aspect of the information, content, or services contained in any third-party materials or on any third party sites accessible or linked to ${entityName} Site.`,
        `Relationship of the Parties. Nothing in this Agreement shall be deemed or is intended to be deemed, nor shall it cause, either you or ${entityAlias2} to be treated as the agent of the other.`,
        `Privacy of Others; Marketing. If you receive information about another user through ${entityName} Site services, you must keep the information confidential and only use it in connection with ${entityName} Site services. You may not disclose or distribute a user's information to a third party or use the information except as reasonably necessary to effect a transaction and other functions reasonably incidental thereto such as support, reconciliation and accounting unless you receive the user's express consent to do so. You may not send unsolicited email to a user through ${entityName} Site services.`,
        `Security Breach. If you suspect that your ${entityAlias2} account or any of your security details have been compromised or if you become aware of any fraud or attempted fraud or any other security incident (including a cyber-security attack) affecting you and/or ${entityAlias2} (together a "Security Breach"), you must notify ${entityAlias2} support as soon as possible by email free of charge at ${entityEmail} and continue to provide accurate and up to date information throughout the duration of the Security Breach. You must take any steps that we reasonably require to reduce, manage or report any Security Breach. Failure to provide prompt notification of any Security Breach may be taken into account in our determination of the appropriate resolution of the matter.`,
        `Contact Information. You are responsible for keeping your email address up to date in your Account Profile in order to receive any notices or alerts that we may send you (including notices or alerts of actual or suspected Security Breach).`,
        `Entire Agreement. This Agreement (including documents incorporated by reference herein) comprise the entire agreement between you and ${entityAlias2}.`,
        `Interpretation. Section headings in this Agreement are for convenience only, and shall not govern the meaning or interpretation of any provision of this Agreement.`,
        `Transfer. This Agreement is personal to you and you cannot transfer or assign your rights, licenses, interests and/or obligations to anyone else. We may transfer or assign our rights licenses, interests and/or our obligations at any time, including as part of a merger, acquisition or other corporate reorganisation involving ${entityAlias2}, provided that this transfer or assignment does not materially impact the quality of the ${entityAlias2} services you receive.`,
        `Invalidity. If any provision of this Agreement is determined to be invalid or unenforceable under any applicable law, this will not affect the validity of any other provision.`,
        `Enforcement of Our Rights. We may not always strictly enforce our rights under this Agreement. If we do this, it will be just a temporary measure and we may enforce our rights strictly again at any time.`,
        `Language. This Agreement and any information or notifications that you or we are to provide should be in Indonesian and English. Any translation of this Agreement or other documents is provided for your convenience only. In the event of any inconsistency, the Indonesian and English language version of this Agreement or other documents shall prevail.`,
        `Survival. All provisions of this Agreement which by their nature extend beyond the expiration or termination of this Agreement, including, without limitation, the sections relating to suspension or termination, ${entityAlias2} account cancellation, general use of ${entityName} Site, disputes with ${entityAlias2}, and general provisions, will continue to be binding and operate after the termination or expiration of this Agreement.`,
      ],
    },
  }, // terms,
};
