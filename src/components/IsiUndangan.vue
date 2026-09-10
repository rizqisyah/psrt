<script setup>
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  active: { type: Boolean, default: false },
})
import KetentuanTeknisModal from './KetentuanTeknisModal.vue'
import DetailKonstruksiModal from './DetailKonstruksiModal.vue'
import { useWedding } from '../composables/useWedding'
import {
  imgB38F9Ec16289496F8314878C82Adb01F6,
  img536E6F845C284191805A62999E5945Eb1,
  imgFhj1,
  imgFhj2,
  img276B78832F7E49Eb90F3C79134986F501,
  imgCe92Fc531434413F9A32Bdd1D80202C41,
  imgZeniaraustri99855PremiumWatercolorIllustrationAssetSheet888A8F1384Cb433F93C60D110893F6D5411,
  img5F561687D7544D468476E99B657Eba5DCopy2,
  imgOpen643,
  imgNgggbn,
  imgImg174311,
  imgImg174321,
  imgZeniaraustri99855HandDrawnFantasyBotanicalIllustrationOfA2D4651A89D44Ccd8E4CC8687F229Ab5Photoroom3,
  imgZeniaraustri99855PremiumWatercolorIllustrationAssetSheet888A8F1384Cb433F93C60D110893F6D511,
  imgZeniaraustri99855PremiumWatercolorIllustrationAssetSheet888A8F1384Cb433F93C60D110893F6D5511,
  imgZeniaraustri99855PremiumWatercolorIllustrationAssetSheet888A8F1384Cb433F93C60D110893F6D521,
  imgOpen841,
  imgOpen553,
  imgOpen641,
  imgOpen642,
  imgImage69,
  imgOpen533,
  imgOpen592,
  imgBa0C59406Bfc49458A25D5A6D1957393PhotoroomCopy1,
  imgOpen562,
  imgOpen621,
  imgIkonLencanaMaroonDanEmas3,
  imgOpen631,
  imgA12E6Eae594F46809Be59966Aabdf614Copy2,
  imgIkonRumahDanHatiBerornamen1,
  imgIkonKalenderLokasiJamDanPengguna1,
  imgIkonRumahDanHatiBerornamen2,
  imgZeniaraustri99855HandDrawnFantasyBotanicalIllustrationOf9Ec45354735C4E34A4F400Fb145069C6Photoroom1,
  imgUntitled117620260831071000Copy1,
  imgImage70,
  imgAfbc019C3C6C47AfAa585Fcbcc4A16E6Photoroom1,
  imgB21Aae40Fc774B3DBede01Ee487A30CePhotoroom1,
  imgEa6Dc699929A4Dd0A39AC829A02C61752,
  imgOpen651,
  imgZeniaraustri99855BotanicalFlowersArrangementIllustrationI968084Ea67A54232A96BE2E5E12C6D63Photoroom5,
  imgZeniaraustri99855HandDrawnFantasyBotanicalIllustrationOfA2D4651A89D44Ccd8E4CC8687F229Ab5Photoroom2,
  imgLencanaStatusProyekDisetujui1,
  imgZeniaraustri99855PremiumWatercolorIllustrationAssetSheet888A8F1384Cb433F93C60D110893F6D51,
  imgZeniaraustri99855PremiumWatercolorIllustrationAssetSheet888A8F1384Cb433F93C60D110893F6D531,
  imgZeniaraustri99855PremiumWatercolorIllustrationAssetSheet888A8F1384Cb433F93C60D110893F6D5221,
  imgImg174322,
  imgImg174431,
  imgImg174411,
  imgImg174421,
  imgZeniaraustri99855ToileDeJouyIllustrationOfIsolatedImage7D854E0C187D42CaB630C41827265Be61,
  imgZeniaraustri99855NoneE4D8Ae5E32B44AeeAa4C09154Bb75EbbPhotoroom1,
  img45C2B650Df5F4A358D0E70Aa666Cab181,
  img45C2B650Df5F4A358D0E70Aa666Cab184,
  imgOpen831,
  img276B78832F7E49Eb90F3C79134986F502,
  imgVector11,
  imgEllipse31,
  imgEllipse29,
  imgEllipse30,
  imgLine6,
  imgFrame13,
  imgLine7,
  imgLine8,
  imgLine5,
  imgLine15,
  imgLine17,
  imgBrideNameCalligraphy,
  imgGroomNameCalligraphy,
  imgOrchidFloralWhiteAfbc,
  imgCornerFloralsPairAlt,
  imgFlowerBottomLeft,
  imgBotanicalZeniaraustri9ec4Alt,
} from '../assets'

// Responsive canvas scaling to fit any mobile / tablet / desktop screen width
const isiScale = ref(1)

function updateIsiScale() {
  if (typeof window === 'undefined') return
  const vw = window.innerWidth
  isiScale.value = Math.min(1, vw / 596)
}

onMounted(() => {
  updateIsiScale()
  window.addEventListener('resize', updateIsiScale)
  scanRevealItems()
})

onUnmounted(() => {
  window.removeEventListener('resize', updateIsiScale)
  destroyRevealObserver()
  clearRoadmapTimers()
})

// ---------------------------------------------------------------------------
// Scroll-reveal animation: assets & text gently fade/slide-in while swiping up.
// Activated only after the invitation has been opened (props.active).
// ---------------------------------------------------------------------------
let revealObserver = null
let roadmapTimers = []
const hasActivated = ref(false)
const items = []

function destroyRevealObserver() {
  if (revealObserver) {
    revealObserver.disconnect()
    revealObserver = null
  }
}

function clearRoadmapTimers() {
  roadmapTimers.forEach((t) => clearTimeout(t))
  roadmapTimers = []
}

function triggerRoadmapSequence() {
  clearRoadmapTimers()

  const schedule = [
    { type: 'roadmap-flower-bg', delay: 80 },
    { type: 'fl-left-1', delay: 180 },
    { type: 'fl-right-1', delay: 320 },
    { type: 'roadmap-header', delay: 480 },
    { type: 'fl-left-2', delay: 680 },
    { type: 'fl-right-2', delay: 840 },
    { type: 'roadmap-frame', delay: 1000 },
    { type: 'step-1', delay: 1200 },
    { type: 'fl-left-3', delay: 1500 },
    { type: 'step-2', delay: 1680 },
    { type: 'fl-right-3', delay: 1980 },
    { type: 'step-3', delay: 2160 },
    { type: 'fl-left-4', delay: 2450 },
    { type: 'step-4', delay: 2650 },
  ]

  schedule.forEach(({ type, delay }) => {
    const timer = setTimeout(() => {
      const els = document.querySelectorAll(`[data-reveal="${type}"]`)
      els.forEach((el) => {
        el.classList.add('rv-in')
      })
    }, delay)
    roadmapTimers.push(timer)
  })
}

function parseDim(val) {
  if (!val) return 0
  const n = parseFloat(val)
  return Number.isFinite(n) ? n : 0
}

function scanRevealItems() {
  items.length = 0
  const canvas = document.getElementById('isi-canvas')
  if (!canvas) return

  const allCandidates = canvas.querySelectorAll('p, [data-name], [data-node-id]')

  allCandidates.forEach((el) => {
    const tag = el.tagName.toLowerCase()
    const st = el.style

    if (el.id === 'isi-canvas' || el.classList.contains('isi-scaler') || el.classList.contains('isi-wrapper')) return

    // Skip display:contents containers so only their actual child elements with visible boxes are animated
    if (st.display === 'contents') return

    if (el.hasAttribute('data-reveal')) {
      items.push(el)
      return
    }

    const w = parseDim(st.width)
    const h = parseDim(st.height)
    const isFullBleedBg = (w >= 540 || h >= 800) && (st.backgroundColor || el.querySelector('img'))

    // Classify Roadmap Steps and Flowers in sequence so they reveal 1-by-1:
    const nodeId = el.getAttribute('data-node-id') || ''

    // Left Flank Flowers
    if (nodeId === '58:260') {
      el.setAttribute('data-reveal', 'fl-left-1')
      items.push(el)
      return
    }
    if (nodeId === '58:259') {
      el.setAttribute('data-reveal', 'fl-left-2')
      items.push(el)
      return
    }
    if (['58:269', '58:45'].includes(nodeId)) {
      el.setAttribute('data-reveal', 'fl-left-3')
      items.push(el)
      return
    }
    if (nodeId === '58:270') {
      el.setAttribute('data-reveal', 'fl-left-4')
      items.push(el)
      return
    }

    // Right Flank Flowers
    if (['58:262', '58:46'].includes(nodeId)) {
      el.setAttribute('data-reveal', 'fl-right-1')
      items.push(el)
      return
    }
    if (['58:258', '58:257'].includes(nodeId)) {
      el.setAttribute('data-reveal', 'fl-right-2')
      items.push(el)
      return
    }
    if (['58:261', '58:41'].includes(nodeId)) {
      el.setAttribute('data-reveal', 'fl-right-3')
      items.push(el)
      return
    }

    // Botanical Backdrop Wash
    if (nodeId === '58:6') {
      el.setAttribute('data-reveal', 'roadmap-flower-bg')
      items.push(el)
      return
    }
    
    // Group A: Header Dokumen & Judul Roadmap
    if ([
      '58:48', '58:49', '58:50', '58:125', '58:126', '58:127', '58:128',
      '58:52', '58:53', '58:54', '58:55', '58:249', '58:93',
      '58:94', '58:95'
    ].includes(nodeId)) {
      el.setAttribute('data-reveal', 'roadmap-header')
      items.push(el)
      return
    }

    // Group B: Kotak Latar Roadmap & Garis Vertikal
    if (['58:47', '58:96', '58:57', '58:60'].includes(nodeId)) {
      el.setAttribute('data-reveal', 'roadmap-frame')
      items.push(el)
      return
    }

    // Group C: Tahap 01
    if (['58:65', '58:66', '58:67', '58:68', '58:69', '58:85', '58:263'].includes(nodeId)) {
      el.setAttribute('data-reveal', 'step-1')
      items.push(el)
      return
    }

    // Group D: Tahap 02
    if (['58:71', '58:72', '58:73', '58:74', '58:75', '58:86', '58:264'].includes(nodeId)) {
      el.setAttribute('data-reveal', 'step-2')
      items.push(el)
      return
    }

    // Group E: Tahap 03
    if (['58:58', '58:77', '58:78', '58:79', '58:80', '58:81', '58:87'].includes(nodeId)) {
      el.setAttribute('data-reveal', 'step-3')
      items.push(el)
      return
    }

    // Group F: Tahap 04 (Akad Nikah)
    if (['58:59', '58:83', '58:84', '58:88', '58:89', '58:90', '58:91', '58:92'].includes(nodeId)) {
      el.setAttribute('data-reveal', 'step-4')
      items.push(el)
      return
    }

    // Classify text vs asset layers for tailored Qinvi-style easings & delays
    if (tag === 'p') {
      const parentIsCandidate = el.parentElement && el.parentElement.hasAttribute('data-reveal')
      if (!parentIsCandidate) {
        el.setAttribute('data-reveal', 'text')
        items.push(el)
      }
      return
    }

    const hasImg = el.querySelector('img') || tag === 'img'
    if (hasImg && !isFullBleedBg) {
      const parentIsCandidate = el.parentElement && el.parentElement.hasAttribute('data-reveal')
      if (!parentIsCandidate) {
        // Tag assets with specific layer types if applicable
        const name = (el.getAttribute('data-name') || '').toLowerCase()
        if (name.includes('b21') || name.includes('afbc') || name.includes('zeniaraustri') || name.includes('flower') || name.includes('botanical')) {
          el.setAttribute('data-reveal', 'bloom')
        } else if (name.includes('seal') || name.includes('lencana')) {
          el.setAttribute('data-reveal', 'seal')
        } else {
          el.setAttribute('data-reveal', 'asset')
        }
        items.push(el)
      }
    }
  })

  // Sort items by vertical Y position in canvas so staggering flows naturally top-to-bottom
  items.sort((a, b) => {
    const rectA = a.getBoundingClientRect()
    const rectB = b.getBoundingClientRect()
    return rectA.top - rectB.top
  })

  // Apply sequential delay offsets to general scroll items
  items.forEach((el, index) => {
    const revType = el.getAttribute('data-reveal') || ''
    if (!revType.startsWith('step-') && !revType.startsWith('roadmap-')) {
      const delay = (index % 6) * 75
      el.style.setProperty('--rv-delay', `${delay}ms`)
    }
  })
}

function setupReveal() {
  destroyRevealObserver()
  if (typeof IntersectionObserver === 'undefined') {
    items.forEach((el) => el && el.classList.add('rv-in'))
    return
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('rv-in')
          revealObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
  )

  items.forEach((el) => {
    if (el) {
      const rev = el.getAttribute('data-reveal') || ''
      // Roadmap sequence is handled exclusively by triggerRoadmapSequence so steps appear 1-by-1
      if (rev.startsWith('step-') || rev.startsWith('roadmap-') || rev.startsWith('fl-')) {
        return
      }
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      if (rect.top < vh * 0.95 && rect.bottom > 0) {
        requestAnimationFrame(() => {
          el.classList.add('rv-in')
        })
      } else {
        revealObserver.observe(el)
      }
    }
  })
}

watch(
  () => props.active,
  (val) => {
    if (!val) {
      hasActivated.value = false
      clearRoadmapTimers()
      destroyRevealObserver()
      items.forEach((el) => el && el.classList.remove('rv-in'))
      return
    }
    hasActivated.value = true
    scanRevealItems()
    // Ensure all roadmap sequence elements are clean and hidden before sequence triggers
    items.forEach((el) => {
      if (el) {
        const rev = el.getAttribute('data-reveal') || ''
        if (rev.startsWith('step-') || rev.startsWith('roadmap-') || rev.startsWith('fl-')) {
          el.classList.remove('rv-in')
        }
      }
    })
    setupReveal()
    // Trigger roadmap sequence with refined staggered timing once opening begins
    setTimeout(() => {
      triggerRoadmapSequence()
    }, 400)
  },
  { immediate: true }
)

// Interactive Handlers
const isKetentuanOpen = ref(false)

function openKetentuanTeknis() {
  isKetentuanOpen.value = true
}

function closeKetentuanTeknis() {
  isKetentuanOpen.value = false
}

const isDetailKonstruksiOpen = ref(false)

function openDetailKonstruksi() {
  isDetailKonstruksiOpen.value = true
}

function closeDetailKonstruksi() {
  isDetailKonstruksiOpen.value = false
}


// Composable Integration
const {
  wedding,
  mempelaiPria,
  mempelaiWanita,
  coupleOrder,
  acaraList,
  countdownDate,
  tamu,
  rekeningList,
  ucapanList,
  submitGuestRsvp,
  submitGuestUcapan,
} = useWedding()

function openMaps() {
  const url = acaraList.value?.[0]?.map_url || 'https://maps.google.com/?q=Masjid+Agung+Gresik'
  window.open(url, '_blank')
}

