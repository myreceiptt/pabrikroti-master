# SOP Tetap PABRIKROTI-MASTER

(Versi naratif: “dapur roti”, “panggung latihan”, dan “malam pementasan”)

> _Dokumen ini **disimpan** sebagai `SOP.md`._  
> _`README.md` cukup merangkum dan menautkan ke `SOP.md` ini._  
> _`CHANGELOG.md` selalu jadi buku harian perubahan._

---

## Bab 0 — Prolog

Bayangkan kita punya tiga ruang besar; dapur percobaan dengan banyak loyang latihan, gudang kotak hampers, dan etalase gala premiere, di mana semuanya memastikan agar Arsitektur Cabang, Versi, RC pada `preview`, dan Handover Lisensi bisa terus dijalankan dan dirawat dengan baik.

1. **Dapur percobaan** bernama `preview`. Di sinilah adonan dicampur, rasa diuji, dan loyang-loyang masuk-keluar oven. Staging akan otomatis menyuguhkan hasil terbaru—panas, wangi, tapi belum untuk tamu VIP (live tapi terbatas)—di sinilah adonan diuji.

2. **Loyang latihan tiap tugas**; setiap pekerjaan kecil—memperbaiki typo, menambah fitur, upgrade paket—dibuatkan **cabang tugas** dari `preview`. Di sini kita bebas salah adonan, asal di akhirnya dibuatkan **cabang audit-RC** untuk menguji semua adonan menjadi roti terbaik.

3. **Kotak hampers** itu adalah **release-branch** yang berisi roti pesanan tiap klien yang punya **lisensi berstempel** (tag `vX.Y.Z-<kodenama>`) yang siap diantar—lengkap dengan **kartu ucapan** (Release Notes).

4. **Gala premiere** bernama `main`. Hanya roti yang sudah sempurna yang disajikan di sini. Setiap roti bisa dinikmati oleh publik umum.

> - _Semua pekerjaan terjadi **karena ada pembeli/pengguna lisensi** (starter/full/custom)._
> - _Begitu ada pesanan, dikerjakan terstruktur: kecil, jelas, dan terlacak._
> - _Ritmenya sederhana; **cabang tugas & cabang audit-RC** → `preview` (pengujian) → **release-branch (tag + release notes) & handover repo** → `main` (premiere)._
> - _Di antara ritme ada **mantra tiga tombol**; prettier, lint, build—selalu sebelum memberikan roti ke orang lain._
> - _Peta cabang (tetap):_
>   - _`main` (protected, default): kode stabil, tanpa tag._
>   - _`preview` (working): tempat kerja harian dan **RC wajib** (uji live terbatas)._
>     - _**cabang tugas**: tempat mengerjakan dan menyelesaikan setiap tugas._
>     - _**cabang audit-RC**: tugas terakhir tempat memastikan semua tugas lolos uji._
>   - _**release-branch (per lisensi)**: `release/vX.Y.Z-<kodenama>` → **di-handover** sebagai repo terpisah._
> - _Peran dokumen (tetap):_
>   - _`SOP.md`: dokumen ini._
>   - _`README.md`: muka depan—badge dinamis, link rilis terbaru, info singkat._
>   - _`CHANGELOG.md`: format **Keep a Changelog** sederhana: bagian `## [Unreleased]` diisi setiap task; saat rilis, dipindahkan ke `## [X.Y.Z] – <kodenama>`._
>   - _`SECURITY.md`: prosedur isu keamanan & rujukan Dependabot._
>   - _`.deliveries/ledger.jsonl`: buku kuitansi pengiriman (privat): satu baris per handover, berisi `date, codename, version, preview_commit, release_repo, tag`._

---

## Bab 1 — Siklus Harian di Dapur `preview` (Wajib)

### 1.1 Memulai dengan Sinkronisasi di Awal

**Tujuan**: memastikan bahan dan resep lokal sama dengan dapur pusat.

```bash
git checkout preview
# Pindah ke dapur kerja bersama.

git pull --ff-only
# Tarik update hanya jika bisa lurus (tanpa merge commit).
# Kalau gagal, artinya ada percabangan yang harus dibereskan dulu.
```

