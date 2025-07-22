# PABRIK ROTI

[![version](https://img.shields.io/badge/version-2.4.74-blue)](https://github.com/myreceiptt/pabrikroti-master/releases/tag/v.2.4.74-inamotion) _Latest Release_  
[![status](https://img.shields.io/badge/status-active-brightgreen)](https://github.com/myreceiptt/pabrikroti-master/blob/preview/SECURITY.md#-supported-versions) _Maintenance Status_  
[![Build Status](https://github.com/myreceiptt/pabrikroti-master/actions/workflows/ci.yml/badge.svg)](https://github.com/myreceiptt/pabrikroti-master/actions/workflows/ci.yml) _CI Status_  
[![Deployed to Vercel](https://img.shields.io/badge/Vercel-deployed-success?logo=vercel)](https://preroti.endhonesa.com/) _Staging Site_

> "This is not just a factory. This is a rehearsal of freedom—kneaded with code, fermented by its community, and baked through the heat of shared struggles."
>
> — Prof. NOTA

---

## 📚 Table of Contents

- [Quick Start](#-quick-start)
- [Licensing & Usage](#-licensing--usage)
- [Manifestos](#-manifestos)
- [General Information](#%E2%84%B9%EF%B8%8F-general-information)
- [What is PABRIKROTI?](#️-what-is-pabrikroti)
- [Key Features](#-key-features)
- [Getting Started](#%EF%B8%8F-getting-started)
- [Resources](#-resources)
- [Contributing](#-contributing)

---

## 📦 Staging 2.4.74 by Ina Motion

Link #1: [www.inamotion.id](https://www.inamotion.id/) [![status](https://img.shields.io/badge/deploy-live-brightgreen)](https://www.inamotion.id/)  
Link #2: [motion.endhonesa.com](https://motion.endhonesa.com/) [![status](https://img.shields.io/badge/deploy-live-brightgreen)](https://motion.endhonesa.com/)

---

## 🚀 Quick Start

```bash
yarn && yarn dev
```

> If you find this useful, consider starring ⭐ the repository! Please!
>
> — Prof. NOTA

---

## 📜 Licensing & Usage

This project is protected under a [**Custom Limited License**](./LICENSE) [![License](https://img.shields.io/badge/license-Prof.NOTA%20Proprietary-orange.svg)](./LICENSE) by [Prof. NOTA & Prof. NOTA Inc.](https://nota.endhonesa.com/). See [PRICING.md](./PRICING.md) for usage tiers and [LICENSE](./LICENSE) for terms. Free usage is only allowed for cultural, and educational, for women- or child-focused projects approved by Prof. NOTA.

License available in multiple languages:

- 🏛️ [English (UK)](./licenses/LICENSE_en-GB.md)
- 🇮🇩 [Bahasa Indonesia](./licenses/LICENSE_ID.md)
- 🇺🇿 [Oʻzbekcha](./licenses/LICENSE_uz-Latn.md)
- 🇭🇰 [Cantonese – Hong Kong](./licenses/LICENSE_yue-Hant-HK.md)
- 🇲🇾 [Bahasa Malaysia](./licenses/LICENSE_ms-MY.md)
- 🇦🇪 [العربية – الإمارات](./licenses/LICENSE_ar-AE.md)

📩 Want to collaborate, deploy under your own brand, or inquire about licensing and permissions?  
Reach out to us at: [nota@endhonesa.com](mailto:nota@endhonesa.com)

---

## 📖 Manifestos

If you already have obtained the license, please read and understand the manifesto from [Prof. NOTA & Prof. NOTA Inc.](https://nota.endhonesa.com/) before starting to use it. Each deployment must respect the ideological foundation of Prof. NOTA Inc.

Manifestos are available in:

- 🏛️ [English (UK)](./manifestos/manifesto_en-GB.md)
- 🇮🇩 [Bahasa Indonesia](./manifestos/manifesto_id.md)
- 🇺🇿 [Oʻzbekcha](./manifestos/manifesto_uz-Latn.md)
- 🇭🇰 [Cantonese – Hong Kong](./manifestos/manifesto_yue-Hant-HK.md)
- 🇲🇾 [Bahasa Malaysia](./manifestos/manifesto_ms-MY.md)
- 🇦🇪 [العربية – الإمارات](./manifestos/manifesto_ar-AE.md)

---

## ℹ️ General Information

**PABRIK ROTI: Programmed Bread Factory for Web3 Distribution**  
_Developed and maintained by [Prof. NOTA Inc.](https://nota.endhonesa.com)_

---

### 🏗️ What is PABRIKROTI?

**PABRIKROTI** is a white label, multi-tenant, Web3-enabled application designed to create, display, and distribute tokenized digital assets—referred to as **Programmed Bread**. It supports NFTs (ERC-721/ERC-1155) and fungible tokens (ERC-20), integrating dynamic tenant configurations, visual claim interfaces, and cultural licensing through a fully modular and customizable framework.

PABRIKROTI operates as a **decentralized digital production space**, where each domain/subdomain (e.g., `pabrikroti.endhonesa.com`) loads unique configurations for its respective brand, campaign, or cultural project, while still using the same underlying platform.

---

### ✨ Key Features

- **Dynamic Tenant-Based Theming**  
  Auto-detects hostname, which is domain/subdomain and applies custom config from `/src/config/receipts/`.

- **NFT Explorer & Claim Interface**  
  Pages like `/free`, `/paid`, `/token/[idNFT]` list and handle claiming of tokenized assets with eligibility logic, fallback visuals, and blockchain status integration.

- **ERC-20 Token Claim Pages**  
  Pages like `/coins`, `/address/[coinAddress]` enable users to claim community or utility tokens with live metadata, eligibility checks, and claim buttons.

- **Flexible Front Page (Multi-Mode)**  
  Depending on the domain/subdomain, the home page renders:

  - **Mode `abc`**: Login gateway with featured tokens
  - **Mode `aiueo`**: Landing page for branding & storytelling

- **Web3-Ready & Mobile Optimized**  
  Built with:

  - Next.js 15 + App Router
  - React 19 + Server Components
  - Tailwind CSS v4
  - ThirdWeb SDK v5
  - Prof. NOTA Inc. Protocol

- **Ethical Licensing & Multilingual Manifestos**  
  Supports 6+ languages for license agreements and project manifestos. Access is granted only with permission from [Prof. NOTA & Prof. NOTA Inc.](https://nota.endhonesa.com/) or certified facilitators.

---

## 🛠️ Getting Started

### 📦 Install dependencies

```bash
yarn
```

### 🔍 Check outdated dependencies

```bash
yarn outdated
```

### ⬆️ Upgrade dependencies interactively

```bash
yarn upgrade-interactive --latest
```

### 🧹 Cleaning and re-install dependencies

```bash
yarn rm -rf node_modules yarn.lock && yarn install
```

### ▶️ Run development server

```bash
yarn dev
```

### 🧪 Lint and check all the code quality

```bash
yarn run lint
```

### 🏗️ Build for production

```bash
yarn build
```

### 🔍 Preview the production

```bash
yarn start
```

---

## 📦 Resources

- [Prof. NOTA Inc.](https://nota.endhonesa.com/)
- [Prof. NOTA Console](https://prompt.endhonesa.com/)
- [Prof. NOTA Tutor](https://baca.endhonesa.com/)
- [Prof. NOTA Artefacts](https://docs.endhonesa.com/)

---

## 🤝 Contributing

Your contribution is not only welcome — it's part of the protocol.

If you believe in the mission of PABRIKROTI and want to help improve it, follow these simple steps:

1. Fork this repository
2. Create a new branch (`feature/your-feature-name`)
3. Commit your changes mindfully
4. Open a pull request to the `preview` branch

Before submitting your PR, make sure to run:

```bash
yarn lint
```

To keep our code clean and consistent.

If you have questions, feel free to open an issue or reach out via the Prof. NOTA community Discord.

> ✊ You’re not just contributing code — you’re shaping how the people eat, learn, and resist.
>
> — Prof. NOTA

---

### 🫂 Join Prof. NOTA Discord

For feedback, questions, or cultural-technical collaboration, join Prof. NOTA discord at [https://discord.gg/5KrsT6MbFm](https://discord.gg/5KrsT6MbFm).

---
