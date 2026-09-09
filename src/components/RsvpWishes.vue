<script setup>
import { ref } from 'vue'
import {
  imgBlueprintGridCard,
  imgCornerFloralsPair,
  imgSideLeavesOrn,
} from '../assets'

const rsvpName = ref('')
const rsvpHadir = ref('Hadir')
const rsvpJumlah = ref('2')
const rsvpSubmitted = ref(false)

const wishName = ref('')
const wishMessage = ref('')

const wishesList = ref([
  {
    name: 'Satrio & Istri',
    date: '09 June 2025, 09:00',
    message: 'Wishing you a lifetime filled with endless love, gentle laughter, and countless beautiful moments together. Happy Wedding!',
  },
  {
    name: 'Satrio & Istri',
    date: '09 June 2025, 09:00',
    message: 'Wishing you a lifetime filled with endless love, gentle laughter, and countless beautiful moments together. Happy Wedding!',
  },
  {
    name: 'Satrio & Istri',
    date: '09 June 2025, 09:00',
    message: 'Wishing you a lifetime filled with endless love, gentle laughter, and countless beautiful moments together. Happy Wedding!',
  },
])

function handleSendRsvp() {
  if (!rsvpName.value.trim()) {
    alert('Mohon isi nama Anda.')
    return
  }
  rsvpSubmitted.value = true
}

function handleSendWish() {
  if (!wishName.value.trim() || !wishMessage.value.trim()) {
    alert('Mohon isi nama dan ucapan doa Anda.')
    return
  }
  wishesList.value.unshift({
    name: wishName.value,
    date: '09 June 2025, 09:00',
    message: wishMessage.value,
  })
  wishName.value = ''
  wishMessage.value = ''
  alert('Terima kasih atas doa restu Anda!')
}
</script>

<template>
  <section class="rsvp-wishes">
    <!-- Blueprint Grid Backdrop Card -->
    <div class="abs blueprint-card-rsvp">
      <img alt="" :src="imgBlueprintGridCard" />
    </div>

    <!-- Floral Corners -->
    <div class="abs corner-floral left-floral">
      <img alt="" :src="imgCornerFloralsPair" />
    </div>
    <div class="abs corner-floral right-floral">
      <img alt="" :src="imgCornerFloralsPair" />
    </div>

    <!-- Side Leaves Ornaments -->
    <div class="abs leaves-orn left-leaf">
      <img alt="" :src="imgSideLeavesOrn" />
    </div>
    <div class="abs leaves-orn right-leaf">
      <img alt="" :src="imgSideLeavesOrn" />
    </div>

    <!-- DUKUNGAN PEMANGKU KEPENTINGAN -->
    <h2 class="abs dukungan-title" data-node-id="192:464">DUKUNGAN PEMANGKU KEPENTINGAN</h2>
    <p class="abs dukungan-quote" data-node-id="192:466">
      “Kehadiran Bapak/Ibu merupakan bentuk dukungan terhadap keberhasilan implementasi Proyek Strategis Rumah Tangga ini.”
    </p>

    <!-- RSVP SECTION -->
    <h2 class="abs rsvp-title" data-node-id="192:469">RSVP</h2>

    <!-- Cut-off Date Notice Box -->
    <h4 class="abs cutoff-title" data-node-id="2047:251">RSVP Cut-off Date<br />7 November 2026</h4>
    <p class="abs cutoff-desc" data-node-id="2047:253">
      Mohon menyampaikan konfirmasi kehadiran sebelum cut-off date untuk mendukung proses finalisasi data, kebutuhan, dan persiapan proyek pernikahan kami.
    </p>

    <!-- RSVP Form Inputs -->
    <div v-if="!rsvpSubmitted" class="abs rsvp-form">
      <div class="rsvp-input-box box-nama">
        <label class="input-label">Nama:</label>
        <input
          v-model="rsvpName"
          type="text"
          class="form-input"
        />
      </div>

      <div class="rsvp-input-box box-hadir">
        <label class="input-label">Apakah Anda akan hadir?</label>
        <select v-model="rsvpHadir" class="form-input form-select">
          <option value="Hadir">Ya, Saya akan hadir</option>
          <option value="Tidak Hadir">Mohon maaf, belum dapat hadir</option>
        </select>
      </div>

      <div class="rsvp-input-box box-peserta">
        <label class="input-label">Jumlah peserta:</label>
        <select v-model="rsvpJumlah" class="form-input form-select">
          <option value="1">1 Orang</option>
          <option value="2">2 Orang</option>
          <option value="3">3 Orang</option>
        </select>
      </div>

      <button type="button" class="btn-rsvp-send" @click="handleSendRsvp">
        <span>Send</span>
      </button>
    </div>

    <div v-else class="abs rsvp-success">
      <p class="success-title">✔️ Konfirmasi Berhasil Diterima</p>
      <p class="success-sub">Terima kasih atas konfirmasi Anda, {{ rsvpName }}.</p>
    </div>

    <!-- WISHES SECTION -->
    <h2 class="abs wishes-title" data-node-id="193:505">Wishes</h2>

    <!-- Wish Form -->
    <div class="abs wish-form">
      <input
        v-model="wishName"
        type="text"
        placeholder="Nama"
        class="form-input wish-input"
      />
      <textarea
        v-model="wishMessage"
        rows="3"
        placeholder="Give your wish"
        class="form-input wish-textarea"
      ></textarea>
      <button type="button" class="btn-wish-send" @click="handleSendWish">
        <span>Send</span>
      </button>
    </div>

    <!-- Wish Cards List -->
    <div class="abs wishes-cards-container">
      <div v-for="(w, idx) in wishesList" :key="idx" class="wish-card">
        <div class="wish-card-header">
          <span class="sender-name">{{ w.name }}</span>
          <span class="send-date">{{ w.date }}</span>
        </div>
        <p class="sender-message">{{ w.message }}</p>
      </div>

      <!-- Button Show More -->
      <button type="button" class="btn-show-more">
        <span>Show more</span>
      </button>
    </div>
  </section>
