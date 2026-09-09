<script setup>
import {
  imgOpen533,
  img5F561687D7544D468476E99B657Eba5DCopy2,
  imgOpen562,
  imgOpen621,
  imgLine6,
  imgIkonLencanaMaroonDanEmas1,
  imgFrame13,
  imgOpen631,
  imgLine7,
  imgIkonRumahDanHatiBerornamen2,
  imgStampSealWax,
} from '../assets'

const tahapan = [
  { no: '01', tahap: 'TAHAP PERENCANAAN', ket: 'Pertemuan Awal', top: 342, ketTop: 363, statusTop: 381, checkTop: 382, lineTop: 424 },
  { no: '02', tahap: 'TAHAP STUDI KELAYAKAN', ket: 'Pendekatan dan Pengenalan', top: 448, ketTop: 470, statusTop: 487, checkTop: 488, lineTop: 530 },
  { no: '03', tahap: 'TAHAP PENGADAAN MITRA STRATEGIS', ket: 'Lamaran', top: 547, ketTop: 583, statusTop: 586, checkTop: 587, lineTop: 629 },
  { no: '04', tahap: 'TAHAP IMPLEMENTASI', ket: 'AKAD NIKAH', subket: 'Tahap inti proyek yang akan dilaksanakan', top: 646, ketTop: 667, subketTop: 691, statusTop: 685, checkTop: 686, lineTop: 767 },
]

const lencanaTops = [330, 434, 538, 642]
const lencanaLeft = ['-91.18%', '-90.26%', '-91.18%', '-92.07%']
const lencanaImgTop = ['-0.28%', '-100.61%', '-198.93%', '-297.46%']
</script>

