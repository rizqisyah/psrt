# Preloader Loading Screen Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Menampilkan layar preloader elegan gaya Katsudoto dengan logo ilustrasi pengguna dan animasi teks ketik "Wait a second..." sebelum pengguna masuk ke cover section (`CoverDepan.vue`).

**Architecture:** Membuat komponen mandiri `PreloaderScreen.vue` dengan overlay putih fullscreen, pengetikan typewriter dinamis, dan integrasi transisi fade-out ke `App.vue`.

**Tech Stack:** Vue 3 (Composition API / `<script setup>`), Vite, Vanilla CSS.

## Global Constraints
- Target platform: Browser modern (Desktop & Mobile responsif).
- Latar belakang: Putih bersih (`#ffffff`).
- Teks loading: `"Wait a second..."` dengan efek ketik (typewriter).
- Warna teks loading: `#353A20`.
- Font: Inter / sans-serif clean.
- Tidak merusak fungsionalitas pembukaan cover (`CoverDepan.vue`) maupun isi undangan (`IsiUndangan.vue`).

---

### Task 1: Asset Preparation & Setup

**Files:**
- Create: `src/assets/loading-logo.png`
- Source: `C:\Users\Qiqi\.gemini\antigravity-ide\brain\da7b9b70-3277-46f4-a95f-8f025191fc02\.user_uploaded\media_1788944767920.png`

**Interfaces:**
- Produces: `src/assets/loading-logo.png` siap diimpor di Vue.

- [ ] **Step 1: Salin asset logo ke direktori proyek**
Salin file `media_1788944767920.png` ke `f:/Undangan/PSRT/src/assets/loading-logo.png`.

- [ ] **Step 2: Verifikasi file asset**
Pastikan file ada di `src/assets/loading-logo.png` dengan ukuran byte yang sesuai.

---

### Task 2: Create `PreloaderScreen.vue` Component

**Files:**
- Create: `src/components/PreloaderScreen.vue`

**Interfaces:**
- Consumes: `src/assets/loading-logo.png`
- Produces: `<PreloaderScreen :duration="2800" @finish="onPreloaderFinish" />`

- [ ] **Step 1: Tulis komponen `PreloaderScreen.vue`**
Implementasikan template, script setup, dan CSS:
- Overlay fullscreen `#ffffff`, z-index 999999.
- Logo di tengah dengan ukuran lebar ~110px dan animasi pulse halus.
- Logika interval typewriter yang mengetik `"Wait a second..."` karakter demi karakter (interval 180ms).
- Timer untuk durasi total loading (`duration` prop, default 2800ms).
- Saat waktu habis, tambahkan kelas `.fade-out` (600ms) dan panggil emit `'finish'` setelah transisi selesai.

- [ ] **Step 2: Verifikasi komponen secara lokal**
Pastikan kode komponen tidak memiliki syntax error.

---

### Task 3: Integrasi `PreloaderScreen` ke `App.vue`

**Files:**
- Modify: `src/App.vue`

**Interfaces:**
- Consumes: `PreloaderScreen.vue`
- Manages: state `isLoading = ref(true)`

- [ ] **Step 1: Modifikasi `App.vue`**
- Import `PreloaderScreen` dari `./components/PreloaderScreen.vue`.
- Tambahkan `const isLoading = ref(true)`.
- Jika URL mengandung `?open=1`, langsung set `isLoading.value = false` agar tidak menghambat direct preview jika dibutuhkan.
- Tempatkan `<PreloaderScreen v-if="isLoading" @finish="isLoading = false" />` di dalam `<Transition name="preloader-fade">`.
- Tambahkan styling transisi `preloader-fade-leave-active` dan `preloader-fade-leave-to`.

- [ ] **Step 2: Uji build Vite**
Jalankan `npm run build` atau periksa kompilasi proyek.

---

### Task 4: Verifikasi Tampilan & Fungsionalitas di Browser

**Files:**
- Test URL: `http://localhost:5173/`

- [ ] **Step 1: Jalankan dev server atau verifikasi proses aktif**
- [ ] **Step 2: Uji alur pengguna**
  1. Halaman dibuka -> Preloader tampil putih bersih dengan logo dan teks ketik `"Wait a second..."`.
  2. Setelah ~2.8 detik -> Preloader memudar secara mulus (fade-out).
  3. Cover Depan tampil sempurna.
  4. Tombol "Buka Undangan" diklik -> Isi undangan terbuka tanpa gangguan.