</template>

<style scoped>
.rsvp-wishes {
  position: relative;
  width: 596px;
  height: 1842px;
  flex: none;
  background: #ffffff;
  overflow: hidden;
}
.abs {
  position: absolute;
}

/* Blueprint card backdrop */
.blueprint-card-rsvp {
  top: 40px;
  left: -20px;
  width: 636px;
  height: 835px;
  opacity: 0.15;
  pointer-events: none;
  z-index: 0;
}
.blueprint-card-rsvp img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Corner Florals */
.corner-floral {
  width: 150px;
  height: 150px;
  pointer-events: none;
  z-index: 1;
}
.left-floral {
  top: 250px;
  left: -30px;
  transform: rotate(20deg);
}
.right-floral {
  top: 340px;
  right: -30px;
  transform: rotate(-120deg) scaleY(-1);
}
.corner-floral img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Side Leaves */
.leaves-orn {
  width: 90px;
  height: 240px;
  pointer-events: none;
  opacity: 0.7;
}
.left-leaf {
  top: 860px;
  left: -20px;
}
.right-leaf {
  top: 860px;
  right: -20px;
  transform: scaleX(-1);
}
.leaves-orn img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Dukungan Header */
.dukungan-title {
  top: 1px;
  left: -7px;
  width: 601px;
  text-align: center;
  font-family: var(--font-monomakh);
  font-size: 34px;
  line-height: 42px;
  color: #231e20;
  margin: 0;
  z-index: 2;
}
.dukungan-quote {
  top: 114px;
  left: 97px;
  width: 401px;
  text-align: center;
  font-family: var(--font-serif);
  font-size: 19px;
  line-height: 27px;
  color: #555555;
  margin: 0;
  font-style: italic;
  z-index: 2;
}

/* RSVP Block */
.rsvp-title {
  top: 230px;
  left: -2px;
  width: 601px;
  text-align: center;
  font-family: var(--font-monomakh);
  font-size: 48px;
  line-height: 42px;
  color: #232323;
  margin: 0;
  letter-spacing: 2px;
  z-index: 2;
}
.cutoff-title {
  top: 279px;
  left: 97px;
  width: 401px;
  text-align: center;
  font-family: var(--font-monomakh);
  font-size: 19px;
  line-height: 24px;
  color: #232323;
  margin: 0;
  font-weight: 700;
  z-index: 2;
}
.cutoff-desc {
  top: 356px;
  left: 97px;
  width: 401px;
  text-align: center;
  font-family: var(--font-serif);
  font-size: 19px;
  line-height: 27px;
  color: #5d534f;
  margin: 0;
  z-index: 2;
}