function scrollToCouple() {
  const el = document.querySelector('[data-node-id="58:153"]')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

// RSVP Reactive State
const rsvpName = ref('')
const rsvpAttending = ref('Hadir')
const rsvpCount = ref('2 Orang')
const rsvpSubmitted = ref(false)
const isSendingRsvp = ref(false)
const rsvpFeedback = ref('')
const showRsvpPopup = ref(false)

watch(
  () => tamu.value?.namaTamu,
  (name) => {
    if (name && !rsvpName.value) {
      rsvpName.value = name
    }
  },
  { immediate: true }
)

async function handleSendRsvp() {
  if (!rsvpName.value.trim()) {
    rsvpFeedback.value = 'Mohon masukkan nama Anda.'
    return
  }
  isSendingRsvp.value = true
  rsvpFeedback.value = ''
  try {
    const paxNum = parseInt(rsvpCount.value) || 1
    await submitGuestRsvp({
      nama: rsvpName.value.trim(),
      kehadiran: rsvpAttending.value,
      jumlah: paxNum,
    })
    rsvpSubmitted.value = true
    showRsvpPopup.value = true
  } catch (err) {
    console.error('[handleSendRsvp] Error:', err)
    rsvpFeedback.value = err?.message || 'Gagal mengirim konfirmasi kehadiran.'
  } finally {
    isSendingRsvp.value = false
  }
}

// Wishes Reactive State & Infinite Scrolling
const wishName = ref('')
const wishMessage = ref('')
const userWishes = ref([])
const visibleCount = ref(6)
const isSendingWish = ref(false)
const wishFeedback = ref('')
const showWishPopup = ref(false)

watch(
  () => tamu.value?.namaTamu,
  (name) => {
    if (name && !wishName.value) {
      wishName.value = name
    }
  },
  { immediate: true }
)

const allWishes = computed(() => {
  const dynamic = ucapanList.value || []
  return [...userWishes.value, ...dynamic]
})

const visibleWishes = computed(() => {
  return allWishes.value.slice(0, visibleCount.value)
})

function handleWishScroll(e) {
  const el = e?.target
  if (!el) return
  if (el.scrollTop + el.clientHeight >= el.scrollHeight - 40) {
    if (visibleCount.value < allWishes.value.length) {
      visibleCount.value += 6
    }
  }
}

async function handleSendWish() {
  if (!wishName.value.trim() || !wishMessage.value.trim()) {
    wishFeedback.value = 'Mohon lengkapi nama dan ucapan Anda.'
    return
  }
  isSendingWish.value = true
  wishFeedback.value = ''
  try {
    await submitGuestUcapan({
      nama: wishName.value.trim(),
      ucapan: wishMessage.value.trim(),
      status_kehadiran: rsvpAttending.value || 'Hadir',
    })
    wishMessage.value = ''
    showWishPopup.value = true
  } catch (err) {
    console.error('[handleSendWish] Error:', err)
    wishFeedback.value = err?.message || 'Gagal mengirim ucapan.'
  } finally {
    isSendingWish.value = false
  }
}

function showMoreWishes() {
  visibleCount.value += 6
}
</script>

<template>
  <div class="isi-wrapper">
    <div
      class="isi-scaler"
      :style="{
        width: (596 * isiScale) + 'px',
        height: (7639 * isiScale) + 'px',
        position: 'relative',
        overflow: 'hidden'
      }"
    >
    <div class="isi-canvas" :style="{ width: '596px', height: '7639px', transform: `scale(${isiScale})`, transformOrigin: 'top left', position: 'absolute', top: 0, left: 0, backgroundColor: '#ffffff', overflow: 'hidden' }" id="isi-canvas" data-node-id="58:2" data-name="ISI">
      <div style="position: absolute; height: 835px; left: -47px; top: 4726px; width: 731px" data-node-id="58:3" data-name="b38f9ec1-6289-496f-8314-878c82adb01f 6">
        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
          <img alt="" style="position: absolute; height: 128.08%; left: 0; max-width: none; top: -8.46%; width: 100%" :src="imgB38F9Ec16289496F8314878C82Adb01F6" />
        </div>
      </div>
      <div style="position: absolute; height: 1055px; left: -62px; top: 5176px; width: 721px; pointer-events: none;" data-node-id="58:4" data-name="536e6f84-5c28-4191-805a-62999e5945eb 1">
        <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; opacity: 0.78; pointer-events: none; width: 100%; height: 100%" :src="img536E6F845C284191805A62999E5945Eb1" />
      </div>
      <div style="position: absolute; background-color: #595a52; height: 525px; left: -44px; top: 1859px; width: 654px" data-node-id="58:5" />
      <div style="position: absolute; height: 991px; left: -38px; top: -8px; width: 678px" data-node-id="58:6" data-name="]fhj 1" data-reveal="roadmap-flower-bg">
        <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-position: bottom; pointer-events: none; width: 100%; height: 100%" :src="imgFhj1" />
      </div>
      <div style="position: absolute; height: 991px; left: -44px; top: 783px; width: 678px" data-node-id="58:7" data-name="]fhj 2">
        <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-position: bottom; pointer-events: none; width: 100%; height: 100%" :src="imgFhj2" />
      </div>
      <div style="position: absolute; height: 459px; left: -30px; top: 1376px; width: 574px" data-node-id="58:8" data-name="276b7883-2f7e-49eb-90f3-c79134986f50 1">
        <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="img276B78832F7E49Eb90F3C79134986F501" />
      </div>
      <div style="position: absolute; height: 273px; left: 50%; top: 1882px; width: 580.311px; transform: translateX(-50%)" data-node-id="58:9" data-name="ce92fc53-1434-413f-9a32-bdd1d80202c4 1">
        <img alt="Ornamen Ayat Al-Quran" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%; object-fit: fill; pointer-events: none" :src="imgCe92Fc531434413F9A32Bdd1D80202C41" />
      </div>
      <div style="position: absolute; background-color: #fdf8f1; height: 1430px; left: -17px; top: 6522px; width: 638px" data-node-id="58:10" />
      <div style="position: absolute; height: 1044px; left: -133px; top: 6654px; width: 914px" data-node-id="58:11" data-name="b38f9ec1-6289-496f-8314-878c82adb01f 5">
        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
          <img alt="" style="position: absolute; height: 128.08%; left: 0; max-width: none; top: -8.46%; width: 100%" :src="imgB38F9Ec16289496F8314878C82Adb01F6" />
        </div>
      </div>
      <div style="position: absolute; display: flex; height: 249.252px; align-items: center; justify-content: center; left: 122px; top: 7312px; width: 391.867px" data-node-id="58:12">
        <div style="flex: none; transform: rotate(68.65deg) scaleY(-1)">
          <div style="height: 373.134px; position: relative; width: 121.787px" data-name="zeniaraustri_99855_Premium_watercolor_illustration_asset_sheet__888a8f13-84cb-433f-93c6-0d110893f6d5-4 (1) 1">
            <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
              <img alt="" style="position: absolute; height: 271.53%; left: -272.34%; max-width: none; top: -104.17%; width: 831.91%" :src="imgZeniaraustri99855PremiumWatercolorIllustrationAssetSheet888A8F1384Cb433F93C60D110893F6D5411" />
            </div>
          </div>
        </div>
      </div>
      <div style="position: absolute; height: 486px; left: 0px; top: 6877px; width: 220px" data-node-id="58:13" data-name="5f561687-d754-4d46-8476-e99b657eba5d copy 2">
        <img alt="" style="position: absolute; inset: 0; max-width: none; object-fit: cover; mix-blend-mode: multiply; pointer-events: none; width: 100%; height: 100%" :src="img5F561687D7544D468476E99B657Eba5DCopy2" />
      </div>
      <div style="position: absolute; display: flex; height: 256.697px; align-items: center; justify-content: center; left: -104px; top: 6473px; width: 232.972px" data-node-id="58:14">
        <div style="flex: none; transform: rotate(-2.85deg)">
          <div style="height: 246px; position: relative; width: 221px">
            <img alt="" style="position: absolute; display: block; top: 0; right: 0; bottom: 0; left: 0; max-width: none; width: 100%; height: 100%" :src="imgVector11" />
          </div>
        </div>
      </div>
      <div style="position: absolute; left: 197px; width: 776px; height: 776px; top: 6710px" data-node-id="58:15" data-name="Open (64) 3">
        <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; opacity: 0.12; mix-blend-mode: multiply; filter: grayscale(0.8) sepia(0.2); pointer-events: none; width: 100%; height: 100%" :src="imgOpen643" />
      </div>
      <div style="position: absolute; height: 277px; left: -68px; box-shadow: 0px 4px 2.7px 0px rgba(0,0,0,0.11); top: 7160px; width: 740px" data-node-id="58:16" data-name="ngggbn">
        <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgNgggbn" />
      </div>
      <div style="position: absolute; display: flex; height: 239px; align-items: center; justify-content: center; left: -159px; top: 7142px; width: 297px" data-node-id="58:17">
        <div style="flex: none; transform: rotate(180deg) scaleY(-1)">
          <div style="height: 239px; position: relative; width: 297px" data-name="IMG_1743-1 1">
            <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
              <img alt="" style="position: absolute; height: 455.71%; left: -247.13%; max-width: none; top: -328.57%; width: 366.67%" :src="imgImg174311" />
            </div>
          </div>
        </div>
      </div>
      <div style="position: absolute; height: 130px; left: 143px; top: 7345px; width: 175px" data-node-id="58:18" data-name="IMG_1743-2 1">
        <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-position: bottom; pointer-events: none; width: 100%; height: 100%" :src="imgImg174321" />
      </div>
      <div style="position: absolute; display: flex; align-items: center; justify-content: center; left: -9px; width: 276.049px; height: 276.049px; top: 7262px" data-node-id="58:19">
        <div style="flex: none; transform: rotate(-24.79deg)">
          <div style="position: relative; width: 208px; height: 208px" data-name="zeniaraustri_99855_Hand_drawn_fantasy_botanical_illustration_of_a2d4651a-89d4-4ccd-8e4c-c8687f229ab5-Photoroom 3">
            <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgZeniaraustri99855HandDrawnFantasyBotanicalIllustrationOfA2D4651A89D44Ccd8E4CC8687F229Ab5Photoroom3" />
          </div>
        </div>
      </div>
      <div style="position: absolute; display: flex; align-items: center; justify-content: center; left: 311px; width: 244.403px; height: 244.403px; top: 7270px" data-node-id="58:20">
        <div style="flex: none; transform: rotate(-155.21deg) scaleY(-1)">
          <div style="position: relative; width: 184.155px; height: 184.155px" data-name="zeniaraustri_99855_Hand_drawn_fantasy_botanical_illustration_of_a2d4651a-89d4-4ccd-8e4c-c8687f229ab5-Photoroom 4">
            <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgZeniaraustri99855HandDrawnFantasyBotanicalIllustrationOfA2D4651A89D44Ccd8E4CC8687F229Ab5Photoroom3" />
          </div>
        </div>
      </div>
      <div style="position: absolute; left: 302px; width: 160px; height: 160px; top: 7354px" data-node-id="58:21" data-name="zeniaraustri_99855_Premium_watercolor_illustration_asset_sheet__888a8f13-84cb-433f-93c6-0d110893f6d5-1 1">
        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
          <img alt="" style="position: absolute; left: -187.41%; max-width: none; width: 291.12%; height: 291.12%; top: -114.38%" :src="imgZeniaraustri99855PremiumWatercolorIllustrationAssetSheet888A8F1384Cb433F93C60D110893F6D511" />
        </div>
      </div>
      <div style="position: absolute; display: flex; height: 348.646px; align-items: center; justify-content: center; left: 435px; top: 7050px; width: 300.492px" data-node-id="58:22">
        <div style="flex: none; transform: rotate(-16.91deg)">
          <div style="height: 296.3px; position: relative; width: 223.975px" data-name="zeniaraustri_99855_Premium_watercolor_illustration_asset_sheet__888a8f13-84cb-433f-93c6-0d110893f6d5-5 (1) 1">
            <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
              <img alt="" style="position: absolute; height: 259.84%; left: -108.33%; max-width: none; top: -17.32%; width: 343.75%" :src="imgZeniaraustri99855PremiumWatercolorIllustrationAssetSheet888A8F1384Cb433F93C60D110893F6D5511" />
            </div>
          </div>
        </div>
      </div>
      <div style="position: absolute; display: flex; height: 254.606px; align-items: center; justify-content: center; left: 417px; top: 7206px; width: 219.64px" data-node-id="58:23">
        <div style="flex: none; transform: rotate(10.47deg)">
          <div style="height: 225.344px; position: relative; width: 181.729px" data-name="zeniaraustri_99855_Premium_watercolor_illustration_asset_sheet__888a8f13-84cb-433f-93c6-0d110893f6d5-2 1">
            <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
              <img alt="" style="position: absolute; height: 300%; left: -198%; max-width: none; top: -185.48%; width: 372%" :src="imgZeniaraustri99855PremiumWatercolorIllustrationAssetSheet888A8F1384Cb433F93C60D110893F6D521" />
            </div>
          </div>
        </div>
      </div>
      <div style="position: absolute; border-width: 1px; border-color: #777474; border-style: solid; height: 1742px; left: calc(50% - 0.5px); top: 12px; width: 577px; transform: translateX(-50%)" data-node-id="58:24" />
      <div style="position: absolute; background-color: #cfcfcf; height: 2246px; left: -21px; box-shadow: 0px -5px 63.7px 0px rgba(0,0,0,0.06); top: 2384px; width: 638px" data-node-id="58:25" />
      <div style="position: absolute; left: 122px; width: 138px; height: 138px; top: 7328px" data-node-id="58:26" data-name="Open (84) 1">
        <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgOpen841" />
      </div>
      <div style="position: absolute; display: flex; height: 684px; align-items: center; justify-content: center; left: 136px; top: 2725px; width: 504px" data-node-id="58:27">
        <div style="flex: none; transform: rotate(180deg) scaleY(-1)">
          <div style="height: 684px; position: relative; width: 504px" data-name="Open (55) 3">
            <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; opacity: 0.22; overflow: hidden; pointer-events: none">
              <img alt="" style="position: absolute; height: 100%; left: -35.71%; max-width: none; top: 0; width: 135.71%" :src="imgOpen553" />
            </div>
          </div>
        </div>
      </div>
      <div style="position: absolute; height: 835px; left: -72px; top: 3891px; width: 731px" data-node-id="58:28" data-name="b38f9ec1-6289-496f-8314-878c82adb01f 3">
        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
          <img alt="" style="position: absolute; height: 128.08%; left: 0; max-width: none; top: -8.46%; width: 100%" :src="imgB38F9Ec16289496F8314878C82Adb01F6" />
        </div>
      </div>
      <div style="position: absolute; height: 1044px; left: -159px; top: 5822px; width: 914px; pointer-events: none;" data-node-id="58:29" data-name="b38f9ec1-6289-496f-8314-878c82adb01f 4">
        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
          <img alt="" style="position: absolute; height: 128.08%; left: 0; max-width: none; top: -8.46%; width: 100%" :src="imgB38F9Ec16289496F8314878C82Adb01F6" />
        </div>
      </div>
      <div style="position: absolute; height: 737px; left: -25px; top: 3225px; width: 646px" data-node-id="58:30" data-name="b38f9ec1-6289-496f-8314-878c82adb01f 2">
        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
          <img alt="" style="position: absolute; height: 128.08%; left: 0; max-width: none; top: -8.46%; width: 100%" :src="imgB38F9Ec16289496F8314878C82Adb01F6" />
        </div>
      </div>
      <div style="position: absolute; height: 684px; left: -81px; top: 3470px; width: 504px" data-node-id="58:31" data-name="Open (55) 4">
        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; opacity: 0.22; overflow: hidden; pointer-events: none">
          <img alt="" style="position: absolute; height: 100%; left: -35.71%; max-width: none; top: 0; width: 135.71%" :src="imgOpen553" />
        </div>
      </div>
      <div style="position: absolute; height: 868px; left: -29px; top: 2380px; width: 636px" data-node-id="58:32" data-name="b38f9ec1-6289-496f-8314-878c82adb01f 1">
        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
          <img alt="" style="position: absolute; height: 107.09%; left: 0; max-width: none; top: -7.07%; width: 100%" :src="imgB38F9Ec16289496F8314878C82Adb01F6" />
        </div>
      </div>
      <div style="position: absolute; height: 315px; left: 453px; top: 2928px; width: 149px" data-node-id="58:33" data-name="5f561687-d754-4d46-8476-e99b657eba5d copy 3">
        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; opacity: 0.76; overflow: hidden; pointer-events: none">
          <img alt="" style="position: absolute; height: 127.73%; left: 0; max-width: none; top: -27.68%; width: 216.11%" :src="img5F561687D7544D468476E99B657Eba5DCopy2" />
        </div>
      </div>
      <div style="position: absolute; left: 1px; width: 664px; height: 664px; top: 2348px" data-node-id="58:34" data-name="Open (64) 1">
        <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgOpen641" />
      </div>
      <div style="position: absolute; left: calc(50% - 0.5px); width: 73px; height: 73px; top: 3110px; transform: translateX(-50%)" data-node-id="58:35">
        <img alt="" style="position: absolute; display: block; top: 0; right: 0; bottom: 0; left: 0; max-width: none; width: 100%; height: 100%" :src="imgEllipse31" />
      </div>
      <div style="position: absolute; display: flex; align-items: center; justify-content: center; left: -67.47px; width: 664px; height: 664px; top: 3174px" data-node-id="58:36">
        <div style="flex: none; transform: rotate(180deg) scaleY(-1)">
          <div style="position: relative; width: 664px; height: 664px" data-name="Open (64) 2">
            <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-position: bottom; pointer-events: none; width: 100%; height: 100%" :src="imgOpen642" />
          </div>
        </div>
      </div>
      <div style="position: absolute; height: 332px; left: 270px; top: 2607px; width: 436px" data-node-id="58:37">
        <div style="position: absolute; top: -57.23%; bottom: -57.23%; left: -43.58%; right: -43.58%">
          <img alt="" style="display: block; max-width: none; width: 100%; height: 100%" :src="imgEllipse29" />
        </div>
      </div>
      <div style="position: absolute; display: flex; height: 332px; align-items: center; justify-content: center; left: -108.47px; top: 3441px; width: 436px" data-node-id="58:38">
        <div style="flex: none; transform: rotate(180deg) scaleY(-1)">
          <div style="height: 332px; position: relative; width: 436px">
            <div style="position: absolute; top: -57.23%; bottom: -57.23%; left: -43.58%; right: -43.58%">
              <img alt="" style="display: block; max-width: none; width: 100%; height: 100%" :src="imgEllipse30" />
            </div>
          </div>
        </div>
      </div>
      <div style="position: absolute; display: flex; height: 398.225px; align-items: center; justify-content: center; left: 368px; top: 2417px; width: 394.532px" data-node-id="58:39">
        <div style="flex: none; transform: rotate(-115.51deg) scaleY(-1)">
          <div style="height: 293.411px; position: relative; width: 301.235px" data-name="image 69">
            <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgImage69" />
          </div>
        </div>
      </div>
      <div style="position: absolute; display: flex; height: 398.225px; align-items: center; justify-content: center; left: -165px; top: 3251px; width: 394.532px" data-node-id="58:40">
        <div style="flex: none; transform: rotate(-64.49deg)">
          <div style="height: 293.411px; position: relative; width: 301.235px" data-name="image 72">
            <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgImage69" />
          </div>
        </div>
      </div>
      <div style="position: absolute; left: 133px; width: 506px; height: 506px; top: 713px" data-node-id="58:41" data-name="Open (53) 3">
        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; opacity: 0.12; overflow: hidden; pointer-events: none">
          <img alt="" style="position: absolute; left: 0; max-width: none; width: 100%; height: 100%; top: 0" :src="imgOpen533" />
        </div>
      </div>
      <div style="position: absolute; display: flex; align-items: center; justify-content: center; left: 352px; width: 383.472px; height: 383.472px; top: 1551px" data-node-id="58:42">
        <div style="flex: none; transform: rotate(-143.78deg) scaleY(-1)">
          <div style="position: relative; width: 274.369px; height: 274.369px" data-name="Open (59) 2">
            <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgOpen592" />
          </div>
        </div>
      </div>
      <div style="position: absolute; height: 230px; left: -97px; top: 1555px; width: 345px" data-node-id="58:43" data-name="ba0c5940-6bfc-4945-8a25-d5a6d1957393-Photoroom copy 1">
        <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgBa0C59406Bfc49458A25D5A6D1957393PhotoroomCopy1" />
      </div>
      <div style="position: absolute; display: flex; height: 684px; align-items: center; justify-content: center; left: 82px; top: 1070px; width: 504px" data-node-id="58:44">
        <div style="flex: none; transform: rotate(180deg) scaleY(-1)">
          <div style="height: 684px; position: relative; width: 504px" data-name="Open (55) 2">
            <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; opacity: 0.5; overflow: hidden; pointer-events: none">
              <img alt="" style="position: absolute; height: 100%; left: -35.71%; max-width: none; top: 0; width: 135.71%" :src="imgOpen553" />
            </div>
          </div>
        </div>
      </div>
      <div style="position: absolute; height: 352px; left: 9px; top: 672px; width: 170px" data-node-id="58:45" data-name="Open (56) 2">
        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; opacity: 0.2; overflow: hidden; pointer-events: none">
          <img alt="" style="position: absolute; height: 100%; left: -107.06%; max-width: none; top: 0; width: 207.06%" :src="imgOpen562" />
        </div>
      </div>
      <div style="position: absolute; height: 315px; left: 437px; top: 85px; width: 149px" data-node-id="58:46" data-name="5f561687-d754-4d46-8476-e99b657eba5d copy 1">
        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; opacity: 0.76; overflow: hidden; pointer-events: none">
          <img alt="" style="position: absolute; height: 127.73%; left: 0; max-width: none; top: -27.68%; width: 216.11%" :src="img5F561687D7544D468476E99B657Eba5DCopy2" />
        </div>
      </div>
      <div style="position: absolute; background-color: #faf6ef; border-color: #888738; border-width: 1.083px; border-style: solid; height: 562.913px; left: calc(50% - 2.87px); top: 278.33px; width: 436.257px; transform: translateX(-50%)" data-node-id="58:47" data-reveal="roadmap-frame" />
      <div style="word-break: break-word; position: absolute; font-family: '42dot Sans', serif, sans-serif; font-weight: 700; height: 40px; line-height: 0; left: 50%; font-size: 12px; color: #000000; text-align: center; top: 31px; letter-spacing: 3px; width: 204px; transform: translateX(-50%)" data-node-id="58:48" data-reveal="roadmap-header">
        <p style="line-height: 15px; margin: 0">DOKUMEN PROYEK</p>
        <p style="line-height: 15px; margin: 0; margin-top: 2px">001 / PSRN / 2026</p>
      </div>
      <div style="position: absolute; border-width: 1px; border-color: #777474; border-style: solid; height: 70px; left: calc(50% - 0.5px); top: 12px; width: 577px; transform: translateX(-50%)" data-node-id="58:49" data-reveal="roadmap-header" />
      <div style="word-break: break-word; position: absolute; font-family: 'Inter', serif, sans-serif; font-weight: 400; height: 32px; line-height: 0; left: calc(50% + 191px); font-style: normal; color: #b6a23d; font-size: 0px; text-align: center; top: 32px; width: 118px; transform: translateX(-50%)" data-node-id="58:50" data-reveal="roadmap-header">
        <p style="font-family: '42dot Sans', serif, sans-serif; font-weight: 700; line-height: 14px; margin: 0; font-size: 12px">STATUS PROYEK</p>
        <p style="font-family: '42dot Sans', serif, sans-serif; font-weight: 700; line-height: 14px; margin: 0; margin-top: 3px; font-size: 13px">DISETUJUI</p>
      </div>
      <div style="position: absolute; display: contents; left: -3px; top: 111px" data-node-id="58:51">
        <p style="word-break: break-word; position: absolute; font-family: 'Monomakh', serif, sans-serif; font-weight: 400; height: 38px; line-height: 34px; left: calc(50% - 0.5px); font-style: normal; font-size: 34px; color: #000000; text-align: center; top: 106px; width: 601px; transform: translateX(-50%); margin: 0" data-node-id="58:52" data-reveal="roadmap-header">
          ROADMAP PROYEK
        </p>
        <p style="word-break: break-word; position: absolute; font-family: 'Monomakh', serif, sans-serif; font-weight: 400; height: 22px; line-height: 20px; left: calc(50% - 0.5px); font-style: normal; font-size: 15px; color: #000000; text-align: center; top: 146px; width: 601px; transform: translateX(-50%); margin: 0; letter-spacing: 1px" data-node-id="58:53" data-reveal="roadmap-header">
          TAHAPAN PELAKSANAAN
        </p>
        <div style="position: absolute; height: 20px; left: 202px; top: 170px; width: 191px" data-node-id="58:55" data-name="Open (62) 1" data-reveal="roadmap-header">
          <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
            <img alt="" style="position: absolute; height: 955%; left: 0; max-width: none; top: -395%; width: 100%" :src="imgOpen621" />
          </div>
        </div>
        <div style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 42px; line-height: 0; left: calc(50% - 0.5px); font-style: normal; font-size: 14px; color: #000000; text-align: center; top: 196px; width: 601px; transform: translateX(-50%)" data-node-id="58:54" data-reveal="roadmap-header">
          <p style="line-height: 19px; margin: 0">Berdasarkan hasil studi kelayakan dan komitmen bersama,</p>
          <p style="line-height: 19px; margin: 0; margin-top: 2px">proyek ini telah memasuki tahap implementasi.</p>
        </div>
      </div>
      <div style="position: absolute; display: contents; left: 113px; top: 342px" data-node-id="58:56">
        <div style="position: absolute; display: flex; height: 285.997px; align-items: center; justify-content: center; left: 140px; top: 376px; width: 1.3px" data-node-id="58:57" data-reveal="roadmap-frame">
          <div style="flex: none; transform: rotate(89.74deg)">
            <div style="height: 0; position: relative; width: 286px">
              <div style="position: absolute; top: -1px; right: 0; bottom: 0; left: 0">
                <img alt="" style="display: block; max-width: none; width: 100%; height: 100%" :src="imgLine6" />
              </div>
            </div>
          </div>
        </div>
        <div style="position: absolute; height: 50px; left: 113px; top: 538px; width: 57px" data-node-id="58:58" data-name="Ikon Lencana Maroon dan Emas 3">
          <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
            <img alt="" style="position: absolute; height: 390.56%; left: -100.04%; max-width: none; top: -198.93%; width: 300%" :src="imgIkonLencanaMaroonDanEmas3" />
          </div>
        </div>
        <div style="position: absolute; height: 50px; left: 113px; top: 642px; width: 57px" data-node-id="58:59" data-name="Ikon Lencana Maroon dan Emas 4">
          <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
            <img alt="" style="position: absolute; height: 390.56%; left: -97.33%; max-width: none; top: -297.46%; width: 300%" :src="imgIkonLencanaMaroonDanEmas3" />
          </div>
        </div>
        <div style="position: absolute; height: 211px; left: 138px; top: 421px; width: 7px" data-node-id="58:60" data-reveal="roadmap-frame">
          <img alt="" style="position: absolute; display: block; top: 0; right: 0; bottom: 0; left: 0; max-width: none; width: 100%; height: 100%" :src="imgFrame13" />
        </div>
        <div style="position: absolute; display: contents; left: 178px; top: 342px" data-node-id="58:64">
          <p style="word-break: break-word; position: absolute; font-family: '42dot Sans', serif, sans-serif; font-weight: 700; height: 26px; line-height: 19px; left: 197px; color: #777876; font-size: 24px; text-align: center; top: 342px; width: 38px; transform: translateX(-50%)" data-node-id="58:65">
            01
          </p>
          <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 26px; line-height: 19px; left: 244px; font-style: normal; font-size: 15px; color: #000000; top: 342px; width: 256px" data-node-id="58:66">
            TAHAP PERENCANAAN
          </p>
          <div style="position: absolute; height: 18px; left: 400px; top: 382px; width: 16px" data-node-id="58:67" data-name="Open (63) 1">
            <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
              <img alt="" style="position: absolute; height: 220%; left: -72.22%; max-width: none; top: -60%; width: 244.44%" :src="imgOpen631" />
            </div>
          </div>
          <div style="position: absolute; height: 0; left: 182px; top: 424px; width: 286px" data-node-id="58:68">
            <div style="position: absolute; top: -1px; right: 0; bottom: 0; left: 0">
              <img alt="" style="display: block; max-width: none; width: 100%; height: 100%" :src="imgLine7" />
            </div>
          </div>
          <p style="word-break: break-word; position: absolute; font-family: '42dot Sans', serif, sans-serif; font-weight: 700; height: 19px; line-height: 19px; left: 421px; color: #c49f66; font-size: 12px; top: 381px; width: 53px" data-node-id="58:69">
            SELESAI
          </p>
        </div>
        <div style="position: absolute; display: contents; left: 178px; top: 448px" data-node-id="58:70">
          <p style="word-break: break-word; position: absolute; font-family: '42dot Sans', serif, sans-serif; font-weight: 700; height: 26px; line-height: 19px; left: 197px; color: #777876; font-size: 24px; text-align: center; top: 448px; width: 38px; transform: translateX(-50%)" data-node-id="58:71">
            02
          </p>
          <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 26px; line-height: 19px; left: 244px; font-style: normal; font-size: 15px; color: #000000; top: 448px; width: 230px" data-node-id="58:72">
            TAHAP STUDI KELAYAKAN
          </p>
          <div style="position: absolute; height: 18px; left: 400px; top: 488px; width: 16px" data-node-id="58:73" data-name="Open (63) 1">
            <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
              <img alt="" style="position: absolute; height: 220%; left: -72.22%; max-width: none; top: -60%; width: 244.44%" :src="imgOpen631" />
            </div>
          </div>
          <div style="position: absolute; height: 0; left: 182px; top: 530px; width: 286px" data-node-id="58:74">
            <div style="position: absolute; top: -1px; right: 0; bottom: 0; left: 0">
              <img alt="" style="display: block; max-width: none; width: 100%; height: 100%" :src="imgLine7" />
            </div>
          </div>
          <p style="word-break: break-word; position: absolute; font-family: '42dot Sans', serif, sans-serif; font-weight: 700; height: 19px; line-height: 19px; left: 421px; color: #c49f66; font-size: 12px; top: 487px; width: 53px" data-node-id="58:75">
            SELESAI
          </p>
        </div>
        <div style="position: absolute; display: contents; left: 178px; top: 547px" data-node-id="58:76">
          <p style="word-break: break-word; position: absolute; font-family: '42dot Sans', serif, sans-serif; font-weight: 700; height: 26px; line-height: 19px; left: 197px; color: #777876; font-size: 24px; text-align: center; top: 547px; width: 38px; transform: translateX(-50%)" data-node-id="58:77">
            03
          </p>
          <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 26px; line-height: 19px; left: 244px; font-style: normal; font-size: 15px; color: #000000; top: 547px; width: 216px" data-node-id="58:78">
            TAHAP PENGADAAN MITRA STRATEGIS
          </p>
          <div style="position: absolute; height: 18px; left: 400px; top: 587px; width: 16px" data-node-id="58:79" data-name="Open (63) 1">
            <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
              <img alt="" style="position: absolute; height: 220%; left: -72.22%; max-width: none; top: -60%; width: 244.44%" :src="imgOpen631" />
            </div>
          </div>
          <div style="position: absolute; height: 0; left: 182px; top: 629px; width: 286px" data-node-id="58:80">
            <div style="position: absolute; top: -1px; right: 0; bottom: 0; left: 0">
              <img alt="" style="display: block; max-width: none; width: 100%; height: 100%" :src="imgLine7" />
            </div>
          </div>
          <p style="word-break: break-word; position: absolute; font-family: '42dot Sans', serif, sans-serif; font-weight: 700; height: 19px; line-height: 19px; left: 421px; color: #c49f66; font-size: 12px; top: 586px; width: 53px" data-node-id="58:81">
            SELESAI
          </p>
        </div>
        <div style="position: absolute; display: contents; left: 157px; top: 363px" data-node-id="58:82">
          <p style="word-break: break-word; position: absolute; font-family: '42dot Sans', serif, sans-serif; font-weight: 700; height: 26px; line-height: 19px; left: 197px; color: #777876; font-size: 24px; text-align: center; top: 646px; width: 38px; transform: translateX(-50%)" data-node-id="58:83">
            04
          </p>
          <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 26px; line-height: 19px; left: 244px; font-style: normal; font-size: 15px; color: #000000; top: 646px; width: 249px" data-node-id="58:84">
            TAHAP IMPLEMENTASI
          </p>
          <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 26px; line-height: 19px; left: 244px; font-style: normal; right: 188px; font-size: 14px; color: #000000; top: 363px" data-node-id="58:85">
            Pertemuan Awal
          </p>
          <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 26px; line-height: 19px; left: 244px; font-style: normal; right: 188px; font-size: 14px; color: #000000; top: 470px" data-node-id="58:86">
            Pendekatan dan Pengenalan
          </p>
          <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 26px; line-height: 19px; left: 244px; font-style: normal; right: 188px; font-size: 14px; color: #000000; top: 583px" data-node-id="58:87">
            Lamaran
          </p>
          <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 26px; line-height: 19px; left: 243px; font-style: normal; right: 211px; font-size: 14px; color: #000000; top: 691px" data-node-id="58:88">
            Tahap inti proyek yang akan dilaksanakan
          </p>
          <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 26px; line-height: 19px; left: 244px; font-style: normal; color: #6f8066; font-size: 20px; top: 667px; width: 147px" data-node-id="58:89">
            AKAD NIKAH
          </p>
          <div style="position: absolute; height: 18px; left: 400px; top: 686px; width: 16px" data-node-id="58:90" data-name="Open (63) 1">
            <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
              <img alt="" style="position: absolute; height: 220%; left: -72.22%; max-width: none; top: -60%; width: 244.44%" :src="imgOpen631" />
            </div>
          </div>
          <div style="position: absolute; height: 0; left: 182px; top: 767px; width: 286px" data-node-id="58:91">
            <div style="position: absolute; top: -1px; right: 0; bottom: 0; left: 0">
              <img alt="" style="display: block; max-width: none; width: 100%; height: 100%" :src="imgLine7" />
            </div>
          </div>
          <p style="word-break: break-word; position: absolute; font-family: '42dot Sans', serif, sans-serif; font-weight: 700; height: 19px; line-height: 19px; left: 421px; color: #c49f66; font-size: 12px; top: 685px; width: 53px" data-node-id="58:92">
            SELESAI
          </p>
        </div>
      </div>
      <div style="position: absolute; height: 24px; left: 548px; top: 37px; width: 22px" data-node-id="58:93" data-name="Open (63) 2" data-reveal="roadmap-header">
        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
          <img alt="" style="position: absolute; height: 220%; left: -72.22%; max-width: none; top: -60%; width: 244.44%" :src="imgOpen631" />
        </div>
      </div>
      <div style="position: absolute; border-width: 1px; border-color: #aa7a3a; border-style: solid; height: 43px; left: 430px; top: 28px; width: 147px" data-node-id="58:94" data-reveal="roadmap-header" />
      <div style="position: absolute; border-width: 1px; border-color: #aa7a3a; border-style: solid; height: 49px; left: 427px; top: 25px; width: 153px" data-node-id="58:95" data-reveal="roadmap-header" />
      <div style="position: absolute; border-color: #aa7a3a; border-width: 1.083px; border-style: solid; height: 572.655px; left: calc(50% - 3px); top: 274px; width: 446px; transform: translateX(-50%)" data-node-id="58:96" data-reveal="roadmap-frame" />
      <div style="position: absolute; height: 801.553px; left: calc(50% + 0.36px); top: 868.77px; width: 468.714px; transform: translateX(-50%)" data-node-id="58:97" data-name="a12e6eae-594f-4680-9be5-9966aabdf614 copy 2">
        <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgA12E6Eae594F46809Be59966Aabdf614Copy2" />
      </div>
      <p style="word-break: break-word; position: absolute; font-family: 'Monomakh', serif, sans-serif; font-weight: 400; height: 42px; line-height: 34px; left: calc(50% - 2.5px); font-style: normal; color: #686868; font-size: 34px; text-align: center; top: 996px; width: 601px; transform: translateX(-50%)" data-node-id="58:98">
        {{ acaraList[0]?.title || 'AKAD NIKAH' }}
      </p>
      <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 26px; line-height: 14px; left: 50%; font-style: normal; color: #494937; font-size: 17px; text-align: center; top: 975px; width: 210px; transform: translateX(-50%)" data-node-id="58:99">
        DETAIL IMPLEMENTASI
      </p>
      <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 18px; line-height: 14px; left: calc(50% - 110px); font-style: normal; font-size: 16px; color: #000000; top: 1084px; width: 164px" data-node-id="58:100">
        TANGGAL
      </p>
      <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 18px; line-height: 14px; left: calc(50% - 110px); font-style: normal; font-size: 16px; color: #000000; top: 1238px; width: 164px" data-node-id="58:101">
        LOKASI
      </p>
      <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 18px; line-height: 14px; left: calc(50% - 110px); font-style: normal; font-size: 16px; color: #000000; top: 1458px; width: 164px" data-node-id="58:102">
        TAMU UNDANGAN
      </p>
      <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 18px; line-height: 14px; left: calc(50% - 110px); font-style: normal; font-size: 16px; color: #000000; top: 1106px; width: 318px" data-node-id="58:103">
        {{ acaraList[0]?.tanggal || acaraList[0]?.event_date || 'Sabtu, 14 November 2026' }}
      </p>
      <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 18px; line-height: 14px; left: calc(50% - 110px); font-style: normal; font-size: 16px; color: #000000; top: 1261px; width: 318px" data-node-id="58:104">
        {{ acaraList[0]?.location_name || 'Masjid Agung Gresik, Lantai 2 (Sisi Barat)' }}
      </p>
      <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 18px; line-height: 14px; left: calc(50% - 110px); font-style: normal; font-size: 16px; color: #000000; top: 1478px; width: 285px" data-node-id="58:105">
        {{ tamu.namaTamu || 'Keluarga, Kerabat, dan Sahabat Terpilih' }}
      </p>
      <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 43px; line-height: 17px; left: calc(50% - 110px); font-style: normal; font-size: 14px; color: #000000; top: 1281px; width: 294px" data-node-id="58:106">
        {{ acaraList[0]?.address || 'Jalan Dr. Wahidin S.H. (Simpang Tiga Sumber), Kembangan, Kecamatan Kebomas, Kabupaten Gresik, Jawa Timur' }}
      </p>
      <div style="position: absolute; height: 53px; left: 223px; top: 899px; width: 151px" data-node-id="58:107" data-name="Ikon Rumah dan Hati Berornamen 1">
        <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgIkonRumahDanHatiBerornamen1" />
      </div>
      <div style="position: absolute; height: 0; left: 50%; top: 1047px; width: 350px; transform: translateX(-50%)" data-node-id="58:108">
        <div style="position: absolute; top: -1px; right: 0; bottom: 0; left: 0">
          <img alt="" style="display: block; max-width: none; width: 100%; height: 100%" :src="imgLine8" />
        </div>
      </div>
      <div style="position: absolute; height: 0; left: 50%; top: 1219px; width: 350px; transform: translateX(-50%)" data-node-id="58:109">
        <div style="position: absolute; top: -1px; right: 0; bottom: 0; left: 0">
          <img alt="" style="display: block; max-width: none; width: 100%; height: 100%" :src="imgLine8" />
        </div>
      </div>
      <div style="position: absolute; height: 0; left: 50%; top: 1424px; width: 350px; transform: translateX(-50%)" data-node-id="58:110">
        <div style="position: absolute; top: -1px; right: 0; bottom: 0; left: 0">
          <img alt="" style="display: block; max-width: none; width: 100%; height: 100%" :src="imgLine8" />
        </div>
      </div>
      <div style="position: absolute; height: 0; left: 50%; top: 1540px; width: 350px; transform: translateX(-50%)" data-node-id="58:111">
        <div style="position: absolute; top: -1px; right: 0; bottom: 0; left: 0">
          <img alt="" style="display: block; max-width: none; width: 100%; height: 100%" :src="imgLine8" />
        </div>
      </div>
      <div style="position: absolute; display: contents; left: 151px; top: 1560px; cursor: pointer" data-node-id="58:112" @click="openDetailKonstruksi" role="button" tabindex="0" title="Lihat Detail Konstruksi & Denah Lokasi">
        <div style="position: absolute; background-color: #585951; height: 52px; left: 151px; border-radius: 5px; top: 1560px; width: 294px" data-node-id="58:113" />
        <div style="position: absolute; border-width: 2px; border-color: #efe1cf; border-style: solid; height: 44px; left: 156px; border-radius: 5px; top: 1564px; width: 286px" data-node-id="58:114" />
        <p style="word-break: break-word; position: absolute; font-family: 'Monomakh', serif, sans-serif; font-weight: 400; height: 44px; line-height: 45px; left: 295px; font-style: normal; color: #efe1cf; font-size: 17px; text-align: center; top: 1564px; width: 278px; transform: translateX(-50%)" data-node-id="58:115">
          LIHAT DETAIL KONSTRUKSI
        </p>
        <p style="word-break: break-word; position: absolute; font-family: 'Monomakh', serif, sans-serif; font-weight: 400; height: 44px; line-height: 45px; left: 295px; font-style: normal; color: #efe1cf; font-size: 17px; text-align: center; top: 1564px; width: 278px; transform: translateX(-50%)" data-node-id="58:116">
          LIHAT DETAIL KONSTRUKSI
        </p>
      </div>
      <div style="position: absolute; display: contents; left: 151px; top: 1350px; cursor: pointer" data-node-id="58:117" @click="openMaps" role="button" tabindex="0" title="Buka Google Maps">
        <div style="position: absolute; background-color: #585951; height: 52px; left: 151px; border-radius: 5px; top: 1350px; width: 294px" data-node-id="58:118" />
        <div style="position: absolute; border-width: 2px; border-color: #efe1cf; border-style: solid; height: 44px; left: 156px; border-radius: 5px; top: 1354px; width: 286px" data-node-id="58:119" />
        <p style="word-break: break-word; position: absolute; font-family: 'Monomakh', serif, sans-serif; font-weight: 400; height: 44px; line-height: 45px; left: 295px; font-style: normal; color: #efe1cf; font-size: 17px; text-align: center; top: 1354px; width: 278px; transform: translateX(-50%)" data-node-id="58:120">
          PROJECT SITE
        </p>
      </div>
      <div style="position: absolute; height: 44px; left: 115px; top: 1079px; width: 73px" data-node-id="58:121" data-name="Ikon Kalender, Lokasi, Jam, dan Pengguna 1">
        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
          <img alt="" style="position: absolute; height: 202.27%; left: -0.34%; max-width: none; top: 0; width: 182.88%" :src="imgIkonKalenderLokasiJamDanPengguna1" />
        </div>
      </div>
      <div style="position: absolute; height: 44px; left: 115px; top: 1244px; width: 73px" data-node-id="58:122" data-name="Ikon Kalender, Lokasi, Jam, dan Pengguna 2">
        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
          <img alt="" style="position: absolute; height: 202.27%; left: -82.47%; max-width: none; top: -1.09%; width: 182.88%" :src="imgIkonKalenderLokasiJamDanPengguna1" />
        </div>
      </div>
      <div style="position: absolute; height: 44px; left: 115px; top: 1456px; width: 73px" data-node-id="58:123" data-name="Ikon Kalender, Lokasi, Jam, dan Pengguna 4">
        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
          <img alt="" style="position: absolute; height: 202.27%; left: -83.11%; max-width: none; top: -102.71%; width: 182.88%" :src="imgIkonKalenderLokasiJamDanPengguna1" />
        </div>
      </div>
      <div style="position: absolute; display: contents; left: 10px; top: 12px" data-node-id="58:124">
        <div style="position: absolute; background-color: #aaaa8e; height: 70px; left: 10px; top: 12px; width: 173px" data-node-id="58:125" />
        <p style="word-break: break-word; position: absolute; font-family: '42dot Sans', serif, sans-serif; font-weight: 800; height: 29px; line-height: 15px; left: calc(50% - 232px); font-size: 10px; color: #ffffff; top: 25px; width: 108px" data-node-id="58:126">
          PROYEK STRATEGIS RUMAH TANGGA
        </p>
        <p style="word-break: break-word; position: absolute; font-family: '42dot Sans', serif, sans-serif; font-weight: 800; height: 16px; line-height: 15px; left: calc(50% - 232px); color: #ffeb86; font-size: 11px; top: 56px; width: 91px" data-node-id="58:127">{{ (coupleOrder.title || 'SARI & ZAHRON').toUpperCase() }}</p>
        <div style="position: absolute; left: 18px; width: 45px; height: 45px; top: 25px" data-node-id="58:128" data-name="Ikon Rumah dan Hati Berornamen 2">
          <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-position: bottom; pointer-events: none; width: 100%; height: 100%" :src="imgIkonRumahDanHatiBerornamen2" />
        </div>
      </div>
      <div style="position: absolute; display: contents; left: -11px; top: 1763px" data-node-id="58:129">
        <div style="position: absolute; background-color: #585951; height: 104px; left: -11px; top: 1763px; width: 614px" data-node-id="58:130" />
        <div style="position: absolute; border-width: 1px; border-color: #fde5c0; border-style: solid; height: 77px; left: 13px; top: 1777px; width: 572px" data-node-id="58:131" />
      </div>
      <div style="position: absolute; display: contents; left: -9px; top: 1763px" data-node-id="58:132">
        <div style="position: absolute; background-color: #585951; height: 104px; left: -9px; top: 1763px; width: 614px" data-node-id="58:133" />
        <div style="position: absolute; border-width: 1px; border-color: #fde5c0; border-style: solid; height: 77px; left: 9px; top: 1777px; width: 578px" data-node-id="58:134" />
      </div>
      <div style="position: absolute; display: contents; left: 242px; top: 1795px" data-node-id="58:135">
        <p style="word-break: break-word; position: absolute; font-family: 'Playfair Display', serif, sans-serif; font-weight: 400; height: 39px; line-height: 16px; left: 278px; color: #dbc58e; font-size: 48px; text-align: center; top: 1801px; width: 72px; transform: translateX(-50%)" data-node-id="58:136">
          {{ (coupleOrder.first?.namaPanggilan?.[0] || 'S').toUpperCase() }}
        </p>
        <p style="word-break: break-word; position: absolute; font-family: 'Playfair Display', serif, sans-serif; font-weight: 400; height: 39px; line-height: 16px; left: 318px; color: #dbc58e; font-size: 48px; text-align: center; top: 1801px; width: 72px; transform: translateX(-50%)" data-node-id="58:137">
          {{ (coupleOrder.second?.namaPanggilan?.[0] || 'Z').toUpperCase() }}
        </p>
        <div style="position: absolute; display: flex; height: 39px; align-items: center; justify-content: center; left: 298px; top: 1795px; width: 0" data-node-id="58:138">
          <div style="flex: none; transform: rotate(90deg)">
            <div style="height: 0; position: relative; width: 39px">
              <div style="position: absolute; top: -1px; right: 0; bottom: 0; left: 0">
                <img alt="" style="display: block; max-width: none; width: 100%; height: 100%" :src="imgLine5" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 42px; line-height: 0; left: calc(50% + 278px); font-style: normal; color: #feecc0; font-size: 10px; text-align: right; top: 1801px; width: 246px; transform: translateX(-100%)" data-node-id="58:139">
        <p style="line-height: 14px; margin-bottom: 0">PROYEK STRATEGIS RUMAH TANGGA</p>
        <p style="line-height: 14px">MEMBANGUN - MENGUATKAN - SELAMANYA </p>
      </div>
      <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 42px; line-height: 14px; left: calc(50% - 276px); font-style: normal; color: #feecc0; font-size: 9px; top: 1801px; width: 246px" data-node-id="58:140">
        DOKUMEN INI BERSIFAT PRIBADI DAN TIDAK UNTUK DISEBARLUASKAN TANPA IZIN PEMILIK PROYEK.
      </p>
      <div style="word-break: break-word; position: absolute; display: contents; left: calc(50% + 1.5px); font-style: normal; text-align: center; color: #ffffff; top: 2193px; transform: translateX(-50%)" data-node-id="58:141">
        <p style="position: absolute; font-family: 'Monomakh', serif, sans-serif; font-weight: 400; height: 42px; line-height: 34px; left: calc(50% + 1.5px); font-size: 34px; top: 2193px; width: 601px; transform: translateX(-50%)" data-node-id="58:142">
          SPESIFIKASI PROYEK
        </p>
        <p style="position: absolute; font-family: 'Monomakh', serif, sans-serif; font-weight: 400; height: 42px; line-height: 34px; left: calc(50% + 1.5px); font-size: 15px; top: 2225px; width: 601px; transform: translateX(-50%)" data-node-id="58:143">
          PEMBANGUNAN RUMAH TANGGA
        </p>
        <p style="position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 42px; line-height: 19px; left: calc(50% + 1px); font-size: 16px; top: 2280px; width: 378px; transform: translateX(-50%)" data-node-id="58:144">
          Dokumen ini memuat spesifikasi utama proyek sebagai dasar pelaksanaan dan komitmen jangka panjang
        </p>
      </div>
      <!-- 58:235 Bouquet on left of bride -->
      <div style="position: absolute; display: flex; align-items: center; justify-content: center; left: -139px; width: 255px; height: 255px; top: 2508px; pointer-events: none;" data-node-id="58:235">
        <div style="flex: none; transform: rotate(180deg) scaleY(-1)">
          <div style="position: relative; width: 255px; height: 255px" data-name="zeniaraustri_99855_botanical_flowers_arrangement_illustration_i_968084ea-67a5-4232-a96b-e2e5e12c6d63-Photoroom 6">
            <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgFlowerBottomLeft" />
          </div>
        </div>
      </div>

      <!-- 58:147 Peony & Rose floral bouquet on Bride -->
      <div style="position: absolute; left: 216px; width: 235px; height: 235px; top: 2728px; pointer-events: none;" data-node-id="58:147" data-name="zeniaraustri_99855_Hand_drawn_fantasy_botanical_illustration_of_9ec45354-735c-4e34-a4f4-00fb145069c6-Photoroom 1">
        <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgBotanicalZeniaraustri9ec4Alt" />
      </div>

      <!-- 58:244 Letter / Envelope illustration on left -->
      <div style="position: absolute; display: flex; height: 163px; align-items: center; justify-content: center; left: -21px; top: 2741px; width: 220px; pointer-events: none;" data-node-id="58:244">
        <div style="flex: none; transform: rotate(180deg) scaleY(-1)">
          <div style="height: 163px; position: relative; width: 220px" data-name="IMG_1743-2 2">
            <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-position: bottom; pointer-events: none; width: 100%; height: 100%" :src="imgImg174322" />
          </div>
        </div>
      </div>

      <!-- 58:246 Blueprint scrolls illustration on left -->
      <div style="position: absolute; display: flex; height: 126px; align-items: center; justify-content: center; left: -75px; top: 2815px; width: 274px; pointer-events: none;" data-node-id="58:246">
        <div style="flex: none; transform: rotate(180deg) scaleY(-1)">
          <div style="height: 126px; position: relative; width: 274px" data-name="IMG_1744-1 1">
            <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
              <img alt="" style="position: absolute; height: 305.74%; left: -40.23%; max-width: none; top: 0; width: 140.23%" :src="imgImg174411" />
            </div>
          </div>
        </div>
      </div>

      <!-- 58:149 Sari Uswatun Chasanah, S.T. (Calligraphy Name) -->
      <div style="position: absolute; display: flex; align-items: center; justify-content: center; left: 21px; top: 2963px; width: 427px; min-height: 50px;" data-node-id="58:149" :title="mempelaiWanita.namaLengkap">
        <template v-if="mempelaiWanita.namaLengkap === 'Sari Uswatun Chasanah, S.T.'">
          <img alt="Sari Uswatun Chasanah, S.T." style="max-height: 100%; max-width: 100%; object-fit: contain; pointer-events: none;" :src="imgBrideNameCalligraphy" />
        </template>
        <template v-else>
          <p style="margin: 0; font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 700; color: #585951; text-align: center;">
            {{ mempelaiWanita.namaLengkap }}
          </p>
        </template>
      </div>

      <!-- 58:145 Putri Pertama dari Bapak Seneng Latif dan Ibu Khoirul Insani -->
      <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: auto; line-height: 29px; left: 47px; font-style: normal; color: #585951; font-size: 22px; top: 3020px; width: 409px; margin: 0;" data-node-id="58:145">
        {{ mempelaiWanita.urutanAnak }} Bapak {{ mempelaiWanita.ayah }}<br />dan Ibu {{ mempelaiWanita.ibu }}
      </p>

      <!-- 58:234 Bouquet behind groom -->
      <div style="position: absolute; left: 482px; width: 255px; height: 255px; top: 3342px; pointer-events: none;" data-node-id="58:234" data-name="zeniaraustri_99855_botanical_flowers_arrangement_illustration_i_968084ea-67a5-4232-a96b-e2e5e12c6d63-Photoroom 5">
        <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgFlowerBottomLeft" />
      </div>

      <!-- 58:148 Peony & Rose floral bouquet on Groom -->
      <div style="position: absolute; display: flex; align-items: center; justify-content: center; left: 157px; width: 235px; height: 235px; top: 3538px; pointer-events: none;" data-node-id="58:148">
        <div style="flex: none; transform: rotate(180deg) scaleY(-1)">
          <div style="position: relative; width: 235px; height: 235px" data-name="zeniaraustri_99855_Hand_drawn_fantasy_botanical_illustration_of_9ec45354-735c-4e34-a4f4-00fb145069c6-Photoroom 2">
            <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgBotanicalZeniaraustri9ec4Alt" />
          </div>
        </div>
      </div>

      <!-- 58:243 Watercolor asset on Groom -->
      <div style="position: absolute; left: 482px; width: 160px; height: 160px; top: 3562px; pointer-events: none;" data-node-id="58:243" data-name="zeniaraustri_99855_Premium_watercolor_illustration_asset_sheet__888a8f13-84cb-433f-93c6-0d110893f6d5-1 2">
        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
          <img alt="" style="position: absolute; left: -187.41%; max-width: none; width: 291.12%; height: 291.12%; top: -114.38%" :src="imgZeniaraustri99855PremiumWatercolorIllustrationAssetSheet888A8F1384Cb433F93C60D110893F6D511" />
        </div>
      </div>

      <!-- 58:150 Ar. Zahron Syauqi, S.T. (Calligraphy Name) -->
      <div style="position: absolute; display: flex; align-items: center; justify-content: center; left: 120px; top: 3793px; width: 427px; min-height: 55px;" data-node-id="58:150" title="Ar. Zahron Syauqi, S.T.">
        <template v-if="mempelaiPria.namaLengkap === 'Ar. Zahron Syauqi, S.T.'">
          <img alt="Ar. Zahron Syauqi, S.T." style="max-height: 100%; max-width: 100%; object-fit: contain; pointer-events: none;" :src="imgGroomNameCalligraphy" />
        </template>
        <template v-else>
          <p style="margin: 0; font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 700; color: #585951; text-align: center;">
            {{ mempelaiPria.namaLengkap }}
          </p>
        </template>
      </div>

      <!-- 58:146 Putra Tunggal dari Bapak Muhammad Isa & Ibu Asmawati -->
      <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: auto; line-height: 29px; left: 147px; font-style: normal; color: #585951; font-size: 22px; top: 3855px; width: 409px; margin: 0;" data-node-id="58:146">
        {{ mempelaiPria.urutanAnak }} Bapak {{ mempelaiPria.ayah }}<br />&amp; Ibu {{ mempelaiPria.ibu }}
      </p>
      <div style="position: absolute; height: 432px; left: 270px; top: 2472px; width: 370px" data-node-id="58:151" data-name="Untitled1176_20260831071000 copy 1">
        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
          <img alt="Foto Mempelai Wanita" style="position: absolute; height: 256.88%; left: -147.06%; max-width: none; top: -18.13%; width: 300%; object-fit: cover;" :src="mempelaiWanita.foto || imgUntitled117620260831071000Copy1" />
        </div>
      </div>
      <div style="position: absolute; display: flex; height: 432px; align-items: center; justify-content: center; left: -42.47px; top: 3306px; width: 370px" data-node-id="58:152">
        <div style="flex: none; transform: rotate(180deg) scaleY(-1)">
          <div style="height: 432px; position: relative; width: 370px" data-name="Untitled1176_20260831071000 copy 2">
            <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
              <img alt="Foto Mempelai Pria" style="position: absolute; height: 256.88%; left: -46.37%; max-width: none; top: -4.91%; width: 300%; object-fit: cover;" :src="mempelaiPria.foto || imgUntitled117620260831071000Copy1" />
            </div>
          </div>
        </div>
      </div>
      <div style="position: absolute; display: contents; left: -2px; top: 2376px" data-node-id="58:153">
        <div style="position: absolute; display: contents; left: -2px; top: 2376px" data-node-id="58:154">
          <div style="position: absolute; background-color: #ffffff; height: 70px; left: -2px; top: 2376px; width: 599px" data-node-id="58:155" />
          <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 26px; line-height: 19px; left: 50%; font-style: normal; color: #585951; font-size: 24px; text-align: center; top: 2402px; width: 260px; transform: translateX(-50%)" data-node-id="58:156">
            PEMILIK PROYEK
          </p>
          <div style="position: absolute; background-color: #aaaa8e; height: 70px; left: -1px; top: 2376px; width: 173px" data-node-id="58:157" />
          <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 29px; line-height: 15px; left: calc(50% - 243px); font-style: normal; font-size: 10px; color: #ffffff; top: 2389px; width: 108px" data-node-id="58:158">
            PROYEK STRATEGIS RUMAH TANGGA
          </p>
          <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 16px; line-height: 15px; left: calc(50% - 243px); font-style: normal; color: #ffeb86; font-size: 11px; top: 2420px; width: 91px" data-node-id="58:159">{{ (coupleOrder.title || 'SARI & ZAHRON').toUpperCase() }}</p>
        </div>
        <div style="position: absolute; left: 7px; width: 45px; height: 45px; top: 2393px" data-node-id="58:160" data-name="Ikon Rumah dan Hati Berornamen 2">
          <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-position: bottom; pointer-events: none; width: 100%; height: 100%" :src="imgIkonRumahDanHatiBerornamen2" />
        </div>
      </div>
      <div style="position: absolute; display: contents; left: -83px; top: 3203px" data-node-id="58:161">
        <div style="position: absolute; display: contents; left: -83px; top: 3203px" data-node-id="58:162">
          <div style="position: absolute; background-color: #ffffff; height: 70px; left: -83px; top: 3203px; width: 599px" data-node-id="58:163" />
          <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 26px; line-height: 19px; left: 50%; font-style: normal; color: #585951; font-size: 24px; text-align: center; top: 3225px; width: 260px; transform: translateX(-50%)" data-node-id="58:164">
            MITRA STRATEGIS
          </p>
          <div style="position: absolute; background-color: #aaaa8e; height: 70px; left: 423px; top: 3203px; width: 173px" data-node-id="58:165" />
          <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 29px; line-height: 15px; left: calc(50% + 181px); font-style: normal; font-size: 10px; color: #ffffff; top: 3216px; width: 108px" data-node-id="58:166">
            PROYEK STRATEGIS RUMAH TANGGA
          </p>
          <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 16px; line-height: 15px; left: calc(50% + 181px); font-style: normal; color: #56574f; font-size: 11px; top: 3247px; width: 91px" data-node-id="58:167">{{ (coupleOrder.title || 'SARI & ZAHRON').toUpperCase() }}</p>
          <div style="position: absolute; left: 431px; width: 45px; height: 45px; top: 3216px" data-node-id="58:168" data-name="Ikon Rumah dan Hati Berornamen 2">
            <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-position: bottom; pointer-events: none; width: 100%; height: 100%" :src="imgIkonRumahDanHatiBerornamen2" />
          </div>
        </div>
      </div>
      <div style="position: absolute; display: flex; height: 77px; align-items: center; justify-content: center; left: 551px; top: 2724px; width: 60px" data-node-id="58:169">
        <div style="flex: none; transform: rotate(180deg) scaleY(-1)">
          <div style="height: 77px; position: relative; width: 60px" data-name="image 70">
            <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
              <img alt="" style="position: absolute; left: 0; max-width: none; width: 100%; height: 100%; top: 0" :src="imgImage70" />
            </div>
          </div>
        </div>
      </div>
      <div style="position: absolute; height: 77px; left: -13.47px; top: 3558px; width: 60px" data-node-id="58:170" data-name="image 73">
        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
          <img alt="" style="position: absolute; left: 0; max-width: none; width: 100%; height: 100%; top: 0" :src="imgImage70" />
        </div>
      </div>
      <div style="position: absolute; height: 90px; left: 301px; top: 2836px; width: 163px; pointer-events: none;" data-node-id="58:171" data-name="afbc019c-3c6c-47af-aa58-5fcbcc4a16e6-Photoroom 1">
        <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgOrchidFloralWhiteAfbc" />
      </div>
      <div style="position: absolute; display: flex; height: 90px; align-items: center; justify-content: center; left: 133.53px; top: 3670px; width: 163px; pointer-events: none;" data-node-id="58:172">
        <div style="flex: none; transform: rotate(180deg) scaleY(-1)">
          <div style="height: 90px; position: relative; width: 163px" data-name="afbc019c-3c6c-47af-aa58-5fcbcc4a16e6-Photoroom 2">
            <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgOrchidFloralWhiteAfbc" />
          </div>
        </div>
      </div>
      <div style="position: absolute; display: flex; align-items: center; justify-content: center; left: 479px; width: 225px; height: 225px; top: 2701px; pointer-events: none;" data-node-id="58:247">
        <div style="flex: none; transform: rotate(180deg) scaleY(-1)">
          <div style="position: relative; width: 225px; height: 225px" data-name="ea6dc699-929a-4dd0-a39a-c829a02c6175 1">
            <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgEa6Dc699929A4Dd0A39AC829A02C61752" />
          </div>
        </div>
      </div>
      <div style="position: absolute; left: 423px; width: 128px; height: 128px; top: 2811px; pointer-events: none;" data-node-id="58:173" data-name="b21aae40-fc77-4b3d-bede-01ee487a30ce-Photoroom 1">
        <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgCornerFloralsPairAlt" />
      </div>
      <div style="position: absolute; left: -103px; width: 225px; height: 225px; top: 3557px; pointer-events: none;" data-node-id="58:175" data-name="ea6dc699-929a-4dd0-a39a-c829a02c6175 2">
        <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgEa6Dc699929A4Dd0A39AC829A02C61752" />
      </div>
      <div style="position: absolute; display: flex; align-items: center; justify-content: center; left: 56.53px; width: 123px; height: 123px; top: 3657px; pointer-events: none;" data-node-id="58:174">
        <div style="flex: none; transform: rotate(180deg) scaleY(-1)">
          <div style="position: relative; width: 123px; height: 123px" data-name="b21aae40-fc77-4b3d-bede-01ee487a30ce-Photoroom 2">
            <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgCornerFloralsPairAlt" />
          </div>
        </div>
      </div>
      <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 400; line-height: 19px; left: 298px; font-style: normal; color: #67764d; font-size: 48px; text-align: center; top: 3133px; white-space: nowrap; transform: translateX(-50%)" data-node-id="58:176">&amp;</p>
      <p style="word-break: break-word; position: absolute; font-family: 'Monomakh', serif, sans-serif; font-weight: 400; height: 42px; line-height: 34px; left: calc(50% - 214px); font-style: normal; font-size: 16px; color: #000000; top: 3974px; width: 394px" data-node-id="58:177">
        TARGET OPERASIONAL
      </p>
      <p style="word-break: break-word; position: absolute; font-family: 'Monomakh', serif, sans-serif; font-weight: 400; height: 42px; line-height: 34px; left: calc(50% + 88px); font-style: normal; font-size: 16px; color: #000000; top: 3974px; width: 394px" data-node-id="58:178">
        MASA PEMELIHARAAN
      </p>
      <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 42px; line-height: 34px; left: calc(50% - 132px); font-style: normal; font-size: 16px; color: #000000; top: 3999px; width: 187px" data-node-id="58:179">
        Seumur Hidup
      </p>
      <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 42px; line-height: 34px; left: calc(50% + 88px); font-style: normal; font-size: 16px; color: #000000; top: 4000px; width: 187px" data-node-id="58:180">
        Tanpa Batas Waktu
      </p>
      <div style="position: absolute; height: 41px; left: 19px; top: 3974px; width: 57px" data-node-id="58:181" data-name="Ikon Kalender, Lokasi, Jam, dan Pengguna 5">
        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
          <img alt="" style="position: absolute; height: 202.44%; left: -0.44%; max-width: none; top: 0; width: 218.42%" :src="imgIkonKalenderLokasiJamDanPengguna1" />
        </div>
      </div>
      <div style="position: absolute; height: 0; left: 21.99px; top: 3962.5px; width: 552.023px" data-node-id="58:182">
        <div style="position: absolute; top: -1px; right: 0; bottom: 0; left: 0">
          <img alt="" style="display: block; max-width: none; width: 100%; height: 100%" :src="imgLine15" />
        </div>
      </div>
      <div style="position: absolute; height: 0; left: 21.99px; top: 4047px; width: 552.023px" data-node-id="58:183">
        <div style="position: absolute; top: -1px; right: 0; bottom: 0; left: 0">
          <img alt="" style="display: block; max-width: none; width: 100%; height: 100%" :src="imgLine15" />
        </div>
      </div>
      <div style="position: absolute; height: 49px; left: 332px; top: 3974px; width: 42px" data-node-id="58:184" data-name="Open (65) 1">
        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; opacity: 0.71; overflow: hidden; pointer-events: none">
          <img alt="" style="position: absolute; height: 191.84%; left: -66.67%; max-width: none; top: -42.86%; width: 223.81%" :src="imgOpen651" />
        </div>
      </div>
      <div style="position: absolute; display: flex; height: 85px; align-items: center; justify-content: center; left: 301px; top: 3962px; width: 0" data-node-id="58:185">
        <div style="flex: none; transform: rotate(90deg)">
          <div style="height: 0; position: relative; width: 85px">
            <div style="position: absolute; top: -1px; right: 0; bottom: 0; left: 0">
              <img alt="" style="display: block; max-width: none; width: 100%; height: 100%" :src="imgLine17" />
            </div>
          </div>
        </div>
      </div>
      <div style="position: absolute; display: flex; height: 85px; align-items: center; justify-content: center; left: 21px; top: 3962px; width: 0" data-node-id="58:186">
        <div style="flex: none; transform: rotate(90deg)">
          <div style="height: 0; position: relative; width: 85px">
            <div style="position: absolute; top: -1px; right: 0; bottom: 0; left: 0">
              <img alt="" style="display: block; max-width: none; width: 100%; height: 100%" :src="imgLine17" />
            </div>
          </div>
        </div>
      </div>
      <div style="position: absolute; display: flex; height: 85px; align-items: center; justify-content: center; left: 573px; top: 3962px; width: 0" data-node-id="58:187">
        <div style="flex: none; transform: rotate(90deg)">
          <div style="height: 0; position: relative; width: 85px">
            <div style="position: absolute; top: -1px; right: 0; bottom: 0; left: 0">
              <img alt="" style="display: block; max-width: none; width: 100%; height: 100%" :src="imgLine17" />
            </div>
          </div>
        </div>
      </div>
      <div style="position: absolute; background-color: #aab3aa; height: 312px; left: 54px; border-radius: 23px; top: 4084px; width: 492px" data-node-id="58:188" />
      <div style="position: absolute; background-color: #e0e0e0; height: 251px; left: 119px; top: 4145px; width: 427px" data-node-id="58:189" />
      <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 53px; line-height: 34px; left: 309px; font-style: normal; color: #fff4bf; font-size: 26px; text-align: center; top: 4098px; width: 352px; transform: translateX(-50%)" data-node-id="58:190">
        Indikator Kinerja Utama
      </p>
      <div style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 272px; line-height: 0; left: calc(50% - 117px); font-style: normal; color: #362d2d; font-size: 19px; top: 4178px; width: 479px; white-space: pre-wrap" data-node-id="58:191">
        <p style="line-height: 24px; margin-bottom: 0">✔️ Saling Menguatkan</p>
        <p style="line-height: 24px; margin-bottom: 0">​</p>
        <p style="line-height: 24px; margin-bottom: 0">✔️ Saling Mengingatkan</p>
        <p style="line-height: 24px; margin-bottom: 0">​</p>
        <p style="line-height: 24px; margin-bottom: 0">✔️ Saling Membahagiakan</p>
        <p style="line-height: 24px; margin-bottom: 0">​</p>
        <p style="line-height: 24px">✔️ Membangun Generasi Berkualitas</p>
      </div>
      <div style="position: absolute; display: contents; left: 50%; top: 4467px; transform: translateX(-50%); cursor: pointer" data-node-id="58:192" @click="openKetentuanTeknis" role="button" tabindex="0" title="Buka Ketentuan Teknis &amp; Site Plan">
        <div style="position: absolute; background-color: #585951; height: 52px; left: 151px; border-radius: 5px; top: 4467px; width: 294px" data-node-id="58:193" />
        <div style="position: absolute; border-width: 2px; border-color: #efe1cf; border-style: solid; height: 44px; left: 156px; border-radius: 5px; top: 4471px; width: 286px" data-node-id="58:194" />
        <p style="word-break: break-word; position: absolute; font-family: 'Monomakh', serif, sans-serif; font-weight: 400; height: 44px; line-height: 45px; left: 50%; font-style: normal; color: #efe1cf; font-size: 17px; text-align: center; top: 4471px; width: 278px; transform: translateX(-50%)" data-node-id="58:195">SITE PLAN & ACCESS ROUTE</p>
      </div>
      <p style="word-break: break-word; position: absolute; font-family: 'Monomakh', serif, sans-serif; font-weight: 400; height: 42px; line-height: 42px; left: calc(50% - 4.5px); font-style: normal; font-size: 34px; color: #000000; text-align: center; top: 4681px; width: 601px; transform: translateX(-50%)" data-node-id="58:196">
        DUKUNGAN PEMANGKU KEPENTINGAN
      </p>
      <p style="word-break: break-word; position: absolute; font-family: 'Monomakh', serif, sans-serif; font-weight: 400; height: 42px; line-height: 34px; left: 50%; font-style: normal; color: #4c4848; font-size: 34px; text-align: center; top: 6598px; width: 438px; transform: translateX(-50%)" data-node-id="58:197">
        PENUTUP
      </p>
      <p style="word-break: break-word; position: absolute; font-family: 'Playfair Display', serif, sans-serif; font-weight: 700; height: 42px; line-height: 34px; left: 50%; color: #5f8061; font-size: 41px; text-align: center; top: 6783px; width: 438px; transform: translateX(-50%)" data-node-id="58:198">{{ coupleOrder.title || 'Sari & Zahron' }}</p>
      <p style="word-break: break-word; position: absolute; font-family: 'Monomakh', serif, sans-serif; font-weight: 400; height: 42px; line-height: 34px; left: calc(50% + 0.5px); font-style: normal; color: #4c4848; font-size: 34px; text-align: center; top: 6726px; width: 601px; transform: translateX(-50%)" data-node-id="58:199">
        PENETAPAN MITRA HIDUP
      </p>
      <p style="word-break: break-word; position: absolute; font-family: 'Monomakh', serif, sans-serif; font-weight: 400; line-height: 34px; left: calc(50% + 0.5px); font-style: normal; font-size: 21px; color: #000000; text-align: center; top: 6687px; width: 601px; transform: translateX(-50%)" data-node-id="58:200">
        PROYEK STRATEGIS NASIONAL
      </p>
      <p style="word-break: break-word; position: absolute; font-family: 'Monomakh', serif, sans-serif; font-weight: 400; height: 42px; line-height: 34px; left: calc(50% + 0.5px); font-style: normal; color: #56574f; font-size: 48px; text-align: center; top: 4910px; width: 601px; transform: translateX(-50%)" data-node-id="58:201">
        RSVP
      </p>
      <p style="word-break: break-word; position: absolute; font-family: 'Monomakh', serif, sans-serif; font-weight: 400; height: 42px; line-height: 34px; left: calc(50% - 0.5px); font-style: normal; color: #56574f; font-size: 48px; text-align: center; top: 5521px; width: 601px; transform: translateX(-50%)" data-node-id="58:202">
        Wishes
      </p>
      <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 42px; line-height: 27px; left: calc(50% - 0.5px); font-style: normal; font-size: 19px; color: #000000; text-align: center; top: 4794px; width: 401px; transform: translateX(-50%)" data-node-id="58:203">
        “Kehadiran Bapak/Ibu merupakan bentuk dukungan terhadap keberhasilan implementasi Proyek Strategis Rumah Tangga ini.”
      </p>
      <div style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 42px; line-height: 0; left: calc(50% - 0.5px); font-style: normal; font-size: 19px; color: #000000; text-align: center; top: 4959px; width: 401px; transform: translateX(-50%)" data-node-id="58:204">
        <p style="line-height: 27px; margin-bottom: 0">RSVP Cut-off Date</p>
        <p style="line-height: 27px">7 November 2026</p>
      </div>
      <div style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 108px; line-height: 0; left: calc(50% - 0.5px); font-style: normal; font-size: 19px; color: #000000; text-align: center; top: 5036px; width: 401px; transform: translateX(-50%)" data-node-id="58:205">
        <p style="line-height: 27px; margin-bottom: 0">Mohon menyampaikan konfirmasi kehadiran</p>
        <p style="line-height: 27px; margin-bottom: 0">sebelum cut-off date untuk mendukung</p>
        <p style="line-height: 27px">proses finalisasi data, kebutuhan, dan persiapan proyek pernikahan kami.</p>
      </div>
      <div style="position: absolute; display: contents; left: 13px; top: 5176px" data-node-id="58:206">
        <div style="position: absolute; display: flex; flex-direction: column; align-items: flex-start; left: 13px; top: 5176px; width: 569px" data-node-id="58:207">
          <div style="display: flex; flex-direction: column; gap: 7px; align-items: flex-start; position: relative; flex-shrink: 0; width: 100%" data-node-id="58:208">
            <div style="background-color: #ffffff; border-color: #544d4d; border-width: 0.8px; border-style: solid; display: flex; flex-direction: column; height: 54px; align-items: flex-start; padding: 6px 14px; position: relative; border-radius: 11px; flex-shrink: 0; width: 100%" data-node-id="58:209">
              <input v-model="rsvpName" type="text" placeholder="Nama Anda" class="interactive-input" style="width: 100%; height: 100%; border: none; outline: none; background: transparent; font-family: 'Bellefair', serif, sans-serif; font-size: 20px; color: #1e3c72" />
            </div>
            <div style="background-color: #ffffff; border-color: #544d4d; border-width: 0.8px; border-style: solid; display: flex; flex-direction: column; height: 54px; align-items: flex-start; padding: 6px 14px; position: relative; border-radius: 11px; flex-shrink: 0; width: 100%" data-node-id="58:211">
              <select v-model="rsvpAttending" class="interactive-input" style="width: 100%; height: 100%; border: none; outline: none; background: transparent; font-family: 'Bellefair', serif, sans-serif; font-size: 18px; color: #1e3c72; cursor: pointer">
                <option value="Hadir">Ya, Saya akan Hadir</option>
                <option value="Tidak Hadir">Maaf, Tidak Dapat Hadir</option>
                <option value="Ragu-ragu">Masih Ragu-ragu</option>
              </select>
            </div>
            <div style="background-color: #ffffff; border-color: #544d4d; border-width: 0.8px; border-style: solid; display: flex; flex-direction: column; height: 54px; align-items: flex-start; padding: 6px 14px; position: relative; border-radius: 11px; flex-shrink: 0; width: 100%" data-node-id="58:213">
              <select v-model="rsvpCount" class="interactive-input" style="width: 100%; height: 100%; border: none; outline: none; background: transparent; font-family: 'Bellefair', serif, sans-serif; font-size: 18px; color: #1e3c72; cursor: pointer">
                <option value="1 Orang">1 Orang</option>
                <option value="2 Orang">2 Orang</option>
                <option value="3+ Orang">3+ Orang</option>
              </select>
            </div>
          </div>
        </div>
        <div style="position: absolute; background-color: #585951; filter: drop-shadow(0px 4px 2px rgba(0,0,0,0.25)); display: flex; flex-direction: column; align-items: center; justify-content: center; left: 58.43px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; border-radius: 99px; top: 5371px; width: 483.82px; cursor: pointer;" data-node-id="58:215" data-name="Button" role="button" tabindex="0" @click="handleSendRsvp">
          <p style="word-break: break-word; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; line-height: 30px; font-style: normal; position: relative; flex-shrink: 0; font-size: 20px; text-align: center; color: #ffffff; white-space: nowrap" data-node-id="58:216">
            {{ isSendingRsvp ? 'Mengirim...' : (rsvpSubmitted ? '✓ Konfirmasi Terkirim' : 'Send') }}
          </p>
        </div>
        <p v-if="rsvpFeedback" style="position: absolute; top: 5430px; left: 50%; transform: translateX(-50%); width: 480px; text-align: center; font-family: 'Times New Roman', serif; font-size: 15px; font-weight: 700; color: #2e5430;">
          {{ rsvpFeedback }}
        </p>
      </div>
      <div style="position: absolute; height: 405px; left: calc(50% - 189px); top: 7120px; width: 260px; transform: translateX(-50%); pointer-events: none;" data-node-id="58:217" data-name="Untitled1176_20260831071000 copy 3">
        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
          <img alt="" style="position: absolute; height: 180.25%; left: -36.54%; max-width: none; top: 0; width: 280.77%" :src="imgUntitled117620260831071000Copy1" />
        </div>
      </div>
      <div style="position: absolute; height: 405px; left: calc(50% + 172px); top: 7125px; width: 260px; transform: translateX(-50%); pointer-events: none;" data-node-id="58:218" data-name="Untitled1176_20260831071000 copy 4">
        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
          <img alt="" style="position: absolute; height: 180.25%; left: -129.71%; max-width: none; top: -3.93%; width: 280.77%" :src="imgUntitled117620260831071000Copy1" />
        </div>
      </div>

      <!-- Wish Name Input Container (top: 5598px) -->
      <div style="position: absolute; background-color: #ffffff; border-color: #6a4040; border-width: 0.8px; border-style: solid; height: 56px; left: 20px; border-radius: 8px; top: 5598px; width: 556px; padding: 8px 14px; box-sizing: border-box; z-index: 40; pointer-events: auto;" data-node-id="58:225">
        <input v-model="wishName" type="text" placeholder="Nama Anda" class="interactive-input" style="width: 100%; height: 100%; border: none; outline: none; background: transparent; font-family: 'Bellefair', serif, sans-serif; font-size: 20px; color: #333333; position: relative; z-index: 41; pointer-events: auto; cursor: text;" />
      </div>

      <!-- Wish Message Textarea Container (top: 5668px) -->
      <div style="position: absolute; background-color: #ffffff; border-color: #6a4040; border-width: 0.8px; border-style: solid; display: flex; flex-direction: column; height: 90px; left: 20px; border-radius: 11px; top: 5668px; width: 556px; padding: 10px 14px; box-sizing: border-box; z-index: 40; pointer-events: auto;" data-node-id="58:219">
        <textarea v-model="wishMessage" placeholder="Tuliskan ucapan dan doa restu Anda..." class="interactive-input" style="width: 100%; height: 100%; border: none; outline: none; background: transparent; resize: none; font-family: 'Bellefair', serif, sans-serif; font-size: 18px; color: #333333; position: relative; z-index: 41; pointer-events: auto; cursor: text;"></textarea>
      </div>

      <!-- Send Wish Button (top: 5780px) -->
      <div style="position: absolute; background-color: #585951; display: flex; flex-direction: column; align-items: center; justify-content: center; left: 50%; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; border-radius: 99px; top: 5780px; width: 484px; transform: translateX(-50%); cursor: pointer; z-index: 40; pointer-events: auto;" data-node-id="58:221" data-name="Button" @click="handleSendWish" role="button" tabindex="0">
        <p style="word-break: break-word; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; line-height: 30px; font-style: normal; position: relative; flex-shrink: 0; font-size: 20px; text-align: center; color: #ffffff; white-space: nowrap" data-node-id="58:222">
          {{ isSendingWish ? 'Mengirim...' : 'Send' }}
        </p>
      </div>

      <p v-if="wishFeedback" style="position: absolute; top: 5836px; left: 50%; transform: translateX(-50%); width: 480px; text-align: center; font-family: 'Times New Roman', serif; font-size: 15px; font-weight: 700; color: #2e5430; z-index: 40; pointer-events: auto;">
        {{ wishFeedback }}
      </p>

      <div v-if="visibleCount < allWishes.length" style="position: absolute; background-color: #585951; display: flex; flex-direction: column; align-items: center; justify-content: center; left: 50%; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; border-radius: 99px; top: 6433px; width: 484px; transform: translateX(-50%); cursor: pointer; z-index: 40; pointer-events: auto;" data-node-id="58:223" data-name="Button" @click="showMoreWishes" role="button" tabindex="0">
        <p style="word-break: break-word; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; line-height: 30px; font-style: normal; position: relative; flex-shrink: 0; font-size: 20px; text-align: center; color: #ffffff; white-space: nowrap" data-node-id="58:224">
          Show more
        </p>
      </div>

      <!-- Dynamic Wishes List with Infinite Scroll and Default Empty State -->
      <div
        class="wishes-scroll-container"
        @scroll="handleWishScroll"
        style="position: absolute; top: 5876px; left: 50%; transform: translateX(-50%); width: 500px; height: 535px; overflow-y: auto; display: flex; flex-direction: column; gap: 16px; padding-right: 6px; z-index: 40; pointer-events: auto;"
      >
        <!-- Empty State if no wishes yet -->
        <div
          v-if="allWishes.length === 0"
          style="background: rgba(255, 255, 255, 0.92); border: 1.5px dashed #747a75; border-radius: 12px; padding: 36px 20px; text-align: center; margin: 40px auto 0; width: 88%; box-sizing: border-box;"
        >
          <div style="font-size: 32px; margin-bottom: 10px;">🕊️</div>
          <p style="margin: 0 0 6px; font-family: 'Times New Roman', serif; font-weight: 700; font-size: 19px; color: #353a20;">
            Belum Ada Ucapan
          </p>
          <p style="margin: 0; font-family: 'Times New Roman', serif; font-size: 14px; line-height: 20px; color: #666;">
            Jadilah yang pertama memberikan ucapan dan doa restu untuk kedua mempelai.
          </p>
        </div>

        <div
          v-for="(w, idx) in visibleWishes"
          :key="w.id || idx"
          style="background: rgba(255, 255, 255, 0.9); border: 1px solid #c0b8ba; border-radius: 12px; padding: 14px 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);"
        >
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px;">
            <span style="font-family: 'Times New Roman', serif; font-weight: 700; font-size: 18px; color: #353a20;">
              {{ w.guest_name || w.nama || w.name || 'Tamu Undangan' }}
            </span>
            <span style="font-family: 'Times New Roman', serif; font-size: 12px; color: #777;">
              {{ w.created_at || w.date || 'Baru saja' }}
            </span>
          </div>
          <p style="margin: 0; font-family: 'Times New Roman', serif; font-size: 15px; line-height: 22px; color: #444; word-break: break-word;">
            {{ w.message || w.ucapan }}
          </p>
          <div v-if="w.status_kehadiran || w.attendance_status" style="margin-top: 6px;">
            <span style="display: inline-block; font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 4px; background: #e8ecdf; color: #495437;">
              {{ w.status_kehadiran || (w.attendance_status === 'hadir' ? 'Hadir' : w.attendance_status === 'tidak_hadir' ? 'Tidak Hadir' : 'Ragu-ragu') }}
            </span>
          </div>
        </div>
      </div>

      <div style="position: absolute; display: flex; align-items: center; justify-content: center; left: 478px; width: 276.049px; height: 276.049px; top: 7317px" data-node-id="58:236">
        <div style="flex: none; transform: rotate(-155.21deg) scaleY(-1)">
          <div style="position: relative; width: 208px; height: 208px" data-name="zeniaraustri_99855_Hand_drawn_fantasy_botanical_illustration_of_a2d4651a-89d4-4ccd-8e4c-c8687f229ab5-Photoroom 1">
            <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgZeniaraustri99855HandDrawnFantasyBotanicalIllustrationOfA2D4651A89D44Ccd8E4CC8687F229Ab5Photoroom3" />
          </div>
        </div>
      </div>
      <div style="position: absolute; display: flex; align-items: center; justify-content: center; left: -164px; width: 293.121px; height: 293.121px; top: 7303px" data-node-id="58:237">
        <div style="flex: none; transform: rotate(-49.81deg)">
          <div style="position: relative; width: 208px; height: 208px" data-name="zeniaraustri_99855_Hand_drawn_fantasy_botanical_illustration_of_a2d4651a-89d4-4ccd-8e4c-c8687f229ab5-Photoroom 2">
            <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgZeniaraustri99855HandDrawnFantasyBotanicalIllustrationOfA2D4651A89D44Ccd8E4CC8687F229Ab5Photoroom2" />
          </div>
        </div>
      </div>
      <div style="position: absolute; height: 106px; left: 50%; top: 6871px; width: 246px; transform: translateX(-50%)" data-node-id="58:238" data-name="Lencana Status Proyek Disetujui 1">
        <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgLencanaStatusProyekDisetujui1" />
      </div>
      <div style="position: absolute; display: flex; height: 199.427px; align-items: center; justify-content: center; left: 206px; top: 7418px; width: 314.589px" data-node-id="58:239">
        <div style="flex: none; transform: rotate(97.28deg)">
          <div style="height: 296.299px; position: relative; width: 163.202px" data-name="zeniaraustri_99855_Premium_watercolor_illustration_asset_sheet__888a8f13-84cb-433f-93c6-0d110893f6d5 1">
            <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
              <img alt="" style="position: absolute; height: 182.89%; left: -167.96%; max-width: none; top: 0; width: 332.04%" :src="imgZeniaraustri99855PremiumWatercolorIllustrationAssetSheet888A8F1384Cb433F93C60D110893F6D51" />
            </div>
          </div>
        </div>
      </div>
      <div style="position: absolute; height: 137px; left: 96px; top: 7437px; width: 179px" data-node-id="58:240" data-name="zeniaraustri_99855_Premium_watercolor_illustration_asset_sheet__888a8f13-84cb-433f-93c6-0d110893f6d5-3 1">
        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
          <img alt="" style="position: absolute; height: 327.69%; left: -9.41%; max-width: none; top: -143.08%; width: 250.59%" :src="imgZeniaraustri99855PremiumWatercolorIllustrationAssetSheet888A8F1384Cb433F93C60D110893F6D531" />
        </div>
      </div>
      <div style="position: absolute; left: 220px; width: 165px; height: 165px; top: 7030px" data-node-id="58:241" data-name="zeniaraustri_99855_Premium_watercolor_illustration_asset_sheet__888a8f13-84cb-433f-93c6-0d110893f6d5-2 (2) 1">
        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
          <img alt="" style="position: absolute; left: -274.86%; max-width: none; width: 549.51%; height: 549.51%; top: -249.11%" :src="imgZeniaraustri99855PremiumWatercolorIllustrationAssetSheet888A8F1384Cb433F93C60D110893F6D5221" />
        </div>
      </div>
      <div style="position: absolute; height: 95px; left: calc(50% + 1px); top: 4570px; width: 98px; transform: translateX(-50%)" data-node-id="58:245" data-name="IMG_1744-3 1">
        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
          <img alt="" style="position: absolute; height: 379.31%; left: -203.33%; max-width: none; top: -193.1%; width: 366.67%" :src="imgImg174431" />
        </div>
      </div>
      <div style="position: absolute; left: 469px; width: 266px; height: 266px; top: 7450px" data-node-id="58:248" data-name="IMG_1744-2 1">
        <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgImg174421" />
      </div>
      <div style="position: absolute; height: 91px; left: calc(50% - 0.5px); top: 230px; width: 95px; transform: translateX(-50%)" data-node-id="58:249" data-name="IMG_1744-3 2">
        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
          <img alt="" style="position: absolute; height: 379.31%; left: -203.33%; max-width: none; top: -193.1%; width: 366.67%" :src="imgImg174431" />
        </div>
      </div>
      <div style="position: absolute; border-width: 1px; border-color: #c2b98f; border-style: solid; height: 161px; left: 50%; border-radius: 8px; top: 6680px; width: 470px; transform: translateX(-50%)" data-node-id="58:250" />
      <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; line-height: 28px; left: 50%; font-style: normal; font-size: 24px; color: #231e20; text-align: center; top: 1918px; width: 452px; transform: translateX(-50%); margin: 0; z-index: 2" data-node-id="58:252">
        QS. Ar-Rum ayat 21
      </p>
      <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 600; font-style: normal; line-height: 23px; left: 50%; font-size: 14px; color: #2d2426; text-align: center; top: 1956px; width: 452px; transform: translateX(-50%); margin: 0; z-index: 2" data-node-id="58:251">
        “Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda kebesaran Allah bagi kaum yang berpikir.”
      </p>
      <div style="position: absolute; left: 529px; width: 104px; height: 104px; top: 7486px" data-node-id="58:253" data-name="b21aae40-fc77-4b3d-bede-01ee487a30ce-Photoroom 3">
        <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgB21Aae40Fc774B3DBede01Ee487A30CePhotoroom1" />
      </div>
      <div style="position: absolute; display: flex; height: 89px; align-items: center; justify-content: center; left: -47px; top: 7492px; width: 161px" data-node-id="58:254">
        <div style="flex: none; transform: rotate(180deg) scaleY(-1)">
          <div style="height: 89px; position: relative; width: 161px" data-name="afbc019c-3c6c-47af-aa58-5fcbcc4a16e6-Photoroom 3">
            <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgAfbc019C3C6C47AfAa585Fcbcc4A16E6Photoroom1" />
          </div>
        </div>
      </div>
      <div style="position: absolute; left: 396px; width: 463px; height: 463px; top: 2762px" data-node-id="58:255" data-name="zeniaraustri_99855_toile_de_jouy_illustration_of_isolated_image_7d854e0c-187d-42ca-b630-c41827265be6 1">
        <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgZeniaraustri99855ToileDeJouyIllustrationOfIsolatedImage7D854E0C187D42CaB630C41827265Be61" />
      </div>
      <div style="position: absolute; display: flex; align-items: center; justify-content: center; left: -260px; width: 463px; height: 463px; top: 3553px" data-node-id="58:256">
        <div style="flex: none; transform: rotate(180deg) scaleY(-1)">
          <div style="position: relative; width: 463px; height: 463px" data-name="zeniaraustri_99855_toile_de_jouy_illustration_of_isolated_image_7d854e0c-187d-42ca-b630-c41827265be6 2">
            <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgZeniaraustri99855ToileDeJouyIllustrationOfIsolatedImage7D854E0C187D42CaB630C41827265Be61" />
          </div>
        </div>
      </div>
      <div style="position: absolute; height: 531px; left: 493px; top: 303px; width: 390px" data-node-id="58:257" data-name="zeniaraustri_99855_None_e4d8ae5e-32b4-4aee-aa4c-09154bb75ebb-Photoroom 1">
        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
          <img alt="" style="position: absolute; height: 100%; left: -36.15%; max-width: none; top: 0; width: 136.15%" :src="imgZeniaraustri99855NoneE4D8Ae5E32B44AeeAa4C09154Bb75EbbPhotoroom1" />
        </div>
      </div>
      <div style="position: absolute; display: flex; height: 531px; align-items: center; justify-content: center; left: 500px; top: 181px; width: 425px" data-node-id="58:258">
        <div style="flex: none; transform: rotate(180deg) scaleY(-1)">
          <div style="height: 531px; position: relative; width: 425px" data-name="zeniaraustri_99855_None_e4d8ae5e-32b4-4aee-aa4c-09154bb75ebb-Photoroom 2">
            <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
              <img alt="" style="position: absolute; height: 100%; left: 0; max-width: none; top: 0; width: 124.94%" :src="imgZeniaraustri99855NoneE4D8Ae5E32B44AeeAa4C09154Bb75EbbPhotoroom1" />
            </div>
          </div>
        </div>
      </div>
      <div style="position: absolute; display: flex; height: 531px; align-items: center; justify-content: center; left: -287px; top: 185px; width: 388px" data-node-id="58:259">
        <div style="flex: none; transform: rotate(180deg) scaleY(-1)">
          <div style="height: 531px; position: relative; width: 388px" data-name="zeniaraustri_99855_None_e4d8ae5e-32b4-4aee-aa4c-09154bb75ebb-Photoroom 4">
            <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
              <img alt="" style="position: absolute; height: 100%; left: -36.86%; max-width: none; top: 0; width: 136.86%" :src="imgZeniaraustri99855NoneE4D8Ae5E32B44AeeAa4C09154Bb75EbbPhotoroom1" />
            </div>
          </div>
        </div>
      </div>
      <div style="position: absolute; height: 314px; left: -25px; top: 54px; width: 110px" data-node-id="58:260" data-name="45c2b650-df5f-4a35-8d0e-70aa666cab18 1">
        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
          <img alt="" style="position: absolute; height: 99.96%; left: -0.04%; max-width: none; top: 0.04%; width: 100.08%" :src="img45C2B650Df5F4A358D0E70Aa666Cab181" />
        </div>
      </div>
      <div style="position: absolute; display: flex; height: 314px; align-items: center; justify-content: center; left: 504px; top: 502px; width: 110px" data-node-id="58:261">
        <div style="flex: none; transform: rotate(180deg) scaleY(-1)">
          <div style="height: 314px; position: relative; width: 110px" data-name="45c2b650-df5f-4a35-8d0e-70aa666cab18 2">
            <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
              <img alt="" style="position: absolute; height: 99.96%; left: -0.04%; max-width: none; top: 0.04%; width: 100.08%" :src="img45C2B650Df5F4A358D0E70Aa666Cab181" />
            </div>
          </div>
        </div>
      </div>
      <div style="position: absolute; display: flex; height: 400px; align-items: center; justify-content: center; left: 500px; top: 28px; width: 140px" data-node-id="58:262">
        <div style="flex: none; transform: rotate(180deg)">
          <div style="height: 400px; position: relative; width: 140px" data-name="45c2b650-df5f-4a35-8d0e-70aa666cab18 3">
            <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
              <img alt="" style="position: absolute; height: 99.96%; left: -0.04%; max-width: none; top: 0.04%; width: 100.08%" :src="img45C2B650Df5F4A358D0E70Aa666Cab181" />
            </div>
          </div>
        </div>
      </div>
      <div style="position: absolute; height: 52px; left: 106px; top: 329px; width: 76px" data-node-id="58:263" data-name="a8b7f6d6-e900-4b1f-a302-1fbcc9927875 1">
        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
          <img alt="" style="position: absolute; height: 389.04%; left: -65.79%; max-width: none; top: -0.29%; width: 228.95%" :src="imgIkonLencanaMaroonDanEmas3" />
        </div>
      </div>
      <div style="position: absolute; height: 52px; left: 106px; top: 434px; width: 76px" data-node-id="58:264" data-name="a8b7f6d6-e900-4b1f-a302-1fbcc9927875 2">
        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
          <img alt="" style="position: absolute; height: 389.04%; left: -66.22%; max-width: none; top: -97.63%; width: 228.95%" :src="imgIkonLencanaMaroonDanEmas3" />
        </div>
      </div>
      <div style="position: absolute; left: 378px; width: 509px; height: 509px; top: 5601px; pointer-events: none;" data-node-id="58:265" data-name="zeniaraustri_99855_None_e4d8ae5e-32b4-4aee-aa4c-09154bb75ebb-Photoroom 5">
        <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgZeniaraustri99855NoneE4D8Ae5E32B44AeeAa4C09154Bb75EbbPhotoroom1" />
      </div>
      <div style="position: absolute; display: flex; align-items: center; justify-content: center; left: -288px; width: 509px; height: 509px; top: 5601px; pointer-events: none;" data-node-id="58:266">
        <div style="flex: none; transform: rotate(180deg) scaleY(-1); pointer-events: none;">
          <div style="position: relative; width: 509px; height: 509px; pointer-events: none;" data-name="zeniaraustri_99855_None_e4d8ae5e-32b4-4aee-aa4c-09154bb75ebb-Photoroom 6">
            <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgZeniaraustri99855NoneE4D8Ae5E32B44AeeAa4C09154Bb75EbbPhotoroom1" />
          </div>
        </div>
      </div>
      <div style="position: absolute; height: 302px; left: -40px; top: 6003px; width: 121px; pointer-events: none;" data-node-id="58:267" data-name="45c2b650-df5f-4a35-8d0e-70aa666cab18 4">
        <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="img45C2B650Df5F4A358D0E70Aa666Cab184" />
      </div>
      <div style="position: absolute; display: flex; height: 302px; align-items: center; justify-content: center; left: 515px; top: 6005px; width: 121px; pointer-events: none;" data-node-id="58:268">
        <div style="flex: none; transform: rotate(180deg) scaleY(-1); pointer-events: none;">
          <div style="height: 302px; position: relative; width: 121px; pointer-events: none;" data-name="45c2b650-df5f-4a35-8d0e-70aa666cab18 5">
            <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="img45C2B650Df5F4A358D0E70Aa666Cab184" />
          </div>
        </div>
      </div>
      <div style="position: absolute; display: flex; height: 633px; align-items: center; justify-content: center; left: -365px; top: 515px; width: 503px" data-node-id="58:269">
        <div style="flex: none; transform: rotate(180deg) scaleY(-1)">
          <div style="height: 633px; position: relative; width: 503px" data-name="zeniaraustri_99855_toile_de_jouy_illustration_of_isolated_image_7d854e0c-187d-42ca-b630-c41827265be6 4">
            <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
              <img alt="" style="position: absolute; height: 100%; left: -25.84%; max-width: none; top: 0; width: 125.84%" :src="imgZeniaraustri99855ToileDeJouyIllustrationOfIsolatedImage7D854E0C187D42CaB630C41827265Be61" />
            </div>
          </div>
        </div>
      </div>
      <div style="position: absolute; display: flex; height: 633px; align-items: center; justify-content: center; left: -379px; top: 743px; width: 502px" data-node-id="58:270">
        <div style="flex: none; transform: rotate(180deg)">
          <div style="height: 633px; position: relative; width: 502px" data-name="zeniaraustri_99855_toile_de_jouy_illustration_of_isolated_image_7d854e0c-187d-42ca-b630-c41827265be6 5">
            <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
              <img alt="" style="position: absolute; height: 100%; left: -26.1%; max-width: none; top: 0; width: 126.1%" :src="imgZeniaraustri99855ToileDeJouyIllustrationOfIsolatedImage7D854E0C187D42CaB630C41827265Be61" />
            </div>
          </div>
        </div>
      </div>
      <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 18px; line-height: 14px; left: calc(50% - 107px); font-style: normal; font-size: 16px; color: #000000; top: 1146px; width: 164px" data-node-id="58:273">
        WAKTU
      </p>
      <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 700; height: 18px; line-height: 14px; left: calc(50% - 107px); font-style: normal; font-size: 16px; color: #000000; top: 1168px; width: 220px" data-node-id="58:274">
        {{ (acaraList[0]?.time_start && acaraList[0]?.time_end) ? `${acaraList[0].time_start} s.d ${acaraList[0].time_end} ${acaraList[0].time_zone || 'WIB'}` : '09.00 s.d 10.00 WIB' }}
      </p>
      <div style="position: absolute; height: 44px; left: 118px; top: 1142px; width: 69px" data-node-id="58:275" data-name="Ikon Kalender, Lokasi, Jam, dan Pengguna 3">
        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; pointer-events: none">
          <img alt="" style="position: absolute; height: 202.27%; left: -2.83%; max-width: none; top: -100.79%; width: 193.48%" :src="imgIkonKalenderLokasiJamDanPengguna1" />
        </div>
      </div>
      <div style="position: absolute; display: flex; align-items: center; justify-content: center; left: -132px; width: 190px; height: 190px; top: 4961px" data-node-id="58:276">
        <div style="flex: none; transform: rotate(180deg) scaleY(-1)">
          <div style="position: relative; width: 190px; height: 190px" data-name="2c53f6c5-dec9-4e0d-af45-efd6d826d958 1">
            <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgB21Aae40Fc774B3DBede01Ee487A30CePhotoroom1" />
          </div>
        </div>
      </div>
      <div style="position: absolute; left: 542px; width: 190px; height: 190px; top: 5056px" data-node-id="58:277" data-name="2c53f6c5-dec9-4e0d-af45-efd6d826d958 2">
        <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgB21Aae40Fc774B3DBede01Ee487A30CePhotoroom1" />
      </div>
      <div style="position: absolute; display: flex; align-items: center; justify-content: center; left: 508.19px; width: 140.61px; height: 140.61px; top: 7310.19px" data-node-id="58:278">
        <div style="flex: none; transform: rotate(-20.81deg)">
          <div style="position: relative; width: 109px; height: 109px" data-name="Open (83) 1">
            <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgOpen831" />
          </div>
        </div>
      </div>
      <div style="position: absolute; left: 483px; width: 238px; height: 238px; top: 7310px" data-node-id="58:279" data-name="d00a7b0b-caa6-4bf7-9bf5-82abb24def61 2">
        <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgZeniaraustri99855BotanicalFlowersArrangementIllustrationI968084Ea67A54232A96BE2E5E12C6D63Photoroom5" />
      </div>
      <div style="position: absolute; display: flex; align-items: center; justify-content: center; left: -123px; width: 238px; height: 238px; top: 7303px" data-node-id="58:280">
        <div style="flex: none; transform: rotate(180deg) scaleY(-1)">
          <div style="position: relative; width: 238px; height: 238px" data-name="d00a7b0b-caa6-4bf7-9bf5-82abb24def61 3">
            <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgZeniaraustri99855BotanicalFlowersArrangementIllustrationI968084Ea67A54232A96BE2E5E12C6D63Photoroom5" />
          </div>
        </div>
      </div>
      <div style="position: absolute; height: 354px; left: -123px; top: 7310px; width: 442px" data-node-id="58:281" data-name="276b7883-2f7e-49eb-90f3-c79134986f50 2">
        <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="img276B78832F7E49Eb90F3C79134986F502" />
      </div>
      <div style="position: absolute; display: flex; height: 364.801px; align-items: center; justify-content: center; left: 402px; top: 7301px; width: 450.603px" data-node-id="58:282">
        <div style="flex: none; transform: rotate(-178.59deg) scaleY(-1)">
          <div style="height: 354px; position: relative; width: 442px" data-name="276b7883-2f7e-49eb-90f3-c79134986f50 3">
            <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="img276B78832F7E49Eb90F3C79134986F502" />
          </div>
        </div>
      </div>
      <div style="position: absolute; left: -7px; top: 7568px; width: 609px; height: 71px; z-index: 10;" data-node-id="58:283">
        <div style="position: absolute; background-color: #ffffff; height: 71px; left: 0; top: 0; width: 609px;" data-node-id="58:284" />
        <p style="word-break: break-word; position: absolute; font-family: 'Times New Roman', serif, sans-serif; font-weight: 400; height: 71px; line-height: 71px; left: 50%; font-style: normal; color: #aa7a3a; font-size: 20px; text-align: center; top: 0; width: 490.836px; transform: translateX(-50%); margin: 0" data-node-id="58:285">
          Created by 25ribuaja x Qinvi
        </p>
      </div>
      <div style="position: absolute; display: flex; align-items: center; justify-content: center; left: 486px; width: 138px; height: 138px; top: 7418px" data-node-id="58:286">
        <div style="flex: none; transform: rotate(180deg) scaleY(-1)">
          <div style="position: relative; width: 138px; height: 138px" data-name="Open (84) 2">
            <img alt="" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; max-width: none; object-fit: cover; pointer-events: none; width: 100%; height: 100%" :src="imgOpen841" />
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>

  <!-- Ketentuan Teknis Modal (Figma node 58:343) -->
  <KetentuanTeknisModal :is-open="isKetentuanOpen" @close="closeKetentuanTeknis" />

  <!-- Detail Konstruksi Modal (Figma node 58:394) -->
  <DetailKonstruksiModal :is-open="isDetailKonstruksiOpen" @close="closeDetailKonstruksi" />

  <!-- RSVP Success Popup -->
  <Teleport to="body">
    <Transition name="popup-fade">
      <div v-if="showRsvpPopup" class="action-popup-backdrop" @click.self="showRsvpPopup = false" role="dialog" aria-modal="true">
        <div class="action-popup-box">
          <div class="action-popup-icon-wrapper">
            <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#3e5f48" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </div>
          <h3 class="action-popup-title">Konfirmasi Terkirim!</h3>
          <p class="action-popup-desc">
            Terima kasih atas konfirmasi kehadiran Anda. Data Anda telah berhasil kami catat.
          </p>
          <button type="button" class="action-popup-btn" @click="showRsvpPopup = false">
            Tutup
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>

  <!-- Wishes Success Popup -->
  <Teleport to="body">
    <Transition name="popup-fade">
      <div v-if="showWishPopup" class="action-popup-backdrop" @click.self="showWishPopup = false" role="dialog" aria-modal="true">
        <div class="action-popup-box">
          <div class="action-popup-icon-wrapper">
            <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#3e5f48" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </div>
          <h3 class="action-popup-title">Ucapan Terkirim!</h3>
          <p class="action-popup-desc">
            Terima kasih atas doa restu dan ucapan hangat yang Anda berikan kepada kedua mempelai.
          </p>
          <button type="button" class="action-popup-btn" @click="showWishPopup = false">
            Tutup
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.isi-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: transparent;
  overflow-x: hidden;
}

