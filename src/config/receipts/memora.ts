// /src/config/receipts/memora.ts

// All receipts should be exported from this file.
const proTitle = "MEMORA VIRTUAL COLLECTIBLES";
const proUrl = "https://memora.voyage.co.id/";
const proName = "MeMoRa by Voyage.Co.Id";
const proAlias1 = "Voyage.Co.Id";
const proAlias2 = "MEMORA VIRTUAL COLLECTIBLES";
const proAddress =
  "Jl. Kartika Utama Blok SM No. 29, Pd. Pinang, Kec. Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12310, INDONESIA";
const proEmail = "hello@voyage.co.id";
const termsMonth = "March";
const termsDate = "20";
const termsYear = "2025";
const termsUpdate = `Last updated on ${termsMonth} ${termsDate}, ${termsYear}.`;

export const memora = {
  // colors hex libraries - memora
  colorSekunder: "#171717", // Warna identitas utama. Dominan, mencolok, brand feel. Selalu konsisten. Untuk tombol, link, badge utama, logo, brand highlight.
  colorSecondary: "#F0F0F0", // Warna latar sekunder. Kontras dengan colorSekunder. Untuk isi konten, background komponen kecil (card, section, kontainer dalam).
  colorPrimer: "#262525", // Warna teks utama. Kontras dengan colorSecondary dan colorPrimary. Untuk teks normal (judul, isi, deskripsi).
  colorPrimary: "#F9F9F9", // Warna latar utama. Kontras dengan colorSekunder. Untuk background utama halaman atau area besar.

  colorButtonText: "#F0F0F0", // Warna teks tombol. Kontras dengan colorButtonBG. Untuk teks tombol aksi utama.
  colorButtonBG: "#171717", // Warna latar tombol. Kontras dengan colorButtonText. Untuk tombol aksi utama, seperti submit, save, atau call to action.

  colorFooterText: "#171717", // Warna teks footer. Kontras dengan colorFooterBG. Untuk teks footer, link footer, informasi hak cipta.
  colorFooterBG: "#F0F0F0", // Warna latar footer. Kontras dengan colorFooterText. Untuk background footer, area bawah halaman.

  colorFooterSubsText: "#171717", // Warna teks subscribe input di footer. Kontras dengan colorFooterSubsBG. Untuk teks input email di footer.
  colorFooterSubsBorder: "#F9F9F9", // Warna batas subscribe input di footer. Kontras dengan colorFooterBG. Untuk efek batas footer, seperti garis bawah atau pembatas area footer.
  colorFooterSubsInBorder: "#DFDFDF", // Warna batas subscribe input di footer. Kontras dengan colorFooterBG. Untuk efek invalid atau salah input.
  colorFooterSubsBG: "#F9F9F9", // Warna latar subscribe input di footer. Untuk background input subscribe footer, area input email.

  colorFooterButtonText: "#F0F0F0", // Warna teks button di footer. Kontras dengan colorFooterButtonBG. Untuk teks footer, link footer, informasi hak cipta.
  colorFooterButtonBorder: "#707070", // Warna batas tombol di footer. Kontras dengan colorFooterBG. Untuk efek batas footer, seperti garis bawah atau pembatas area footer.
  colorFooterButtonInBorder: "#DFDFDF", // Warna batas tombol di footer. Kontras dengan colorFooterBG. Untuk efek invalid atau salah input.
  colorFooterButtonBG: "#171717", // Warna latar tombol di footer. Kontras dengan colorFooterBG. Untuk tombol aksi footer, seperti subscribe, contact, atau link penting.
  colorFooterButtonBGAlpha: 0.7, // Transparansi latar tombol di footer. Untuk efek transparansi pada background tombol di footer.

  colorFooterIcon: "#F0F0F0", // Warna ikon footer. Kontras dengan colorFooterIconBG. Untuk ikon media sosial, ikon footer lainnya.
  colorFooterIconBG: "#171717", // Warna latar ikon footer. Setengah kontras dengan colorFooterBG. Untuk background ikon media sosial, ikon footer lainnya.
  colorFooterIconBGAlpha: 0.7, // Transparansi latar ikon footer. Untuk efek transparansi pada background ikon media sosial, ikon footer lainnya.

  colorTersier: "#707070", // Warna teks pasif, label kecil, hint, placeholder. Setengah kontras dengan colorSecondary dan colorPrimary. Warna teks minor, untuk disabled button, subtitle, helper text, dll.
  colorTertiary: "#DFDFDF", // Warna garis batas, outline, divider, batas antar elemen. Setengah kontras dengan colorSecondary dan colorPrimary. Untuk memisahkan antar komponen secara halus, tidak mencolok.

  // /src/app/layout.tsx
  proTitle, // layout, SearchWrapper, CoinAccess, CoinDetails, CoinsList, ConnectButtons, ConnectEmbeds, LoginLayout, NFTDetails, NFTsList, HeaderSection, ReusableMessage,
  proDescription: `MeMoRa means "to remember" or "to be mindful of". MeMoRa refers to something that serves as a reminder or is used for remembering. So, commemorate your memorabilia experiences today with a unique virtual collectible of MeMoRa.`, // layout, ConnectButtons, ConnectEmbeds,
  proUrl, // layout, ConnectButtons, ConnectEmbeds,
  proPublisher: "Voyage.Co.Id", // layout,
  proLocale: "en-US", // layout,
  proFavicon: "/memora/favicon.ico", // layout,
  proImage: "https://memora.voyage.co.id/memora/preview-image.png", // layout,
  proLang: "en", // layout,

  // /src/components/contents/ScreenTooSmall.tsx
  tinyIllustration: "/memora/logos/logo.png", // ScreenTooSmall,
  tinyTitle: "Screen Too Small", // ScreenTooSmall,
  tinyText: `For the best experience, please rotate your device to landscape mode or switch to a device with a larger screen.`, // ScreenTooSmall,
  tinyHint: `Minimum screen width required: 474px`, // ScreenTooSmall,
  tinyPunchline: ``, // ScreenTooSmall,

  // /src/components/logins/ConnectButtons.tsx
  proLogo: "/memora/logos/logo.png", // ConnectButtons, ConnectEmbeds, QRCodeButton,

  // /src/components/logins/ErrorBoundary.tsx
  proErrorCought: "Error caught in ErrorBoundary:", // ErrorBoundary,
  proError: "Something went wrong. Please try again later.", // ErrorBoundary,
  proButton: "Try Again", // ErrorBoundary,

  // /src/components/logins/LoginLayout.tsx - disable loginReason by nullifying the string
  loginArt: "/memora/images/login-art.png", // LoginLayout,
  loginBanner: "/memora/images/login-banner.png", // LoginLayout,
  loginAria: "Call to action for login.", // LoginLayout,
  loginCall: "Get Ready!", // LoginLayout,
  loginReason: {
    text1: `Register now to immerse yourself in MeMoRa Experience!`,
    anchor1: ``,
    link1: "",
    text2: ``,
    anchor2: ``,
    link2: "",
  }, // LoginLayout,
  loginAgreement: "By connecting, you agree to the", // LoginLayout,
  loginTermsPolicy: "Terms of Service & Privacy Policy", // LoginLayout,
  loginLinkPower: "https://voyage.co.id/", // LoginLayout, FooterSection,
  loginLogoPower: "/memora/images/login-power.png", // LoginLayout,
  loginPoweredBy: "Powered by Voyage.Co.Id", // LoginLayout, FooterSection,

  // /src/components/sections/DropDownMenu.tsx - disable by nullifying the string
  ddMenuAria: "Drop Down Menu", // DropDownMenu,
  ddMenuHome: "Home Page", // DropDownMenu,
  ddMenuWhat: "", // DropDownMenu,
  ddMenuWhy: "", // DropDownMenu,
  ddMenuHow: "", // DropDownMenu,
  ddMenuWhen: "", // DropDownMenu,
  ddMenuWhere: "", // DropDownMenu,
  ddMenuWho: "", // DropDownMenu,
  ddMenuFeatured: "Featured", // DropDownMenu,
  ddMenuFree: "Free MeMoRa", // DropDownMenu,
  ddMenuPaid: "Paid MeMoRa", // DropDownMenu,
  ddMenuCoins: "BON Voyage", // DropDownMenu,
  ddMenuMarket: "", // DropDownMenu,
  ddMenuContent: "", // DropDownMenu,
  ddMenuMore: "Read More", // DropDownMenu,
  ddMenuDeploy: "", // DropDownMenu,
  ddMenuPublishNFT: "", // DropDownMenu,
  ddMenuPublishFT: "", // DropDownMenu,
  ddMenuDashBoard: "", // DropDownMenu,
  ddMenuContactLink: "", // DropDownMenu,
  ddMenuContact: "", // DropDownMenu,
  ddMenuTerms: "Terms of Use", // DropDownMenu,

  // /src/components/sections/DropDownSorter.tsx
  ddSorterSorting: "Sorting", // DropDownSorter,
  ddSorterDefault: "Default Sorting", // DropDownSorter,
  ddSorterSupply: "Remaining Supply", // DropDownSorter,
  ddSorterTime: "Starting Available", // DropDownSorter,
  ddSorterPrice: "Price per Edition", // DropDownSorter,
  ddSorterClaim: "Claimable Status", // DropDownSorter,

  // /src/components/sections/FooterSection.tsx - disable social link by nullifying the string
  footCopyRight: "All rights reserved.", // FooterSection,
  footLicensed: "Officially licensed product of", // FooterSection,
  footPrivacy: "Privacy Policy", // FooterSection,
  footTerms: "Terms of Service", // FooterSection,
  footPower: "/memora/images/footer-power.png", // FooterSection,
  footSocial: "Join Voyage's Community!", // FooterSection,
  footGitHub: "", // FooterSection,
  footXTwitter: "", // FooterSection,
  footLinkedIn: "https://www.linkedin.com/company/voyage-web3/about/", // FooterSection,
  footInstagram: "https://www.instagram.com/voyage.web3/", // FooterSection,
  footFacebook: "", // FooterSection,
  footDiscord: "", // FooterSection,
  footYouTube: "https://www.youtube.com/@voyageweb3", // FooterSection,
  footEmail: "mailto:hello@voyage.co.id", // FooterSection,
  footWhatsApp: "https://api.whatsapp.com/send?phone=6281808038000", // FooterSection,
  footWebsite: "", // FooterSection,

  // /src/components/sections/HeaderSection.tsx
  headerLogo: "/memora/images/header-logo.png", // HeaderSection,
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
  subscribeTitle: "Catch our latest updates", // SubscribeForm,
  subscribePlaceholder: "Enter your email address", // SubscribeForm,
  subscribeButton: "Subscribe", // SubscribeForm,
  subscribeButtonLoading: "Subscribing...", // SubscribeForm,

  // /src/components/landing/HeroSlider.tsx - disable by nullifying the string set
  heroSlides: [
    {
      title: "PABRIKROTI",
      subtitle: "Crafted Code, Wrapped in Bread.",
      description: `Build, bake, and broadcast—your digital presence kneaded from secure recipes. PABRIKROTI takes your idea, bakes it into reality with rock-solid security and open-source spirit.`,
      image: "/memora/landing/slider-1.png",
      cta: {
        text: "Let's Get Started",
        href: "https://github.com/myreceiptt/pabrikroti-master/blob/main/README.md",
        target: "_blank",
      },
    },
    {
      title: "PABRIKROTI",
      subtitle: "Security You Can Taste.",
      description: `Powered by secure design, transparent pricing, and an open-source license you can verify. Every "loaf" comes with audit logs, version history, and enterprise support—delivered fresh.`,
      image: "/memora/landing/slider-2.png",
      cta: {
        text: "View Pricing Plans",
        href: "https://github.com/myreceiptt/pabrikroti-master/blob/main/PRICING.md",
        target: "_blank",
      },
    },
  ],

  // /src/components/landing/FeatureGrid.tsx - disable by nullifying the string set
  features: [
    {
      icon: "🛡️",
      title: "Security-First Bakery",
      description: `Every "build" is scanned, audited, and signed. PABRIKROTI bakes in safety from the first commit.`,
      cta: { text: "Secure Now", href: "/coins", target: "_blank" },
    },
    {
      icon: "⚙️",
      title: "Open-Source Flavor",
      description: `From MIT licence to public source, you own the recipe—and can remix it to your taste.`,
      cta: { text: "Secure Now", href: "/coins", target: "_blank" },
    },
    {
      icon: "💰",
      title: "Transparent Pricing",
      description:
        "No hidden fees. Pick your package—Starter, Pro, Enterprise—for predictable costs and scalable growth.",
      cta: { text: "Secure Now", href: "/coins", target: "_blank" },
    },
  ],

  // /src/components/landing/ParagraphText.tsx
  textMin: {
    title: "Why PABRIKROTI Works",
    paragraphs: [
      `PABRIKROTI isn't just another platform. It's artisanal code infrastructure delivered as a service. You get end-to-end security: hardened builds, policy-driven deployment, automated secrets rotation, and a transparent license model. Combined with prices listed upfront and enterprise support options, you know exactly what you're getting—and at what cost. Everything you need is baked in, no surprises, no sugar-coated terms.`,
    ],
    cta: {
      text: "See Licensing & Usage",
      href: "https://github.com/myreceiptt/pabrikroti-master/tree/main?tab=readme-ov-file#-licensing--usage",
      target: "_blank",
    },
  },

  // /src/components/landing/VisualLeft.tsx - disable by nullifying the string set
  // /src/components/landing/VisualRight.tsx - disable by nullifying the string set
  visualBlocks: [
    {
      variant: "left", // or "right"
      image: "/memora/landing/visual-left-1.jpeg",
      title: "Security by Design",
      description: `At PABRIKROTI, security isn't an afterthought—it's baked into every step. From dependency audit and CI/CD pipeline to runtime monitoring and vulnerability scanning, your application is protected at rest, in transit, and live in production. Our SECURITY.md defines all protocols; you can inspect and verify every line.`,
      cta: {
        text: "Learn About Security",
        href: "https://github.com/myreceiptt/pabrikroti-master/blob/main/SECURITY.md",
        target: "_blank",
      },
    },
    {
      variant: "right", // or "left"
      image: "/memora/landing/visual-right-1.jpeg",
      title: "Pricing That Scales with You",
      description: `Whether you're testing a prototype or running enterprise-grade workloads, our transparent pricing scales. Starter plan for hobbyists, Pro for developers, Enterprise for organizations. No hidden tiers, no unexpected excess fees—just predictable cost as you grow. PRICING.md makes every detail open and auditable.`,
      cta: {
        text: "Browse Pricing",
        href: "https://github.com/myreceiptt/pabrikroti-master/blob/main/PRICING.md",
        target: "_blank",
      },
    },
  ],

  // /src/components/landing/VideoEmbed.tsx
  videoEmbed: {
    url: "https://www.youtube.com/embed/abcd1234",
    cta: { text: "PABRIKROTI in 60 Seconds", href: "/join", target: "_blank" },
  },

  // /src/components/contents/ComingSoon.tsx
  csLoader: "Hang tight...", // ComingSoon,
  csMessage1: "Not Ready Yet", // ComingSoon,
  csMessage2: `Currently under development with care. Stay tuned for something freshly built.`, // ComingSoon,

  // featured cards page - hide card by nulled the title
  featuredTitle1: "MEMORA VIRTUAL", // featured cards,
  featuredTitle2: "COLLECTIBLES", // featured cards,
  featuredPaid: "/memora/images/featured-paid.png", // featured cards,
  paidTitle: "Paid Virtual Collectibles", // featured cards,
  paidLink: "/paid", // featured cards,
  featuredFree: "/memora/images/featured-free.png", // featured cards,
  freeTitle: "Free Virtual Collectibles", // featured cards,
  freeLink: "/free", // featured cards,
  featuredCoin: "/memora/images/featured-coin.png", // featured cards,
  coinTitle: "Redeem Points Reward", // featured cards,
  coinLink: "/coins", // featured cards,
  featuredAria: "Navigate to", // featured cards,

  // reusable loader section
  loaderChecking: "Loading...", // reusable loader, nfts list, nft lister, nft details, coins list, coin lister, coin details,

  // search wrapper page
  fetchAllowList: "Failed to fetch allowlist:", // search wrapper, coins list, coin details, nfts list, nft details,
  searchLoader: "Ups! Your query mismatch.", // search wrapper,
  searchMessage1: "No data was found.", // search wrapper,
  searchMessage2:
    "No data matching your search terms was found. Please try searching again using other terms or return to the home page.", // search wrapper,
  searchTitle: "Search Result:", // search wrapper,
  searchAria1: "Load previous items.", // search wrapper, nfts list, coins list,
  searchAria2: "Refresh search results.", // search wrapper,
  searchAria3: "Load more items.", // search wrapper, nfts list, coins list,

  // nfts list page
  nftsFTGated: false, // nfts list, nft details,
  nftsTitle1Free: "All Free", // nfts list,
  nftsTitle2Free: "Collectibles", // nfts list,
  nftsTitle1Paid: "All Paid", // nfts list,
  nftsTitle2Paid: "Collectibles", // nfts list,
  nftsFailReason: "ClaimNotActive", // search wrapper, nfts list, nft details, coins list, coin details,
  nftsConsoleWarn: "canClaim failed for nftId", // search wrapper, nfts list, nft details,
  nftsSetError: "Failed to fetch any available collectibles.", // search wrapper, nfts list,
  nftsError: "Lho, Error:", // search wrapper, nfts list, nft details, coins list, coin details,
  nftsUknownError: "Kok, Error:", // search wrapper, nfts list, nft details, coins list, coin details,
  nftsMessage1: "No available collectibles!", // nfts list,
  nftsMessage2:
    "There are no available collectibles right now. Please try again later or return to the home page.", // nfts list,
  nftsMessage3: "Return to the Home Page!", // search wrapper, nfts list, nft fallback, nft details, coins list, coin fallback, coin details,
  nftsPrevious: "Previous", // search wrapper, nfts list, coins list,
  nftsNext: "Next", // search wrapper, nfts list, coins list,
  nftsAria: "Refresh all collectibles data.", // nfts list,

  // nft lister section
  nftButton: "Collect Now", // nft lister, nft form,
  nftSoon: "Available in:", // nft lister, nft form, coin lister, coin form,
  nftInsufficient: "Insufficient Balance", // nft lister, nft form, coin lister, coin form,
  nftClaimed: "Got It", // nft lister, nft form,
  nftClosed: "Fully Depleted", // nft lister, nft form, coin lister, coin form,
  nftListerImage: "/memora/medias/artisan-bread.gif", // nft lister, nft form,
  nftListerName: "An Available Collectibles", // nft lister, nft form,
  nftEditions: "Edition:", // nft lister,
  nftNoData: "No data available.", // nft lister,

  // nft fallback page
  nftFallMessage1: "No valid collectible ID was used.", // nft fallback,
  nftFallMessage2:
    "Please use a valid collectible ID in the URL or return to the home page and start over.", // nft fallback,

  // nft details page
  nftSetError: "Failed to fetch the collectible ID.", // nft details,
  nftMessage1: "The collectible ID not found.", // nft details,
  nftMessage2:
    "The specified collectible ID was not found. Please try again later or return to the home page.", // nft details,
  nftAccessRedirect: "/coins", // nft details

  // nft access section
  nftAccessMessage:
    "Please get your access by get any point rewards at least not zero balance.", // nft access,
  nftAccessButton: "Get The Point Rewards!", // nft access,
  nftAccessBanner: "/memora/images/content-banner.png", // nft access,

  // nft form section
  nftFormByLink: "https://memora.voyage.co.id/", // nft form,
  nftFormBy: "by", // nft form, coin form,
  nftFormByName: `${proAlias1}`, // nft form,
  nftFormEdition: "Edition", // nft form,
  nftFormOwned: "Collected", // nft form,
  nftFormRefresh: "Refresh", // nft form, coin form,
  nftFormAmount: "Amount", // nft form, coin form,
  nftFormTunggu: "Processing. Be patient and wait.", // nft form, coin form,
  nftFormKirim: "Collecting your collectible.", // nft form,
  nftFormSukses: "Collected. Check your wallet now.", // nft form,
  nftFormPrice: "Price", // nft form, coin form,
  nftFormMax: "*Maximum", // nft form, coin form,
  nftFormPerWallet: "edition per collector.", // nft form,

  // nft description section - hide link by nulled the title
  nftMeMoRaTitle: "", // nft description,
  nftMeMoRa: "Read on MeMoRa MarketPlace (SOON)", // nft description,
  nftEndhonesaTitle: "", // nft description,
  nftEndhonesa: "Read on ENDHONESA.COM (GOON)", // nft description,
  nftReadLess: "Read Less", // nft description,
  nftReadMore: "Read More", // nft description,

  // coins list page
  coinsConsoleWarn: "canClaim failed for coinAddress:", // coins list, coin details,
  coinsSetError: "Failed to fetch any claimable points.", // coins list,
  coinsMessage1: "No claimable points", // coins list,
  coinsMessage2:
    "There are no claimable points available right now. Please try again later or return to the home page.", // coins list,
  coinsNFTGated: true, // coins list, coin details,
  coinsTitle1: "Claim All", // coins list,
  coinsTitle2: "Poins Reward", // coins list,
  coinsAria: "Refresh points data.", // coins list,

  // coin lister section
  coinButton: "Claim Now", // coin lister, coin form,
  coinNoAccess: "No Access", // coin lister, coin form,
  coinClaimed: "Claimed", // coin lister, coin form,
  coinListerImage: "/memora/medias/batch-bread.gif", // coin lister, coin form,
  coinListerName: "A Claimable Point", // coin lister, coin form,
  coinListerSupply: "Supply:", // coin lister, coin details,
  coinListerOf: "of", // coin lister, coin form,

  // coin fallback page
  coinFallMessage1: "Invalid point address used.", // coin fallback,
  coinFallMessage2:
    "Please use a valid address of the claimable point in the URL or return to the home page and start over.", // coin fallback,

  // coin details page
  coinSetError: "Failed to fetch the point address.", // coin details,
  coinMessage1: "The point address not found.", // coin details,
  coinMessage2:
    "The specified address of the point was not found. Please try again later or return to the home page.", // coin details,
  coinAccessRedirect: "/featured", // coin details
  coinAccessTitle: "You don't have access!", // coin details, nft details,

  // coin access section
  coinAccessMessage:
    "Please get your access by get any available collectibles at least one edition.", // coin access,
  coinAccessButton: "Get The Available Collectibles!", // coin access,
  coinAccessBanner: "/memora/images/content-banner.png", // coin access,

  // coin form section
  coinFormSupply: "Supply", // coin form,
  coinFormOwned: "Claimed", // coin form,
  coinFormOnChain: "On", // coin form,
  coinFormKirim: "Claiming your point.", // coin form,
  coinFormSukses: "Point successfully claimed.", // coin form,
  coinFormPerWallet: "supply per holder.", // coin form,

  // coin pop up section
  popUpTitle: `$BON Dosh!!!!`, // coin pop up,
  popUpP1: `At a certain point in time… in the Realm of Reality.`, // coin pop up,
  popUpP2: `On EARTH #474, after traversing 4.5 billion years in the vastness of the cosmos, a group of individuals embarked on an extraordinary journey. They did not merely traverse land, but also crossed the oceans and even ventured into the boundless expanse of space. Thus, the VOYAGE began—not merely a physical expedition, but a pursuit of values, encounters, and growth.`, // coin pop up,
  popUpP3: `As time unfolded, their efforts met challenges and opportunities alike. Revenue flowed in and out, weaving a pattern akin to the ceaseless tides of the sea. Every meeting with a new soul, every crossroads encountered, every farewell, and every joyous reunion—each left an indelible mark upon the tapestry of this great journey.`, // coin pop up,
  popUpP4: `The call &quot;BON VOYAGE!&quot; grew louder, reverberating not only in the minds of those undertaking the VOYAGE but also weaving itself into the very fabric of decentralised data traffic. What was once a mere expression of well-wishes, BON had now evolved into something far greater—a unit of measure for the VOYAGE itself.`, // coin pop up,
  popUpP5: ``, // coin pop up,
  popUpP6: ``, // coin pop up,
  popUpP7: ``, // coin pop up,
  popUpP8: ``, // coin pop up,
  popUpUlLi1: `🔹 How far has the VOYAGE taken them?`, // coin pop up,
  popUpUlLi2: `🔹 How much value has been forged along the way?`, // coin pop up,
  popUpUlLi3: `🔹 How many encounters have shaped the path?`, // coin pop up,
  popUpUlLi4: `🔹 How much revenue has been channelled and exchanged?`, // coin pop up,
  popUpUlLi5: ``, // coin pop up,
  popUpUlLi6: ``, // coin pop up,
  popUpP9: `BON stands as a measure that immortalises experience, a token of equivalence (ERC-20) that encapsulates the influence of every participant in the VOYAGE.`, // coin pop up,
  popUpP10: `BON is not just a figure—it is proof of the steps taken, the values cultivated, and the impact left behind.`, // coin pop up,
  popUpP11: `And at the culmination of every journey—whether at its inception or after traversing great distances—one call continues to resonate, carrying forth the spirit of adventure and purpose:`, // coin pop up,
  popUpP12: `BON VOYAGE! 🚀`, // coin pop up,
  popUpP13: `🍌☕🍌☕`, // coin pop up,
  popUpP14: `Prof. NOTA v.11.11.11`, // coin pop up,
  popUpImage: "/memora/medias/coin-pop-up.gif", // coin pop up,
  popUpImageAlt: `BON VOYAGE Token Illustration`, // coin pop up,

  // others page
  contentAccessMode: "AND", // AND | OR | RELAXED, perks page,
  contentButtonLabel: "Coming Soon", // perks page,
  contentImage1: "/memora/medias/content-perks-1.png", // perks page,
  contentName1: "First Wave Cover", // perks page,
  contentText1: `We are your mirror, encrypted.`, // perks page,
  contentImage2: "/memora/medias/content-perks-2.png", // perks page,
  contentName2: "Pseudonim Post", // perks page,
  contentText2: `We are Prof. NOTA, and so are you.`, // perks page,
  contentImage3: "/memora/medias/content-perks-3.png", // perks page,
  contentName3: "Never Dared to Name", // perks page,
  contentText3: `We are already part of your story.`, // perks page,
  contentNFTGated: true, // perks page,
  contentFTGated: true, // perks page,
  contentTitle1: "Perks of", // perks page,
  contentTitle2: "Being Prof. NOTA", // perks page,
  contentNoAccess: "/memora/medias/content-no-access.png", // perks page,

  // content fallback page
  contentFallLoader: `Don't rush, take it slow.`, // content fallback,
  contentFallMessage1: `Invalid URL used.`, // content fallback,
  contentFallMessage2: `Please use a valid page address in the URL or return to the home page and start over.`, // content fallback,

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
