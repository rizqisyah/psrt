<script setup>
import { computed, ref, onMounted, onUnmounted, watch } from 'vue'
import {
  imgOpen553,
  imgOpen562,
  imgOpen613,
  imgVector9,
  imgVector10,
  imgSketchHouseCover,
  imgDocumentPaperCover,
  imgClipboardTagCover,
  imgIconHouseRed,
  imgStampProjectApproved,
  imgSignaturesTwoFamilies,
  imgFlowerBottomLeft,
  imgFlowerMidRight,
  imgFlowerMidLeft,
  imgCoverLine1,
  imgCoverLine2,
  imgCoverLine3,
  imgCoverLine4,
  imgCoverLine5,
  imgCoverLine6,
  imgCoverPenShadow,
  imgCoverFountainPen,
  imgCoverCoupleNamesCalligraphy,
} from '../assets'

const props = defineProps({
  guestName: {
    type: String,
    default: 'NAMA TAMU UNDANGAN',
  },
  isActive: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['open'])

const formattedGuestName = computed(() => {
  return props.guestName?.trim() || 'NAMA TAMU UNDANGAN'
})

function handleOpen() {
  emit('open')
}

// Cover Entrance State
const coverReady = ref(false)

// Fit within 1 screen height / full screen coverage
const scale = ref(1)

function updateScale() {
  if (typeof window === 'undefined') return

  const vw = window.innerWidth
  const vh = window.innerHeight

  const scaleW = vw / 596
  const scaleH = vh / 1183

  // On mobile devices (vw <= 600) or portrait aspect ratio,
  // scale to fill the entire viewport edge-to-edge (full screen)
  if (vw <= 600 || vw < vh) {
    scale.value = Math.max(scaleW, scaleH)
  } else {
    // Desktop / landscape screens: scale by height to frame the entire document
    scale.value = scaleH
  }
}

watch(
  () => props.isActive,
  (active) => {
    if (active) {
      setTimeout(() => {
        coverReady.value = true
      }, 50)
    } else {
      coverReady.value = false
    }
  },
  { immediate: true }
)

onMounted(() => {
  updateScale()
  window.addEventListener('resize', updateScale)
  window.addEventListener('orientationchange', updateScale)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScale)
  window.removeEventListener('orientationchange', updateScale)
})
</script>