.isi-scaler {
  flex-shrink: 0;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.12);
}

.isi-canvas {
  position: absolute;
  top: 0;
  left: 0;
}

.isi-canvas p,
.isi-canvas h1,
.isi-canvas h2,
.isi-canvas h3,
.isi-canvas h4 {
  margin: 0;
  padding: 0;
}

/* Ensure interactive inputs and form containers are always clickable and elevated above backgrounds */
.interactive-input {
  pointer-events: auto !important;
  position: relative !important;
  z-index: 50 !important;
  cursor: text !important;
}

[data-node-id="58:219"],
[data-node-id="58:225"],
[data-node-id="58:221"] {
  z-index: 40 !important;
  pointer-events: auto !important;
}

.wishes-scroll-container {
  z-index: 40 !important;
  pointer-events: auto !important;
}

/* Button hover micro-interactions */
[data-node-id="58:117"],
[data-node-id="58:112"],
[data-node-id="58:192"],
[data-node-id="58:215"],
[data-node-id="58:221"],
[data-node-id="58:223"] {
  cursor: pointer;
  transition: transform 0.2s ease, filter 0.2s ease;
}

[data-node-id="58:117"]:hover,
[data-node-id="58:112"]:hover,
[data-node-id="58:192"]:hover,
[data-node-id="58:215"]:hover,
[data-node-id="58:221"]:hover,
[data-node-id="58:223"]:hover {
  transform: scale(1.02);
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.2));
}

