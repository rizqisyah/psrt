<script setup>
import { imgCe92Fc531434413F9A32Bdd1D80202C41 } from '../assets'
</script>

<template>
  <section class="banner-divider">
    <!-- Quran Verse Scroll Card -->
    <div class="verse-card-wrapper" data-node-id="210:32">
      <img
        alt="Ornamen Ayat Al-Quran"
        class="verse-card-bg"
        :src="imgCe92Fc531434413F9A32Bdd1D80202C41"
      />
      <h3 class="verse-title" data-node-id="2047:236">QS. Ar-Rum ayat 21</h3>
      <p class="verse-text" data-node-id="210:31">
        “Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda kebesaran Allah bagi kaum yang berpikir.”
      </p>
    </div>

    <!-- Spesifikasi Proyek Header (Group 43) -->
    <div class="spesifikasi-header" data-node-id="188:179">
      <h2 class="spec-title" data-node-id="188:180">SPESIFIKASI PROYEK</h2>
      <h4 class="spec-subtitle" data-node-id="188:181">PEMBANGUNAN RUMAH TANGGA</h4>
      <p class="spec-desc" data-node-id="188:182">
        Dokumen ini memuat spesifikasi utama proyek sebagai dasar pelaksanaan dan komitmen jangka panjang
      </p>
    </div>
  </section>
</template>

<style scoped>
.banner-divider {
  position: relative;
  width: 596px;
  height: 500px;
  flex: none;
  overflow: visible;
  background: #595a52;
}

/* Quran Verse Scroll */
.verse-card-wrapper {
  position: absolute;
  left: 8px;
  top: 2px;
  width: 580px;
  height: 273px;
}
.verse-card-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  pointer-events: none;
}
.verse-title {
  position: absolute;
  left: 64px;
  top: 37px;
  width: 452px;
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 15px;
  line-height: 26px;
  color: #231e20;
  margin: 0;
  text-align: center;
  letter-spacing: 0.5px;
  z-index: 2;
}
.verse-text {
  position: absolute;
  left: 65px;
  top: 65px;
  width: 452px;
  font-family: var(--font-serif);
  font-weight: 600;
  font-size: 13px;
  line-height: 21px;
  color: #2d2426;
  margin: 0;
  text-align: center;
  z-index: 2;
}

/* Spesifikasi Proyek Header */
.spesifikasi-header {
  position: absolute;
  left: 0;
  top: 313px;
  width: 596px;
  text-align: center;
  z-index: 2;
  box-sizing: border-box;
}
.spec-title {
  font-family: var(--font-monomakh);
  font-size: 34px;
  line-height: 38px;
  color: #ffffff;
  letter-spacing: 1.5px;
  margin: 0;
}
.spec-subtitle {
  font-family: var(--font-monomakh);
  font-size: 15px;
  line-height: 24px;
  color: var(--color-yellow-badge, #e5c483);
  letter-spacing: 2px;
  margin: 4px 0 0;
}
.spec-desc {
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 15px;
  line-height: 21px;
  color: #efe1cf;
  width: 378px;
  margin: 13px auto 0;
}
</style>
