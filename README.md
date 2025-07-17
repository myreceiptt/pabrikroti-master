# PABRIK ROTI [![version](https://img.shields.io/badge/version-2.4.47-blue)](https://github.com/myreceiptt/pabrikroti-master/releases/tag/v.2.4.47-zim) [![status](https://img.shields.io/badge/status-active-brightgreen)](https://github.com/myreceiptt/pabrikroti-master/blob/preview/SECURITY.md#-supported-versions) [![Build Status](https://github.com/myreceiptt/pabrikroti-master/actions/workflows/ci.yml/badge.svg)](https://github.com/myreceiptt/pabrikroti-master/actions/workflows/ci.yml) [![Deployed to Vercel](https://img.shields.io/badge/Vercel-deployed-success?logo=vercel)](https://preroti.endhonesa.com/)

> "This is not just a factory. This is a rehearsal of freedom—kneaded with code, fermented by its community, and baked through the heat of shared struggles."
>
> — Prof. NOTA

---

## Staging 2.4.47 by Zim Systems Limited

Link #1: [researach.zim-tech.com](https://researach.zim-tech.com/) [![status](https://img.shields.io/badge/deploy-live-brightgreen)](https://researach.zim-tech.com/)  
Link #2: [zim.endhonesa.com](https://zim.endhonesa.com/) [![status](https://img.shields.io/badge/deploy-live-brightgreen)](https://zim.endhonesa.com/)

---

## Quick Start

```bash
yarn && yarn dev
```

> If you find this useful, consider starring ⭐ the repository! Please!
>
> — Prof. NOTA

---

## 📜 Licenses

This project is protected under a [**Custom Limited License**](./LICENSE) by [Prof. NOTA & Prof. NOTA Inc.](https://nota.endhonesa.com/). Usage is only allowed for cultural, educational, and women- or child-focused projects approved by Prof. NOTA.

License available in multiple languages:

- 🏛️ [English (UK)](./licenses/LICENSE_en-GB.md)
- 🇮🇩 [Bahasa Indonesia](./licenses/LICENSE_ID.md)
- 🇺🇿 [Oʻzbekcha](./licenses/LICENSE_uz-Latn.md)
- 🇭🇰 [Cantonese – Hong Kong](./licenses/LICENSE_yue-Hant-HK.md)
- 🇲🇾 [Bahasa Malaysia](./licenses/LICENSE_ms-MY.md)
- 🇦🇪 [العربية – الإمارات](./licenses/LICENSE_ar-AE.md)

> 📩 For permission or inquiries, contact: [nota@endhonesa.com](mailto:nota@endhonesa.com)

---

## 📜 Manifestos

If you already have obtained the license, please read and understand the manifesto from [Prof. NOTA & Prof. NOTA Inc.](https://nota.endhonesa.com/) before starting to use it. Each deployment must respect the ideological foundation of Prof. NOTA Inc.

Manifestos are available in:

- 🏛️ [English (UK)](./manifestos/manifesto_en-GB.md)
- 🇮🇩 [Bahasa Indonesia](./manifestos/manifesto_id.md)
- 🇺🇿 [Oʻzbekcha](./manifestos/manifesto_uz-Latn.md)
- 🇭🇰 [Cantonese – Hong Kong](./manifestos/manifesto_yue-Hant-HK.md)
- 🇲🇾 [Bahasa Malaysia](./manifestos/manifesto_ms-MY.md)
- 🇦🇪 [العربية – الإمارات](./manifestos/manifesto_ar-AE.md)

---

## 📜 General Information

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

### Install dependencies

```bash
yarn
```

### Check outdated dependencies

```bash
yarn outdated
```

### Upgrade dependencies interactively

```bash
yarn upgrade-interactive --latest
```

### Cleaning and re-install dependencies

```bash
yarn rm -rf node_modules yarn.lock && yarn install
```

### Run development server

```bash
yarn dev
```

### Lint and check all the code quality

```bash
yarn run lint
```

### Build for production

```bash
yarn build
```

### Preview the production

```bash
yarn start
```

---

## 📜 Resources

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

### Join Prof. NOTA Discord

For feedback, questions, or cultural-technical collaboration, join Prof. NOTA discord at [https://discord.gg/5KrsT6MbFm](https://discord.gg/5KrsT6MbFm).

---