[data-node-id="58:117"]:active,
[data-node-id="58:112"]:active,
[data-node-id="58:192"]:active,
[data-node-id="58:215"]:active,
[data-node-id="58:221"]:active,
[data-node-id="58:223"]:active {
  transform: scale(0.98);
}

/* ---------------------------------------------------------------------------
   Qinvi Theme Easing & Animations (Demo Envelop Replica)
   - Easing: cubic-bezier(.16, 1, .3, 1) for transforms, ease-out for opacity
   - Durations: 1.4s opacity, 1.8s - 2.0s transform
   - Stagger: bloom scale/rotations, seal spring pop, smooth text rise
--------------------------------------------------------------------------- */
.isi-canvas [data-reveal] {
  opacity: 0;
  translate: 0 22px;
  transition: 
    opacity 0.85s ease-out var(--rv-delay, 0ms),
    translate 1.1s cubic-bezier(0.16, 1, 0.3, 1) var(--rv-delay, 0ms),
    scale 1.1s cubic-bezier(0.16, 1, 0.3, 1) var(--rv-delay, 0ms);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  will-change: opacity, transform;
}

/* Text Rise (Smooth, Gentle upward drift while swiping up) */
.isi-canvas [data-reveal="text"] {
  opacity: 0;
  translate: 0 18px;
  transition: 
    opacity 0.8s ease-out var(--rv-delay, 0ms),
    translate 1.0s cubic-bezier(0.16, 1, 0.3, 1) var(--rv-delay, 0ms);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  will-change: opacity, transform;
}