<template>
  <div
    class="cover-depan-wrapper"
    :class="{ 'cover-ready': coverReady }"
    data-node-id="58:295"
    data-name="COVER DEPAN"
  >
    <div
      class="cover-canvas"
      :style="{
        transform: `translate(-50%, -50%) scale(${scale})`,
      }"
    >
      <!-- 1. Background Desk Blueprint Grid (Node 58:296) -->
      <div class="abs blueprint-grid" data-node-id="58:296">
        <div class="bp-grid-inner">
          <img :src="imgOpen553" alt="" />
        </div>
      </div>

      <!-- 2. Blueprint Architectural Grid Sheets (Nodes 58:298 & 58:297) -->
      <div class="abs blueprint-sheet-10" data-node-id="58:298">
        <img :src="imgVector10" alt="" />
      </div>
      <div class="abs blueprint-sheet-9" data-node-id="58:297">
        <img :src="imgVector9" alt="" />
      </div>

      <!-- 3. Botanical Pencil Sketch Accents Framing the Edges (Nodes 58:342, 58:340, 58:341) -->
      <div class="abs botanical-mid-left" data-node-id="58:342">
        <div class="botanical-flip">
          <img :src="imgFlowerMidLeft" alt="" />
        </div>
      </div>

      <div class="abs botanical-bottom-left" data-node-id="58:340">
        <div class="botanical-rot">
          <img :src="imgFlowerBottomLeft" alt="" />
        </div>
      </div>

      <div class="abs botanical-mid-right" data-node-id="58:341">
        <img :src="imgFlowerMidRight" alt="" />
      </div>

      <!-- 4. Architectural House Blueprint Drawing at Bottom (Node 58:299) -->
      <div class="abs house-sketch-wrap" data-node-id="58:299">
        <div class="house-sketch-rot">
          <div class="house-sketch-card">
            <img :src="imgSketchHouseCover" alt="House Blueprint" />
          </div>
        </div>
      </div>

      <!-- 5. Main Certificate / Dossier Paper Frame (Node 58:300) -->
      <div class="abs main-paper-frame" data-node-id="58:300">
        <img :src="imgDocumentPaperCover" alt="Dokumen Resmi" />
      </div>

      <!-- 6. Drafting Compass Line Behind Couple Names (Node 58:327) -->
      <div class="abs drafting-compass" data-node-id="58:327">
        <img :src="imgOpen562" alt="" />
      </div>

      <!-- 7. Desk Props Bottom Right: Shadow, Tube, Pen (Nodes 58:301, 58:302, 58:330) -->
      <div class="abs pen-shadow" data-node-id="58:301">
        <img :src="imgCoverPenShadow" alt="" />
      </div>

      <div class="abs rolled-blueprint-tube" data-node-id="58:302">
        <img :src="imgOpen613" alt="" />
      </div>

      <div class="abs fountain-pen-wrap" data-node-id="58:330">
        <div class="fountain-pen-rot">
          <div class="fountain-pen-inner">
            <img :src="imgCoverFountainPen" alt="Pena Arsip" />
          </div>
        </div>
      </div>

      <!-- 8. Top-Left Clipboard Badge (Node 58:309) -->
      <div class="abs clipboard-badge-wrap" data-node-id="58:309">
        <div class="clipboard-rot">
          <div class="clipboard-badge">
            <img :src="imgClipboardTagCover" alt="Kategori 7 Strategis Prioritas Nasional" />
          </div>
        </div>
      </div>

      <!-- 9. Top-Right "PROJECT APPROVED" Stamp (Node 58:328) -->
      <div class="abs stamp-approved-wrap" data-node-id="58:328">
        <div class="stamp-rot">
          <div class="stamp-approved">
            <img :src="imgStampProjectApproved" alt="Project Approved Stamp" />
          </div>
        </div>
      </div>

      <!-- 10. Monogram S | Z (Node 58:334) -->
      <div class="abs monogram-group" data-node-id="58:334">
        <span class="monogram-letter letter-s" data-node-id="58:335">S</span>
        <div class="monogram-line-wrap" data-node-id="58:337">
          <img :src="imgCoverLine6" alt="" />
        </div>
        <span class="monogram-letter letter-z" data-node-id="58:336">Z</span>
      </div>

      <!-- 11. Document Number Registration Box (Nodes 58:304, 58:303, 58:318, 58:319, 58:326) -->
      <div class="abs doc-box-outer" data-node-id="58:304"></div>
      <div class="abs doc-box-inner" data-node-id="58:303"></div>
      <div class="abs doc-box-title" data-node-id="58:318">NOMOR DOKUMEN</div>
      <div class="abs doc-box-divider" data-node-id="58:326">
        <img :src="imgCoverLine5" alt="" />
      </div>
      <div class="abs doc-box-number" data-node-id="58:319">001/PSRN/2026</div>

      <!-- 12. Document Subtitle & Line (Nodes 58:314, 58:321) -->
      <div class="abs doc-subtitle-header" data-node-id="58:314">
        DOKUMEN PERSETUJUAN PELAKSANAAN
      </div>
      <div class="abs doc-subtitle-line" data-node-id="58:321">
        <img :src="imgCoverLine1" alt="" />
      </div>

      <!-- 13. Main Project Title (Node 58:311) -->
      <div class="abs project-main-title" data-node-id="58:311">
        <p class="title-line-1">PROYEK STRATEGIS</p>
        <p class="title-line-2">RUMAH TANGGA</p>
      </div>

      <!-- 14. House Divider with Lines (Nodes 58:322, 58:323, 58:324) -->
      <div class="abs house-divider-container" data-node-id="58:320">
        <div class="abs line-left" data-node-id="58:323">
          <img :src="imgCoverLine2" alt="" />
        </div>
        <div class="abs house-icon-center" data-node-id="58:322">
          <img :src="imgIconHouseRed" alt="" />
        </div>
        <div class="abs line-right" data-node-id="58:324">
          <img :src="imgCoverLine3" alt="" />
        </div>
      </div>

      <!-- 15. Invitation Statement (Node 58:315) -->
      <p class="abs invite-statement-text" data-node-id="58:315">
        Setelah melalui proses studi kelayakan, konsultasi publik,<br />
        koordinasi lintas sektor, dan uji komitmen jangka panjang,<br />
        dengan hormat kami mengundang Bapak/Ibu/Saudara/i<br />
        untuk menghadiri peresmian proyek:
      </p>

      <!-- 16. Subproject Title "PEMBANGUNAN RUMAH TANGGA" (Node 58:312) -->
      <div class="abs subproject-gold-title" data-node-id="58:312">
        <p class="sub-line-1">PEMBANGUNAN</p>
        <p class="sub-line-2">RUMAH TANGGA</p>
      </div>

      <!-- 17. Couple Names Calligraphy in Custom Quizy Script (Node 58:313) -->
      <div class="abs couple-names-container" data-node-id="58:313">
        <img
          :src="imgCoverCoupleNamesCalligraphy"
          class="couple-calligraphy-img"
          alt="Sari Uswatun Chasanah, S.T. & Ar. Zahron Syauqi, S.T."
        />
      </div>

      <!-- 18. Divider Line Below Names (Node 58:325) -->
      <div class="abs names-bottom-divider" data-node-id="58:325">
        <img :src="imgCoverLine4" alt="" />
      </div>

      <!-- 19. Guest Salutation & Dynamic Guest Name (Nodes 58:316, 58:317) -->
      <div class="abs guest-salutation-wrap">
        <div class="guest-label-yth" data-node-id="58:316">KEPADA YTH.</div>
        <div class="guest-name-dynamic" data-node-id="58:317">{{ formattedGuestName }}</div>
      </div>

      <!-- 20. CTA Button: BUKA DOKUMEN (Nodes 58:305, 58:306, 58:307, 58:308) -->
      <button
        type="button"
        class="abs btn-buka-dokumen"
        data-node-id="58:305"
        @click="handleOpen"
        aria-label="Buka Dokumen Undangan"
      >
        <div class="btn-bg-dark" data-node-id="58:306">
          <div class="btn-border-inner" data-node-id="58:307">
            <span class="btn-text-content" data-node-id="58:308">BUKA DOKUMEN</span>
          </div>
        </div>
      </button>

      <!-- 21. Confidentiality Disclaimer Note (Nodes 58:331, 58:332, 58:333) -->
      <div class="abs privacy-container" data-node-id="58:331">
        <p class="privacy-disclaimer-text" data-node-id="58:332">
          <span class="privacy-line-1">
            <svg
              class="privacy-lock-svg"
              width="9"
              height="12"
              viewBox="0 0 9 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              data-node-id="58:333"
            >
              <path
                d="M1.75 4.5V3C1.75 1.62 2.87 0.5 4.5 0.5C6.13 0.5 7.25 1.62 7.25 3V4.5"
                stroke="black"
                stroke-width="1.1"
                stroke-linecap="round"
              />
              <rect
                x="0.6"
                y="4.5"
                width="7.8"
                height="6.8"
                rx="1.2"
                fill="none"
                stroke="black"
                stroke-width="1.1"
              />
              <circle cx="4.5" cy="7.4" r="0.75" fill="black" />
              <path d="M4.15 7.7L3.85 9.5H5.15L4.85 7.7H4.15Z" fill="black" />
            </svg>
            Dokumen ini bersifat pribadi dan tidak untuk disebarluaskan
          </span>
          <span class="privacy-line-2">tanpa izin pemilik proyek.</span>
        </p>
      </div>

      <!-- 22. Dual Family Approval Signatures Section (Nodes 58:329, 58:338, 58:339) -->
      <div class="abs approval-section-wrap" data-node-id="58:329">
        <div class="approval-header-label">DISETUJUI OLEH:</div>
        <div class="approval-stamp-box">
          <img :src="imgSignaturesTwoFamilies" alt="Stempel Persetujuan Dua Keluarga" />
          <span class="sign-text sign-sari" data-node-id="58:338">
            KELUARGA BESAR<br />SARI
          </span>
          <span class="sign-text sign-zahron" data-node-id="58:339">
            KELUARGA BESAR<br />ZAHRON
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Wrapper ensuring full screen coverage (1 halaman full) */
.cover-depan-wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #c0b8ba;
  user-select: none;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  filter: blur(12px);
  transform: scale(0.96);
  transition: opacity 1.8s cubic-bezier(0.16, 1, 0.3, 1),
              filter 1.8s cubic-bezier(0.16, 1, 0.3, 1),
              transform 2.0s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform, filter;
}