/* Form Styles */
.rsvp-form {
  top: 496px;
  left: 13px;
  width: 569px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  z-index: 2;
}
.rsvp-input-box {
  width: 569px;
  height: 54px;
  border: 1px solid #747a75;
  background: #ffffff;
  display: flex;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
}
.input-label {
  font-family: var(--font-serif);
  font-size: 20px;
  color: #231e20;
  margin-right: 12px;
  white-space: nowrap;
}
.form-input {
  flex: 1;
  border: none;
  outline: none;
  font-family: var(--font-serif);
  font-size: 18px;
  color: #231e20;
  background: transparent;
}
.form-select {
  cursor: pointer;
}
.btn-rsvp-send {
  margin-top: 19px;
  width: 484px;
  height: 54px;
  align-self: center;
  background: #555953;
  border: none;
  border-radius: 27px;
  color: #efe1cf;
  font-family: var(--font-monomakh);
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(85, 89, 83, 0.25);
  transition: all 0.2s ease;
}
.btn-rsvp-send:hover, .btn-wish-send:hover {
  background: #40443e;
  transform: translateY(-1px);
}

.rsvp-success {
  top: 496px;
  left: 13px;
  width: 569px;
  background: #f0f7f2;
  border: 1px solid #7bc592;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-sizing: border-box;
  z-index: 2;
}
.success-title {
  font-family: var(--font-monomakh);
  font-size: 17px;
  color: #2e7d32;
  margin: 0 0 6px;
}
.success-sub {
  font-family: var(--font-serif);
  font-size: 14px;
  color: #444444;
  margin: 0;
}

/* Wishes Block */
.wishes-title {
  top: 841px;
  left: -3px;
  width: 601px;
  text-align: center;
  font-family: var(--font-monomakh);
  font-size: 48px;
  line-height: 42px;
  color: #232323;
  margin: 0;
  letter-spacing: 2px;
  z-index: 2;
}
.wish-form {
  top: 918px;
  left: 20px;
  width: 556px;
  display: flex;
  flex-direction: column;
  z-index: 2;
}
.wish-input {
  width: 556px;
  height: 56px;
  border: 1px solid #747a75;
  padding: 0 16px;
  box-sizing: border-box;
  font-family: var(--font-serif);
  font-size: 20px;
  outline: none;
  background: #ffffff;
}
.wish-textarea {
  margin-top: 14px;
  width: 556px;
  height: 90px;
  border: 1px solid #747a75;
  padding: 12px 16px;
  box-sizing: border-box;
  font-family: var(--font-serif);
  font-size: 20px;
  outline: none;
  resize: none;
  background: #ffffff;
}
.btn-wish-send {
  margin-top: 22px;
  width: 484px;
  height: 54px;
  align-self: center;
  background: #555953;
  border: none;
  border-radius: 27px;
  color: #efe1cf;
  font-family: var(--font-monomakh);
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(85, 89, 83, 0.25);
  transition: all 0.2s ease;
}

/* Wishes List Cards */
.wishes-cards-container {
  top: 1176px;
  left: 56px;
  width: 484px;
  display: flex;
  flex-direction: column;
  z-index: 2;
}
.wish-card {
  margin-bottom: 46px;
  box-sizing: border-box;
}
.wish-card-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 6px;
}
.sender-name {
  font-family: var(--font-serif);
  font-size: 22px;
  color: #232323;
  font-weight: 700;
}
.send-date {
  font-family: var(--font-serif);
  font-size: 16px;
  color: #777777;
}
.sender-message {
  font-family: var(--font-serif);
  font-size: 18px;
  line-height: 26px;
  color: #2b2e2b;
  margin: 0;
}
.btn-show-more {
  width: 484px;
  height: 54px;
  align-self: center;
  background: #555953;
  border: none;
  border-radius: 27px;
  color: #ffffff;
  font-family: var(--font-monomakh);
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  transition: all 0.2s ease;
}
.btn-show-more:hover {
  background: #40443e;
}
</style>