/* Floral / Botanical Bloom (Qinvi lyr--bloom: scale & slight lift) */
.isi-canvas [data-reveal="bloom"] {
  opacity: 0;
  scale: 0.9;
  translate: 0 16px;
  transition: 
    opacity 0.95s ease-out var(--rv-delay, 0ms),
    translate 1.2s cubic-bezier(0.16, 1, 0.3, 1) var(--rv-delay, 0ms),
    scale 1.2s cubic-bezier(0.16, 1, 0.3, 1) var(--rv-delay, 0ms);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  will-change: opacity, transform;
}

/* Wax Seal / Medallion (Qinvi lyr--seal: spring/pop into focus) */
.isi-canvas [data-reveal="seal"] {
  opacity: 0;
  scale: 0.8;
  translate: 0 10px;
  transition: 
    opacity 0.85s ease-out var(--rv-delay, 0ms),
    translate 1.05s cubic-bezier(0.34, 1.35, 0.64, 1) var(--rv-delay, 0ms),
    scale 1.05s cubic-bezier(0.34, 1.35, 0.64, 1) var(--rv-delay, 0ms);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  will-change: opacity, transform;
}

/* Roadmap Botanical Aura (Background Framing) */
.isi-canvas [data-reveal="roadmap-flower-bg"] {
  opacity: 0;
  transition: opacity 1.5s ease-out;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  will-change: opacity;
}

