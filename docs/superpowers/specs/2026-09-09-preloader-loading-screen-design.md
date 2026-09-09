# Desain Teknis: Preloader Loading Screen (Katsudoto Style)

## 1. Ikhtisar (Overview)
Menambahkan layar *preloader / loading screen* sebelum pengunjung memasuki bagian *Cover Section* (`CoverDepan.vue`). Tampilan dan perilakunya mengadopsi mekanisme website referensi Katsudoto (annajeremiah.katsudoto.id), menggunakan icon ilustrasi yang diberikan oleh pengguna (`25ribuaja`).

## 2. Arsitektur & Komponen

### 2.1 Asset Gambar
- **File**: `src/assets/loading-logo.png`
- **Sumber**: Gambar ilustrasi perempuan dengan teks melengkung *"25ribuaja"* yang dikirimkan oleh pengguna (`media_1788944767920.png`).
- Diimpor atau didaftarkan pada komponen atau `src/assets.js`.

### 2.2 Komponen `PreloaderScreen.vue`
- **Lokasi**: `src/components/PreloaderScreen.vue`
- **Props**:
  - `duration` (Number, default: 2800 ms): Durasi minimal animasi loading sebelum mulai memudar (*fade-out*).
- **Emits**:
  - `finish`: Dieksekusi setelah transisi *fade-out* selesai sehingga induk (`App.vue`) dapat melepas komponen dari DOM.
- **Elemen & Struktur Visual**:
  - `.loading-overlay`: Elemen `fixed` penuh layar (`inset: 0`, `z-index: 999999`, latar belakang putih `#ffffff`, flexbox vertikal di tengah).
  - `.loading-content`: Pembungkus logo dan teks dengan jarak (`gap: 16px`).
  - `.loading-logo`: Menampilkan icon dengan animasi lembut (*gentle breath/pulse* halus) dengan lebar ~110px.
  - `.loading-caption`: Teks bergaya mesin tik (*typewriter effect*) `"Wait a second..."` dengan font bersih sans-serif (`font-family: 'Inter', sans-serif`), warna `#353A20`, ukuran 13px, font-weight 500, dengan kursor ketik halus.
- **Logika Animasi Ketik (Typewriter)**:
  - Teks target: `"Wait a second..."`.
  - Interval pengetikan: ~180-200ms per karakter.
  - Saat selesai terketik, teks bertahan sejenak sebelum mengulang atau langsung memudar bersamaan dengan penutupan preloader.

### 2.3 Integrasi di `App.vue`
- Menambahkan state reaktif `isLoading = ref(true)`.
- Mengontrol tampilan:
  - Sebelum loading selesai (`isLoading === true`), `PreloaderScreen` aktif di layer paling atas.
  - Setelah `PreloaderScreen` mengirimkan event `@finish`, `isLoading.value = false`.
  - Transisi Vue `<Transition name="preloader-fade">` memberikan efek memudar (*smooth fade out* ~600ms).
  - Cover Depan (`CoverDepan.vue`) berada di bawahnya dan langsung terlihat anggun saat preloader selesai.

## 3. Rencana Pengujian & Verifikasi
1. **Verifikasi Visual**:
   - Membuka halaman di browser (desktop & mobile).
   - Memastikan logo `25ribuaja` berada tepat di tengah dengan proporsi tajam dan tidak pecah.
   - Memastikan efek typewriter `"Wait a second..."` berjalan mulus di bawah logo dengan warna teks `#353A20` dan background `#ffffff`.
2. **Verifikasi Transisi**:
   - Memastikan setelah durasi ~2.5 - 3 detik, preloader memudar secara halus (fade-out 600ms).
   - Memastikan setelah preloader hilang, `CoverDepan.vue` dapat diakses dan tombol "Buka Undangan" berfungsi normal tanpa terhalang elemen preloader.
3. **Verifikasi Build**:
   - Menjalankan pemeriksaan sintaksis / build Vite untuk memastikan tidak ada error kompilasi.
