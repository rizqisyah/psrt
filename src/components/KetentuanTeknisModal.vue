<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import {
  imgBfdngn,
  imgA12E6Eae594F46809Be59966Aabdf614Copy1,
  imgIkonRumahDanHatiBerornamen2,
  img05C11656456C4551B3D7A843F06712061,
  imgOpen633,
  imgZeniaraustri99855NoneE4D8Ae5E32B44AeeAa4C09154Bb75EbbPhotoroom6,
  img276B78832F7E49Eb90F3C79134986F502,
  img2C53F6C5Dec94E0DAf45Efd6D826D9581,
  imgZeniaraustri99855BotanicalFlowersArrangementIllustrationI968084Ea67A54232A96BE2E5E12C6D63Photoroom5,
  imgAfbc019C3C6C47AfAa585Fcbcc4A16E6Photoroom1,
  imgLine20,
  imgVector12,
  imgVector13
} from '../assets.js'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const scale = ref(1)

function updateScale() {
  if (typeof window === 'undefined') return
  const isMobile = window.innerWidth < 768
  const padX = isMobile ? 24 : 64
  const padY = isMobile ? 60 : 64
  const maxW = window.innerWidth - padX
  const maxH = window.innerHeight - padY
  const scaleW = maxW / 955
  const scaleH = maxH / 1274
  // Scale down to fit screen neatly, maximum scale 1
  scale.value = Math.min(scaleW, scaleH, 1)
}