/* Roadmap Flank Flowers: Left side (Mekar anggun dari kiri) */
.isi-canvas [data-reveal^="fl-left"] {
  opacity: 0;
  scale: 0.88;
  translate: -18px 4px;
  transform-origin: left center;
  transition: 
    opacity 1.1s ease-out,
    translate 1.35s cubic-bezier(0.16, 1, 0.3, 1),
    scale 1.35s cubic-bezier(0.16, 1, 0.3, 1);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  will-change: opacity, transform;
}

/* Roadmap Flank Flowers: Right side (Mekar anggun dari kanan) */
.isi-canvas [data-reveal^="fl-right"] {
  opacity: 0;
  scale: 0.88;
  translate: 18px 4px;
  transform-origin: right center;
  transition: 
    opacity 1.1s ease-out,
    translate 1.35s cubic-bezier(0.16, 1, 0.3, 1),
    scale 1.35s cubic-bezier(0.16, 1, 0.3, 1);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  will-change: opacity, transform;
}

/* Roadmap Proyek Staggered Sequence (Tampil 1-1 Mulus & Elegan) */
.isi-canvas [data-node-id="58:48"],
.isi-canvas [data-node-id="58:49"],
.isi-canvas [data-node-id="58:50"],
.isi-canvas [data-node-id="58:52"],
.isi-canvas [data-node-id="58:53"],
.isi-canvas [data-node-id="58:54"],
.isi-canvas [data-node-id="58:55"],
.isi-canvas [data-node-id="58:93"],
.isi-canvas [data-node-id="58:94"],
.isi-canvas [data-node-id="58:95"],
.isi-canvas [data-reveal="roadmap-header"] {
  opacity: 0;
  translate: 0 16px;
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), translate 0.9s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