.cover-depan-wrapper.cover-ready {
  opacity: 1;
  filter: blur(0);
  transform: scale(1);
}

.cover-canvas {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 596px;
  height: 1183px;
  transform-origin: center center;
  overflow: hidden;
  background-color: #c0b8ba;
}

/* Absolute Positioning Base */
.abs {
  position: absolute;
  box-sizing: border-box;
}

/* 1. Background Desk Blueprint Grid (Node 58:296) */
.blueprint-grid {
  top: -159px;
  left: 56px;
  width: 492px;
  height: 492px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 1;
}

.bp-grid-inner {
  transform: rotate(180deg) scaleY(-1);
  width: 492px;
  height: 492px;
}

.bp-grid-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.31;
}

/* 2. Blueprint Architectural Grid Sheets (Nodes 58:298 & 58:297) */
.blueprint-sheet-10 {
  top: -4px;
  left: 432px;
  width: 226px;
  height: 461px;
  pointer-events: none;
  z-index: 2;
}

.blueprint-sheet-9 {
  display: none;
}

.blueprint-sheet-10 img {
  position: absolute;
  top: -14.4px;
  left: -24.4px;
  width: 262.8px;
  height: 497.8px;
  max-width: none;
  display: block;
}

/* 3. Botanical Pencil Sketches */
.botanical-mid-left {
  top: 275px;
  left: -398px;
  width: 633px;
  height: 633px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 15;
}