<template>
  <section class="header-roadmap">
    <!-- outer long border (1:17) -->
    <div class="abs frame-long" data-node-id="1:17"></div>
    <!-- top thin border (1:38) -->
    <div class="abs frame-top" data-node-id="1:38"></div>

    <!-- corner decorations -->
    <div class="abs corner-tr" data-node-id="1:35">
      <div class="crop">
        <img alt="" :src="img5F561687D7544D468476E99B657Eba5DCopy2" />
      </div>
    </div>
    <div class="abs bg-ornament" data-node-id="1:30">
      <div class="crop-full">
        <img alt="" :src="imgOpen533" />
      </div>
    </div>
    <div class="abs side-ornament" data-node-id="1:34">
      <div class="crop-left">
        <img alt="" :src="imgOpen562" />
      </div>
    </div>

    <!-- header text -->
    <div class="abs dokumen-proyek" data-node-id="1:37">
      <p>DOKUMEN PROYEK</p>
      <p>001 / PSRN / 2026</p>
    </div>
    <div class="abs status-proyek" data-node-id="1:39">
      <p class="status-label">STATUS PROYEK</p>
      <p class="status-value">DISETUJUI</p>
    </div>

    <!-- brand box top-left -->
    <div class="abs brand-box" data-node-id="1:116"></div>
    <p class="abs brand-text" data-node-id="1:117">PROYEK STRATEGIS RUMAH TANGGA</p>
    <p class="abs brand-name" data-node-id="1:118">SARI &amp; ZAHRON</p>
    <div class="abs brand-icon" data-node-id="1:119">
      <img alt="" :src="imgIkonRumahDanHatiBerornamen2" />
    </div>

    <!-- roadmap titles -->
    <p class="abs title-roadmap" data-node-id="1:41">ROADMAP PROYEK</p>
    <p class="abs subtitle-roadmap" data-node-id="1:42">TAHAPAN PELAKSANAAN</p>
    <div class="abs desc-roadmap" data-node-id="1:43">
      <p>Berdasarkan hasil studi kelayakan dan komitmen bersama,</p>
      <p>proyek ini telah memasuki tahap implementasi.</p>
    </div>
    <div class="abs divider-ornament" data-node-id="1:44">
      <div class="crop-divider">
        <img alt="" :src="imgOpen621" />
      </div>
    </div>

    <!-- inner card -->
    <div class="abs top-card-stamp">
      <img alt="Wax Seal Stamp" :src="imgStampSealWax" />
    </div>
    <div class="abs card-bg" data-node-id="1:36"></div>
    <div class="abs card-border" data-node-id="1:88"></div>

    <!-- timeline -->
    <div class="abs timeline-line" data-node-id="1:47">
      <div class="rotate-wrap">
        <div class="line-h">
          <div class="line-inset">
            <img alt="" :src="imgLine6" />
          </div>
        </div>
      </div>
    </div>
    <div class="abs timeline-bar" data-node-id="1:52">
      <img alt="" :src="imgFrame13" />
    </div>
    <div
      v-for="(t, i) in lencanaTops"
      :key="'lencana-' + i"
      class="abs lencana"
      :style="{ top: t + 'px' }"
      :data-node-id="'1:' + (48 + i)"
    >
      <div class="crop-lencana">
        <img
          alt=""
          :src="imgIkonLencanaMaroonDanEmas1"
          :style="{ left: lencanaLeft[i], top: lencanaImgTop[i] }"
        />
      </div>
    </div>

    <!-- tahapan rows -->
    <div v-for="row in tahapan" :key="row.no" class="tahap-row">
      <p class="abs tahap-no" :style="{ top: row.top + 'px' }">{{ row.no }}</p>
      <p class="abs tahap-title" :style="{ top: row.top + 'px' }">{{ row.tahap }}</p>
      <p class="abs tahap-ket" :class="{ 'tahap-ket-akad': row.no === '04' }" :style="{ top: row.ketTop + 'px' }">{{ row.ket }}</p>
      <p v-if="row.subket" class="abs tahap-subket" :style="{ top: row.subketTop + 'px' }">{{ row.subket }}</p>
      <p class="abs tahap-status" :style="{ top: row.statusTop + 'px' }">SELESAI</p>
      <div class="abs tahap-check" :style="{ top: row.checkTop + 'px' }">
        <div class="crop-check">
          <img alt="" :src="imgOpen631" />
        </div>
      </div>
      <div class="abs tahap-line" :style="{ top: row.lineTop + 'px', left: row.no === '04' ? '157px' : '182px' }">
        <div class="line-inset">
          <img alt="" :src="imgLine7" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.header-roadmap {
  position: relative;
  width: 596px;
  height: 860px;
  flex: none;
  overflow: visible;
  z-index: 1;
  background: #ffffff;
}
.abs {
  position: absolute;
}
.frame-long {
  border: 1.5px solid var(--color-gray-border, #c5a059);
  height: 1742px;
  left: calc(50% - 0.5px);
  top: 12px;
  width: 577px;
  transform: translateX(-50%);
}
.frame-top {
  border: 1.5px solid var(--color-gray-border, #c5a059);
  height: 70px;
  left: calc(50% - 0.5px);
  top: 12px;
  width: 577px;
  transform: translateX(-50%);
}
.corner-tr {
  height: 315px;
  left: 437px;
  top: 85px;
  width: 149px;
}
.corner-tr .crop {
  position: absolute;
  inset: 0;
  opacity: 0.76;
  overflow: hidden;
  pointer-events: none;
}
.corner-tr .crop img {
  position: absolute;
  height: 127.73%;
  left: 0;
  max-width: none;
  top: -27.68%;
  width: 216.11%;
}
.bg-ornament {
  left: 133px;
  width: 506px;
  height: 506px;
  top: 713px;
}
.bg-ornament .crop-full {
  position: absolute;
  inset: 0;
  opacity: 0.12;
  overflow: hidden;
  pointer-events: none;
}
.bg-ornament .crop-full img {
  position: absolute;
  left: 0;
  max-width: none;
  width: 100%;
  height: 100%;
  top: 0;
}
.side-ornament {
  height: 352px;
  left: 9px;
  top: 672px;
  width: 170px;
}
.side-ornament .crop-left {
  position: absolute;
  inset: 0;
  opacity: 0.35;
  overflow: visible;
  pointer-events: none;
}
.side-ornament .crop-left img {
  position: absolute;
  height: 100%;
  left: -107.06%;
  max-width: none;
  top: 0;
  width: 207.06%;
}
.dokumen-proyek {
  font-family: var(--font-inter);
  font-weight: 400;
  font-size: 10px;
  letter-spacing: 3px;
  color: #000000;
  text-align: center;
  left: 50%;
  top: 36px;
  width: 204px;
  height: 40px;
  transform: translateX(-50%);
}
.dokumen-proyek p {
  margin: 0;
  line-height: 15px;
}
.status-proyek {
  font-family: var(--font-inter);
  text-align: center;
  color: var(--color-gold-status);
  left: calc(50% + 191px);
  top: 35px;
  width: 118px;
  height: 29px;
  transform: translateX(-50%);
}
.status-proyek p {
  margin: 0;
  font-size: 13px;
  line-height: 14px;
}
.status-proyek .status-value {
  font-weight: 700;
}
.brand-box {
  background: var(--color-olive, #99986b);
  border-radius: 2px;
  height: 70px;
  left: 10px;
  top: 12px;
  width: 173px;
}
.top-card-stamp {
  top: 242px;
  left: 50%;
  transform: translateX(-50%);
  width: 66px;
  height: 64px;
  z-index: 6;
  pointer-events: none;
}
.top-card-stamp img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.brand-text {
  font-family: var(--font-inter);
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  color: #ffffff;
  left: calc(50% - 232px);
  top: 25px;
  width: 108px;
  height: 29px;
  margin: 0;
  word-break: break-word;
}
.brand-name {
  font-family: var(--font-monomakh);
  font-size: 11px;
  line-height: 15px;
  color: var(--color-yellow-tag);
  left: calc(50% - 232px);
  top: 56px;
  width: 91px;
  height: 16px;
  margin: 0;
  word-break: break-word;
}
.brand-icon {
  left: 18px;
  width: 45px;
  height: 45px;
  top: 25px;
}
.brand-icon img {
  position: absolute;
  inset: 0;
  max-width: none;
  object-fit: contain;
  object-position: bottom;
  pointer-events: none;
  width: 100%;
  height: 100%;
}
.title-roadmap {
  font-family: var(--font-monomakh);
  font-size: 34px;
  line-height: 34px;
  color: #000000;
  text-align: center;
  left: calc(50% - 0.5px);
  top: 111px;
  width: 601px;
  height: 42px;
  margin: 0;
  transform: translateX(-50%);
  word-break: break-word;
}
.subtitle-roadmap {
  font-family: var(--font-monomakh);
  font-size: 15px;
  line-height: 34px;
  color: #000000;
  text-align: center;
  left: calc(50% - 0.5px);
  top: 143px;
  width: 601px;
  height: 42px;
  margin: 0;
  transform: translateX(-50%);
  word-break: break-word;
}
.desc-roadmap {
  font-family: var(--font-serif);
  font-size: 14px;
  color: #000000;
  text-align: center;
  left: calc(50% - 0.5px);
  top: 196px;
  width: 601px;
  height: 42px;
  transform: translateX(-50%);
  word-break: break-word;
}
.desc-roadmap p {
  margin: 0;
  line-height: 19px;
}
.divider-ornament {
  height: 20px;
  left: 202px;
  top: 171px;
  width: 191px;
}
.divider-ornament-bottom {
  height: 20px;
  left: 203px;
  top: 822px;
  width: 191px;
}
.crop-divider {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}
.crop-divider img {
  position: absolute;
  height: 955%;
  left: 0;
  max-width: none;
  top: -395%;
  width: 100%;
}
.card-bg {
  background: var(--color-cream-card, #faf6ef);
  border: 1.5px solid #888738;
  height: 563px;
  left: 77px;
  top: 278px;
  width: 436px;
}
.card-border {
  border: 1.5px solid #aa7a3a;
  height: 573px;
  left: 72px;
  top: 274px;
  width: 446px;
}
.timeline-line {
  height: 285.997px;
  left: 140px;
  top: 376px;
  width: 1.3px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.timeline-line .rotate-wrap {
  flex: none;
  transform: rotate(89.74deg);
}
.timeline-line .line-h {
  height: 0;
  position: relative;
  width: 286px;
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
.timeline-bar {
  height: 211px;
  left: 138px;
  top: 421px;
  width: 7px;
}
.timeline-bar img {
  position: absolute;
  display: block;
  inset: 0;
  max-width: none;
  width: 100%;
  height: 100%;
}
.lencana {
  height: 50px;
  left: 113px;
  width: 57px;
}
.crop-lencana {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}
.crop-lencana img {
  position: absolute;
  height: 390.56%;
  max-width: none;
  width: 300%;
}
.tahap-no {
  font-family: var(--font-monomakh);
  font-size: 24px;
  line-height: 19px;
  color: #636b64;
  text-align: center;
  left: 197px;
  width: 38px;
  height: 26px;
  margin: 0;
  transform: translateX(-50%);
  word-break: break-word;
}
.tahap-title {
  font-family: var(--font-inter);
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  color: #232323;
  left: 244px;
  width: 249px;
  height: 26px;
  margin: 0;
  word-break: break-word;
}
.tahap-ket {
  font-family: var(--font-monomakh);
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #2b2e2b;
  left: 244px;
  width: 216px;
  height: 26px;
  margin: 0;
  word-break: break-word;
}
.tahap-ket.tahap-ket-akad {
  font-family: 'Times New Roman', serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  color: #3b4239;
  text-transform: uppercase;
}
.tahap-subket {
  font-family: 'Times New Roman', serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #444444;
  left: 243px;
  width: 142px;
  height: 26px;
  margin: 0;
  word-break: break-word;
}
.tahap-status {
  font-family: var(--font-inter);
  font-weight: 700;
  font-size: 12px;
  line-height: 19px;
  color: var(--color-gold-status, #b6a23d);
  left: 421px;
  width: 53px;
  height: 19px;
  margin: 0;
  word-break: break-word;
}
.tahap-check {
  height: 18px;
  left: 400px;
  width: 16px;
}
.crop-check {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}
.crop-check img {
  position: absolute;
  height: 220%;
  left: -72.22%;
  max-width: none;
  top: -60%;
  width: 244.44%;
}
.tahap-line {
  height: 0;
  width: 286px;
}
</style>
