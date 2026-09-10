<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import PreloaderScreen from './components/PreloaderScreen.vue'
import CoverDepan from './components/CoverDepan.vue'
import IsiUndangan from './components/IsiUndangan.vue'
import FloatingMusic from './components/FloatingMusic.vue'
import { useWedding } from './composables/useWedding'

const { wedding, coupleOrder, tamu } = useWedding()

const isLoading = ref(true)
const isCoverActive = ref(false)
const isOpened = ref(false)
const showCoverModal = ref(true)
const musicRef = ref(null)

watchEffect(() => {
  if (wedding.value?.title) {
    document.title = wedding.value.title
  } else if (coupleOrder.value?.title) {
    document.title = `The Wedding Of ${coupleOrder.value.title}`
  } else {
    document.title = 'The Wedding Of Sari & Zahron'
  }
})

onMounted(() => {
  try {
    const params = new URLSearchParams(window.location.search)
    if (
      params.get('open') === '1' ||
      params.get('preview') === 'true' ||
      params.get('preview') === '1'
    ) {
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
          :guest-name="tamu.namaTamu"
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
    <FloatingMusic
      ref="musicRef"
      v-if="!isLoading"
      :src="wedding?.music || '/music.mp3'"
    />


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
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
  pointer-events: none;
}

.preloader-fade-leave-to {
  opacity: 0;
  transform: scale(1.04);
}

@media (max-width: 600px) {
  .canvas {
    width: 100vw;
  }
}
</style>