.botanical-flip {
  transform: rotate(180deg) scaleY(-1);
  width: 633px;
  height: 633px;
}

.botanical-flip img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.botanical-bottom-left {
  top: 592px;
  left: -273px;
  width: 438px;
  height: 438px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 15;
}

.botanical-rot {
  transform: rotate(20.22deg);
  width: 341px;
  height: 341px;
}

.botanical-rot img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.botanical-mid-right {
  top: 464px;
  left: 360px;
  width: 534px;
  height: 534px;
  pointer-events: none;
  z-index: 15;
}

.botanical-mid-right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 4. Architectural House Blueprint Drawing at Bottom (Node 58:299) */
.house-sketch-wrap {
  top: 794px;
  left: -88px;
  width: 551px;
  height: 442px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 2;
}

.house-sketch-rot {
  transform: rotate(17.07deg);
}

.house-sketch-card {
  width: 480px;
  height: 315px;
  position: relative;
  box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.34);
  overflow: hidden;
}

.house-sketch-card img {
  position: absolute;
  top: -7.64%;
  left: -6.38%;
  width: 112.07%;
  height: 113.89%;
  max-width: none;
}

/* 5. Main Certificate / Dossier Paper Frame (Node 58:300) */
.main-paper-frame {
  top: 107px;
  left: 34px;
  width: 536px;
  height: 916px;
  z-index: 3;
  box-shadow: none;
  overflow: hidden;
  pointer-events: none;
}

.main-paper-frame img {
  position: absolute;
  top: 0;
  left: -3.03%;
  width: 106.42%;
  height: 100%;
  max-width: none;
}

/* 6. Drafting Compass Line Behind Couple Names (Node 58:327) */
.drafting-compass {
  top: 496px;
  left: 427px;
  width: 129px;
  height: 289px;
  pointer-events: none;
  z-index: 4;
  opacity: 0.28;
  overflow: hidden;
}

.drafting-compass img {
  position: absolute;
  top: 0;
  left: 0;
  width: 224.03%;
  height: 100%;
  max-width: none;
}

/* 7. Desk Props Bottom Right: Shadow, Tube, Pen (Nodes 58:301, 58:302, 58:330) */
.pen-shadow {
  top: 710px;
  left: 279px;
  width: 325px;
  height: 325px;
  pointer-events: none;
  z-index: 10;
  opacity: 0.07;
}

.pen-shadow img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.rolled-blueprint-tube {
  top: 762px;
  left: 360px;
  width: 257px;
  height: 257px;
  pointer-events: none;
  z-index: 11;
}