> - _Pastikan dapur percobaan setara dengan remote._
> - _Kenapa “fast-forward only”? Karena kita ingin riwayat seperti garis not musik—mengalun tanpa simpul kusut._

---

### 1.2 Kerjakan Tugas Kecil (satu fokus/PR)

Setiap tugas mulai dengan membuat **cabang tugas** dari **`preview`**. Namanya harus mengandung kata kunci yang memiliki arti (slug):

```bash
git checkout -b <tipe>/<kata-kunci>
# Pola: <type>/<slug>
# Contoh:
# docs/readme-cleanup
# fix/images-optimize-gif
# feat/login-one-tap
# chore/deps-thirdweb-5.111.8
# refactor/image-components
```

---

### 1.3 Koreografi Kode + Mantra Tiga Tombol

Edit seperlunya dan selalu lakukan:

```bash
yarn prettier --write .
# Prettier merapikan partitur.

yarn lint
# ESLint memastikan nada tidak fals.

yarn build
# Build membuktikan panggung tidak roboh.
# Selalu pastikan hijau.
```

---

### 1.4 Buku Harian Perubahan — Update `CHANGELOG.md` (wajib, tiap task)

Di **`CHANGELOG.md`**, tambahkan ringkasan/poin perubahan di bagian paling atas: **`## [Unreleased]`**. Berikut ini contohnya:

```md
## [Unreleased]

- feat(image): tambah `SmartGIFImage` (otomatis `unoptimized` untuk `.gif`)
- docs(readme): badge dinamis + tautan diff main↔preview
```

> _Kenapa sekarang? Karena ingatan paling jernih adalah tepat setelah menari—bukan seminggu kemudian._  
> _Hasil tahap ini: `CHANGELOG.md` di `preview` berisi deret **dev** terurut (`-dev.1`, `-dev.2`, …), changelog berjalan di `## [Unreleased]`._

---

### 1.5 Setiap Tugas = Satu Detik Jam Pasir (selalu bump versi dev di tiap task)

- Kita menandai detik itu dengan **versi pra-rilis**: `X.Y.Z-dev.N`.
- Skema: `X.Y.Z-dev.N` (naik **N** tiap task sukses).

```bash
yarn version --new-version X.Y.Z-dev.N --no-git-tag-version
# Naikkan N per tugas.
# Contoh:
# yarn version --new-version 2.6.0-dev.1 --no-git-tag-version
```

> _Ini **bukan tag**, belum ada stempel resmi; tapi jam pasir bergerak dan auditor tahu “kapan” sesuatu terjadi._

---

### 1.6 Bahasa Komit yang Dipahami Mesin _dan_ Manusia

Gunakan **Conventional Commits**:

```bash
git add -A
# Jika setelah commit lupa/belum bump versi dev, atau menambahkan changelog,
# silakan bump versi dev, atau update 'CHANGELOG.md' lalu lakukan ini:
# git add package.json CHANGELOG.md

git commit -m "<tipe>(<lingkup>): <deskripsi-singkat>"
# Pola: <type>(scope): <summary>
# Tipe: feat | fix | docs | chore | refactor | test
# Contoh:
# git commit -m "feat(image): add SmartGIFImage (auto-unoptimized for .gif); rename SmartImage→SmartTVImage"
```

---

### 1.7 Tunjukkan ke Dapur Besar

1. Dorong **cabang tugas** ke remote:

   ```bash
   git push -u origin <tipe>/<kata-kunci>
   # Contoh:
   # git push -u origin fix/images-optimize-gif
   # Setara dengan:
   # git push --set-upstream origin <tipe>/<kata-kunci>
   ```

2. Buat PR dari **cabang tugas** ke `preview`:
   - Tulis judul ringkas.
   - Deskripsi berisi poin-poin perubahan.

3. Selalu **Squash & Merge** setelah CI hijau:
   - Tunggu sampai CI hijau.
   - Pilih "Squash & Merge" (wajib).

4. Setelah merged, bereskan **cabang tugas**:

   ```bash
   git checkout preview
   git pull --ff-only
   git branch -d <tipe>/<kata-kunci>
   # Hapus di lokal.

   git push origin :<tipe>/<kata-kunci>
   # Hapus di remote.
   # Setara dengan:
   # git push origin --delete <tipe>/<kata-kunci>
   ```

