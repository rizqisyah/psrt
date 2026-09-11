<script setup>
import {
  imgA12E6Eae594F46809Be59966Aabdf614Copy2,
  imgIkonRumahDanHatiBerornamen1,
  imgIkonKalenderLokasiJamDanPengguna1,
  imgLine8,
  imgOpen553,
  imgOpen592,
  imgBa0C59406Bfc49458A25D5A6D1957393PhotoroomCopy1,
  imgLine5,
} from '../assets'

// Base Y for EventDetail section in Figma node 186:2 (y: 860)
const BASE = 860
const off = (designTop) => designTop - BASE

function openMaps() {
  window.open('https://maps.app.goo.gl/sVkhXBxTf18JBiy6A', '_blank')
}
</script>

<template>
  <section class="event-detail">
    <!-- background photo (design y: 869) -->
    <div class="abs bg-photo" data-node-id="188:115">
      <img alt="" :src="imgA12E6Eae594F46809Be59966Aabdf614Copy2" />
    </div>

    <!-- texture strip (design y: 1070) -->
    <div class="abs texture" data-node-id="188:151">
      <div class="flip">
        <div class="texture-inner">
          <div class="texture-crop">
            <img alt="" :src="imgOpen553" />
          </div>
        </div>
      </div>
    </div>

    <!-- right ornament (design y: 1551) -->
    <div class="abs ornament-right" data-node-id="188:157">
      <div class="flip-143">
        <div class="ornament-right-inner">
          <img alt="" :src="imgOpen592" />
        </div>
      </div>
    </div>

    <!-- left ornament (design y: 1555) -->
    <div class="abs ornament-left" data-node-id="188:156">
      <img alt="" :src="imgBa0C59406Bfc49458A25D5A6D1957393PhotoroomCopy1" />
    </div>

    <!-- header icon (design y: 899) -->
    <div class="abs header-icon" data-node-id="188:121">
      <img alt="" :src="imgIkonRumahDanHatiBerornamen1" />
    </div>
    <p class="abs header-sub" data-node-id="188:117">DETAIL IMPLEMENTASI</p>
    <p class="abs header-title" data-node-id="188:116">AKAD NIKAH</p>

    <!-- Divider 1 (Line 8, design y: 1047) -->
    <div class="abs detail-line" :style="{ top: off(1047) + 'px' }" data-node-id="188:122">
      <div class="line-inset">
        <img alt="" :src="imgLine8" />
      </div>
    </div>

    <!-- ROW 1: TANGGAL (design y: 1084) -->
    <div class="abs detail-icon" :style="{ top: off(1079) + 'px', left: '115px', width: '73px' }" data-node-id="188:127">
      <div class="crop-icon">
        <img
          alt=""
          :src="imgIkonKalenderLokasiJamDanPengguna1"
          style="width: 182.88%; height: 202.27%; left: -0.34%; top: 0;"
        />
      </div>
    </div>
    <p class="abs detail-label" :style="{ top: off(1084) + 'px' }" data-node-id="188:128">TANGGAL</p>
    <p class="abs detail-value" :style="{ top: off(1106) + 'px' }" data-node-id="188:129">Sabtu, 14 November 2026</p>

    <!-- ROW 2: WAKTU (design y: 1146) -->
    <div class="abs detail-icon" :style="{ top: off(1142) + 'px', left: '118px', width: '69px' }" data-node-id="188:142">
      <div class="crop-icon">
        <img
          alt=""
          :src="imgIkonKalenderLokasiJamDanPengguna1"
          style="width: 193.48%; height: 202.27%; left: -2.83%; top: -100.79%;"
        />
      </div>
    </div>
    <p class="abs detail-label" :style="{ top: off(1146) + 'px', left: '191px' }" data-node-id="188:138">WAKTU</p>
    <p class="abs detail-value" :style="{ top: off(1168) + 'px', left: '191px' }" data-node-id="188:140">08.30 s.d 10.00 WIB</p>

    <!-- Divider 2 (Line 10, design y: 1219) -->
    <div class="abs detail-line" :style="{ top: off(1219) + 'px' }" data-node-id="188:136">
      <div class="line-inset">
        <img alt="" :src="imgLine8" />
      </div>
    </div>

    <!-- ROW 3: LOKASI (design y: 1238) -->
    <div class="abs detail-icon" :style="{ top: off(1244) + 'px', left: '115px', width: '73px' }" data-node-id="188:137">
      <div class="crop-icon">
        <img
          alt=""
          :src="imgIkonKalenderLokasiJamDanPengguna1"
          style="width: 182.88%; height: 202.27%; left: -82.47%; top: -1.09%;"
        />
      </div>
    </div>
    <p class="abs detail-label" :style="{ top: off(1238) + 'px' }" data-node-id="188:133">LOKASI</p>
    <p class="abs detail-value loc-title" :style="{ top: off(1261) + 'px' }" data-node-id="188:134">
      Masjid Agung Gresik, Lantai 2 (Sisi Barat)
    </p>
    <p class="abs detail-sub" :style="{ top: off(1281) + 'px' }" data-node-id="188:135">
      Jalan Mayjend Sungkono, Desa Kembangan, Kecamatan Kebomas, Kabupaten Gresik, Jawa Timur
    </p>

    <!-- BUTTON: PROJECT SITE (Group 50, design y: 1350) -->
    <button
      type="button"
      class="abs btn-project-site"
      :style="{ top: off(1350) + 'px' }"
      @click="openMaps"
      data-node-id="2047:254"
    >
      <span class="btn-project-site-inner">PROJECT SITE</span>
    </button>

    <!-- Divider 3 (Line 11, design y: 1424) -->
    <div class="abs detail-line" :style="{ top: off(1424) + 'px' }" data-node-id="188:141">
      <div class="line-inset">
        <img alt="" :src="imgLine8" />
      </div>
    </div>

    <!-- ROW 4: TAMU UNDANGAN (design y: 1458) -->
    <div class="abs detail-icon" :style="{ top: off(1456) + 'px', left: '115px', width: '73px' }" data-node-id="188:147">
      <div class="crop-icon">
        <img
          alt=""
          :src="imgIkonKalenderLokasiJamDanPengguna1"
          style="width: 182.88%; height: 202.27%; left: -83.11%; top: -102.71%;"
        />
      </div>
    </div>
    <p class="abs detail-label" :style="{ top: off(1458) + 'px' }" data-node-id="188:143">TAMU UNDANGAN</p>
    <p class="abs detail-value" :style="{ top: off(1478) + 'px', width: '285px' }" data-node-id="188:144">
      Keluarga, Kerabat, dan Sahabat Terpilih
    </p>

    <!-- Divider 4 (Line 12, design y: 1540) -->
    <div class="abs detail-line" :style="{ top: off(1540) + 'px' }" data-node-id="188:146">
      <div class="line-inset">
        <img alt="" :src="imgLine8" />
      </div>
    </div>

    <!-- BUTTON: LIHAT DETAIL KONSTRUKSI (Group 35, design y: 1560) -->
    <button
      type="button"
      class="abs btn-detail-konstruksi"
      :style="{ top: off(1560) + 'px' }"
      @click="openMaps"
      data-node-id="188:123"
    >
      <span class="btn-detail-inner">SITE PLAN & ACCESS ROUTE</span>
    </button>

    <!-- FOOTER LEGAL & MONOGRAM (design y: 1763 - 1845) -->
    <div class="abs footer-legal-band" :style="{ top: off(1763) + 'px' }">
      <div class="footer-legal-panel"></div>
      <div class="footer-legal-border"></div>

      <!-- Legal left note -->
      <p class="legal-text legal-left" data-node-id="188:172">
        DOKUMEN INI BERSIFAT PRIBADI DAN TIDAK UNTUK DISEBARLUASKAN TANPA IZIN PEMILIK PROYEK.
      </p>

      <!-- Center Monogram S | Z -->
      <div class="center-monogram" data-node-id="188:163">
        <span class="mono-s">S</span>
        <span class="mono-bar"></span>
        <span class="mono-z">Z</span>
      </div>

      <!-- Legal right note -->
      <p class="legal-text legal-right" data-node-id="188:171">
        PROYEK STRATEGIS RUMAH TANGGA MEMBANGUN - MENGUATKAN - SELAMANYA
      </p>
    </div>
  </section>