.rolled-blueprint-tube img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fountain-pen-wrap {
  top: 756px;
  left: 324px;
  width: 463px;
  height: 463px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 12;
}

.fountain-pen-rot {
  transform: rotate(-170.91deg) scaleY(-1);
}

.fountain-pen-inner {
  width: 404px;
  height: 404px;
}

.fountain-pen-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: drop-shadow(0px 18px 2.8px rgba(0, 0, 0, 0.14));
}

/* 8. Top-Left Clipboard Badge (Node 58:309) */
.clipboard-badge-wrap {
  top: 86px;
  left: 14px;
  width: 177px;
  height: 143px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 5;
}

.clipboard-rot {
  transform: rotate(1.37deg);
}

.clipboard-badge {
  width: 174px;
  height: 139px;
}

.clipboard-badge img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: drop-shadow(0px 8px 5px rgba(0, 0, 0, 0.33));
}

/* 9. Top-Right "PROJECT APPROVED" Stamp (Node 58:328) */
.stamp-approved-wrap {
  top: 212px;
  left: 472px;
  width: 194px;
  height: 186px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 5;
}

.stamp-rot {
  transform: rotate(-5.46deg);
}

.stamp-approved {
  width: 179px;
  height: 170px;
}

.stamp-approved img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 10. Monogram S | Z (Node 58:334) */
.monogram-group {
  top: 144px;
  left: 242px;
  width: 112px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 6;
}

.monogram-letter {
  font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
  font-size: 48px;
  line-height: 1;
  color: #dbc58e;
  font-weight: 400;
}

.monogram-line-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 39px;
}

.monogram-line-wrap img {
  transform: rotate(90deg);
  width: 39px;
  height: 1px;
}

/* 11. Document Number Registration Box (Nodes 58:304, 58:303, 58:318, 58:319, 58:326) */
.doc-box-outer {
  top: 153px;
  left: 403px;
  width: 142px;
  height: 51px;
  border: 1px solid #000000;
  z-index: 6;
  pointer-events: none;
}

.doc-box-inner {
  top: 157px;
  left: 407px;
  width: 134px;
  height: 43px;
  border: 1px solid #000000;
  z-index: 6;
  pointer-events: none;
}

.doc-box-title {
  top: 160px;
  left: 474.5px;
  transform: translateX(-50%);
  width: 131px;
  font-family: var(--font-inter), 'Inter', sans-serif;
  font-size: 9px;
  font-weight: 400;
  color: #000000;
  text-align: center;
  letter-spacing: 0.5px;
  line-height: 16px;
  z-index: 7;
}

.doc-box-divider {
  top: 178px;
  left: 411px;
  width: 126px;
  height: 1px;
  z-index: 7;
}

.doc-box-divider img {
  width: 100%;
  height: 1px;
  display: block;
}

.doc-box-number {
  top: 178px;
  left: 474.5px;
  transform: translateX(-50%);
  width: 131px;
  font-family: var(--font-inter), 'Inter', sans-serif;
  font-size: 9px;
  font-weight: 400;
  color: #000000;
  text-align: center;
  letter-spacing: 0.5px;
  line-height: 16px;
  z-index: 7;
}

/* 12. Document Subtitle & Line (Nodes 58:314, 58:321) */
.doc-subtitle-header {
  top: 204px;
  left: calc(50% + 5px);
  transform: translateX(-50%);
  width: max-content;
  max-width: 90%;
  white-space: nowrap;
  font-family: var(--font-inter), 'Inter', sans-serif;
  font-weight: 600;
  font-size: 13px;
  line-height: 40px;
  color: #000000;
  text-align: center;
  letter-spacing: 0.5px;
  z-index: 6;
}

.doc-subtitle-line {
  top: 245px;
  left: 153px;
  width: 298px;
  height: 1px;
  z-index: 6;
}

.doc-subtitle-line img {
  width: 100%;
  height: 1px;
  display: block;
}

/* 13. Main Project Title (Node 58:311) */
.project-main-title {
  top: 266px;
  left: 296px;
  transform: translateX(-50%);
  width: 364px;
  text-align: center;
  font-family: var(--font-monomakh), 'Monomakh', serif;
  font-size: 34px;
  line-height: 34px;
  color: #000000;
  letter-spacing: 0.5px;
  z-index: 6;
}

