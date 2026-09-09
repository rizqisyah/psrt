<script setup>
import { ref, onMounted } from 'vue'
import PreloaderScreen from './components/PreloaderScreen.vue'
import CoverDepan from './components/CoverDepan.vue'
import IsiUndangan from './components/IsiUndangan.vue'
import FloatingMusic from './components/FloatingMusic.vue'

const isLoading = ref(true)
const isCoverActive = ref(false)
const isOpened = ref(false)
const showCoverModal = ref(true)
const guestName = ref('NAMA TAMU UNDANGAN')
const musicRef = ref(null)

onMounted(() => {
  // Parse guest name from URL query parameter (e.g., ?to=Nama+Tamu or ?guest=...)
  try {
    const params = new URLSearchParams(window.location.search)
    const name = params.get('to') || params.get('u') || params.get('guest') || params.get('nama')
    if (name) {
      guestName.value = name.replace(/\+/g, ' ')
    }
    if (params.get('open') === '1') {
      isLoading.value = false
      isCoverActive.value = true
      isOpened.value = true
      showCoverModal.value = false
    }
  } catch {
    // fallback default
  }
})

function handlePreloaderFinish() {
  isLoading.value = false
  musicRef.value?.play()
}

function handleOpenInvitation() {
  musicRef.value?.play()
  isOpened.value = true
  // Smoothly hide cover overlay after unlocking
  setTimeout(() => {
    showCoverModal.value = false
    const mainCanvas = document.querySelector('.canvas')
    if (mainCanvas) {
      mainCanvas.scrollIntoView({ behavior: 'smooth' })
    }
  }, 400)
}

function handleReopenCover() {
  showCoverModal.value = true
  isCoverActive.value = true
  isOpened.value = false
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <main class="page">
    <!-- Katsudoto Style Preloader Screen -->
    <Transition name="preloader-fade">
      <PreloaderScreen
        v-if="isLoading"
        @leaving="isCoverActive = true"
        @finish="handlePreloaderFinish"
      />
    </Transition>

    <!-- Cover Depan as Initial Gate / Modal Overlay -->
    <Transition name="cover-fade">
      <div v-if="showCoverModal" class="cover-overlay" :class="{ 'is-opening': isOpened }">
        <CoverDepan
          :guest-name="guestName"
          :is-active="isCoverActive"
          @open="handleOpenInvitation"
        />
      </div>
    </Transition>

    <!-- Main Invitation Content -->
    <div
      v-show="isOpened"
      class="canvas"
      :class="{ 'content-locked': !isOpened, 'content-unlocked': isOpened }"
    >
      <IsiUndangan :active="isOpened" />
    </div>

    <!-- Floating Music Disc at Bottom Right (Auto-play & Vinyl Spinning) -->
    <FloatingMusic ref="musicRef" v-if="!isLoading" />

    <!-- Floating Button to Re-open Cover Dossier (Bottom Left) -->
    <Transition name="btn-pop">
      <button
        v-if="!showCoverModal"
        type="button"
        class="btn-reopen-cover"
        @click="handleReopenCover"
        title="Buka Sampul Dokumen"
        aria-label="Lihat Sampul Dokumen"
      >
        <span class="btn-icon">📋</span>
        <span class="btn-label">Sampul Dokumen</span>
      </button>
    </Transition>
  </main>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: var(--color-bg);
  position: relative;
}

/* Main Invitation Content with Qinvi cinematic entrance */
.canvas {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-bg);
  opacity: 0;
  filter: blur(8px);
  transform: translateY(24px) scale(0.975);
  will-change: opacity, transform, filter;
  transition: opacity 1.3s cubic-bezier(0.16, 1, 0.3, 1) 0.35s,
              transform 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.35s,
              filter 1.3s cubic-bezier(0.16, 1, 0.3, 1) 0.35s;
}

.canvas.content-unlocked {
  opacity: 1;
  filter: blur(0);
  transform: translateY(0) scale(1);
}

.canvas.content-locked {
  max-height: 100vh;
  overflow: hidden;
  filter: blur(6px);
  pointer-events: none;
}

/* Cover Overlay (Full Page, Seamless with Cover Background) */
.cover-overlay {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  z-index: 999;
  background: #c0b8ba;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 0;
  margin: 0;
  transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1),
              opacity 1.1s cubic-bezier(0.4, 0, 0.2, 1),
              filter 1.1s cubic-bezier(0.4, 0, 0.2, 1);
}

.cover-overlay.is-opening {
  transform: scale(1.12);
  opacity: 0;
  filter: blur(12px);
  pointer-events: none;
}

/* Cover Fade Transition (Qinvi Splash Style) */
.cover-fade-enter-active,
.cover-fade-leave-active {
  transition: opacity 1.1s cubic-bezier(0.4, 0, 0.2, 1),
              transform 1.2s cubic-bezier(0.16, 1, 0.3, 1),
              filter 1.1s cubic-bezier(0.4, 0, 0.2, 1);
}

.cover-fade-enter-from,
.cover-fade-leave-to {
  opacity: 0;
  filter: blur(12px);
  transform: scale(1.12);
}

/* Preloader Fade Transition */
.preloader-fade-leave-active {
  transition: opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1);
}

.preloader-fade-leave-to {
  opacity: 0;
}

/* Floating Re-Open Button (Placed on Bottom-Left so Bottom-Right is reserved for Vinyl Disc) */
.btn-reopen-cover {
  position: fixed;
  bottom: calc(24px + env(safe-area-inset-bottom, 0px));
  left: 20px;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background-color: #747a75;
  color: #efe1cf;
  border: 1.5px solid #efe1cf;
  border-radius: 30px;
  font-family: var(--font-monomakh);
  font-size: 14px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.25s ease;
}

.btn-reopen-cover:hover {
  background-color: #5d635e;
  transform: translateY(-2px) scale(1.04);
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.38);
}

.btn-icon {
  font-size: 16px;
}

.btn-label {
  letter-spacing: 0.5px;
}

.btn-pop-enter-active,
.btn-pop-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-pop-enter-from,
.btn-pop-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(0.8);
}

@media (max-width: 600px) {
  .canvas {
    width: 100vw;
  }

  .btn-reopen-cover {
    bottom: calc(16px + env(safe-area-inset-bottom, 0px));
    left: 16px;
    padding: 8px 14px;
    font-size: 13px;
  }
}
</style>
