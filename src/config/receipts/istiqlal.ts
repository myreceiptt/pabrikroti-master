// /src/config/receipts/istiqlal.ts

// All receipts should be exported from this file.
const proTitle = "Istiqlal Digital Legacy - LPM-BPMI";
const proUrl = "https://nft.istiqlal.or.id";
const entityName = "LPM-BPMI X NFT Indonesia";
const entityAlias1 = "LPM-BPMI";
const entityAlias2 = "NFT Indonesia";
const entityAddress =
  "Jl. Taman Wijaya Kusuma, Pasar Baru, Sawah Besar, Central Jakarta City, Jakarta 10710, INDONESIA";
const entityEmail = "hallonftindonesia@gmail.com";
const termsMonth = "April";
const termsDate = "20";
const termsYear = "2025";
const termsUpdate = `Dokumen ini terakhir diperbarui pada tanggal ${termsDate} ${termsMonth}, ${termsYear}.`;

export const istiqlal = {
  // colors hex libraries - mystic coral
  colorPrimary: "#FFF8F7", // Putih Pink Coral Laut
  colorSecondary: "#523B3A", // Coklat Batu Karang Gelap
  colorAccent: "#291D1D", // Hitam Coral Tua
  colorBoxIcon: "#F5EAE9", // Coral Putih
  colorIcon: "#8A6665", // Abu Coral Tua
  colorBorder: "#E0CFCF", // Abu Coral Terang

  // layout...
  proTitle, // layout, coin access, connect buttons, connect embeds, login layout, header section, reusable message,
  proDescription:
    "Istiqlal Digital Legacy (IDL) adalah program berbasis Web3 yang bertujuan untuk meningkatkan partisipasi jamaah dalam melestarikan warisan seni-budaya Islam, dan memajukan ekosistem digital di lingkungan masjid Istiqlal.", // layout, connect buttons, connect embeds,
  proUrl, // layout, connect buttons, connect embeds,
  proPublisher: "NFT Indonesia", // layout,
  proLocale: "id-ID", // layout,
  proFavicon: "/istiqlal/favicon.ico", // layout,
  proImage: "https://nft.istiqlal.or.id/istiqlal/preview-image.png", // layout,
  proLang: "id", // layout,

  // error boundary section
  proErrorCought: "Terjadi kesalahan di ErrorBoundary:", // error boundary,
  proError: "Terjadi kesalahan. Coba lagi nanti.", // error boundary,
  proButton: "Coba Lagi", // error boundary,

  // connect buttons section
  proLogo: "/istiqlal/logos/logo.png", // connect buttons, connect embeds,

  // login layout section
  loginArt: "/istiqlal/images/login-art.png", // login layout,
  loginBanner: "/istiqlal/images/login-banner.png", // login layout,
  loginAria: "Ajakan bertindak untuk masuk.", // login layout,
  loginCall: "Log In Sekarang!", // login layout,
  loginReason: {
    text: "Raih berkah kejutan spesial! Nikmati pengalaman seru, kartu kolektibel, kupon digital, dan hadiah menarik. Jangan sampai ketinggalan!",
    anchor: "",
    link: "",
  }, // login layout,
  loginAgreement: "Dengan melanjutkan, Anda setuju dengan", // login layout,
  loginTermsPolicy: "Syarat Ketentuan & Kebijakan Privasi", // login layout,
  linkPower: "https://www.voyage.co.id/", // login layout, footer section
  loginPower: "/istiqlal/images/login-power.png", // login layout,
  poweredBy:
    "Didukung oleh Istiqlal Global Fund dan Teknologi oleh Voyage.Co.Id", // login layout, footer section

  // header section
  headerLogo: "/istiqlal/images/header-logo.png", // header,
  headerGo: "Cari Sekarang", // header,
  headerSearch: "Kueri Pencarian", // header,

  // footer section - hide social icon by nulled the link
  copyRight: "Seluruh hak cipta dilindungi.", // footer,
  officiallyLicensed: "Produk resmi berlisensi dari", // footer,
  anchorPrivacy: "Kebijakan Privasi", // footer,
  anchorTerms: "Syarat Ketentuan", // footer,
  footerPower: "/istiqlal/images/footer-power.png", // footer,
  socialTitle: "Ikuti dan Gabung Komunitas Kami!", // footer,
  linkXTwitter: "", // footer,
  linkLinkedIn: "", // footer,
  linkInstagram: "https://www.instagram.com/masjidistiqlal.official/", // footer,
  linkFacebook: "https://www.facebook.com/masjidistiqlaloffcial", // footer,
  linkDiscord: "", // footer,
  linkYouTube: "https://www.youtube.com/@MasjidIstiqlalTV", // footer,
  linkEmail: "mailto:info@istiqlal.or.id", // footer,
  linkWhatsApp: "https://wa.me/082123116910", // footer,
  linkWebsite: "https://www.istiqlal.or.id/", // footer,

  // subscribe form section
  subscribeWarn:
    "Kunci Akses Web3Forms Hilang. Harap atur NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.", // subscribe form,
  subscribeInput: "Silakan masukkan alamat email yang valid.", // subscribe form,
  subscribeSubject: `Berlangganan ke ${proTitle}`, // subscribe form,
  subscribeName: `Pengunjung dari ${proUrl}`, // subscribe form,
  subscribeMessage: "Saya ingin berlangganan pembaruan terkini.", // subscribe form,
  subscribeSuccess: "Terima kasih telah berlangganan!", // subscribe form,
  subscribeFailed: "Langganan gagal. Silakan coba lagi.", // subscribe form,
  subscribeTitle: "Dapatkan update terbaru dari kami", // subscribe form,
  subscribePlaceholder: "Masukkan alamat email Anda", // subscribe form,
  subscribeButton: "Berlangganan", // subscribe form,
  subscribeButtonLoading: "Berlangganan...", // subscribe form,

  // featured cards page - hide card by nulled the title
  featuredTitle1: "Warisan Digital", // featured cards,
  featuredTitle2: "Masjid Istiqlal", // featured cards,
  featuredPaid: "/istiqlal/images/featured-paid.png", // featured cards,
  paidTitle: "Koleksi Digital Berbayar", // featured cards,
  featuredFree: "/istiqlal/images/featured-free.png", // featured cards,
  freeTitle: "Koleksi Digital Gratis", // featured cards,
  featuredCoin: "/istiqlal/images/featured-coin.png", // featured cards,
  coinTitle: "Poin Hadiah IDL", // featured cards,
  featuredAria: "Navigasi ke", // featured cards,

  // reusable loader section
  loaderChecking: "Memuat...", // reusable loader, nfts list, nft lister, nft details, coins list, coin lister, coin details,

  // search wrapper page
  searchMessage1: "Tidak ada data yang ditemukan.", // search wrapper,
  searchMessage2:
    "Tidak ditemukan data yang sesuai dengan istilah pencarian Anda. Coba cari lagi menggunakan istilah lain atau kembali ke beranda.", // search wrapper,
  searchTitle: "Hasil Pencarian:", // search wrapper,
  searchAria1: "Muat item sebelumnya.", // search wrapper, nfts list, coins list,
  searchAria2: "Segarkan hasil pencarian.", // search wrapper,
  searchAria3: "Muat lebih banyak item.", // search wrapper, nfts list, coins list,

  // nfts list page
  nftsTitle1Free: "Kolektibel", // nfts list,
  nftsTitle2Free: "IDL Gratis", // nfts list,
  nftsTitle1Paid: "Kolektibel", // nfts list,
  nftsTitle2Paid: "IDL Berbayar", // nfts list,
  nftsFailReason: "ClaimNotActive", // search wrapper, nfts list, nft details, coins list, coin details,
  nftsConsoleWarn: "canClaim gagal untuk nftId", // search wrapper, nfts list, nft details,
  nftsSetError: "Gagal mengambil kolektibel yang tersedia.", // search wrapper, nfts list,
  nftsError: "Lho, Error:", // search wrapper, nfts list, nft details, coins list, coin details,
  nftsUknownError: "Kok, Error:", // search wrapper, nfts list, nft details, coins list, coin details,
  nftsMessage1: "Tidak ada kolektibel yang tersedia.", // nfts list,
  nftsMessage2:
    "Saat ini tidak ada kolektibel yang tersedia. Silakan coba lagi nanti atau kembali ke beranda.", // nfts list,
  nftsMessage3: "Kembali ke Halaman Beranda!", // search wrapper, nfts list, nft fallback, nft details, coins list, coin fallback, coin details,
  nftsPrevious: "Sebelumnya", // search wrapper, nfts list, coins list,
  nftsNext: "Berikutnya", // search wrapper, nfts list, coins list,
  nftsAria: "Segarkan semua data kolektibel.", // nfts list,

  // nft lister section
  nftButton: "Klaim Sekarang", // nft lister, nft form,
  nftSoon: "Tersedia dalam:", // nft lister, nft form, coin lister, coin form,
  nftInsufficient: "Saldo Tidak Cukup", // nft lister, nft form, coin lister, coin form,
  nftClaimed: "Sudah Diklaim", // nft lister, nft form,
  nftClosed: "Sudah Habis", // nft lister, nft form, coin lister, coin form,
  nftListerImage: "/istiqlal/medias/artisan-bread.png", // nft lister, nft form,
  nftListerName: "Kolektibel yang Tersedia", // nft lister, nft form,
  nftEditions: "Edisi:", // nft lister,
  nftNoData: "Tidak ada data yang tersedia.", // nft lister,

  // nft fallback page
  nftFallMessage1: "Tidak valid ID kolektibel yang digunakan.", // nft fallback,
  nftFallMessage2:
    "Silakan gunakan ID kolektibel yang valid di URL atau kembali ke beranda dan mulai dari awal.", // nft fallback,

  // nft details page
  nftSetError: "Gagal mengambil data kolektibel.", // nft details,
  nftMessage1: "ID kolektibel tidak ditemukan.", // nft details,
  nftMessage2:
    "ID kolektibel yang ditentukan tidak ditemukan. Silakan coba lagi nanti atau kembali ke beranda.", // nft details,

  // nft form section
  nftFormByLink: "https://nftindonesia.xyz/", // nft form,
  nftFormBy: "oleh", // nft form, coin form,
  nftFormByName: `${entityAlias2}`, // nft form,
  nftFormEdition: "Edisi", // nft form,
  nftFormOwned: "Sudah Diklaim", // nft form,
  nftFormRefresh: "Segarkan", // nft form, coin form,
  nftFormTunggu: "Diproses. Mohon bersabar dan tunggu.", // nft form, coin form,
  nftFormKirim: "Mengklaim kolektibel Anda.", // nft form,
  nftFormSukses: "Kolektibel berhasil diklaim.", // nft form,
  nftFormPrice: "Harga", // nft form, coin form,
  nftFormMax: "*Maksimum", // nft form, coin form,
  nftFormPerWallet: "edisi per akun.", // nft form,

  // nft description section - hide link by nulled the title
  nftMeMoRaTitle: "", // nft description,
  nftMeMoRa: "Baca di MeMoRa MarketPlace (SOON)", // nft description,
  nftEndhonesaTitle: "", // nft description,
  nftEndhonesa: "Baca di ENDHONESA.COM (GOON)", // nft description,
  nftReadLess: "Baca Lebih Sedikit", // nft description,
  nftReadMore: "Baca Selengkapnya", // nft description,

  // coins list page
  coinsConsoleWarn: "canClaim gagal untuk coinAddress:", // coins list, coin details,
  coinsSetError: "Gagal mengambil poin yang bisa diklaim.", // coins list,
  coinsMessage1: "Tidak ada poin yang bisa diklaim", // coins list,
  coinsMessage2:
    "Tidak ada poin yang bisa diklaim saat ini. Silakan coba lagi nanti atau kembali ke beranda.", // coins list,
  coinsTitle1: "Semua Poin", // coins list,
  coinsTitle2: "Bisa Diklaim", // coins list,
  coinsAria: "Segarkan data semua poin.", // coins list,

  // coin lister section
  coinButton: "Klaim Sekarang", // coin lister, coin form,
  coinNoAccess: "Tidak Punya Akses", // coin lister, coin form,
  coinClaimed: "Sudah Diklaim", // coin lister, coin form,
  coinListerImage: "/istiqlal/medias/batch-bread.png", // coin lister, coin form,
  coinListerName: "Poin yang Bisa Diklaim", // coin lister, coin form,
  coinListerSupply: "Jumlah:", // coin lister, coin details,
  coinListerOf: "dari", // coin lister, coin form,

  // coin fallback page
  coinFallMessage1: "Alamat poin yang digunakan tidak valid.", // coin fallback,
  coinFallMessage2:
    "Silakan gunakan alamat yang valid dari poin yang dapat diklaim di URL atau kembali ke beranda dan mulai dari awal.", // coin fallback,

  // coin details page
  coinSetError: "Gagal mengambil alamat poin.", // coin details,
  coinMessage1: "Alamat poin tidak ditemukan.", // coin details,
  coinMessage2:
    "Alamat poin yang ditentukan tidak ditemukan. Silakan coba lagi nanti atau kembali ke beranda.", // coin details,
  coinAccessTitle: "Anda tidak memiliki akses!", // coin details,

  // coin access section
  coinAccessMessage:
    "Silakan dapatkan akses dengan mendapatkan kolektibel apa pun yang tersedia minimal satu edisi.", // coin access,
  coinAccessButton: "Dapatkan Kolektibel yang Tersedia!", // coin access,
  coinAccessBanner: "/istiqlal/images/content-banner.png", // coin access,

  // coin form section
  coinFormSupply: "Jumlah", // coin form,
  coinFormOwned: "Sudah Diklaim", // coin form,
  coinFormOnChain: "di", // coin form, coin lister, nft form, nft lister,
  coinFormKirim: "Mengklaim poin Anda.", // coin form,
  coinFormSukses: "Poin berhasil diklaim.", // coin form,
  coinFormPerWallet: "poin per akun.", // coin form,

  // coin description section
  coinDescription: "IDL poin adalah token yang dapat dipertukarkan.", // coin description,

  // coin pop up section
  popUpTitle: "IDL Token", // coin pop up,
  popUpP1: "Istiqlal Digital Legacy", // coin pop up,
  popUpP2:
    "IDL Token adalah poin digital yang diberikan kepada jamaah Masjid Istiqlal sebagai bukti partisipasi dan kontribusi mereka dalam kegiatan keagamaan, sosial, atau budaya di masjid.", // coin pop up,
  popUpP3: "", // coin pop up,
  popUpP4: "", // coin pop up,
  popUpP5: "", // coin pop up,
  popUpP6: "", // coin pop up,
  popUpP7: "", // coin pop up,
  popUpP8: "", // coin pop up,
  popUpUlLi1: "", // coin pop up,
  popUpUlLi2: "", // coin pop up,
  popUpUlLi3: "", // coin pop up,
  popUpUlLi4: "", // coin pop up,
  popUpUlLi5: "", // coin pop up,
  popUpUlLi6: "", // coin pop up,
  popUpP9: "", // coin pop up,
  popUpP10: "", // coin pop up,
  popUpP11: "", // coin pop up,
  popUpP12: "", // coin pop up,
  popUpP13: "", // coin pop up,
  popUpP14: "", // coin pop up,
  popUpImage: "/istiqlal/medias/coin-pop-up.png", // coin pop up,
  popUpImageAlt: "IDL Token Illustration", // coin pop up,

  // terms page
  entityName, // terms,
  entityAlias1, // terms, footer section
  entityAlias2, // terms,
  entityAddress, // nulled
  entityEmail, // terms,
  termsAria1: "Judul Syarat dan Ketentuan", // terms,
  termsTitle: "Syarat dan Ketentuan Penggunaan", // terms,
  termsMonth, // terms,
  termsDate, // terms,
  termsYear, // terms,
  termsUpdate, // terms,
  termsAria2: `${termsUpdate}`, // terms,
  termsTerms: {
    section1: {
      title: `Syarat dan Ketentuan Penggunaan ${entityName}`,
      paragraphs: [
        `Silahkan baca baik-baik Syarat dan Ketentuan Penggunaan ${entityName} berikut ini yang berisi informasi penting tentang hak dan kewajiban Anda.`,
        `${entityAlias2} adalah platform yang memungkinkan Anda mengumpulkan, menerbitkan, dan menampilkan NFT. Dokumen Syarat dan Ketentuan Penggunaan ("Syarat dan Ketentuan", "Perjanjian") ${entityName} ini dibuat oleh pengguna atau para pengguna ("Pengguna", "Para Pengguna" atau "Anda"), ${entityAlias1}, dan ${entityAlias2} (" ${entityName}," "Kami" or "Kita"). Dokumen ini memuat syarat dan ketentuan yang telah Anda setujui untuk patuhi saat mengakses ${proUrl} ("Situs"). Syarat dan ketentuan ini mengatur akses dan penggunaan Anda terhadap ekosistem ${entityAlias2}, termasuk konten, fitur, dan fungsionalitas. Dengan mendaftar untuk menggunakan akun melalui Situs, atau situs web, API, atau aplikasi seluler terkait, Anda setuju bahwa Anda telah membaca, memahami, dan menerima semua syarat dan ketentuan yang terdapat dalam Perjanjian ini.`,
      ],
    },
    section2: {
      title: `Layanan Dasar ${entityAlias2}`,
      items: [
        `Persyaratan. Agar memenuhi syarat untuk menggunakan layanan ${entityAlias2}, Anda harus mendaftarkan akun di Situs ${entityName}.`,
        `Layanan ${entityAlias2}. Akun Anda mencakup layanan dasar berikut: Akses untuk mengumpulkan koleksi virtual dalam bentuk Non Fungible Token; Akses untuk menerbitkan dan menerbitkan NFT; Hak istimewa yang ditandai pada NFT yang telah Anda, sebagai kolektor NFT ("Kolektor"), kumpulkan.`,
      ],
    },
    section3: {
      title: "Persetujuan terhadap Syarat dan Ketentuan ini",
      paragraphs: [
        "Semua Pengguna harus menggunakan Layanan sesuai dengan Syarat dan Ketentuan ini. Pengguna tidak boleh menggunakan Layanan kecuali mereka menyetujui Syarat dan Ketentuan ini.",
        "Pengguna yang masih di bawah umur hanya dapat menggunakan Layanan setelah memperoleh persetujuan terlebih dahulu dari orang tua atau wali sah mereka. Lebih lanjut, jika Pengguna akan menggunakan Layanan atas nama atau untuk tujuan suatu badan usaha, maka badan usaha tersebut juga harus menyetujui Persyaratan dan Ketentuan ini sebelum menggunakan Layanan.",
        "Apabila terdapat Syarat dan Ketentuan Terpisah yang berlaku pada Layanan, Pengguna juga harus mematuhi Syarat dan Ketentuan Terpisah tersebut serta Syarat dan Ketentuan ini dalam menggunakan Layanan.",
      ],
    },
    section4: {
      title: "Modifikasi terhadap Syarat dan Ketentuan ini",
      paragraphs: [
        `${entityAlias2} dapat mengubah Syarat dan Ketentuan ini apabila ${entityAlias2} menganggapnya perlu, dalam lingkup tujuan Layanan. Dalam hal demikian, ${entityAlias2} akan mencantumkan isi versi perubahan dari Syarat dan Ketentuan ini, serta tanggal efektif perubahan tersebut, pada Layanan atau pada situs web ${entityName}, atau akan mengumumkannya kepada Pengguna dengan memberitahukan kepada Pengguna dengan cara yang ditentukan oleh ${entityAlias2}.`,
        "Versi perubahan dari Syarat dan Ketentuan ini akan berlaku sejak tanggal efektifnya.",
      ],
    },
    section5: {
      title: `Akun ${entityAlias2}`,
      paragraphs: [
        `Pendaftaran akun ${entityAlias2}. Untuk dapat menggunakan Situs ${entityName}, Anda harus mendaftar akun ${entityAlias2} dengan memberikan informasi Anda ("Informasi Pribadi"), termasuk alamat email, kata sandi, dan menyetujui ketentuan Perjanjian ini dan Kebijakan Privasi kami. Atas pertimbangan kami sendiri, kami dapat memutuskan untuk menghapus akun Anda jika kami menemukan pelanggaran dalam aktivitas Anda di Situs ${entityName}.`,
        `Akses. Untuk mengakses Situs ${entityName}, Anda harus memiliki peralatan atau perangkat yang diperlukan dan langganan layanan telekomunikasi terkait untuk mengakses Internet.`,
      ],
    },
    section6: {
      title: "Istilah untuk Peran-Khusus",
      paragraphs: [
        `Kolektor. Sebagai Kolektor, Anda akan memperoleh akses untuk menelusuri NFT yang ditampilkan di Situs ${entityName}. Anda dapat memperoleh kepemilikan atas NFT yang tersedia dengan menukarkannya dengan token yang disetujui. Anda juga dapat memilih untuk menyimpan NFT sebagai koleksi Anda, menukarnya dengan token dengan Kolektor lain, atau menggunakannya untuk menebus produk dan layanan yang ditawarkan oleh mitra kami jika berlaku. Khusus untuk prosedur klaim, mitra kami berhak menetapkan disclaimer mereka sendiri. Situs ${entityName} tidak bertanggung jawab atas kegagalan mematuhi disclaimer yang menyebabkan penebusan NFT tidak berhasil.`,
        "Anda juga akan memperoleh akses untuk menerbitkan NFT yang telah Anda kumpulkan untuk ditampilkan dan disediakan untuk ditukar dengan token yang disetujui, jika diinginkan. Dalam kasus di mana Anda mentransfer kepemilikan NFT dengan produk atau layanan yang diberi tag ke Kolektor lain, Anda juga akan mentransfer hak milik atas produk atau layanan tersebut.",
        "Kepemilikan NFT tidak memberi Anda hak untuk memiliki hak Kekayaan Intelektual atas NFT tersebut.",
      ],
    },
    section7: {
      title: "Ketentuan Perlindungan Hak Kekayaan Intelektual",
      paragraphs: [
        `Hak Kekayaan Intelektual. Istilah "Hak Kekayaan Intelektual" berarti semua (i) paten, aplikasi paten, pengungkapan paten dan penemuan, (ii) nama Domain Internet, merek dagang, merek layanan, tampilan dagang, nama dagang, logo dan nama perusahaan dan pendaftaran dan aplikasi untuk pendaftarannya bersama dengan semua niat baik yang terkait dengannya, (iii) hak cipta (terdaftar atau tidak terdaftar) dan karya yang dapat dilindungi hak cipta dan pendaftaran dan aplikasi untuk pendaftarannya, (iv) karya topeng dan pendaftaran dan aplikasinya, (v) perangkat lunak komputer, data, basis data dan dokumentasinya, (vi) rahasia dagang dan informasi rahasia lainnya, termasuk ide, formula, komposisi, penemuan (baik yang dapat dipatenkan atau tidak dapat dipatenkan dan apakah diterapkan dalam praktik atau tidak), pengetahuan, proses dan teknik manufaktur dan produksi, informasi penelitian dan pengembangan, gambar, spesifikasi, desain, rencana, proposal, data teknis, dan karya yang dapat dilindungi hak cipta, rencana keuangan dan pemasaran dan daftar dan informasi pelanggan dan pemasok, dan (vii) salinan dan perwujudan nyata darinya (dalam bentuk atau media apa pun).`,
        `Syarat dan Ketentuan ini berisi bagaimana Anda dan ${entityAlias2} akan melindungi Kekayaan Intelektual Anda pada layanan ${entityAlias2} secara eksklusif.`,
        "Anda mengakui bahwa:",
        `${entityAlias2} dengan ini memberi Anda hak terbatas, non-eksklusif, tidak dapat dipindahtangankan dan bebas royalti untuk menggunakan atau menampilkan merek, nama dagang, logo, konten situs, judul, dan tanda serta nama pembeda lainnya dari ${entityAlias1} dan ${entityAlias2} di situs dan terbatas untuk tujuan melaksanakan Perjanjian ini.`,
        `Pelanggaran Hak Kekayaan Intelektual. ${entityAlias2} akan bertanggung jawab atas temuan NFT yang melanggar Hak Kekayaan Intelektual. Jika Anda sebagai Kolektor menemukan indikasi pelanggaran hak kekayaan intelektual pada NFT di ${entityAlias2}, Anda dapat menghubungi ${entityAlias2} dan ${entityAlias2} akan membantu menghapusnya dari situs ${entityName}. Selain itu, hal tersebut akan menjadi tanggung jawab Anda dan pemilik IP dan harus diselesaikan secara langsung antara Anda dan pemilik IP.`,
      ],
      ol: [
        `Anda adalah pemilik atau pemegang hak kekayaan intelektual asli atas NFT yang dipublikasikan di situs ${entityName}.`,
        `Anda dengan ini menyatakan bahwa Anda sepenuhnya memiliki hak kekayaan intelektual atas NFT yang dipublikasikan di situs ${entityName} secara eksklusif dan menjamin bahwa tidak ada klaim dari pihak ketiga atas kepemilikan NFT tersebut.`,
      ],
    },
    section8: {
      title: "Batasan Masalah",
      paragraphs: [
        `${entityAlias2} melarang Anda melakukan tindakan berikut saat menggunakan Layanan:`,
      ],
      ul: [
        "Perbuatan yang melanggar peraturan perundang-undangan, putusan pengadilan, resolusi atau perintah, atau tindakan administratif yang mempunyai kekuatan hukum tetap;",
        "Tindakan yang dapat melanggar ketertiban umum, kesusilaan, atau adat istiadat;",
        `Perbuatan yang melanggar hak kekayaan intelektual seperti hak cipta, merek dagang, hak paten, hak atas ketenaran, privasi, dan segala hak lainnya yang diberikan oleh undang-undang atau berdasarkan suatu perjanjian dengan ${entityAlias2} dan/atau pihak ketiga;`,
        "Tindakan mengunggah atau menyebarkan ekspresi yang sangat kasar; ekspresi yang mengarah pada diskriminasi berdasarkan ras, asal negara, kepercayaan, jenis kelamin, status sosial, asal keluarga, dll.; ekspresi yang mendorong atau menganjurkan bunuh diri, perilaku melukai diri sendiri, atau penyalahgunaan narkoba; atau ekspresi yang mencakup konten antisosial dan menyebabkan ketidaknyamanan bagi orang lain;",
        "Tindakan yang menguntungkan atau melibatkan kolaborasi dengan kelompok antisosial;",
        "Tindakan yang berhubungan dengan kegiatan keagamaan atau undangan kepada kelompok keagamaan tertentu;",
        "Tindakan pengumpulan, pengungkapan, atau penyediaan informasi pribadi, informasi terdaftar, riwayat pengguna, atau sejenisnya yang tidak sah atau tidak patut milik orang lain;",
      ],
    },
    section9: {
      title: "Penangguhan, Pemutusan, dan Pembatalan",
      paragraphs: [
        `Kami dapat (a) menolak untuk menyelesaikan atau membatalkan pendaftaran Anda, (b) menangguhkan, membatasi atau menghentikan akses Anda ke salah satu atau semua layanan Situs ${entityName}, dan/atau (c) menonaktifkan akun Anda dengan segera karena alasan apa pun, termasuk namun tidak terbatas pada jika:`,
      ],
      ul: [
        "Menurut pendapat wajar kami, kami diharuskan untuk melakukan hal tersebut berdasarkan hukum yang berlaku atau pengadilan atau otoritas lain yang tunduk kepada kami di yurisdiksi mana pun;",
        "Kami memiliki alasan yang kuat untuk mencurigai Anda melakukan tindakan yang melanggar Perjanjian ini;",
        `Kami mempunyai kekhawatiran bahwa ada aktivitas yang keliru atau mengenai keamanan akun Anda atau kami menduga bahwa layanan Situs ${entityName} digunakan secara curang atau tidak sah;`,
        "Kami mencurigai adanya pencucian uang, pendanaan teroris, penipuan, atau kejahatan keuangan lainnya;",
        "Penggunaan akun Anda tunduk pada proses litigasi, investigasi, atau proses hukum pemerintah yang sedang berlangsung dan/atau kami melihat adanya risiko tinggi ketidakpatuhan hukum atau peraturan yang terkait dengan aktivitas akun Anda",
        "Anda melakukan tindakan apa pun yang dapat menghindari kontrol kami seperti penyalahgunaan promosi yang kami tawarkan dari waktu ke waktu;",
      ],
      paragraphsAfterList: [
        `Kami dapat menangguhkan, membatasi, atau menghentikan akses Anda ke sebagian atau seluruh layanan Situs ${entityName} dan/atau menonaktifkan atau membatalkan akun ${entityAlias2} Anda, tanpa alasan dengan memberikan pemberitahuan dua bulan sebelumnya. Anda mengakui bahwa keputusan kami untuk mengambil tindakan tertentu, termasuk membatasi akses, menangguhkan, atau menutup akun ${entityAlias2} Anda, mungkin didasarkan pada kriteria rahasia yang penting bagi manajemen risiko dan protokol keamanan kami. Anda setuju bahwa kami tidak berkewajiban untuk mengungkapkan rincian manajemen risiko dan prosedur keamanannya kepada Anda.`,
      ],
    },
    section10: {
      title: "Beban",
      paragraphs: [
        `Peluncuran ${entityAlias2}. ${entityAlias2} merupakan platform peer to peer yang menggunakan teknologi distributed ledger. Apabila Anda memiliki perselisihan dengan satu atau lebih pengguna Situs ${entityName}, Anda setuju bahwa baik kami maupun afiliasi atau penyedia layanan kami, maupun masing-masing pejabat, direktur, karyawan, dan perwakilan kami tidak akan bertanggung jawab atas segala klaim, tuntutan, dan ganti rugi (aktual dan konsekuensial) dalam bentuk atau sifat apa pun yang timbul dari atau dengan cara apa pun terkait dengan perselisihan tersebut.`,
        `Ganti Rugi. Anda setuju untuk mengganti rugi ${entityAlias2}, afiliasi dan penyedia layanan kami, dan masing-masing pejabat, direktur, karyawan, dan perwakilan kami atau mereka, sehubungan dengan biaya apa pun (termasuk biaya pengacara dan denda, biaya, atau sanksi yang dikenakan oleh otoritas regulasi mana pun) yang telah dikeluarkan secara wajar sehubungan dengan klaim, tuntutan, atau ganti rugi yang timbul dari atau terkait dengan pelanggaran Anda dan/atau penegakan Perjanjian ini atau pelanggaran Anda terhadap hukum, aturan, atau peraturan apa pun, atau hak pihak ketiga mana pun.`,
        `Batasan Tanggung Jawab. ${entityAlias2} tidak bertanggung jawab atas layanan dan semua NFT di Situs dan ${entityAlias2} hanya akan bertanggung jawab kepada Anda atas kerugian atau kerusakan yang disebabkan secara langsung dan wajar oleh pelanggaran Perjanjian ini.`,
        `Tidak Ada Jaminan. Layanan Situs ${entityName} diberikan atas dasar "apa adanya" dan "sebagaimana tersedia" tanpa pernyataan atau jaminan apa pun, baik tersurat maupun tersirat, hingga batas maksimum yang diizinkan oleh hukum yang berlaku: khususnya kami menolak segala jaminan tersirat atas hak milik, kelayakan untuk diperjualbelikan, kesesuaian untuk tujuan tertentu dan/atau nonpelanggaran. Kami tidak membuat pernyataan atau jaminan apa pun bahwa akses ke Situs ${entityName}, layanan ${entityAlias2} apa pun, atau materi apa pun yang terkandung di dalamnya, akan berlangsung terus-menerus, tanpa gangguan, tepat waktu, atau bebas dari kesalahan.`,
        `Keamanan dan Keselamatan Komputer dan Perangkat Anda. Situs ${entityName} tidak bertanggung jawab atas segala kerusakan atau gangguan yang disebabkan oleh virus komputer, spyware, scareware, Trojan horse, worm, atau malware lain yang dapat memengaruhi komputer atau perangkat lain Anda, atau segala bentuk phishing, spoofing, atau serangan lainnya. Kami menyarankan penggunaan perangkat lunak penyaringan dan pencegahan virus yang bereputasi baik dan tersedia secara umum secara berkala. Anda juga harus menyadari bahwa layanan SMS dan email rentan terhadap serangan spoofing dan phishing dan harus berhati-hati dalam meninjau pesan yang mengaku berasal dari kami. Dukungan pelanggan ${entityAlias2} tidak akan pernah meminta untuk berbagi layar atau berupaya mengakses komputer atau akun Anda.`,
        "Tidak Ada Tanggung Jawab atas Pelanggaran. Kami tidak bertanggung jawab atas pelanggaran Perjanjian apa pun jika pelanggaran tersebut disebabkan oleh keadaan yang tidak normal dan tidak terduga di luar kendali kami, yang konsekuensinya tidak dapat dihindari meskipun ada semua efek yang bertentangan, kami juga tidak bertanggung jawab jika pelanggaran tersebut disebabkan oleh penerapan aturan hukum yang wajib.",
      ],
    },
    section11: {
      title:
        "Umpan Balik Pelanggan, Pertanyaan, Keluhan, dan Penyelesaian Sengketa",
      paragraphs: [
        `Hubungi ${entityAlias2}. Saat Anda menghubungi kami, mohon berikan nama, alamat email, alamat dompet, dan informasi lain yang mungkin kami perlukan untuk mengidentifikasi Anda, akun ${entityAlias2} Anda, dan aktivitas yang Anda berikan masukan, pertanyaan, atau keluhan.`,
        `Keluhan. Jika ada keluhan, mohon jelaskan penyebab keluhan Anda, bagaimana Anda ingin kami menyelesaikan keluhan tersebut, dan informasi lain yang menurut Anda relevan. Kami akan mengakui penerimaan keluhan Anda. Petugas Keluhan Pelanggan ("Petugas") akan mempertimbangkan keluhan Anda. Petugas akan mempertimbangkan keluhan Anda tanpa prasangka berdasarkan informasi yang Anda berikan dan informasi yang diberikan oleh ${entityAlias1}. Dalam waktu 15 hari kerja sejak kami menerima keluhan Anda, Petugas akan menanggapi semua poin yang diajukan dalam keluhan Anda dengan mengirimkan email kepada Anda ("Pemberitahuan Resolusi") yang berisi pernyataan bahwa Petugas akan: (i) menawarkan untuk menyelesaikan keluhan Anda sesuai dengan permintaan Anda; (ii) membuat keputusan untuk menolak keluhan Anda dan menjelaskan alasan penolakan; atau (iii) menawarkan untuk menyelesaikan keluhan Anda dengan solusi alternatif. Dalam keadaan luar biasa, apabila Petugas tidak dapat menanggapi pengaduan Anda dalam jangka waktu 15 hari kerja karena alasan-alasan di luar kekuasaan ${entityAlias1}, maka Petugas akan mengirimkan balasan penahanan yang menyebutkan alasan keterlambatan dalam menjawab pengaduan Anda dan menyebutkan batas waktu tanggapan Petugas terhadap pengaduan Anda (yang paling lambat adalah 35 hari kerja sejak diterimanya pengaduan Anda).`,
        `Penawaran. Setiap penawaran penyelesaian yang diberikan kepada Anda hanya akan mengikat kami jika Anda menerimanya. Penawaran penyelesaian tidak akan dianggap sebagai pengakuan kami atas kesalahan atau tanggung jawab terkait pokok permasalahan pengaduan.`,
      ],
    },
    section12: {
      title: "Perlindungan Data",
      paragraphs: [
        `Data Pribadi. Anda mengakui bahwa kami dapat memproses data pribadi yang berkaitan dengan Anda. Oleh karena itu, Anda menyatakan dan menjamin bahwa:`,
      ],
      ul: [
        `pengungkapan data pribadi Anda kepada kami telah atau akan dilakukan sesuai dengan semua undang-undang perlindungan data dan privasi data yang berlaku, dan data tersebut akurat, terkini, dan relevan saat diungkapkan;`,
        `sebelum memberikan data pribadi tersebut kepada kami, Anda telah membaca dan memahami Kebijakan Privasi kami, yang terlampir pada Perjanjian ini dan salinannya juga tersedia di Kebijakan Privasi, dan, dalam hal data pribadi yang berkaitan dengan individu selain diri Anda, telah (atau akan pada saat pengungkapan) memberikan salinan Kebijakan Privasi tersebut (sebagaimana diubah dari waktu ke waktu), kepada individu tersebut;`,
        `dan apabila sewaktu-waktu kami memberikan Anda versi pengganti dari Kebijakan Privasi, Anda harus segera membaca pemberitahuan tersebut dan memberikan salinannya kepada setiap individu yang datanya pribadinya telah Anda berikan kepada kami;`,
      ],
      paragraphsAfterList: [
        `Silakan baca Kebijakan Privasi untuk rincian tentang bagaimana kami memproses data pribadi Anda.`,
      ],
    },
    section13: {
      title: "Syarat dan Ketentuan Umum",
      paragraphs: [
        `Lisensi Terbatas. Kami memberi Anda lisensi terbatas, non-eksklusif, dan tidak dapat dipindahtangankan, sesuai dengan ketentuan Perjanjian ini, untuk mengakses dan menggunakan Situs ${entityName}, dan konten, materi, informasi terkait (secara kolektif, "Konten") semata-mata untuk tujuan yang disetujui sebagaimana diizinkan oleh kami dari waktu ke waktu. Setiap penggunaan lain atas Situs atau Konten ${entityName} secara tegas dilarang dan semua hak, kepemilikan, dan kepentingan lain dalam Situs atau Konten ${entityName} secara eksklusif adalah milik ${entityAlias2} dan pemberi lisensinya. Anda setuju untuk tidak menyalin, mengirimkan, mendistribusikan, menjual, melisensikan, merekayasa ulang, memodifikasi, menerbitkan, atau berpartisipasi dalam pengalihan atau penjualan, membuat karya turunan dari, atau dengan cara lain mengeksploitasi Konten apa pun, secara keseluruhan atau sebagian.`,
        `Keakuratan Situs Web. Meskipun kami bermaksud untuk menyediakan informasi yang akurat dan tepat waktu di Situs ${entityName}, Situs ${entityName} (termasuk, namun tidak terbatas pada, Konten) mungkin tidak selalu sepenuhnya akurat, lengkap, atau terkini dan mungkin juga menyertakan ketidakakuratan teknis atau kesalahan ketik. Dalam upaya untuk terus menyediakan informasi selengkap dan seakurat mungkin kepada Anda, informasi tersebut dapat, sejauh diizinkan oleh hukum yang berlaku, diubah atau diperbarui dari waktu ke waktu tanpa pemberitahuan, termasuk namun tidak terbatas pada informasi mengenai kebijakan, produk, dan layanan kami. Oleh karena itu, Anda harus memverifikasi semua informasi sebelum mengandalkannya, dan semua keputusan berdasarkan informasi yang terdapat di Situs ${entityName} merupakan tanggung jawab Anda sepenuhnya dan kami tidak bertanggung jawab atas keputusan tersebut. Tautan ke materi pihak ketiga (termasuk namun tidak terbatas pada situs web) dapat disediakan sebagai kemudahan tetapi tidak dikendalikan oleh kami. Anda mengakui dan setuju bahwa kami tidak bertanggung jawab atas aspek apa pun dari informasi, konten, atau layanan yang terdapat dalam materi pihak ketiga atau di situs pihak ketiga mana pun yang dapat diakses atau ditautkan ke Situs ${entityName}.`,
        `Hubungan Para Pihak. Tidak ada ketentuan dalam Perjanjian ini yang dianggap atau dimaksudkan untuk dianggap, dan tidak akan menyebabkan Anda atau ${entityAlias2} diperlakukan sebagai agen pihak lainnya.`,
        `Privasi Pihak Lain; Pemasaran. Jika Anda menerima informasi tentang pengguna lain melalui layanan Situs ${entityName}, Anda harus menjaga kerahasiaan informasi tersebut dan hanya menggunakannya sehubungan dengan layanan Situs ${entityName}. Anda tidak boleh mengungkapkan atau mendistribusikan informasi pengguna kepada pihak ketiga atau menggunakan informasi tersebut kecuali sebagaimana yang diperlukan secara wajar untuk melakukan transaksi dan fungsi lain yang secara wajar terkait dengannya seperti dukungan, rekonsiliasi, dan akuntansi kecuali Anda menerima persetujuan tegas dari pengguna untuk melakukannya. Anda tidak boleh mengirim email yang tidak diminta kepada pengguna melalui layanan Situs ${entityName}.`,
        `Pelanggaran Keamanan. Jika Anda menduga bahwa akun ${entityAlias2} Anda atau detail keamanan Anda telah disusupi atau jika Anda mengetahui adanya penipuan atau percobaan penipuan atau insiden keamanan lainnya (termasuk serangan keamanan siber) yang memengaruhi Anda dan/atau ${entityAlias2} (bersama-sama disebut "Pelanggaran Keamanan"), Anda harus memberi tahu dukungan ${entityAlias2} sesegera mungkin melalui email gratis di ${entityEmail} dan terus memberikan informasi yang akurat dan terkini selama berlangsungnya Pelanggaran Keamanan. Anda harus mengambil langkah apa pun yang secara wajar kami perlukan untuk mengurangi, mengelola, atau melaporkan setiap Pelanggaran Keamanan. Kegagalan memberikan pemberitahuan segera tentang setiap Pelanggaran Keamanan dapat diperhitungkan dalam penentuan penyelesaian masalah yang tepat.`,
        `Informasi Kontak. Anda bertanggung jawab untuk selalu memperbarui alamat email Anda di Profil Akun Anda agar dapat menerima pemberitahuan atau peringatan apa pun yang mungkin kami kirimkan kepada Anda (termasuk pemberitahuan atau peringatan tentang Pelanggaran Keamanan yang sebenarnya atau yang diduga).`,
        `Perjanjian Lengkap. Perjanjian ini (termasuk dokumen yang dirujuk di sini) mencakup keseluruhan perjanjian antara Anda dan ${entityAlias2}.`,
        `Interpretasi. Judul-judul bagian dalam Perjanjian ini hanya untuk kemudahan saja, dan tidak mengatur makna atau interpretasi dari ketentuan apa pun dalam Perjanjian ini.`,
        `Pengalihan. Perjanjian ini bersifat pribadi bagi Anda dan Anda tidak dapat mengalihkan atau menyerahkan hak, lisensi, kepentingan, dan/atau kewajiban Anda kepada orang lain. Kami dapat mengalihkan atau menyerahkan hak, lisensi, kepentingan, dan/atau kewajiban kami kapan saja, termasuk sebagai bagian dari penggabungan, akuisisi, atau reorganisasi perusahaan lain yang melibatkan ${entityAlias2}, dengan ketentuan bahwa pengalihan atau pengalihan ini tidak berdampak material terhadap kualitas layanan ${entityAlias2} yang Anda terima.`,
        `Ketidakabsahan. Jika ada ketentuan dalam Perjanjian ini yang dianggap tidak sah atau tidak dapat diberlakukan berdasarkan hukum yang berlaku, hal ini tidak akan memengaruhi keabsahan ketentuan lainnya.`,
        `Penegakan Hak Kami. Kami mungkin tidak selalu menegakkan hak kami secara ketat berdasarkan Perjanjian ini. Jika kami melakukannya, itu hanya tindakan sementara dan kami dapat menegakkan hak kami secara ketat lagi kapan saja.`,
        `Bahasa. Perjanjian ini dan semua informasi atau pemberitahuan yang Anda atau kami berikan harus dalam bahasa Indonesia dan Inggris. Semua terjemahan Perjanjian ini atau dokumen lainnya disediakan hanya untuk kenyamanan Anda. Jika terjadi ketidakkonsistenan, versi bahasa Indonesia dan bahasa Inggris dari Perjanjian ini atau dokumen lainnya akan berlaku.`,
        `Keberlangsungan. Semua ketentuan dalam Perjanjian ini yang menurut sifatnya berlaku setelah berakhirnya atau pemutusan Perjanjian ini, termasuk namun tidak terbatas pada bagian yang berkaitan dengan penangguhan atau pemutusan, pembatalan akun ${entityAlias2}, penggunaan umum Situs ${entityName}, perselisihan dengan ${entityAlias2}, dan ketentuan umum, akan tetap mengikat dan berlaku setelah berakhirnya atau berakhirnya Perjanjian ini.`,
      ],
    },
  }, // terms,
};