/* Roadmap Frame - Strictly 0 opacity initially so no premature frame flashes */
.isi-canvas [data-node-id="58:47"],
.isi-canvas [data-node-id="58:96"],
.isi-canvas [data-node-id="58:57"],
.isi-canvas [data-node-id="58:60"],
.isi-canvas [data-reveal="roadmap-frame"] {
  opacity: 0;
  translate: 0 12px;
  transition: opacity 0.85s ease-out, translate 0.95s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

.isi-canvas [data-reveal="step-1"],
.isi-canvas [data-reveal="step-2"],
.isi-canvas [data-reveal="step-3"],
.isi-canvas [data-reveal="step-4"] {
  opacity: 0;
  translate: 0 16px;
  transition: 
    opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1),
    translate 0.85s cubic-bezier(0.16, 1, 0.3, 1),
    scale 0.85s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

.isi-canvas [data-reveal^="step-"] p[data-node-id="58:65"],
.isi-canvas [data-reveal^="step-"] p[data-node-id="58:71"],
.isi-canvas [data-reveal^="step-"] p[data-node-id="58:77"],
.isi-canvas [data-reveal^="step-"] p[data-node-id="58:83"] {
  scale: 0.85;
}

.isi-canvas [data-reveal^="step-"][data-name*="Lencana"],
.isi-canvas [data-reveal^="step-"][data-name*="Open (63)"] {
  scale: 0.75;
  transition: 
    opacity 0.8s ease-out,
    translate 0.9s cubic-bezier(0.34, 1.3, 0.64, 1),
    scale 0.9s cubic-bezier(0.34, 1.3, 0.64, 1);
}

/* Active Visible State */
.isi-canvas .rv-in,
.isi-canvas [data-reveal].rv-in {
  opacity: 1 !important;
  translate: 0 0 !important;
  scale: 1 !important;
}

@media (prefers-reduced-motion: reduce) {
  .isi-canvas [data-reveal] {
    opacity: 1 !important;
    translate: none !important;
    scale: none !important;
    transition: none !important;
  }
}

/* Action Popup (RSVP & Wishes) */
.action-popup-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9999999;
  background: rgba(15, 20, 16, 0.72);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
}

