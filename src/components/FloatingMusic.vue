<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import vinylImg from '../assets/vinyl.png'

const props = defineProps({
  src: {
    type: String,
    default: `${import.meta.env.BASE_URL}music.mp3`,
  },
})

const audioEl = ref(null)
const isPlaying = ref(false)
const hasInteracted = ref(false)

async function play() {
  if (!audioEl.value) return
  try {
    await audioEl.value.play()
    isPlaying.value = true
  } catch {
    isPlaying.value = false
  }
}

function pause() {
  if (!audioEl.value) return
  audioEl.value.pause()
  isPlaying.value = false
}

function toggle() {
  if (isPlaying.value) {
    pause()
  } else {
    play()
  }
}

function onUserGesture() {
  if (!hasInteracted.value) {
    hasInteracted.value = true
    if (!isPlaying.value) {
      play()
    }
  }
}

defineExpose({
  play,
  pause,
  toggle,
  isPlaying,
})

onMounted(() => {
  // Attempt immediate auto-play
  play()

  // Register user gesture listeners for strict browser autoplay policies
  window.addEventListener('click', onUserGesture, { once: true, passive: true })
  window.addEventListener('touchstart', onUserGesture, { once: true, passive: true })
  window.addEventListener('keydown', onUserGesture, { once: true, passive: true })
})

onUnmounted(() => {
  pause()
  window.removeEventListener('click', onUserGesture)
  window.removeEventListener('touchstart', onUserGesture)
  window.removeEventListener('keydown', onUserGesture)
})
</script>

<template>
  <div
    class="floating-music"
    :class="{ 'is-playing': isPlaying }"
    @click.stop="toggle"
    role="button"
    tabindex="0"
    title="Putar / Jeda Musik"
    aria-label="Kontrol musik latar"
  >
    <img
      :src="vinylImg"
      alt="Piringan Hitam Musik"
      class="vinyl-disc"
      :class="{ 'is-spinning': isPlaying }"
    />
    <audio
      ref="audioEl"
      :src="src"
      loop
      preload="auto"
      @play="isPlaying = true"
      @pause="isPlaying = false"
    />
  </div>
</template>

<style scoped>
.floating-music {
  position: fixed;
  right: 20px;
  bottom: calc(24px + env(safe-area-inset-bottom, 0px));
  z-index: 9999;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.45);
  transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.22s ease;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.floating-music:hover {
  transform: scale(1.08);
  box-shadow: 0 6px 22px rgba(0, 0, 0, 0.55);
}

.floating-music:active {
  transform: scale(0.92);
}

@media (min-width: 1025px) {
  .floating-music {
    width: 60px;
    height: 60px;
    bottom: 36px;
    right: 36px;
  }
}

.vinyl-disc {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  pointer-events: none;
  display: block;
}

.vinyl-disc.is-spinning {
  animation: spin-vinyl 3.2s linear infinite;
}

@keyframes spin-vinyl {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .vinyl-disc.is-spinning {
    animation: none;
  }
}
</style>
