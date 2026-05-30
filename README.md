# PABRIK ROTI

[![version](https://img.shields.io/github/v/release/myreceiptt/pabrikroti-master?display_name=tag&color=blue)](https://github.com/myreceiptt/pabrikroti-master/releases/latest) _Latest Release_  
[![dev](https://img.shields.io/github/package-json/v/myreceiptt/pabrikroti-master/preview?filename=package.json&label=dev&color=orange)](https://github.com/myreceiptt/pabrikroti-master/commits/preview) _Current Dev_  
[![Build (main)](https://github.com/myreceiptt/pabrikroti-master/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/myreceiptt/pabrikroti-master/actions/workflows/ci.yml) _CI Status_  
[![Build (preview)](https://github.com/myreceiptt/pabrikroti-master/actions/workflows/ci.yml/badge.svg?branch=preview)](https://github.com/myreceiptt/pabrikroti-master/actions/workflows/ci.yml) _CI Status_  
[![status](https://img.shields.io/badge/status-active-brightgreen)](https://github.com/myreceiptt/pabrikroti-master/blob/preview/SECURITY.md#-supported-versions) _Maintenance Status_  
[![Vercel](https://img.shields.io/badge/Vercel-deployed-success?logo=vercel)](https://preroti.endhonesa.com/) _Staging Site_

**Diff:** [main → preview](https://github.com/myreceiptt/pabrikroti-master/compare/main...preview)

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

## 📦 Staging Link

Link #1: [pabrikroti.endhonesa.com](https://pabrikroti.endhonesa.com/) [![status](https://img.shields.io/badge/deploy-live-brightgreen)](https://pabrikroti.endhonesa.com/)  
Link #2: [preroti.endhonesa.com](https://preroti.endhonesa.com/) [![status](https://img.shields.io/badge/deploy-live-brightgreen)](https://preroti.endhonesa.com/)

---

## 🚀 Quick Start

```bash
nvm use
corepack yarn install
corepack yarn dev
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
  - Latest Next.js + App Router
  - Latest React + Server Components
  - Latest Tailwind CSS
  - Latest ThirdWeb SDK
  - Prof. NOTA Inc. Protocol

- **Ethical Licensing & Multilingual Manifestos**  
  Supports 6+ languages for license agreements and project manifestos. Access is granted only with permission from [Prof. NOTA & Prof. NOTA Inc.](https://nota.endhonesa.com/) or certified facilitators.

---

## 🛠️ Getting Started

### 📦 Install dependencies

```bash
nvm use
corepack yarn install
```

### 🔍 Check outdated dependencies

```bash
corepack yarn npm outdated --recursive
```

### ⬆️ Upgrade dependencies interactively

```bash
corepack yarn up --interactive
```

### 🧹 Cleaning and re-install dependencies

```bash
rm -rf node_modules .next
corepack yarn install
```

### ▶️ Run development server

```bash
corepack yarn dev
```

### 🧪 Lint and check all the code quality

```bash
corepack yarn lint
```

### 🏗️ Build for production

```bash
corepack yarn build
```

### 🔍 Preview the production

```bash
corepack yarn start
```

---

## 🌱 EVERGREEN Maintenance

This branch was maintained under the Prof. NOTA EVERGREEN Standard as the **preview** branch cycle for a Class A app repo.

- Runtime target: **Node.js 24.x** (`.nvmrc`, `package.json#engines`)
- Package manager: **Yarn Modern 4.12.0** (`packageManager: yarn@4.12.0`)
- Install mode: `nodeLinker: node-modules` in `.yarnrc.yml` for Next.js/Web3 compatibility
- Lockfile: `yarn.lock`
- Build command: `corepack yarn build`
- Lint command: `corepack yarn lint`

Current Evergreen notes:

- Monthly and quarterly dependency updates were applied on top of `preview`.
- Next.js is aligned to `16.2.6`; React is aligned to `19.2.6`; Thirdweb is aligned to `5.120.0`.
- GitHub Actions now uses Node.js 24 and `yarn install --immutable`.
- `NEXT_PUBLIC_TW_SECRET_KEY` was removed from example/CI public env handling because a secret key must not be exposed through `NEXT_PUBLIC_*`.
- `@types/node@25` is intentionally deferred because this repo targets Node.js 24.x.
- `eslint@10` and `typescript@6` remain deferred until the Next/TypeScript/Web3 lint stack proves compatible.

Recommended Evergreen checks:

```bash
nvm use
corepack yarn install --immutable
corepack yarn npm audit --severity moderate --recursive
corepack yarn lint
corepack yarn build
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
corepack yarn lint
```

To keep our code clean and consistent.

For more detail, read [`SOP.md'](SOP.md) and if you have questions, feel free to open an issue or reach out via the Prof. NOTA community Discord.

> ✊ You’re not just contributing code — you’re shaping how the people eat, learn, and resist.
>
> — Prof. NOTA

---

### 🫂 Join Prof. NOTA Discord

For feedback, questions, or cultural-technical collaboration, join Prof. NOTA discord at [https://discord.gg/5KrsT6MbFm](https://discord.gg/5KrsT6MbFm).

---
