<script setup>
import { ref } from 'vue'
import KetentuanTeknisModal from './KetentuanTeknisModal.vue'
import {
  imgIkonKalenderLokasiJamDanPengguna1,
  imgOpen651,
  imgLine15,
  imgLine17,
  imgStampSealWax,
} from '../assets'

// Base Y for TargetSection is 3960
const BASE = 3960
const off = (designTop) => designTop - BASE

const isKetentuanOpen = ref(false)

function handleAccessRoute() {
  isKetentuanOpen.value = true
}
</script>

<template>
  <section class="target-section">
    <!-- Top Divider Line 15 -->
    <div class="abs horiz-line" :style="{ top: off(3963) + 'px' }" data-node-id="191:386">
      <img alt="" :src="imgLine15" />
    </div>

    <!-- Vertical dividers -->
    <div class="abs vert-line line-left" :style="{ top: off(3962) + 'px' }" data-node-id="192:390">
      <img alt="" :src="imgLine17" />
    </div>
    <div class="abs vert-line line-mid" :style="{ top: off(3962) + 'px' }" data-node-id="192:389">
      <img alt="" :src="imgLine17" />
    </div>
    <div class="abs vert-line line-right" :style="{ top: off(3962) + 'px' }" data-node-id="192:391">
      <img alt="" :src="imgLine17" />
    </div>

    <!-- Left Column: TARGET OPERASIONAL -->
    <div class="abs cal-icon" :style="{ top: off(3974) + 'px' }" data-node-id="191:383">
      <div class="crop-cal">
        <img alt="" :src="imgIkonKalenderLokasiJamDanPengguna1" />
      </div>
    </div>
    <p class="abs col-title col-left" :style="{ top: off(3974) + 'px' }" data-node-id="191:381">
      TARGET OPERASIONAL
    </p>
    <p class="abs col-sub sub-left" :style="{ top: off(3999) + 'px' }" data-node-id="191:382">
      Seumur Hidup
    </p>

    <!-- Right Column: MASA PEMELIHARAAN -->
    <div class="abs shield-icon" :style="{ top: off(3974) + 'px' }" data-node-id="192:388">
      <div class="crop-shield">
        <img alt="" :src="imgOpen651" />
      </div>
    </div>
    <p class="abs col-title col-right" :style="{ top: off(3974) + 'px' }" data-node-id="191:384">
      MASA PEMELIHARAAN
    </p>
    <p class="abs col-sub sub-right" :style="{ top: off(4000) + 'px' }" data-node-id="191:385">
      Tanpa Batas Waktu
    </p>

    <!-- Bottom Divider Line 16 -->
    <div class="abs horiz-line" :style="{ top: off(4047) + 'px' }" data-node-id="192:387">
      <img alt="" :src="imgLine15" />
    </div>

    <!-- KPI Box (Indikator Kinerja Utama) -->
    <div class="abs kpi-box" :style="{ top: off(4084) + 'px' }">
      <div class="kpi-bg" data-node-id="192:392"></div>
      <h3 class="kpi-title" data-node-id="192:393">Indikator Kinerja Utama</h3>

      <div class="kpi-inner-panel" data-node-id="192:395">
        <ul class="kpi-list" data-node-id="192:394">
          <li>
            <span class="check-icon">✔️</span>
            <span class="check-text">Saling Menguatkan</span>
          </li>
          <li>
            <span class="check-icon">✔️</span>
            <span class="check-text">Saling Mengingatkan</span>
          </li>
          <li>
            <span class="check-icon">✔️</span>
            <span class="check-text">Saling Membahagiakan</span>
          </li>
          <li>
            <span class="check-icon">✔️</span>
            <span class="check-text">Membangun Generasi Berkualitas</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- CTA Button: SITE PLAN & ACCESS ROUTE (Group 47) -->
    <button
      type="button"
      class="abs btn-site-plan"
      :style="{ top: off(4467) + 'px' }"
      @click="handleAccessRoute"
      data-node-id="192:397"
    >
      <span class="btn-site-plan-inner">SITE PLAN &amp; ACCESS ROUTE</span>
    </button>

    <!-- Seal / Stamp -->
    <div class="abs bottom-seal" :style="{ top: off(4570) + 'px' }" data-node-id="210:22">
      <img alt="Stempel Proyek" :src="imgStampSealWax" />
    </div>

    <!-- Ketentuan Teknis Modal -->
    <KetentuanTeknisModal :is-open="isKetentuanOpen" @close="isKetentuanOpen = false" />
  </section>