> _Squash membuat satu tarian utuh dari banyak langkah kecil, sehingga riwayat `preview` tetap puitik dan mudah dibaca._

---

## Bab 2 — Malam Gladi Resik — Task Terakhir `audit-RC` (Wajib)

Akan selalu ada **tugas terakhir** (task audit-RC); menutup pintu dapur, mencatat resep final, dan menempel label “**RC**” di loyang.

1. Bekukan `preview` (**cabang audit-RC**):

   ```bash
   git checkout preview
   git pull --ff-only
   git checkout -b release/audit-rc-X.Y.Z
   # Pola: <release>/<audit-rc-X.Y.Z>
   # Contoh:
   # git checkout -b release/audit-rc-2.6.0
   ```

2. Review global, stabilisasi minor/bug fix kecil jika perlu (tetap kecil).
3. Cek `CHANGELOG.md` — pastikan semua poin sudah di `## [Unreleased]`.
4. Naikkan **kandidat rilis** (bump versi RC di **cabang audit-RC**):

   ```bash
   yarn version --new-version X.Y.Z-rc.N --no-git-tag-version
   # Naikkan N per audit-RC.
   # Contoh:
   # yarn version --new-version 2.6.0-rc.0 --no-git-tag-version
   ```

5. Dorong **cabang audit-RC** ke remote:

   ```bash
   git add -A
   git commit -m "release(audit-RC): cut to X.Y.Z-rc.N (<deskripsi-singkat>)"
   # Contoh:
   # git commit -m "release(audit-RC): cut 2.6.0-rc.0 (freeze in preview)"

   git push -u origin release/audit-rc-X.Y.Z
   # Setara dengan:
   # git push --set-upstream origin release/audit-rc-X.Y.Z
   # Jika mengulangi, gunakan:
   # git push origin release/audit-rc-X.Y.Z
   ```

6. Buat PR dari **cabang audit-RC** ke `preview`:
   - Judul: `release: X.Y.Z-rc.N (audit-RC)`
   - Deskripsi berisi poin-poin perubahan (kalau ada).

7. **Squash & Merge** ke `preview`:
   - Tunggu sampai CI hijau.
   - Pilih "Squash & Merge" (wajib).
   - Setelah merge, `preview` **resmi di RC**, ter-deploy untuk uji live terbatas.

8. Staging (dari `preview`):
   - Cicipi roti di staging — live testing (uji RC).
   - Jika ada bug saat uji RC, reset `release/audit-rc-X.Y.Z` agar **identik** dengan `preview`:

     ```bash
     git checkout release/audit-rc-X.Y.Z
     git pull --ff-only
     git reset --hard origin/preview
     # Samakan SHA & riwayat, dinolkan selisihnya.

     git push -f origin release/audit-rc-X.Y.Z
     # Paksa remote preview ikut sama.
     ```

   - Lalu perbaiki dengan mengulang langkah nomor 2, 3, 4, 5, 6, 7, lalu 8 (langkah ini).
   - Pastikan selalu **menaikkan** RC: `-rc.1`, `-rc.2`, … kalau mengulang langkah di atas.
   - Jika uji RC berjalan lancar, tidak ada bug, audit-RC sukses dan selesai.

   > _RC itu rehearsal dengan kursi penonton kosong. Lampu panggung nyata, tapi wartawan belum kita undang._

9. Hapus **cabang audit-RC**:

   ```bash
   git checkout preview
   git pull --ff-only
   git branch -d release/audit-rc-X.Y.Z
   # Hapus di lokal.

   git push origin :release/audit-rc-X.Y.Z
   # Hapus di remote.
   # Setara dengan:
   # git push origin --delete release/audit-rc-X.Y.Z
   ```

---

## Bab 3 — Potong Release-Branch & Handover Lisensi (Wajib)

### 3.1 Buat Release-Branch (dari `preview`)

Setelah RC lolos uji (stabil), buat **release-branch** dari `preview`.

```bash
git checkout preview
git pull --ff-only
git checkout -b release/vX.Y.Z-<kodenama>
# Contoh:
# git checkout -b release/v2.6.0-pinjol
```

