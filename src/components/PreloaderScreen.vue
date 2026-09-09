<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import loadingLogo from '../assets/loading-logo.png'

const props = defineProps({
  duration: {
    type: Number,
    default: 3800,
  },
})

const emit = defineEmits(['finish', 'leaving'])

const displayedText = ref('')
const isFadingOut = ref(false)

const fullText = 'Wait a second...'
let typeTimer = null
let finishTimer = null
let postFadeTimer = null

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
  isFadingOut.value = true
  if (typeTimer) clearInterval(typeTimer)
  emit('leaving')

  // Give 900ms for smooth fade out transition before telling parent to unmount
  postFadeTimer = setTimeout(() => {
    emit('finish')
  }, 900)
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
  if (postFadeTimer) clearTimeout(postFadeTimer)
})
</script>

<template>
  <div
    class="loading-page-container"
    :class="{ 'is-hidden': isFadingOut }"
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
  opacity: 1;
  visibility: visible;
  transition: opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1),
              visibility 0.9s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

.loading-page-container.is-hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: scale(1.05);
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
  max-width: 115px;
  width: 100%;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08));
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
    max-width: 100px;
  }

  .loading-caption {
    font-size: 12px;
  }
}
</style>