</template>

<style scoped>
.target-section {
  position: relative;
  width: 596px;
  height: 720px;
  flex: none;
  overflow: hidden;
  background: #ffffff;
}
.abs {
  position: absolute;
}
.horiz-line {
  left: 22px;
  width: 552px;
  height: 1px;
}
.horiz-line img {
  display: block;
  width: 100%;
  height: 1px;
}
.vert-line {
  width: 1px;
  height: 85px;
}
.vert-line img {
  display: block;
  width: 1px;
  height: 100%;
}
.line-left {
  left: 21px;
}
.line-mid {
  left: 301px;
}
.line-right {
  left: 573px;
}

/* Columns */
.cal-icon {
  left: 32px;
  width: 48px;
  height: 41px;
}
.crop-cal {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.crop-cal img {
  position: absolute;
  width: 218%;
  height: 202%;
  left: -0.4%;
  top: 0;
}

.shield-icon {
  left: 320px;
  width: 42px;
  height: 49px;
}
.crop-shield {
  position: absolute;
  inset: 0;
  overflow: hidden;
  opacity: 0.8;
}
.crop-shield img {
  position: absolute;
  width: 223%;
  height: 191%;
  left: -66%;
  top: -42%;
}

.col-title {
  font-family: var(--font-monomakh);
  font-size: 15px;
  line-height: 24px;
  color: #000000;
  margin: 0;
  letter-spacing: 0.5px;
}
.col-left {
  left: 90px;
}
.col-right {
  left: 380px;
}
.col-sub {
  font-family: var(--font-monomakh);
  font-size: 13px;
  line-height: 22px;
  color: #555555;
  margin: 0;
}
.sub-left {
  left: 90px;
}
.sub-right {
  left: 380px;
}

/* KPI Box */
.kpi-box {
  left: 54px;
  width: 492px;
  height: 312px;
  position: absolute;
}
.kpi-bg {
  position: absolute;
  inset: 0;
  background: #aab3aa;
  border-radius: 23px;
}
.kpi-title {
  position: absolute;
  top: 16px;
  left: 0;
  right: 0;
  text-align: center;
  font-family: var(--font-monomakh);
  font-size: 22px;
  color: #ffffff;
  margin: 0;
  letter-spacing: 1px;
}
.kpi-inner-panel {
  position: absolute;
  top: 61px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background: #e0e0e0;
  border-radius: 12px;
  padding: 22px 24px;
  box-sizing: border-box;
}
.kpi-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.kpi-list li {
  display: flex;
  align-items: center;
  gap: 12px;
}
.check-icon {
  font-size: 16px;
}
.check-text {
  font-family: var(--font-monomakh);
  font-size: 17px;
  color: #232323;
  line-height: 1.2;
}

/* Button */
.btn-site-plan {
  left: 151px;
  width: 294px;
  height: 52px;
  background: #585951;
  border-radius: 5px;
  border: none;
  padding: 4px;
  cursor: pointer;
  box-sizing: border-box;
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.btn-site-plan:hover {
  transform: translateY(-1px);
  opacity: 0.95;
}
.btn-site-plan-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 2px solid #efe1cf;
  border-radius: 5px;
  font-family: var(--font-monomakh);
  font-size: 15px;
  color: #efe1cf;
  letter-spacing: 0.8px;
  box-sizing: border-box;
}

/* Seal */
.bottom-seal {
  left: 250px;
  width: 98px;
  height: 95px;
}
.bottom-seal img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
