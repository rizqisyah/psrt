<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import loadingLogo from '../assets/loading-stamp-cropped.png'

const props = defineProps({
  duration: {
    type: Number,
    default: 3800,
  },
})

const emit = defineEmits(['finish', 'leaving'])

const displayedText = ref('')

const fullText = 'Wait a second...'
let typeTimer = null
let finishTimer = null

function startTypewriter() {
  let charIndex = 0
  let isDeleting = false

  typeTimer = setInterval(() => {
    if (!isDeleting) {
      if (charIndex < fullText.length) {
        displayedText.value = fullText.slice(0, charIndex + 1)
        charIndex++
      } else {
        // Pause at the end before restarting typing
        isDeleting = true
      }
    } else {
      // Quick clear to type again
      displayedText.value = ''
      charIndex = 0
      isDeleting = false
    }
  }, 190)
}

function handleDone() {
  if (typeTimer) clearInterval(typeTimer)
  emit('leaving')
  emit('finish')
}

onMounted(() => {
  startTypewriter()

  finishTimer = setTimeout(() => {
    handleDone()
  }, props.duration)
})

onUnmounted(() => {
  if (typeTimer) clearInterval(typeTimer)
  if (finishTimer) clearTimeout(finishTimer)
})
</script>

<template>
  <div
    class="loading-page-container"
    role="status"
    aria-live="polite"
  >
    <div class="loading-content-container">
      <div class="logo-wrapper">
        <img
          :src="loadingLogo"
          alt="Loading Icon"
          class="loading-gif"
          loading="eager"
        />
      </div>
      <p class="loading-caption">
        {{ displayedText }}<span class="cursor">|</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.loading-page-container {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  z-index: 9999999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 24px;
  pointer-events: auto;
  user-select: none;
}

.loading-content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  user-select: none;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: gentleFloat 2.6s ease-in-out infinite;
}

.loading-gif {
  width: 70px;
  max-width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  filter: drop-shadow(0 4px 14px rgba(0, 0, 0, 0.09));
}

.loading-caption {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 1.4;
  color: #353a20;
  min-height: 20px;
  margin: 0;
  text-align: center;
}

.cursor {
  display: inline-block;
  color: #353a20;
  font-weight: 300;
  margin-left: 2px;
  animation: blink 0.9s infinite;
}

@keyframes gentleFloat {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-5px) scale(1.02);
  }
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@media (max-width: 600px) {
  .loading-gif {
    width: 60px;
  }

  .loading-caption {
    font-size: 12px;
  }
}
</style>