.action-popup-box {
  background: #ffffff;
  border-radius: 16px;
  max-width: 360px;
  width: 100%;
  padding: 28px 24px;
  text-align: center;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28), 0 0 0 1px rgba(197, 160, 89, 0.35);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: popupScale 0.28s cubic-bezier(0.16, 1, 0.3, 1);
}

.action-popup-icon-wrapper {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: #eef4ee;
  border: 1.5px solid #557d60;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
}

.action-popup-title {
  margin: 0 0 8px;
  font-family: 'Times New Roman', serif;
  font-weight: 700;
  font-size: 22px;
  color: #2b332b;
}

.action-popup-desc {
  margin: 0 0 20px;
  font-family: 'Times New Roman', serif;
  font-size: 15px;
  line-height: 1.5;
  color: #555555;
}

.action-popup-btn {
  background: #3e5f48;
  color: #ffffff;
  border: none;
  border-radius: 25px;
  padding: 10px 32px;
  font-family: 'Times New Roman', serif;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(62, 95, 72, 0.3);
  transition: all 0.2s ease;
}

.action-popup-btn:hover {
  background: #4a7256;
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(62, 95, 72, 0.4);
}

.popup-fade-enter-active,
.popup-fade-leave-active {
  transition: opacity 0.25s ease;
}

.popup-fade-enter-from,
.popup-fade-leave-to {
  opacity: 0;
}

@keyframes popupScale {
  from {
    transform: scale(0.92);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
