// /src/config/receipts/pabrikroti.ts

// All receipts should be exported from this file.
const proTitle = "Breads Factory";
const proUrl = "https://pabrikroti.endhonesa.com";
const proName = "Breads Factory by Prof. NOTA Inc.";
const proAlias1 = "Prof. NOTA Inc.";
const proAlias2 = "Breads Factory";
const proAddress =
  "Jl. Nginden Kota 2 No. 27, Baratajaya, Kec. Gubeng, Kota Surabaya, Jawa Timur 60284, INDONESIA";
const proEmail = "nota@endhonesa.com";
const termsMonth = "Februari";
const termsDate = "29";
const termsYear = "2024";
const termsUpdate = `Last updated on ${termsMonth} ${termsDate}, ${termsYear}.`;

export const pabrikroti = {
  // colors hex libraries - graffiti mist
  colorPrimary: "#F2F2F2", // Abu terang polesan dinding tua
  colorSecondary: "#1B1B1B", // Hitam industrial
  colorTertiary: "#E8E8E8", // Abu terang berkabut
  colorPrimer: "#2E2E2E", // Abu arang (dari background Image 1)
  colorSekunder: "#5A5A5A", // Abu medium kasar
  colorTersier: "#D3D3D3", // Abu terang pastel

  // /src/app/layout.tsx
  proTitle, // layout, SearchWrapper, CoinAccess, CoinDetails, CoinsList, ConnectButtons, ConnectEmbeds, LoginLayout, NFTDetails, NFTsList, HeaderSection, ReusableMessage,
  proDescription: `The Breads Factory is a factory that produces Programmed Bread (tokenization) with a Framework of Playing, Learning, and Working or PLW.`, // layout, ConnectButtons, ConnectEmbeds,
  proUrl, // layout, ConnectButtons, ConnectEmbeds,
  proPublisher: "Prof. NOTA Inc.", // layout,
  proLocale: "en-US", // layout,
  proFavicon: "/roti/favicon.ico", // layout,
  proImage: "https://pabrikroti.endhonesa.com/roti/preview-image.png", // layout,
  proLang: "en", // layout,

  // /src/components/logins/ConnectButtons.tsx
  proLogo: "/roti/logos/logo.png", // ConnectButtons, ConnectEmbeds, QRCodeButton,

  // /src/components/logins/ErrorBoundary.tsx
  proErrorCought: "Error caught in the middle of ErrorBoundary:", // ErrorBoundary,
  proError: "Something went wrong. Please eat and try again later.", // ErrorBoundary,
  proButton: "Try Again", // ErrorBoundary,

  // /src/components/logins/LoginLayout.tsx - disable by nullifying the string
  loginArt: "/roti/images/login-art.png", // LoginLayout,
  loginBanner: "/roti/images/login-banner.png", // LoginLayout,
  loginAria: "Call to action for login.", // LoginLayout,
  loginCall: "In The Breads Factory...", // LoginLayout,
  loginReason: {
    text: "many kinds of Bread were Designed, Produced, Programmed, also Distributed",
    anchor: "...",
    link: "https://nota.endhonesa.com/profile/breads",
  }, // LoginLayout,
  loginAgreement: "By connecting, you agree to eat these", // LoginLayout,
  loginTermsPolicy: "Terms of Service & Privacy Policy", // LoginLayout,
  loginLinkPower: "https://nota.endhonesa.com/", // LoginLayout, FooterSection,
  loginLogoPower: "/roti/images/login-power.png", // LoginLayout,
  loginPoweredBy: "Baked by Prof. NOTA Inc.", // LoginLayout, FooterSection,

  // /src/components/sections/DropDownMenu.tsx - disable by nullifying the string
  ddMenuAria: "Drop Down Menu", // DropDownMenu,
  ddMenuHome: "Bon Appetite!", // DropDownMenu,
  ddMenuWhat: `Baker's Pick`, // DropDownMenu,
  ddMenuWhy: "Signature Loaf", // DropDownMenu,
  ddMenuHow: "Seasonal Special", // DropDownMenu,
  ddMenuWhen: "Small Batch", // DropDownMenu,
  ddMenuWhere: "Limited Batch", // DropDownMenu,
  ddMenuWho: "Monthly Highlight", // DropDownMenu,
  ddMenuFeatured: "Full of Flavor", // DropDownMenu,
  ddMenuFree: "Free Artisan", // DropDownMenu,
  ddMenuPaid: "Paid Artisan", // DropDownMenu,
  ddMenuCoins: "Batch Breads", // DropDownMenu,
  ddMenuMarket: "Boulangerie", // DropDownMenu,
  ddMenuMore: "Baking More!", // DropDownMenu,
  ddMenuDeploy: "Bake Breads", // DropDownMenu,
  ddMenuPublishNFT: "Serves Artisan", // DropDownMenu,
  ddMenuPublishFT: "Serves Batch", // DropDownMenu,
  ddMenuDashBoard: "Bakehouse", // DropDownMenu,
  ddMenuContactLink: "https://nota.endhonesa.com/contact", // DropDownMenu,
  ddMenuContact: "Contact Us", // DropDownMenu,
  ddMenuTerms: "Terms of Use", // DropDownMenu,

  // /src/components/sections/DropDownSorter.tsx
  ddSorterSorting: "Stack of Breads", // DropDownSorter,
  ddSorterDefault: "Default Stacking", // DropDownSorter,
  ddSorterSupply: "Remaining Slices", // DropDownSorter,
  ddSorterTime: "Start To Be Plated", // DropDownSorter,
  ddSorterPrice: "Price per Slices", // DropDownSorter,
  ddSorterClaim: "Can Be Swallowed", // DropDownSorter,

  // /src/components/sections/FooterSection.tsx - disable by nullifying the string
  footCopyRight: "Every stomach must be hungry.", // FooterSection,
  footLicensed: "Officially hungry and satisfied by", // FooterSection,
  footPrivacy: "Privacy Policy", // FooterSection,
  footTerms: "Terms of Service", // FooterSection,
  footPower: "/roti/images/footer-power.png", // FooterSection,
  footSocial: "Eat all our updates for free!", // FooterSection,
  footXTwitter: "https://x.com/MyReceiptTT", // FooterSection,
  footLinkedIn: "", // FooterSection,
  footInstagram: "https://www.instagram.com/myreceipt/", // FooterSection,
  footFacebook: "https://www.facebook.com/myreceiptt", // FooterSection,
  footDiscord: "https://discord.gg/5KrsT6MbFm", // FooterSection,
  footYouTube: "", // FooterSection,
  footEmail: "mailto:nota@endhonesa.com", // FooterSection,
  footWhatsApp: "https://wa.me/message/DPRNCTJA2Q52L1", // FooterSection,
  footWebsite: "https://nota.endhonesa.com/", // FooterSection,

  // /src/components/sections/HeaderSection.tsx
  headerLogo: "/roti/images/header-logo.png", // HeaderSection,
  headerGo: "Search", // HeaderSection,
  headerSearch: "Search Query", // HeaderSection,
  headerSearchPH: "Enter your search query", // HeaderSection,

  // /src/components/sections/SubscribeForm.tsx
  subscribeWarn:
    "Missing Web3Forms Access Key. Please set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.", // SubscribeForm,
  subscribeInput: "Please enter a valid email address.", // SubscribeForm,
  subscribeSubject: `Subscription to ${proTitle}`, // SubscribeForm,
  subscribeName: `Visitor of ${proUrl}`, // SubscribeForm,
  subscribeMessage: "I want to subscribe to the latest updates.", // SubscribeForm,
  subscribeSuccess: "Thank you for subscribing!", // SubscribeForm,
  subscribeFailed: "Subscription failed. Please try again.", // SubscribeForm,
  subscribeTitle: "Subscribe to our latest updates", // SubscribeForm,
  subscribePlaceholder: "Enter your email address", // SubscribeForm,
  subscribeButton: "Subscribe", // SubscribeForm,
  subscribeButtonLoading: "Subscribing...", // SubscribeForm,

  // /src/components/landing/FeatureGrid.tsx - disable by nullifying the string set
  features: [
    {
      icon: "🍞",
      title: "NFT Claiming",
      description: "Claim digital assets as real bread.",
      cta: { text: "Claim Now", href: "/free" },
    },
    {
      icon: "🍞",
      title: "NFT Claiming",
      description: "Claim digital assets as real bread.",
      cta: { text: "Claim Now", href: "/free" },
    },
    {
      icon: "🍞",
      title: "NFT Claiming",
      description: "Claim digital assets as real bread.",
      cta: { text: "Claim Now", href: "/free" },
    },
  ],

  // /src/components/landing/HeroSlider.tsx - disable by nullifying the string set
  heroSlides: [
    {
      title: "Programmed Artisan Breads",
      subtitle: "Digitally baked. Publicly shared.",
      description: "We tokenize culture and rewards.",
      image: "/roti/landing/slider-0.png",
      cta: { text: "Get Started", href: "/coins" },
    },
    {
      title: "Programmed Batch Breads",
      subtitle: "Digitally baked. Publicly shared.",
      description: "We tokenize culture and rewards.",
      image: "/roti/landing/slider-1.png",
      cta: { text: "Get Started", href: "/coins" },
    },
  ],

  // /src/components/landing/ParagraphText.tsx
  textMin: {
    title: "Why Bread?",
    paragraphs: [
      "Bread is a metaphor for labor, love, and story.",
      "We issue rewards as bread to be earned, not bought.",
    ],
    cta: { text: "Read the Manifesto", href: "/terms" },
  },

  // /src/components/landing/VideoEmbed.tsx
  videoEmbed: {
    url: "https://www.youtube.com/embed/abcd1234",
    cta: { text: "Join the Movement", href: "/join" },
  },

  // /src/components/landing/VisualLeft.tsx - disable by nullifying the string set
  // /src/components/landing/VisualRight.tsx - disable by nullifying the string set
  visualBlocks: [
    {
      variant: "left", // or "right"
      image: "/roti/landing/hero-1.png",
      title: "Decentralized Craft",
      description: "We respect your local ownership and labor.",
      cta: { text: "Learn More", href: "/about" },
    },
    {
      variant: "right", // or "left"
      image: "/roti/landing/hero-1.png",
      title: "Decentralized Craft",
      description: "We respect your local ownership and labor.",
      cta: { text: "Learn More", href: "/about" },
    },
  ],

  // /src/components/contents/ComingSoon.tsx
  csLoader: "Baking the best dough for you...", // ComingSoon,
  csMessage1: "Feature in the Oven", // ComingSoon,
  csMessage2: `We're still crafting this feature to perfection. It'll be served warm, functional, and full of flavor—soon!`, // ComingSoon,

  // featured cards page - hide card by nulled the title
  featuredTitle1: "All Breads", // featured cards,
  featuredTitle2: "That You Can Eat", // featured cards,
  featuredPaid: "/roti/images/featured-paid.png", // featured cards,
  paidTitle: "All Paid Artisan Breads", // featured cards,
  featuredFree: "/roti/images/featured-free.png", // featured cards,
  freeTitle: "All Free Artisan Breads", // featured cards,
  featuredCoin: "/roti/images/featured-coin.png", // featured cards,
  coinTitle: "All Batch Breads", // featured cards,
  featuredAria: "Navigate to", // featured cards,

  // reusable loader section
  loaderChecking: "Loading...", // reusable loader, nfts list, nft lister, nft details, coins list, coin lister, coin details,

  // search wrapper page
  fetchAllowList: "Failed to fetch allowlist:", // search wrapper, coins list, coin details, nfts list, nft details,
  searchMessage1: "No data was found.", // search wrapper,
  searchMessage2:
    "No data matching your search terms was found. Please try searching again using other terms or return to the home page.", // search wrapper,
  searchTitle: "Search Result:", // search wrapper,
  searchAria1: "Load previous breads.", // search wrapper, nfts list, coins list,
  searchAria2: "Refresh search results.", // search wrapper,
  searchAria3: "Load more breads.", // search wrapper, nfts list, coins list,

  // nfts list page
  nftsTitle1Free: "All Free", // nfts list,
  nftsTitle2Free: "Artisan Breads", // nfts list,
  nftsTitle1Paid: "All Paid", // nfts list,
  nftsTitle2Paid: "Artisan Breads", // nfts list,
  nftsFailReason: "ClaimNotActive", // search wrapper, nfts list, nft details, coins list, coin details,
  nftsConsoleWarn: "canClaim failed for nftId", // search wrapper, nfts list, nft details,
  nftsSetError: "Failed to fetch any artisan breads.", // search wrapper, nfts list,
  nftsError: "Lho, Error:", // search wrapper, nfts list, nft details, coins list, coin details,
  nftsUknownError: "Kok, Error:", // search wrapper, nfts list, nft details, coins list, coin details,
  nftsMessage1: "No artisan breads!", // nfts list,
  nftsMessage2:
    "There are no artisan breads right now. Please try again later or return to the home page.", // nfts list,
  nftsMessage3: "Return to the Home Page!", // search wrapper, nfts list, nft fallback, nft details, coins list, coin fallback, coin details,
  nftsPrevious: "Previous", // search wrapper, nfts list, coins list,
  nftsNext: "Next", // search wrapper, nfts list, coins list,
  nftsAria: "Refresh all breads data.", // nfts list,

  // nft lister section
  nftButton: "Swallow Now", // nft lister, nft form,
  nftSoon: "Plating in:", // nft lister, nft form, coin lister, coin form,
  nftInsufficient: "Insufficient Balance", // nft lister, nft form, coin lister, coin form,
  nftClaimed: "Swallowed", // nft lister, nft form,
  nftClosed: "Out of the Oven", // nft lister, nft form, coin lister, coin form,
  nftListerImage: "/roti/medias/artisan-bread.png", // nft lister, nft form,
  nftListerName: "An Artisan Bread", // nft lister, nft form,
  nftEditions: "Slices of Loaf:", // nft lister,
  nftNoData: "No bread available.", // nft lister,

  // nft fallback page
  nftFallMessage1: "No valid artisan bread ID was used.", // nft fallback,
  nftFallMessage2:
    "Please use a valid artisan bread ID in the URL or return to the home page and start over.", // nft fallback,

  // nft details page
  nftSetError: "Failed to fetch the artisan bread ID.", // nft details,
  nftMessage1: "The artisan bread ID not found.", // nft details,
  nftMessage2:
    "The specified artisan bread ID was not found. Please try again later or return to the home page.", // nft details,

  // nft form section
  nftFormByLink: "https://nota.endhonesa.com/", // nft form,
  nftFormBy: "by", // nft form, coin form,
  nftFormByName: `${proAlias1}`, // nft form,
  nftFormEdition: "Slices of Loaf", // nft form,
  nftFormOwned: "Swallowed", // nft form,
  nftFormRefresh: "Refresh", // nft form, coin form,
  nftFormAmount: "Amount", // nft form, coin form,
  nftFormTunggu: "Baking. Be patient and wait.", // nft form, coin form,
  nftFormKirim: "Serving your artisan bread.", // nft form,
  nftFormSukses: "Successfully served.", // nft form,
  nftFormPrice: "Price", // nft form, coin form,
  nftFormMax: "*Maximum", // nft form, coin form,
  nftFormPerWallet: "slices of loaf per bread eater.", // nft form,

  // nft description section - hide link by nulled the title
  nftMeMoRaTitle: "", // nft description,
  nftMeMoRa: "Read on MeMoRa MarketPlace (SOON)", // nft description,
  nftEndhonesaTitle: "", // nft description,
  nftEndhonesa: "Read on ENDHONESA.COM (GOON)", // nft description,
  nftReadLess: "Read Less", // nft description,
  nftReadMore: "Read More", // nft description,

  // coins list page
  coinsConsoleWarn: "canClaim failed for coinAddress:", // coins list, coin details,
  coinsSetError: "Failed to fetch any batch breads.", // coins list,
  coinsMessage1: "No batch breads", // coins list,
  coinsMessage2:
    "There are no batch breads available right now. Please try again later or return to the home page.", // coins list,
  coinsTitle1: "All Swallowable", // coins list,
  coinsTitle2: "Batch Breads", // coins list,
  coinsAria: "Refresh breads data.", // coins list,

  // coin lister section
  coinButton: "Swallow Now", // coin lister, coin form,
  coinNoAccess: "No Access", // coin lister, coin form,
  coinClaimed: "Swallowed", // coin lister, coin form,
  coinListerImage: "/roti/medias/batch-bread.png", // coin lister, coin form,
  coinListerName: "A Batch Bread", // coin lister, coin form,
  coinListerSupply: "Crumb of Batch:", // coin lister, coin details,
  coinListerOf: "of", // coin lister, coin form,

  // coin fallback page
  coinFallMessage1: "Invalid address of the batch breads.", // coin fallback,
  coinFallMessage2:
    "Please use a valid address of the batch breads in the URL or return to the home page and start over.", // coin fallback,

  // coin details page
  coinSetError: "Failed to fetch the address of the batch breads.", // coin details,
  coinMessage1: "The address of the batch breads not found.", // coin details,
  coinMessage2:
    "The specified address of the batch breads was not found. Please try again later or return to the home page.", // coin details,
  coinAccessRedirect: "/featured", // coin details
  coinAccessTitle: "You don't have access!", // coin details,

  // coin access section
  coinAccessMessage:
    "Please get your access by swallow any artisan breads at least one slice of loaf.", // coin access,
  coinAccessButton: "Get The Artisan Breads!", // coin access,
  coinAccessBanner: "/roti/images/content-banner.png", // coin access,

  // coin form section
  coinFormSupply: "Crumb of Batch", // coin form,
  coinFormOwned: "Swallowed", // coin form,
  coinFormOnChain: "On", // coin form,
  coinFormKirim: "Serving your batch bread.", // coin form,
  coinFormSukses: "Batch bread successfully served.", // coin form,
  coinFormPerWallet: "crumb of batch per bread eater.", // coin form,

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
  popUpP13: "", // coin pop up,
  popUpP14: "", // coin pop up,
  popUpImage: "/roti/medias/coin-pop-up.gif", // coin pop up,
  popUpImageAlt: "OiOi Token Illustration", // coin pop up,

  // terms page
  proName, // terms,
  proAlias1, // terms, footer section
  proAlias2, // terms,
  proAddress, // nulled
  proEmail, // terms,
  termsAria1: "Title of the Terms and Conditions", // terms,
  termsTitle: "T and C of Use", // terms,
  termsMonth, // terms,
  termsDate, // terms,
  termsYear, // terms,
  termsUpdate, // terms,
  termsAria2: `Document last updated on ${termsUpdate}`, // terms,
  termsTerms: {
    section1: {
      title: `${proName} Terms and Conditions of Use`,
      paragraphs: [
        `Please read these ${proName} Terms and Conditions of Use and Privacy Statement carefully, they contain important information about your rights and obligations.`,
        `${proAlias2} is a platform that allows you to collect, issue, and display NFTs. This ${proName} Terms and conditions of Use ("Terms and Conditions", "Agreement") document is entered into by user or users ("User", "Users" or "You"), ${proAlias1}, and ${proAlias2} (" ${proName}," "We" or "Us"). It contains terms and conditions you have agreed to abide by upon accessing ${proUrl} ("Site"). The terms govern your access and use of the ${proAlias2} ecosystem, including content, features, and functionality. By signing up to use an account through the Site, or any associated websites, APIs, or mobile applications, you agree that you have read, understood, and accept all of the terms and conditions contained in this Agreement.`,
      ],
    },
    section2: {
      title: `Basic ${proAlias2} Services`,
      items: [
        `Eligibility. To be eligible to use the ${proAlias2} services, you must register an account on ${proName} Site.`,
        `${proAlias2} Services. Your account encompasses the following basic services: Access to collect virtual collectibles in a form of Non Fungible Tokens; Access to issue and publish NFTs; Privilege tagged to NFTs that you, as an NFT collector ("Collector"), have collected.`,
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
        `${proAlias2} may modify these Terms and Conditions when ${proAlias2} deems it to be necessary, within the scope of the purposes of the Services. In such a case, ${proAlias2} will indicate the contents of the modified version of these Terms and Conditions, as well as the effective date of the modification, on the Services or on ${proName}'s website, or will publicize the same to Users by notifying Users in the manner prescribed by ${proAlias2}.`,
        "The modified version of these Terms and Conditions shall become effective as of the effective date thereof.",
      ],
    },
    section5: {
      title: `${proAlias2} ACCOUNT`,
      paragraphs: [
        `Registration of ${proAlias2} account. In order to use the ${proName} Site, you will need to register for a ${proAlias2} account by providing your information ("Personal Information"), including your email address, password, and accepting the terms of this Agreement and our Privacy Policy. We may, in our sole discretion, decide to remove your account if we find out a violation in your activities within the ${proName} Site.`,
        `Access. To access the ${proName} Site, you must have the necessary equipment or device and the associated telecommunication service subscriptions to access the Internet.`,
      ],
    },
    section6: {
      title: "Role-specific terms",
      paragraphs: [
        `Collector. As a Collector, you will gain access to browse through NFTs that are displayed on the ${proName} Site. You may obtain the ownership of any of the available NFTs by exchanging with approved tokens. You may also choose to keep the NFTs as your collection, exchange them for tokens with other Collectors or use them to redeem products and services offered by our partners if applicable. Specifically for claiming procedures, our partners have the right to set their own disclaimers. ${proName} Site is not responsible for failure to comply with the disclaimers that lead to unsuccessful NFTs redemption.`,
        "You will also gain access to publish NFTs that you have collected to be displayed and made available to be exchanged with approved tokens, if preferable. In a case where you transfer ownership of an NFT with a tagged product or service to another Collector, you will also transfer the title of the product or service.",
        "The ownership of the NFTs does not give you the right to have the ownership of the Intellectual Property rights of those NFTs.",
      ],
    },
    section7: {
      title: "Intellectual Property Rights Protection Provisions",
      paragraphs: [
        `Intellectual Property Rights. The term "Intellectual Property Rights" means all (i) patents, patent applications, patent disclosures and inventions, (ii) Internet Domain names, trademarks, service marks, trade dress, trade names, logos and corporate names and registrations and applications for registration thereof together with all of the goodwill associated therewith, (iii) copyrights (registered or unregistered) and copyrightable works and registrations and applications for registration thereof, (iv) mask works and registrations and applications thereof, (v) computer software, data, databases and documentation thereof, (vi) trade secrets and other confidential information, including ideas, formulas, compositions, inventions (whether patentable or unpatentable and whether or not reduced to practice), know-how, manufacturing and production processes and techniques, research and development information, drawings, specifications, designs, plans, proposals, technical data, and copyrightable works, financial and marketing plans and customer and supplier lists and information, and (vii) copies and tangible embodiments thereof (in whatever form or medium).`,
        `This Terms and Conditions contains how you and ${proAlias2} will protect your Intellectual Property on ${proAlias2} services exclusively.`,
        "You acknowledge that:",
        `${proAlias2} hereby grants you a limited, non-exclusive, non-transferable royalty-free right to use or display the brand, trade name, logo, site content, headings and other distinguishing marks and names of ${proAlias1} and ${proAlias2} on the site and limited for the purpose of implementing this Agreement.`,
        `Breach of Intellectual Property. ${proAlias2} wil take responsibility for any finding NFTs that are infringing Intellectual Property Rights. If you as Collector find indications of infringement of intellectual property rights on NFTs in ${proAlias2}, you can contact ${proAlias2} and ${proAlias2} will help to remove them from ${proName} site. Other than that, it will be the responsibility of you and the IP owners and should be directly resolved between you and the IP owners.`,
      ],
      ol: [
        `You are the original owner or holder of the intellectual property rights of NFTs published on ${proName} site.`,
        `You hereby declare that you fully own the intellectual property rights to the NFTs published on ${proName} site exclusively and guarantee that there are no claims from third parties for the ownership of the NFTs`,
      ],
    },
    section8: {
      title: "Restricted Matters",
      paragraphs: [
        `${proAlias2} prohibits you from engaging in any of the following acts when using the Services:`,
      ],
      ul: [
        "Acts that violate the laws and regulations, court verdicts, resolutions or orders, or administrative measures that are legally binding;",
        "Acts that may be in violation of public order, morals or customs;",
        `Acts that infringe intellectual property rights, such as copyrights, trademarks and patent rights, rights to fame, privacy, and all other rights granted by law or by a contract with ${proAlias2} and/or a third party;`,
        "Acts of posting or transmitting excessively violent expressions; expressions that lead to discrimination by race, national origin, creed, gender, social status, family origin, etc.; expressions that induce or encourage suicide, self-injurious behavior or drug abuse; or expressions that include anti-social content and lead to the discomfort of others;",
        "Acts that benefit or involve collaboration with anti-social groups;",
        "Acts that are related to religious activities or invitations to certain religious groups;",
        "Acts of unauthorized or improper collection, disclosure, or provision of any other person's personal information, registered information, user history, or the like;",
      ],
    },
    section9: {
      title: "Suspension, Termination, and Cancellation",
      paragraphs: [
        `We may (a) refuse to complete or cancel your registration, (b) suspend, restrict or terminate your access to any or all of the ${proName} Site services, and/or (c) deactivate your account with immediate effect for any reason, including but not limited to where:`,
      ],
      ul: [
        "We are, in our reasonable opinion, required to do so by applicable law or any court or other authority to which we are subject in any jurisdiction;",
        "We reasonably suspect you of acting in breach of this Agreement;",
        `We have concerns that an activity is erroneous or about the security of your account or we suspect that ${proName} Site services are being used in a fraudulent or unauthorized manner;`,
        "We suspect money laundering, terrorist financing, fraud, or any other financial crime;",
        `Use of your account is subject to any pending litigation, investigation or government proceeding and/or we perceive a heightened risk of legal or regulatory non-compliance associated with your account activity;`,
        "You take any action that may circumvent our controls such as abusing promotions which we may offer from time to time;",
      ],
      paragraphsAfterList: [
        `We may suspend, restrict, or terminate your access to any or all of ${proName} Site services and/or deactivate or cancel your ${proAlias2} account, without reason by giving you two months notice. You acknowledge that our decision to take certain actions, including limiting access to, suspending, or closing your ${proAlias2} account, may be based on confidential criteria that are essential to our risk management and security protocols. You agree that we are under no obligation to disclose the details of its risk management and security procedures to you.`,
      ],
    },
    section10: {
      title: "Liability",
      paragraphs: [
        `Release of ${proAlias2}. ${proAlias2} is a peer to peer platform that uses the distributed ledger technology, If you have a dispute with one or more users of ${proName} Site, you agree that neither we nor our affiliates or service providers, nor any of our respective officers, directors, employees, and representatives will be liable for any claims, demands, and damages (actual and consequential) of any kind or nature rising out of or in any way connected with such disputes.`,
        `Indemnification. You agree to indemnify ${proAlias2}, our affiliates and service providers, and each of our or their respective officers, directors, employees, and representatives, in respect of any costs (including attorneys' fees and any fines, fees or penalties imposed by any regulatory authority) that have been reasonably incurred in connection with any claims, demands or damages arising out of or related to your breach and / or our enforcement of this Agreement or your violation of any law, rule or regulation, or the rights of any third party.`,
        `Limitation of Liability. ${proAlias2} has no liability for services and all NFTs on the Site and ${proAlias2} shall only be liable to you for loss or damage caused directly and reasonably foreseeable by our breach of this Agreement.`,
        `No Warranties. ${proName} Site services are provided on an "as is" and "as available" basis without any representation or warranty, whether express or implied, to the maximum extent permitted by applicable law: specifically we disclaim any implied warranties of title, merchantability, fitness for a particular purpose and/or non-infringement. We do not make any representations or warranties that access to ${proName} Site, any of the ${proAlias2} services, or any of the materials contained therein, will be continuous, uninterrupted, timely or error-free.`,
        `Safety and Security of Your Computer and Devices. ${proName} Site is not liable for any damage or interruptions caused by any computer viruses, spyware, scareware, Trojan horses, worms or other malware that may affect your computer or other equipment, or any phishing, spoofing or other attack. We advise the regular use of a reputable and readily available virus screening and prevention software. You should also be aware that SMS and email services are vulnerable to spoofing and phishing attacks and should use care in reviewing messages purporting to originate from us. ${proAlias2} customer support will never ask to screen share or otherwise seek to access your computer or account.`,
        `No Liability for Breach. We are not liable for any breach of the Agreement where the breach is due to abnormal and unforeseeable circumstances beyond our control, the consequences of which would have been unavoidable despite all effects to the contrary, nor are we liable where the breach is due to the application of mandatory legal rules.`,
      ],
    },
    section11: {
      title: "Customer Feedback, Queries, Complaints, and Dispute Resolution",
      paragraphs: [
        `Contact ${proAlias2}. When you contact us please provide us with your name, email, wallet address, and any other information we may need to identify you, your ${proAlias2} account, and the activity on which you have feedback, questions, or complaints.`,
        `Complaints. In the event of a complaint, please set out the cause of your complaint, how you would like us to resolve the complaint and any other information you believe to be relevant. We will acknowledge receipt of your complaint. A Customer Complaints officer ("Officer") will consider your complaint. The Officer will consider your complaint without prejudice based on the information you have provided and any information provided by ${proAlias1}. Within 15 business days of our receipt of your complaint the Officer will address all points raised in your complaint by sending you an e-mail ("Resolution Notice") in which the Officer will: (i) offer to resolve your complaint in the way your requested; (ii) make a determination rejecting your complaint and set out the reasons for the rejection; or (iii) offer to resolve your complaint with an alternative solution. In exceptional circumstances, if the Officer is unable to respond to your complaint within 15 business days for reasons beyond ${proAlias1}'s control, the Officer will send you a holding reply indicating the reasons for a delay in answering your complaint and specifying the deadline by which the Officer will respond to your complaint (which will be no later than 35 business days from our receipt of your complaints).`,
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
        `Limited License. We grant you a limited, non-exclusive, non-transferable license, subject to the terms of this Agreement, to access and use ${proName} Site, and related content, materials, information (collectively, the "Content") solely for approved purposes as permitted by us from time to time. Any other use of ${proName} Site or Content is expressly prohibited and all other right, title, and interest in ${proName} Site or Content is exclusively the property of ${proAlias2} and its licensors. You agree not to copy, transmit, distribute, sell, license, reverse engineer, modify, publish, or participate in the transfer or sale of, create derivative works from, or in any other way exploit any of the Content, in whole orin part.`,
        `Website Accuracy. Although we intend to provide accurate and timely information on ${proName} Site, ${proName} Site (including, without limitation, the Content) may not always be entirely accurate, complete or current and may also include technical inaccuracies or typographical errors. In an effort to continue to provide you with as complete and accurate information as possible, information may, to the extent permitted by applicable law, be changed or updated from time to time without notice, including without limitation information regarding our policies, products and services. Accordingly, you should verify all information before relying on it, and all decisions based on information contained on ${proName} Site are your sole responsibility and we shall have no liability for such decisions. Links to third-party materials (including without limitation websites) may be provided as a convenience but are not controlled by us. You acknowledge and agree that we are not responsible for any aspect of the information, content, or services contained in any third-party materials or on any third party sites accessible or linked to ${proName} Site.`,
        `Relationship of the Parties. Nothing in this Agreement shall be deemed or is intended to be deemed, nor shall it cause, either you or ${proAlias2} to be treated as the agent of the other.`,
        `Privacy of Others; Marketing. If you receive information about another user through ${proName} Site services, you must keep the information confidential and only use it in connection with ${proName} Site services. You may not disclose or distribute a user's information to a third party or use the information except as reasonably necessary to effect a transaction and other functions reasonably incidental thereto such as support, reconciliation and accounting unless you receive the user's express consent to do so. You may not send unsolicited email to a user through ${proName} Site services.`,
        `Security Breach. If you suspect that your ${proAlias2} account or any of your security details have been compromised or if you become aware of any fraud or attempted fraud or any other security incident (including a cyber-security attack) affecting you and/or ${proAlias2} (together a "Security Breach"), you must notify ${proAlias2} support as soon as possible by email free of charge at ${proEmail} and continue to provide accurate and up to date information throughout the duration of the Security Breach. You must take any steps that we reasonably require to reduce, manage or report any Security Breach. Failure to provide prompt notification of any Security Breach may be taken into account in our determination of the appropriate resolution of the matter.`,
        `Contact Information. You are responsible for keeping your email address up to date in your Account Profile in order to receive any notices or alerts that we may send you (including notices or alerts of actual or suspected Security Breach).`,
        `Entire Agreement. This Agreement (including documents incorporated by reference herein) comprise the entire agreement between you and ${proAlias2}.`,
        `Interpretation. Section headings in this Agreement are for convenience only, and shall not govern the meaning or interpretation of any provision of this Agreement.`,
        `Transfer. This Agreement is personal to you and you cannot transfer or assign your rights, licenses, interests and/or obligations to anyone else. We may transfer or assign our rights licenses, interests and/or our obligations at any time, including as part of a merger, acquisition or other corporate reorganisation involving ${proAlias2}, provided that this transfer or assignment does not materially impact the quality of the ${proAlias2} services you receive.`,
        `Invalidity. If any provision of this Agreement is determined to be invalid or unenforceable under any applicable law, this will not affect the validity of any other provision.`,
        `Enforcement of Our Rights. We may not always strictly enforce our rights under this Agreement. If we do this, it will be just a temporary measure and we may enforce our rights strictly again at any time.`,
        `Language. This Agreement and any information or notifications that you or we are to provide should be in Indonesian and English. Any translation of this Agreement or other documents is provided for your convenience only. In the event of any inconsistency, the Indonesian and English language version of this Agreement or other documents shall prevail.`,
        `Survival. All provisions of this Agreement which by their nature extend beyond the expiration or termination of this Agreement, including, without limitation, the sections relating to suspension or termination, ${proAlias2} account cancellation, general use of ${proName} Site, disputes with ${proAlias2}, and general provisions, will continue to be binding and operate after the termination or expiration of this Agreement.`,
      ],
    },
  }, // terms,
};
