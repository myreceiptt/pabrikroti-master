# Changelog

## [Unreleased]

### ✅ Perubahan Utama - YYYY-MM-DD

- ...

---

## v2.6.7

### ✅ Perubahan Utama - 2025-11-11

- feat(image): tambah `SmartGIFImage` (otomatis `unoptimized` untuk `.gif`)
- docs(readme): badge dinamis + tautan diff main↔preview
- docs(sop): standar operasional prosedur, `SOP.md`.

---

## v2.5.0

### ✅ Perubahan Utama - 2025-11-08

- **Upgrade Next.js → 16.0.1 (Turbopack)** — build lebih cepat & stabil.
- **ESLint**: migrasi ke **ESLint CLI + Flat config** dengan `@next/eslint-plugin-next` (`core-web-vitals`).
- **React 19.2.0** & **react-dom 19.2.0**.
- **thirdweb 5.111.8**.
- **Tailwind CSS 4.1.17**.
- **Prettier 3.6.2** — format ulang kode (puluhan file) agar konsisten.
- Bersihkan `yarn.lock`, hilangkan `.resolutions`, refresh dependen terkunci.

### 🔐 Catatan Keamanan - 2025-11-08

- Dependabot: **fast-redact@3.5.0** (transitif via `pino` → WalletConnect) terlapor **Prototype Pollution**.
- Status: **diterima & dimonitor** (tidak digunakan langsung di kode app). Pantau PR/patch di upstream & Dependabot (#5).

### 🧪 Kualitas & Build - 2025-11-08

- `yarn lint` ✅ | `yarn build` ✅ | `next start` ✅ (uji lokal normal).
- Peer warning Solana/WalletConnect dapat diabaikan untuk target browser saat ini.

### 🔖 Rilis & Versi - 2025-11-08

- Tag: **v2.5.0** (production).
- Mulai siklus dev berikutnya dengan **2.6.0-dev.0** di branch **preview**.

### 🔜 Next - 2025-11-08

- Implementasi rencana 2.6.0-dev.0 pada branch **preview**.
- Siapkan GitHub Release notes publik (mirror ringkas dari entri ini).