.title-line-1,
.title-line-2 {
  margin: 0;
  line-height: 34px;
  white-space: nowrap;
}

/* 14. House Divider with Lines (Nodes 58:322, 58:323, 58:324) */
.house-divider-container {
  top: 333px;
  left: 171px;
  width: 256px;
  height: 27px;
  z-index: 6;
}

.line-left {
  top: 13px;
  left: 0;
  width: 108px;
  height: 1px;
}

.line-left img {
  width: 100%;
  height: 1px;
  display: block;
}

.house-icon-center {
  top: 0;
  left: 113px;
  width: 29px;
  height: 27px;
  overflow: hidden;
}

.house-icon-center img {
  position: absolute;
  top: -48.15%;
  left: -41.38%;
  width: 182.76%;
  height: 196.3%;
  max-width: none;
}

.line-right {
  top: 13px;
  left: 152px;
  width: 104px;
  height: 1px;
}

.line-right img {
  width: 100%;
  height: 1px;
  display: block;
}

/* 15. Invitation Statement (Node 58:315) */
.invite-statement-text {
  top: 363px;
  left: calc(50% + 5.5px);
  transform: translateX(-50%);
  width: 295px;
  margin: 0;
  text-align: center;
  font-family: var(--font-inter), 'Inter', sans-serif;
  font-weight: 600;
  font-size: 10px;
  line-height: 15px;
  color: #000000;
  z-index: 6;
}

/* 16. Subproject Title "PEMBANGUNAN RUMAH TANGGA" (Node 58:312) */
.subproject-gold-title {
  top: 446px;
  left: 301px;
  transform: translateX(-50%);
  width: 364px;
  text-align: center;
  font-family: var(--font-monomakh), 'Monomakh', serif;
  font-size: 29px;
  line-height: 32px;
  color: #ad9265;
  letter-spacing: 0.5px;
  z-index: 6;
}

.sub-line-1,
.sub-line-2 {
  margin: 0;
  line-height: 32px;
}

/* 17. Couple Names Calligraphy in Custom Quizy Script (Node 58:313) */
.couple-names-container {
  top: 540px;
  left: calc(50% + 5.5px);
  transform: translateX(-50%);
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 6;
}

.couple-calligraphy-img {
  width: 100%;
  height: auto;
  display: block;
}

/* 18. Divider Line Below Names (Node 58:325) */
.names-bottom-divider {
  top: 674px;
  left: calc(50% + 19.5px);
  transform: translateX(-50%);
  width: 239px;
  height: 1px;
  z-index: 6;
}

.names-bottom-divider img {
  width: 100%;
  height: 1px;
  display: block;
}

/* 19. Guest Salutation & Dynamic Guest Name (Nodes 58:316, 58:317) */
.guest-salutation-wrap {
  top: 700px;
  left: 299.33px;
  transform: translateX(-50%);
  width: 327px;
  text-align: center;
  z-index: 6;
}

.guest-label-yth {
  font-family: var(--font-inter), 'Inter', sans-serif;
  font-weight: 600;
  font-size: 17.5px;
  line-height: 1.2;
  color: #000000;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
}

.guest-name-dynamic {
  font-family: var(--font-inter), 'Inter', sans-serif;
  font-weight: 600;
  font-size: 17.5px;
  line-height: 1.2;
  color: #000000;
  letter-spacing: 0.5px;
}

/* 20. CTA Button: BUKA DOKUMEN (Nodes 58:305, 58:306, 58:307, 58:308) */
.btn-buka-dokumen {
  top: 756px;
  left: 151px;
  width: 294px;
  height: 52px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 20;
  outline: none;
  transition: transform 0.2s ease, filter 0.2s ease;
}

.btn-buka-dokumen:hover {
  transform: translateY(-2px) scale(1.02);
  filter: drop-shadow(0 6px 14px rgba(0, 0, 0, 0.25));
}

.btn-buka-dokumen:active {
  transform: translateY(1px) scale(0.98);
}

