<script setup>
import { ref, watch } from 'vue'
import { imgDetailKonstruksi } from '../assets.js'
import { useWedding } from '../composables/useWedding'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const { acaraList } = useWedding()
const isZoomed = ref(false)

function handleKeydown(e) {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

function openMaps() {
  const url = acaraList.value?.[0]?.map_url || 'https://maps.google.com/?q=Masjid+Agung+Gresik'
  window.open(url, '_blank')
}

function toggleZoom() {
  isZoomed.value = !isZoomed.value
}

watch(
  () => props.isOpen,
  (val) => {
    if (val) {
      isZoomed.value = false
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeydown)
    } else {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeydown)
    }
  },
  { immediate: true }
)
</script>

<template>
  <Teleport to="body">
    <Transition name="dk-fade">
      <div
        v-if="isOpen"
        class="dk-modal-backdrop"
        @click.self="emit('close')"
        role="dialog"
        aria-modal="true"
        aria-label="Detail Konstruksi & Denah Lokasi"
      >
        <!-- Floating Close Button -->
        <button
          type="button"
          class="dk-close-btn"
          @click="emit('close')"
          title="Tutup Detail Konstruksi (Esc)"
          aria-label="Tutup"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.2" fill="none">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <!-- Main Modal Content -->
        <div class="dk-modal-container" :class="{ 'is-zoomed': isZoomed }">
          <!-- Poster Artboard (Figma Node 58:394) -->
          <div
            class="dk-artboard"
            data-node-id="58:394"
            data-name="WhatsApp Image 2026-09-01 at 14.55.45 1"
          >
            <img
              :src="imgDetailKonstruksi"
              alt="Denah dan Detail Rute Lokasi Akad Nikah Masjid Agung Gresik"
              class="dk-poster-img"
            />
          </div>

          <!-- Bottom Action Buttons -->
          <div class="dk-action-bar">
            <button type="button" class="dk-action-btn dk-btn-maps" @click="openMaps">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                <line x1="8" y1="2" x2="8" y2="18"></line>
                <line x1="16" y1="6" x2="16" y2="22"></line>
              </svg>
              <span>BUKA GOOGLE MAPS</span>
            </button>

            <button type="button" class="dk-action-btn dk-btn-zoom" @click="toggleZoom">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line v-if="!isZoomed" x1="11" y1="8" x2="11" y2="14"></line>
                <line v-if="!isZoomed" x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
              <span>{{ isZoomed ? 'KECILKAN' : 'PERBESAR' }}</span>
            </button>

            <button type="button" class="dk-action-btn dk-btn-close" @click="emit('close')">
              <span>TUTUP</span>
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* Backdrop Overlay */
.dk-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 999999;
  background: rgba(12, 17, 14, 0.88);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  padding: 16px;
  box-sizing: border-box;
}

/* Close Button */
.dk-close-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000000;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.92);
  color: #2b2b2b;
  border: 1.5px solid rgba(197, 160, 89, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.35);
  transition: all 0.25s ease;
}

.dk-close-btn:hover {
  background: #ffffff;
  color: #000;
  transform: scale(1.08) rotate(90deg);
  border-color: #c5a059;
}

/* Modal Container */
.dk-modal-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  position: relative;
  transition: all 0.3s ease;
}

.dk-modal-container.is-zoomed {
  margin: auto 0;
  padding: 20px 0;
}

/* Artboard Content */
.dk-artboard {
  position: relative;
  width: min(628px, calc((100dvh - 120px) * (628 / 942)), calc(100vw - 32px));
  aspect-ratio: 628 / 942;
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 16px 45px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(197, 160, 89, 0.35);
  transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
}

.dk-modal-container.is-zoomed .dk-artboard {
  width: min(920px, calc(100vw - 40px));
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(197, 160, 89, 0.5);
}

/* Poster Image */
.dk-poster-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
}

/* Action Bar */
.dk-action-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 14px;
  flex-wrap: wrap;
  z-index: 10;
}

.dk-action-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 38px;
  padding: 0 18px;
  border-radius: 20px;
  font-family: 'Times New Roman', serif, sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.25s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.dk-btn-maps {
  background: #3e5f48;
  color: #ffffff;
  border-color: #557d60;
  box-shadow: 0 4px 12px rgba(62, 95, 72, 0.35);
}

.dk-btn-maps:hover {
  background: #4a7256;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(62, 95, 72, 0.45);
}

.dk-btn-zoom {
  background: rgba(255, 255, 255, 0.14);
  color: #efe1cf;
  border-color: rgba(239, 225, 207, 0.35);
  backdrop-filter: blur(8px);
}

.dk-btn-zoom:hover {
  background: rgba(255, 255, 255, 0.25);
  color: #ffffff;
  border-color: rgba(239, 225, 207, 0.7);
  transform: translateY(-2px);
}

.dk-btn-close {
  background: rgba(0, 0, 0, 0.45);
  color: #d1c7b7;
  border-color: rgba(209, 199, 183, 0.3);
}

.dk-btn-close:hover {
  background: rgba(0, 0, 0, 0.7);
  color: #ffffff;
  transform: translateY(-2px);
}

/* Modal Transition */
.dk-fade-enter-active,
.dk-fade-leave-active {
  transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.dk-fade-enter-active .dk-artboard,
.dk-fade-leave-active .dk-artboard {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.dk-fade-enter-from,
.dk-fade-leave-to {
  opacity: 0;
}

.dk-fade-enter-from .dk-artboard {
  transform: scale(0.92);
}

.dk-fade-leave-to .dk-artboard {
  transform: scale(0.95);
}

@media (max-width: 480px) {
  .dk-close-btn {
    top: 12px;
    right: 12px;
    width: 38px;
    height: 38px;
  }
  .dk-action-btn {
    height: 34px;
    padding: 0 14px;
    font-size: 11px;
  }
}
</style>