</template>

<style scoped>
.event-detail {
  position: relative;
  width: 596px;
  height: 1020px;
  flex: none;
  overflow: hidden;
  background: #ffffff;
}
.abs {
  position: absolute;
}
.bg-photo {
  height: 802px;
  left: 64px;
  top: 9px;
  width: 469px;
  filter: drop-shadow(0 4px 15px rgba(0, 0, 0, 0.12));
}
.bg-photo img {
  position: absolute;
  inset: 0;
  max-width: none;
  object-fit: fill;
  pointer-events: none;
  width: 100%;
  height: 100%;
}
.texture {
  height: 684px;
  left: 82px;
  top: 210px;
  width: 504px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}
.texture .flip {
  flex: none;
  transform: rotate(180deg) scaleY(-1);
}
.texture-inner {
  height: 684px;
  position: relative;
  width: 504px;
}
.texture-crop {
  position: absolute;
  inset: 0;
  opacity: 0.5;
  overflow: hidden;
}
.texture-crop img {
  position: absolute;
  height: 100%;
  left: -35.71%;
  max-width: none;
  top: 0;
  width: 135.71%;
}
.ornament-right {
  left: 352px;
  width: 383px;
  height: 383px;
  top: 691px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}
.ornament-right .flip-143 {
  flex: none;
  transform: rotate(-143.78deg) scaleY(-1);
}
.ornament-right-inner {
  position: relative;
  width: 274px;
  height: 274px;
}
.ornament-right-inner img {
  position: absolute;
  inset: 0;
  max-width: none;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.ornament-left {
  height: 230px;
  left: -97px;
  top: 695px;
  width: 345px;
  pointer-events: none;
}
.ornament-left img {
  position: absolute;
  inset: 0;
  max-width: none;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.header-icon {
  height: 53px;
  left: 223px;
  top: 39px;
  width: 151px;
  overflow: hidden;
}
.header-icon img {
  position: absolute;
  inset: 0;
  max-width: none;
  object-fit: cover;
  object-position: center;
  pointer-events: none;
  width: 100%;
  height: 100%;
}
.header-sub {
  font-family: var(--font-serif);
  font-size: 14px;
  line-height: 14px;
  color: #3b4239;
  text-align: center;
  left: 50%;
  top: 115px;
  width: 210px;
  height: 26px;
  margin: 0;
  transform: translateX(-50%);
}
.header-title {
  font-family: var(--font-monomakh);
  font-size: 34px;
  line-height: 34px;
  color: #232323;
  text-align: center;
  left: 50%;
  top: 136px;
  width: 596px;
  height: 42px;
  margin: 0;
  transform: translateX(-50%);
}
.detail-line {
  height: 0;
  left: 123px;
  width: 350px;
}
.line-inset {
  position: absolute;
  inset: -1px 0 0 0;
}
.line-inset img {
  display: block;
  max-width: none;
  width: 100%;
  height: 100%;
}
.detail-icon {
  height: 44px;
}
.crop-icon {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}
.crop-icon img {
  position: absolute;
  max-width: none;
}
.detail-label {
  font-family: var(--font-serif);
  font-size: 16px;
  line-height: 14px;
  color: #232323;
  left: 188px;
  width: 164px;
  height: 18px;
  margin: 0;
}
.detail-value {
  font-family: var(--font-serif);
  font-size: 16px;
  line-height: 18px;
  color: #232323;
  left: 188px;
  width: 285px;
  height: 18px;
  margin: 0;
}
.loc-title {
  width: 318px;
  font-weight: 600;
}
.detail-sub {
  font-family: var(--font-serif);
  font-size: 11px;
  line-height: 14px;
  color: #4a4a4a;
  left: 188px;
  width: 294px;
  margin: 0;
}

/* Button: PROJECT SITE */
.btn-project-site {
  background: #585951;
  border-radius: 5px;
  height: 52px;
  left: 151px;
  width: 294px;
  border: none;
  padding: 4px;
  cursor: pointer;
  box-sizing: border-box;
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.btn-project-site:hover {
  transform: translateY(-1px);
  opacity: 0.95;
}
.btn-project-site-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 2px solid #efe1cf;
  border-radius: 5px;
  font-family: var(--font-monomakh);
  font-size: 17px;
  color: #efe1cf;
  letter-spacing: 1px;
  box-sizing: border-box;
}

/* Button: LIHAT DETAIL KONSTRUKSI */
.btn-detail-konstruksi {
  background: #585951;
  border-radius: 5px;
  height: 52px;
  left: 151px;
  width: 294px;
  border: none;
  padding: 4px;
  cursor: pointer;
  box-sizing: border-box;
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.btn-detail-konstruksi:hover {
  transform: translateY(-1px);
  opacity: 0.95;
}
.btn-detail-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 2px solid var(--color-cream);
  border-radius: 5px;
  font-family: var(--font-monomakh);
  font-size: 17px;
  color: var(--color-cream);
  letter-spacing: 0.5px;
  box-sizing: border-box;
}

/* Footer Legal Ribbon & Monogram */
.footer-legal-band {
  left: 0;
  width: 596px;
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 22px;
  box-sizing: border-box;
}
.footer-legal-panel {
  position: absolute;
  inset: 0;
  background: #585951;
  opacity: 1;
}
.footer-legal-border {
  position: absolute;
  top: 8px;
  bottom: 8px;
  left: 12px;
  right: 12px;
  border: 1px solid rgba(253, 229, 192, 0.7);
  pointer-events: none;
}
.legal-text {
  position: relative;
  z-index: 2;
  font-family: var(--font-monomakh);
  font-size: 9px;
  line-height: 13px;
  color: #efe1cf;
  margin: 0;
  width: 220px;
}
.legal-left {
  text-align: left;
}
.legal-right {
  text-align: right;
}
.center-monogram {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 6px;
}
.mono-s, .mono-z {
  font-family: var(--font-monomakh);
  font-size: 26px;
  font-weight: 700;
  color: #efe1cf;
  line-height: 1;
}
.mono-bar {
  width: 1.5px;
  height: 28px;
  background: #dbc58e;
  margin: 0 4px;
}
</style>