.btn-bg-dark {
  width: 294px;
  height: 52px;
  background-color: #747a75;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-border-inner {
  width: 286px;
  height: 44px;
  border: 2px solid #efe1cf;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-text-content {
  font-family: var(--font-monomakh), 'Monomakh', serif;
  font-size: 24px;
  line-height: 45px;
  color: #efe1cf;
  letter-spacing: 1px;
}

/* 21. Confidentiality Disclaimer Note (Nodes 58:331, 58:332, 58:333) */
.privacy-container {
  top: 819px;
  left: 50%;
  transform: translateX(-50%);
  width: 320px;
  z-index: 6;
  pointer-events: none;
}

.privacy-disclaimer-text {
  margin: 0;
  font-family: var(--font-inter), 'Inter', sans-serif;
  font-weight: 500;
  font-size: 9.9px;
  line-height: 13.5px;
  color: #000000;
  text-align: center;
}

.privacy-line-1 {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.privacy-lock-svg {
  width: 9px;
  height: 12px;
  flex-shrink: 0;
  display: inline-block;
}

.privacy-line-2 {
  display: block;
  text-align: center;
}

/* 22. Dual Family Approval Signatures Section (Nodes 58:329, 58:338, 58:339) */
.approval-section-wrap {
  top: 850px;
  left: 62px;
  width: 195px;
  z-index: 6;
}

.approval-header-label {
  font-family: var(--font-inter), 'Inter', sans-serif;
  font-size: 8px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 2px;
  letter-spacing: 0.5px;
}

.approval-stamp-box {
  position: relative;
  width: 195px;
  height: 98px;
  opacity: 0.73;
}

.approval-stamp-box img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.sign-text {
  position: absolute;
  top: 23px;
  font-family: var(--font-monomakh), 'Monomakh', serif;
  font-size: 7px;
  line-height: 9px;
  color: #000000;
  text-align: center;
  width: 74px;
}

.sign-sari {
  left: 13px;
}

.sign-zahron {
  left: 107px;
}

/* ---------------------------------------------------------------------------
   Cover Entrance & Breathing Animation (Qinvi Theme Style)
--------------------------------------------------------------------------- */
/* Initial state before coverReady */
.cover-canvas .main-paper-frame,
.cover-canvas .botanical-mid-left,
.cover-canvas .botanical-bottom-left,
.cover-canvas .botanical-mid-right,
.cover-canvas .clipboard-badge-wrap,
.cover-canvas .stamp-approved-wrap,
.cover-canvas .monogram-group,
.cover-canvas .doc-box-outer,
.cover-canvas .doc-box-inner,
.cover-canvas .doc-box-title,
.cover-canvas .doc-box-divider,
.cover-canvas .doc-box-number,
.cover-canvas .doc-subtitle-header,
.cover-canvas .doc-subtitle-line,
.cover-canvas .project-main-title,
.cover-canvas .house-divider-container,
.cover-canvas .invite-statement-text,
.cover-canvas .subproject-gold-title,
.cover-canvas .couple-names-container,
.cover-canvas .names-bottom-divider,
.cover-canvas .guest-salutation-wrap,
.cover-canvas .btn-buka-dokumen,
.cover-canvas .privacy-container,
.cover-canvas .approval-section-wrap,
.cover-canvas .house-sketch-wrap,
.cover-canvas .drafting-compass,
.cover-canvas .fountain-pen-wrap {
  opacity: 0;
  transition: opacity 1.6s cubic-bezier(0.16, 1, 0.3, 1),
              transform 1.8s cubic-bezier(0.16, 1, 0.3, 1),
              scale 1.8s cubic-bezier(0.16, 1, 0.3, 1),
              translate 1.8s cubic-bezier(0.16, 1, 0.3, 1);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

/* Specific initial offsets for graceful stagger */
.cover-canvas .main-paper-frame {
  transform: scale(0.96);
}

.cover-canvas .botanical-mid-left,
.cover-canvas .botanical-bottom-left,
.cover-canvas .botanical-mid-right {
  scale: 0.85;
}

.cover-canvas .stamp-approved-wrap {
  scale: 1.35;
}

.cover-canvas .doc-subtitle-header,
.cover-canvas .project-main-title,
.cover-canvas .invite-statement-text,
.cover-canvas .subproject-gold-title,
.cover-canvas .couple-names-container,
.cover-canvas .guest-salutation-wrap,
.cover-canvas .btn-buka-dokumen {
  translate: 0 20px;
}

/* Active Entrance State */
.cover-depan-wrapper.cover-ready .cover-canvas .main-paper-frame {
  opacity: 1;
  transform: scale(1);
  transition-delay: 0.25s;
}

.cover-depan-wrapper.cover-ready .cover-canvas .doc-box-outer,
.cover-depan-wrapper.cover-ready .cover-canvas .doc-box-inner,
.cover-depan-wrapper.cover-ready .cover-canvas .doc-box-title,
.cover-depan-wrapper.cover-ready .cover-canvas .doc-box-divider,
.cover-depan-wrapper.cover-ready .cover-canvas .doc-box-number,
.cover-depan-wrapper.cover-ready .cover-canvas .monogram-group {
  opacity: 1;
  transition-delay: 0.45s;
}

.cover-depan-wrapper.cover-ready .cover-canvas .doc-subtitle-header,
.cover-depan-wrapper.cover-ready .cover-canvas .doc-subtitle-line,
.cover-depan-wrapper.cover-ready .cover-canvas .project-main-title,
.cover-depan-wrapper.cover-ready .cover-canvas .house-divider-container {
  opacity: 1;
  translate: 0 0;
  transition-delay: 0.7s;
}

.cover-depan-wrapper.cover-ready .cover-canvas .invite-statement-text,
.cover-depan-wrapper.cover-ready .cover-canvas .subproject-gold-title {
  opacity: 1;
  translate: 0 0;
  transition-delay: 0.95s;
}

.cover-depan-wrapper.cover-ready .cover-canvas .couple-names-container,
.cover-depan-wrapper.cover-ready .cover-canvas .names-bottom-divider {
  opacity: 1;
  translate: 0 0;
  transition-delay: 1.25s;
}

.cover-depan-wrapper.cover-ready .cover-canvas .guest-salutation-wrap {
  opacity: 1;
  translate: 0 0;
  transition-delay: 1.55s;
}

.cover-depan-wrapper.cover-ready .cover-canvas .btn-buka-dokumen {
  opacity: 1;
  translate: 0 0;
  transition-delay: 1.85s;
  animation: btn-breathe 3.5s ease-in-out 3s infinite;
}

.cover-depan-wrapper.cover-ready .cover-canvas .clipboard-badge-wrap,
.cover-depan-wrapper.cover-ready .cover-canvas .fountain-pen-wrap,
.cover-depan-wrapper.cover-ready .cover-canvas .drafting-compass,
.cover-depan-wrapper.cover-ready .cover-canvas .house-sketch-wrap,
.cover-depan-wrapper.cover-ready .cover-canvas .privacy-container,
.cover-depan-wrapper.cover-ready .cover-canvas .approval-section-wrap {
  opacity: 1;
  transition-delay: 1.65s;
}

/* Floral Bloom Stagger */
.cover-depan-wrapper.cover-ready .cover-canvas .botanical-mid-left {
  opacity: 1;
  scale: 1;
  transition-delay: 1.05s;
}

.cover-depan-wrapper.cover-ready .cover-canvas .botanical-mid-right {
  opacity: 1;
  scale: 1;
  transition-delay: 1.35s;
}

.cover-depan-wrapper.cover-ready .cover-canvas .botanical-bottom-left {
  opacity: 1;
  scale: 1;
  transition-delay: 1.55s;
}

/* Wax Stamp Spring Drop (Qinvi Stamp Effect) */
.cover-depan-wrapper.cover-ready .cover-canvas .stamp-approved-wrap {
  opacity: 1;
  scale: 1;
  transition: opacity 1.3s ease-out, scale 1.4s cubic-bezier(0.34, 1.5, 0.5, 1);
  transition-delay: 2.15s;
}

/* Gentle pulse on CTA button like Qinvi hint */
@keyframes btn-breathe {
  0%, 100% {
    filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.2));
  }
  50% {
    filter: drop-shadow(0 8px 22px rgba(170, 122, 58, 0.45));
  }
}

@media (prefers-reduced-motion: reduce) {
  .cover-canvas * {
    opacity: 1 !important;
    translate: none !important;
    scale: none !important;
    transition: none !important;
    animation: none !important;
  }
}
</style>