> _**Penulisan baku:** `vX.Y.Z` (tanpa titik setelah huruf `v`)._  
> _Setelah huruf `v`, menggunakan angka bertitik. Bentuk `v.X.Y.Z` adalah kostum yang tidak lazim di festival ini._

---

### 3.2 Bersihkan Suffix & Finalisasi Release-Branch

- Bersihkan versi dari suffix:

  ```bash
  yarn version --new-version X.Y.Z --no-git-tag-version
  # Contoh:
  # yarn version --new-version 2.6.0 --no-git-tag-version
  ```

- Pindahkan catatan dari `## [Unreleased]` ke bab baru `## [X.Y.Z – <kodenama>]` di `CHANGELOG.md`:
  - Cantumkan tanggal (pakai hari rilis).
  - Kosongkan `## [Unreleased]` untuk siklus berikut.
- Lalu commit:

  ```bash
  git add -A
  git commit -m "release(branch): X.Y.Z (<kodenama>) — <deskripsi-singkat>"
  # Contoh:
  # git commit -m "release(branch): 2.6.0 (pinjol) — finalize changelog"
  ```

- Buat tag final (di **release-branch**):

  ```bash
  git tag -a vX.Y.Z-<kodenama> -m "Release X.Y.Z (<kodenama>)"
  # Contoh:
  # git tag -a v2.6.0-pinjol -m "Release 2.6.0 (pinjol)"
  ```

- Lalu dorong dorong **release-branch**:

  ```bash
  git push --set-upstream origin release/vX.Y.Z-<kodenama>
  git push --tags
  ```

- Buat **GitHub Release**:
  - Pilih tag `vX.Y.Z-<kodenama>`.
  - Pilih target `release/vX.Y.Z-<kodenama>`.
  - Tulis judul dengan format `Release X.Y.Z (<kodenama>)`.
  - Lampirkan `CHANGELOG.md` bagian `## [X.Y.Z – <kodenama>]` menggantikan isi bagian `### 0.1.0 🧭 This Release Notes`.
  - Pertahankan semua isi catatan terdahulu dan perbarui sesuai perubahannya.
  - Pilih `Set as the latest release`.
  - Pilih `Create a discussion for this release`, dengan kategori `Q&A`.

---

### 3.3 Handover sebagai Repo Terpisah (Wajib)

- Buat repo kosong untuk klien (GitHub UI) dengan nama repo `pabrikroti-<kodenama>`.
- Dorong isi **release-branch** sebagai `main` di repo `pabrikroti-<kodenama>`:

  ```bash
  git remote add handover git@github.com:myreceiptt/pabrikroti-<kodenama>.git
  # Contoh:
  # git remote add handover git@github.com:myreceiptt/pabrikroti-pinjol.git

  git push --set-upstream handover release/vX.Y.Z-<kodenama>:main
  # Contoh:
  # git push --set-upstream handover release/v2.6.0-pinjol:main

  git push handover --tags
  ```

- Buat **GitHub Release** untuk repo `pabrikroti-<kodenama>`, lampirkan:
  - Pilih tag `vX.Y.Z-<kodenama>`.
  - Pilih target `main`.
  - Tulis judul dengan format `Release X.Y.Z (<kodenama>)`.
  - Lampirkan `CHANGELOG.md` bagian `## [X.Y.Z – <kodenama>]` menggantikan isi bagian `### 0.1.0 🧭 This Release Notes`.
  - Hapus semua **isi** catatan terdahulu.
  - Tambahkan catatan lisensi pemakaian.
  - Tambahkan instruksi operasi awal (ENV, build, deploy).
  - Pilih `Set as the latest release`.
  - Pilih `Create a discussion for this release`, dengan kategori `Q&A`.

> _Mulai saat ini, pembeli/pengguna lisensi bebas melanjutkan pengembangan dan pengoperasian di repo mereka (CI, secrets, domain) tanpa membebani repo inti._

### 3.4 Tunjukkan ke Dapur Besar