function handleKeydown(e) {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

watch(
  () => props.isOpen,
  (val) => {
    if (val) {
      updateScale()
      document.body.style.overflow = 'hidden'
      window.addEventListener('resize', updateScale)
      window.addEventListener('keydown', handleKeydown)
    } else {
      document.body.style.overflow = ''
      window.removeEventListener('resize', updateScale)
      window.removeEventListener('keydown', handleKeydown)
    }
  },
  { immediate: true }
)

onUnmounted(() => {
  document.body.style.overflow = ''
  window.removeEventListener('resize', updateScale)
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="kt-fade">
      <div
        v-if="isOpen"
        class="kt-modal-backdrop"
        @click.self="emit('close')"
        role="dialog"
        aria-modal="true"
        aria-labelledby="kt-modal-title"
      >
        <!-- Floating Close Button -->
        <button
          type="button"
          class="kt-btn-close"
          @click="emit('close')"
          aria-label="Tutup Ketentuan Teknis"
          title="Tutup (Esc)"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <!-- Scaler Wrapper: Centers perfectly and sizes based on responsive scale -->
        <div
          class="kt-scaler-wrapper"
          :style="{
            width: `calc(955px * ${scale})`,
            height: `calc(1274px * ${scale})`
          }"
        >
          <!-- 955x1274 Artboard Frame (1:1 Figma node 58:343) -->
          <div
            class="kt-artboard"
            :style="{ transform: `scale(${scale})` }"
            data-node-id="58:343"
            data-name="KETENTUAN TEKNIS"
          >
            <!-- Background Parchment (58:344) -->
            <div class="kt-el abs" style="left: 0; top: 0; width: 955px; height: 1274px" data-node-id="58:344" data-name="bfdngn">
              <img alt="" class="kt-img-cover" :src="imgBfdngn" />
            </div>

            <!-- Inner Document Paper Border (58:345) -->
            <div
              class="kt-el abs"
              style="left: 44px; top: 23px; width: 871px; height: 1490px;"
              data-node-id="58:345"
              data-name="a12e6eae-594f-4680-9be5-9966aabdf614 copy 1"
            >
              <div class="kt-clip">
                <img alt="" style="position: absolute; height: 100%; left: -3.03%; max-width: none; top: 0; width: 106.42%;" :src="imgA12E6Eae594F46809Be59966Aabdf614Copy1" />
              </div>
            </div>

            <!-- Header Gray Center Fill (58:346) -->
            <div class="kt-el abs" style="background-color: #d9d9d9; height: 69px; left: 249px; top: 34px; width: 461px;" data-node-id="58:346" />

            <!-- Header Center Document Info (58:350) -->
            <div class="kt-el abs" style="left: 50%; transform: translateX(-50%); top: 56px; font-family: 'Times New Roman', serif; font-weight: 700; height: 40px; font-size: 16px; color: #000000; text-align: center; letter-spacing: 3px; width: 204px; line-height: 15px;" data-node-id="58:350">
              <p style="line-height: 15px; margin: 0;">DOKUMEN PROYEK</p>
              <p style="line-height: 15px; margin: 0;">001 / PSRN / 2026</p>
            </div>

            <!-- Header Left Ribbon Fold (58:379) -->
            <div class="kt-el abs" style="height: 69.5px; left: 38.5px; top: 33.5px; width: 32.5px;" data-node-id="58:379">
              <img alt="" style="display: block; width: 100%; height: 100%;" :src="imgVector12" />
            </div>

            <!-- Header Left Badge Box (58:354) -->
            <div class="kt-el abs" style="background-color: #686868; height: 70px; left: 70px; top: 33px; width: 191px;" data-node-id="58:355" />
            <p class="kt-el abs" style="font-family: 'Times New Roman', serif; font-weight: 700; height: 29px; line-height: 15px; left: 136px; font-size: 10px; color: #ffffff; top: 45px; width: 108px; margin: 0;" data-node-id="58:356">
              PROYEK STRATEGIS RUMAH TANGGA
            </p>
            <p class="kt-el abs" style="font-family: 'Times New Roman', serif; font-weight: 700; height: 16px; line-height: 15px; left: 136px; font-size: 11px; color: #ffeb86; top: 76px; width: 91px; margin: 0;" data-node-id="58:357">
              SARI &amp; ZAHRON
            </p>
            <div class="kt-el abs" style="left: 86px; width: 45px; height: 45px; top: 44px;" data-node-id="58:358" data-name="Ikon Rumah dan Hati Berornamen 2">
              <img alt="" style="position: absolute; inset: 0; width: 100%; height: 100%; object-position: bottom; pointer-events: none;" :src="imgIkonRumahDanHatiBerornamen2" />
            </div>

            <!-- Header Right Ribbon & Badge (58:380) -->
            <div class="kt-el abs" style="left: 883px; top: 34.5px; width: 32.5px; height: 69.5px; display: flex; align-items: center; justify-content: center;" data-node-id="58:381">
              <div style="transform: scaleY(-1) rotate(180deg); width: 32.5px; height: 69.5px; flex: none;">
                <img alt="" style="display: block; width: 100%; height: 100%;" :src="imgVector13" />
              </div>
            </div>
            <div class="kt-el abs" style="left: 693px; top: 34px; width: 191px; height: 70px; display: flex; align-items: center; justify-content: center;" data-node-id="58:382">
              <div style="transform: scaleY(-1) rotate(180deg); width: 191px; height: 70px; background-color: #686868; flex: none;" />
            </div>
            <div class="kt-el abs" style="left: 815px; transform: translateX(-50%); font-family: 'Times New Roman', serif; font-weight: 700; height: 29px; color: #b6a23d; text-align: center; top: 54px; width: 154px;" data-node-id="58:383">
              <p style="font-size: 16px; line-height: 14px; margin: 0;">STATUS PROYEK</p>
              <p style="font-size: 16px; line-height: 14px; margin: 0;">DISETUJUI</p>
            </div>
            <div class="kt-el abs" style="left: 710px; top: 52px; width: 30px; height: 34px; overflow: hidden; pointer-events: none;" data-node-id="58:384" data-name="Open (63) 3">
              <img alt="" style="position: absolute; height: 220%; left: -72.22%; max-width: none; top: -60%; width: 244.44%;" :src="imgOpen633" />
            </div>

            <!-- Main Titles -->
            <p class="kt-el abs" style="font-family: 'Inter', sans-serif; font-weight: 700; height: 29px; line-height: 29px; left: 50%; transform: translateX(-50%); color: #303030; font-size: 26px; text-align: center; top: 167px; width: 311px; margin: 0;" data-node-id="58:351">
              TAHAP IMPLEMENTASI
            </p>
            <h2 id="kt-modal-title" class="kt-el abs" style="font-family: 'Monomakh', serif; font-weight: 400; height: 80px; line-height: 34px; left: 50%; transform: translateX(-50%); font-size: 34px; color: #000000; text-align: center; top: 228px; width: 364px; margin: 0;" data-node-id="58:349">
              KETENTUAN TEKNIS PROYEK
            </h2>

            <!-- Subtle Vertical Connecting Line (58:359) -->
            <div class="kt-el abs" style="left: 359.49px; top: 357.97px; width: 0; height: 181.069px; display: flex; align-items: center; justify-content: center;" data-node-id="58:359">
              <div style="transform: rotate(-90deg); flex: none;">
                <div style="width: 181.069px; height: 0; position: relative;">
                  <div style="position: absolute; inset: -1px 0 0 0;">
                    <img alt="" style="display: block; width: 100%; height: 100%;" :src="imgLine20" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Card 1: PROJECT KICK-OFF (58:347) -->
            <div
              class="kt-el abs kt-glass-card"
              style="left: 196px; top: 358px; width: 567px; height: 91px; border-radius: 20px; border: 3px solid #ffffff; background-image: url(&quot;data:image/svg+xml;utf8,<svg viewBox='0 0 567 91' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(55.32 8.5961 -53.623 19.178 5.1 2.7074)'><stop stop-color='rgba(255,255,255,0.4)' offset='0'/><stop stop-color='rgba(255,255,255,0)' offset='1'/></radialGradient></defs></svg>&quot;);"
              data-node-id="58:347"
            />
            <div class="kt-el abs" style="left: 213px; top: 366px; width: 69px; height: 73px; overflow: hidden; pointer-events: none;" data-node-id="58:360" data-name="05c11656-456c-4551-b3d7-a843f0671206 1">
              <img alt="" style="position: absolute; height: 385.21%; left: -102.1%; max-width: none; top: -170.43%; width: 445.33%;" :src="img05C11656456C4551B3D7A843F06712061" />
            </div>
            <p class="kt-el abs" style="left: 310px; top: 381px; width: 338px; height: 24px; font-family: 'Times New Roman', serif; font-weight: 700; font-size: 21px; line-height: 24px; color: #303030; margin: 0;" data-node-id="58:353">
              PROJECT KICK-OFF
            </p>
            <p class="kt-el abs" style="left: 310px; top: 407px; width: 294px; height: 24px; font-family: 'Times New Roman', serif; font-weight: 700; font-size: 18px; line-height: 22px; color: #303030; margin: 0;" data-node-id="58:352">
              The beginning of our lifetime project.
            </p>

            <!-- Card 2: DRESSCODE PUTIH (58:361) -->
            <div
              class="kt-el abs kt-glass-card"
              style="left: 196px; top: 473px; width: 567px; height: 130px; border-radius: 20px; border: 3px solid #ffffff; background-image: url(&quot;data:image/svg+xml;utf8,<svg viewBox='0 0 567 130' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(55.32 12.28 -53.623 27.398 5.1 3.8678)'><stop stop-color='rgba(255,255,255,0.4)' offset='0'/><stop stop-color='rgba(255,255,255,0)' offset='1'/></radialGradient></defs></svg>&quot;);"
              data-node-id="58:362"
            />
            <div class="kt-el abs" style="left: 213px; top: 500px; width: 69px; height: 73px; overflow: hidden; pointer-events: none;" data-node-id="58:365" data-name="05c11656-456c-4551-b3d7-a843f0671206 2">
              <img alt="" style="position: absolute; height: 385.21%; left: -102.67%; max-width: none; top: -58.86%; width: 445.33%;" :src="img05C11656456C4551B3D7A843F06712061" />
            </div>
            <p class="kt-el abs" style="left: 310px; top: 512px; width: 338px; height: 24px; font-family: 'Times New Roman', serif; font-weight: 700; font-size: 21px; line-height: 24px; color: #303030; margin: 0;" data-node-id="58:364">
              DRESSCODE PUTIH
            </p>
            <p class="kt-el abs" style="left: 310px; top: 536px; width: 421px; height: 48px; font-family: 'Times New Roman', serif; font-weight: 700; font-size: 16px; line-height: 22px; color: #303030; margin: 0;" data-node-id="58:363">
              Sebagai simbol doa, kebersihan niat, dan dukungan terhadap proyek strategis ini.
            </p>

            <!-- Card 3: ON-TIME ATTENDANCE (58:366) -->
            <div
              class="kt-el abs kt-glass-card"
              style="left: 196px; top: 623px; width: 567px; height: 130px; border-radius: 20px; border: 3px solid #ffffff; background-image: url(&quot;data:image/svg+xml;utf8,<svg viewBox='0 0 567 130' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(55.32 12.28 -53.623 27.398 5.1 3.8678)'><stop stop-color='rgba(255,255,255,0.4)' offset='0'/><stop stop-color='rgba(255,255,255,0)' offset='1'/></radialGradient></defs></svg>&quot;);"
              data-node-id="58:367"
            />
            <div class="kt-el abs" style="left: 213px; top: 646px; width: 69px; height: 73px; overflow: hidden; pointer-events: none;" data-node-id="58:370" data-name="05c11656-456c-4551-b3d7-a843f0671206 3">
              <img alt="" style="position: absolute; height: 385.21%; left: -241.03%; max-width: none; top: -58.86%; width: 445.33%;" :src="img05C11656456C4551B3D7A843F06712061" />
            </div>
            <p class="kt-el abs" style="left: 310px; top: 651px; width: 338px; height: 24px; font-family: 'Times New Roman', serif; font-weight: 700; font-size: 21px; line-height: 24px; color: #303030; margin: 0;" data-node-id="58:368">
              ON-TIME ATTENDANCE
            </p>
            <p class="kt-el abs" style="left: 310px; top: 675px; width: 405px; height: 60px; font-family: 'Times New Roman', serif; font-weight: 700; font-size: 16px; line-height: 21px; color: #303030; margin: 0;" data-node-id="58:369">
              Mohon hadir tepat waktu dan jadilah saksi atas dimulainya project kehidupan diatas komitmen dan janji yg kami ikrarkan 
            </p>

            <!-- Card 4: Komitmen, Doa & Orang Baik (58:371) -->
            <div
              class="kt-el abs kt-glass-card"
              style="left: 196px; top: 770px; width: 567px; height: 130px; border-radius: 20px; border: 3px solid #ffffff; background-image: url(&quot;data:image/svg+xml;utf8,<svg viewBox='0 0 567 130' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(55.32 12.28 -53.623 27.398 5.1 3.8678)'><stop stop-color='rgba(255,255,255,0.4)' offset='0'/><stop stop-color='rgba(255,255,255,0)' offset='1'/></radialGradient></defs></svg>&quot;);"
              data-node-id="58:372"
            />
            <div class="kt-el abs" style="left: 213px; top: 798px; width: 69px; height: 73px; overflow: hidden; pointer-events: none;" data-node-id="58:374" data-name="05c11656-456c-4551-b3d7-a843f0671206 4">
              <img alt="" style="position: absolute; height: 385.21%; left: -242.26%; max-width: none; top: -170.58%; width: 445.33%;" :src="img05C11656456C4551B3D7A843F06712061" />
            </div>
            <div class="kt-el abs" style="left: 310px; top: 800px; width: 405px; height: 74px; font-family: 'Times New Roman', serif; font-weight: 700; font-size: 16px; color: #303030;" data-node-id="58:373">
              <p style="line-height: 22px; margin: 0;">Setiap project membutuhkan komitmen, doa,</p>
              <p style="line-height: 22px; margin: 0;">dan orang-orang baik yang hadir di dalam prosesnya.</p>
              <p style="line-height: 22px; margin: 0;">Semoga kami dan kamu yang hadir selalu bahagia </p>
            </div>

            <!-- Card 5: PROJECT STARTS WITH A PROMISE (58:375) -->
            <div
              class="kt-el abs kt-glass-card"
              style="left: 196px; top: 922px; width: 567px; height: 130px; border-radius: 20px; border: 3px solid #ffffff; background-image: url(&quot;data:image/svg+xml;utf8,<svg viewBox='0 0 567 130' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(55.32 12.28 -53.623 27.398 5.1 3.8678)'><stop stop-color='rgba(255,255,255,0.4)' offset='0'/><stop stop-color='rgba(255,255,255,0)' offset='1'/></radialGradient></defs></svg>&quot;);"
              data-node-id="58:376"
            />
            <div class="kt-el abs" style="left: 213px; top: 950px; width: 69px; height: 73px; overflow: hidden; pointer-events: none;" data-node-id="58:378" data-name="05c11656-456c-4551-b3d7-a843f0671206 5">
              <img alt="" style="position: absolute; height: 385.21%; left: -166.66%; max-width: none; top: -275.31%; width: 445.33%;" :src="img05C11656456C4551B3D7A843F06712061" />
            </div>
            <div class="kt-el abs" style="left: 310px; top: 957px; width: 418px; height: 75px; font-family: 'Times New Roman', serif; font-weight: 700; font-size: 21px; color: #000000; white-space: pre-wrap;" data-node-id="58:377">
              <p style="line-height: 25px; margin: 0;">PROJECT STARTS WITH A PROMISE.</p>
              <p style="line-height: 25px; margin: 0;">IT GROWS WITH PRAYERS &amp; </p>
              <p style="line-height: 25px; margin: 0;">GOOD PEOPLE</p>
            </div>

            <!-- Botanicals & Foliage Borders -->
            <!-- Upper Left Foliage (58:385) -->
            <div class="kt-el abs" style="left: -268px; top: 20px; width: 404px; height: 819px; pointer-events: none; transform: scaleX(-1);" data-node-id="58:385">
              <div style="position: absolute; inset: 0; overflow: hidden;">
                <img alt="" style="position: absolute; height: 100%; left: -49.8%; max-width: none; top: 0; width: 202.79%;" :src="imgZeniaraustri99855NoneE4D8Ae5E32B44AeeAa4C09154Bb75EbbPhotoroom6" />
              </div>
              <div style="position: absolute; inset: 0; overflow: hidden;">
                <img alt="" style="position: absolute; height: 100%; left: -49.8%; max-width: none; top: 0; width: 202.79%;" :src="imgZeniaraustri99855NoneE4D8Ae5E32B44AeeAa4C09154Bb75EbbPhotoroom6" />
              </div>
            </div>

            <!-- Upper Right Foliage (58:386) -->
            <div class="kt-el abs" style="left: 793px; top: 23px; width: 404px; height: 819px; pointer-events: none;" data-node-id="58:386">
              <div style="position: absolute; inset: 0; overflow: hidden;">
                <img alt="" style="position: absolute; height: 100%; left: -49.8%; max-width: none; top: 0; width: 202.79%;" :src="imgZeniaraustri99855NoneE4D8Ae5E32B44AeeAa4C09154Bb75EbbPhotoroom6" />
              </div>
              <div style="position: absolute; inset: 0; overflow: hidden;">
                <img alt="" style="position: absolute; height: 100%; left: -49.8%; max-width: none; top: 0; width: 202.79%;" :src="imgZeniaraustri99855NoneE4D8Ae5E32B44AeeAa4C09154Bb75EbbPhotoroom6" />
              </div>
            </div>

            <!-- Lower Left Foliage (58:387) -->
            <div class="kt-el abs" style="left: -255px; top: 660px; width: 404px; height: 819px; pointer-events: none; transform: scaleX(-1);" data-node-id="58:387">
              <div style="position: absolute; inset: 0; overflow: hidden;">
                <img alt="" style="position: absolute; height: 100%; left: -49.8%; max-width: none; top: 0; width: 202.79%;" :src="imgZeniaraustri99855NoneE4D8Ae5E32B44AeeAa4C09154Bb75EbbPhotoroom6" />
              </div>
              <div style="position: absolute; inset: 0; overflow: hidden;">
                <img alt="" style="position: absolute; height: 100%; left: -49.8%; max-width: none; top: 0; width: 202.79%;" :src="imgZeniaraustri99855NoneE4D8Ae5E32B44AeeAa4C09154Bb75EbbPhotoroom6" />
              </div>
            </div>

            <!-- Lower Right Foliage (58:388) -->
            <div class="kt-el abs" style="left: 779px; top: 664px; width: 404px; height: 819px; pointer-events: none;" data-node-id="58:388">
              <div style="position: absolute; inset: 0; overflow: hidden;">
                <img alt="" style="position: absolute; height: 100%; left: -49.8%; max-width: none; top: 0; width: 202.79%;" :src="imgZeniaraustri99855NoneE4D8Ae5E32B44AeeAa4C09154Bb75EbbPhotoroom6" />
              </div>
              <div style="position: absolute; inset: 0; overflow: hidden;">
                <img alt="" style="position: absolute; height: 100%; left: -49.8%; max-width: none; top: 0; width: 202.79%;" :src="imgZeniaraustri99855NoneE4D8Ae5E32B44AeeAa4C09154Bb75EbbPhotoroom6" />
              </div>
            </div>

            <!-- Bottom Landscape Trees Left (58:389) -->
            <div class="kt-el abs" style="left: -219px; top: 835px; width: 731px; height: 585px; pointer-events: none;" data-node-id="58:389">
              <img alt="" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;" :src="img276B78832F7E49Eb90F3C79134986F502" />
            </div>

            <!-- Bottom Landscape Trees Right (58:390) -->
            <div class="kt-el abs" style="left: 227px; top: 798px; width: 743px; height: 595px; display: flex; align-items: center; justify-content: center; pointer-events: none;" data-node-id="58:390">
              <div style="transform: scaleY(-1) rotate(180deg); width: 743px; height: 595px; flex: none; position: relative;">
                <img alt="" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;" :src="img276B78832F7E49Eb90F3C79134986F502" />
              </div>
            </div>

            <!-- Bottom Left Floral Peony (58:391) -->
            <div class="kt-el abs" style="left: 38px; top: 930px; width: 190px; height: 190px; pointer-events: none; transform: scaleX(-1); z-index: 2;" data-node-id="58:391">
              <img alt="" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;" :src="img2C53F6C5Dec94E0DAf45Efd6D826D9581" />
            </div>

            <!-- Bottom Right Floral Bouquet (58:392) -->
            <div class="kt-el abs" style="left: 760px; top: 683px; width: 391px; height: 391px; pointer-events: none;" data-node-id="58:392">
              <img alt="" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;" :src="imgZeniaraustri99855BotanicalFlowersArrangementIllustrationI968084Ea67A54232A96BE2E5E12C6D63Photoroom5" />
            </div>

            <!-- Bottom Left Orchid Flowers (58:393) -->
            <div class="kt-el abs" style="left: -245px; top: 1055px; width: 561.218px; height: 369.877px; pointer-events: none; transform: rotate(9.44deg); z-index: 3;" data-node-id="58:393">
              <img alt="" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;" :src="imgAfbc019C3C6C47AfAa585Fcbcc4A16E6Photoroom1" />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* Modal Backdrop Overlay */
.kt-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 99999;
  background-color: rgba(15, 18, 16, 0.78);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  padding: 16px;
  box-sizing: border-box;
}

/* Floating Close Button */
.kt-btn-close {
  position: fixed;
  top: 18px;
  right: 18px;
  z-index: 100001;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: rgba(30, 32, 28, 0.75);
  color: #efe1cf;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
  transition: all 0.25s ease;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.kt-btn-close:hover {
  background: rgba(200, 180, 140, 0.9);
  color: #1a1b18;
  transform: scale(1.08) rotate(90deg);
  border-color: #ffffff;
}

/* Scaler Wrapper maintains physical container aspect ratio according to dynamic scale */
.kt-scaler-wrapper {
  position: relative;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}

/* Base Artboard: Fixed 955x1274 matching Figma 1:1 */
.kt-artboard {
  position: absolute;
  left: 0;
  top: 0;
  width: 955px;
  height: 1274px;
  background-color: #ffffff;
  overflow: hidden;
  border-radius: 14px;
  transform-origin: top left;
  box-shadow: none;
  user-select: text;
}

/* Element Primitives */
.abs {
  position: absolute;
  box-sizing: border-box;
  word-break: break-word;
}

.kt-img-cover {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  max-width: none;
}

.kt-clip {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

/* Glass Card styling */
.kt-glass-card {
  backdrop-filter: blur(21px);
  -webkit-backdrop-filter: blur(21px);
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: none;
}

/* Transitions */
.kt-fade-enter-active,
.kt-fade-leave-active {
  transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.kt-fade-enter-from,
.kt-fade-leave-to {
  opacity: 0;
}

.kt-fade-enter-active .kt-artboard {
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.kt-fade-enter-from .kt-artboard {
  transform: scale(0.9) !important;
}
</style>