- Buat PR **release-branch** → `preview` bertajuk: `Release X.Y.Z (<kodenama>) — post-handover`.
- Isi PR merangkum rilis (boleh merujuk ke Release di repo `pabrikroti-<kodenama>`).
- **Squash & Merge**.
- **Tidak ada tag dan release notes di `preview`**—kita biarkan bersih.

---

## Bab 4 — Gala Premiere ke `main` (Tanpa Tag + Tanpa Release Notes)

Saat semua wangi, setelah matang, dan handover benar-benar live:

- Bersihkan **release-branch**:

  ```bash
  git checkout preview
  git branch -d release/vX.Y.Z-<kodenama>
  git push origin --delete release/vX.Y.Z-<kodenama>
  ```

- Catat di buku kuitansi pengiriman (wajib); tambahkan satu baris ke `.deliveries/ledger.jsonl`:

  ```json
  {
    "date": "2025-11-11",
    "codename": "<kodenama>",
    "version": "X.Y.Z",
    "preview_commit": "<shortSHA>",
    "release_repo": "git@github.com:myreceiptt/pabrikroti-<kodenama>.git",
    "tag": "vX.Y.Z-<kodenama>"
  }
  ```

- Lalu commit dan dorong `preview`:

  ```bash
  git add .deliveries/ledger.jsonl
  git commit -m "ops(delivery): X.Y.Z <kodenama> → handover recorded"
  git push
  ```

- Buat PR `preview` → `main` bertajuk: `Release X.Y.Z (<kodenama>) — delivered`.
- Isi PR merangkum rilis (boleh merujuk ke Release di repo `pabrikroti-<kodenama>`).
- **Squash & Merge**.
- **Tidak ada tag dan release notes di `main`**—kita biarkan bersih.

---

## Bab 5 — Babak Baru Dimulai

Reset `preview` agar **identik** dengan `main`, lalu set **awal siklus**:

```bash
git checkout preview
git reset --hard origin/main
# Samakan SHA & riwayat, dinolkan selisihnya.

git push -f origin preview
# Paksa remote preview ikut sama.

yarn version --new-version X.Y.Z-dev.0 --no-git-tag-version
# Contoh:
# 2.6.1-dev.0 / 2.7.0-dev.0 / 3.0.0-dev.0
# Tentukan sesuai arah pengembangan dan pengoperasian.

git commit -am "chore(version): start next cycle"
git push
```

> _Di sinilah orkestra mengganti partitur; major naik panggung berikut, minor mengisi babak tengah, patch jadi improvisasi halus._

---

## Lampiran — Kamus Singkat Perintah (bahasa manusia)

- `git pull --ff-only` → tarik perubahan _hanya_ jika riwayat bisa diluruskan tanpa simpul (merge commit). Aman & dapat ditebak.
- `git reset --hard origin/main` → buat cabang aktif persis sama dengan `origin/main` (menghapus perubahan lokal yang belum di-commit).
- `git push origin :nama-branch` **=** `git push origin --delete nama-branch` → hapus cabang di **remote**.
- `yarn version --new-version X` → ubah angka versi di `package.json` dan buat commit otomatis untuk perubahan itu.
- **Tag RC tidak kita buat.** Tag hanya untuk rilis final di **release-branch** supaya “stempel kerajaan” jelas satu per versi.

---

## Penempatan Berkas

- `SOP.md` ← **naskah ini**.
- `README.md` ← wajah depan; ringkas, tautkan ke `SOP.md` & `CHANGELOG.md`.
- `CHANGELOG.md` ← buku harian perubahan (tambah di `## [Unreleased]`, pindahkan saat rilis).
- `SECURITY.md` ← kebijakan keamanan.
- _(Opsional disarankan)_ `.github/PULL_REQUEST_TEMPLATE.md` untuk checklist: **prettier/lint/build hijau**, changelog diupdate, PR ke `preview`, **Squash & Merge**.

---

## Epilog — Mengapa Cara Ini Membuat Kita Ringan

- **Manusia** mudah mengikuti alur (cerita dapur → latihan → premiere).
- **Mesin** bahagia: commit rapi, versi berdenyut (`-dev.N`), freeze jelas (`-rc.N`), rilis final bertag.
- **Audit** tinggal menelusuri: task apa, versi berapa, kapan “dipanggang”, kapan “disajikan”.
