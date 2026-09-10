import { ref, computed, onMounted } from 'vue'
import {
  resolveSlug,
  getGuestCode,
  isSystemGuestCode,
  formatDirectName,
  getHome,
  submitRsvp as apiSubmitRsvp,
  submitUcapan as apiSubmitUcapan,
} from '../lib/api'

interface WeddingState {
  loading: boolean
  error: string | null
  data: any | null
}

const state = ref<WeddingState>({
  loading: true,
  error: null,
  data: null,
})

const guestCode = ref(getGuestCode())
function setMetaTag(attrName: string, attrValue: string, content: string) {
  if (typeof document === 'undefined' || !content) return
  let el = document.querySelector(`meta[${attrName}="${attrValue}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attrName, attrValue)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function syncHeadMeta(weddingData: any, guestData: any) {
  if (typeof document === 'undefined' || !weddingData) return

  const seo = weddingData?.seo_settings || {}
  const defaultTitle = `The Wedding Of ${weddingData?.title || 'Zahron & Asri'} - Qinvi.id`
  const defaultDesc = 'We joyfully invite you to attend our wedding'

  // 1. Title Resolution (matching backend SSR)
  let resolvedTitle = weddingData?.title || defaultTitle
  if (guestData?.custom_og_title) {
    resolvedTitle = guestData.custom_og_title
  } else if (guestData?.guest_name) {
    const parentTitle = seo.title || weddingData?.title || defaultTitle
    resolvedTitle = `${parentTitle}`
  } else if (seo.og?.title) {
    resolvedTitle = seo.og.title
  } else if (seo.title) {
    resolvedTitle = seo.title
  }
  document.title = resolvedTitle

  // 2. Description Resolution (matching backend SSR)
  let resolvedDesc = `Undangan Pernikahan untuk menghadiri acara ${weddingData?.title || ''}`.trim()
  if (guestData?.custom_og_description) {
    resolvedDesc = guestData.custom_og_description
  } else if (seo.og?.description) {
    resolvedDesc = seo.og.description
  } else if (seo.description) {
    resolvedDesc = seo.description
  } else {
    resolvedDesc = defaultDesc
  }

  // 3. Image Resolution (matching backend SSR)
  let resolvedImg = weddingData?.image_cover || ''
  if (guestData?.custom_og_image) {
    resolvedImg = guestData.custom_og_image
  } else if (seo.og?.image) {
    resolvedImg = seo.og.image
  } else if (seo.twitter?.image) {
    resolvedImg = seo.twitter.image
  }

  // 4. Keywords Resolution
  let resolvedKeywords = `wedding, invitation, pernikahan, ${weddingData?.title || ''}, undangan digital`
  if (Array.isArray(seo.keywords) && seo.keywords.length > 0) {
    resolvedKeywords = seo.keywords.join(', ')
  } else if (typeof seo.keywords === 'string' && seo.keywords.trim()) {
    resolvedKeywords = seo.keywords
  }

  setMetaTag('name', 'description', resolvedDesc)
  setMetaTag('name', 'keywords', resolvedKeywords)
  setMetaTag('property', 'og:type', 'website')
  setMetaTag('property', 'og:title', resolvedTitle)
  setMetaTag('property', 'og:description', resolvedDesc)
  if (resolvedImg) setMetaTag('property', 'og:image', resolvedImg)
  setMetaTag('property', 'og:url', window.location.href)
  setMetaTag('name', 'twitter:card', 'summary_large_image')
  setMetaTag('name', 'twitter:title', resolvedTitle)
  setMetaTag('name', 'twitter:description', resolvedDesc)
  if (resolvedImg) setMetaTag('name', 'twitter:image', resolvedImg)
}

let fetchPromise: Promise<any> | null = null

async function fetchWeddingData(targetSlug?: string) {
  const primarySlug = targetSlug || resolveSlug()
  guestCode.value = getGuestCode()

  fetchPromise = (async () => {
    try {
      const data = await getHome(primarySlug, guestCode.value)
      if (data && data.wedding) {
        state.value.data = data
        state.value.loading = false
        syncHeadMeta(data.wedding, data.guest)
        return data
      }
      throw new Error('No wedding data')
    } catch (err: any) {
      // Fallback between 'tema-psrt' and 'zahron-asri' if primary fails
      const alternateSlug = primarySlug === 'tema-psrt' ? 'zahron-asri' : 'tema-psrt'
      try {
        const altData = await getHome(alternateSlug, guestCode.value)
        if (altData && altData.wedding) {
          state.value.data = altData
          state.value.loading = false
          syncHeadMeta(altData.wedding, altData.guest)
          return altData
        }
      } catch {
        // Fall through
      }
      console.warn('[useWedding] Backend request failed, using fallback data:', err)
      state.value.error = err.message
      state.value.loading = false
      return null
    }
  })()

  return fetchPromise
}

// Immediately trigger data fetch on module load if in browser
if (typeof window !== 'undefined') {
  fetchWeddingData()
}

// Listen for live preview messages from admin-dashboard
if (typeof window !== 'undefined') {
  window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'QINVI_PREVIEW_UPDATE') {
      const { wedding: previewWedding, theme: previewTheme, refetch } = event.data

      if (previewWedding) {
        let resolvedWedding = { ...previewWedding }
        if (typeof resolvedWedding.theme_override === 'string') {
          try {
            resolvedWedding.theme_override = JSON.parse(resolvedWedding.theme_override)
          } catch (e) {
            console.error('Failed to parse theme_override:', e)
          }
        }

        state.value.data = {
          ...(state.value.data || {}),
          wedding: {
            ...(state.value.data?.wedding || {}),
            ...resolvedWedding,
          },
        }
      }

      if (previewTheme) {
        state.value.data = {
          ...(state.value.data || {}),
          theme: previewTheme,
        }
      }

      if (state.value.data?.wedding) {
        syncHeadMeta(state.value.data.wedding, state.value.data.guest)
      }

      if (refetch) {
        fetchPromise = null
        fetchWeddingData()
      }
    }
  })
}

export function useWedding() {
  const slug = resolveSlug()

  onMounted(async () => {
    if (state.value.data) return
    if (!fetchPromise) {
      await fetchWeddingData(slug)
    } else {
      await fetchPromise
    }
  })

  const wedding = computed(() => state.value.data?.wedding || null)
  const orderGroomFirst = computed(() => wedding.value?.order_groom_first !== false)
  const content = computed(() => state.value.data?.content ?? state.value.data ?? null)

  const pengantinList = computed(() => {
    const list = content.value?.pengantin
    return Array.isArray(list) ? list : []
  })

  const rawGroom = computed(() => {
    return (
      pengantinList.value.find(
        (p: any) => p.type?.toLowerCase() === 'groom' || p.type?.toLowerCase() === 'pria'
      ) || null
    )
  })

  const rawBride = computed(() => {
    return (
      pengantinList.value.find(
        (p: any) => p.type?.toLowerCase() === 'bride' || p.type?.toLowerCase() === 'wanita'
      ) || null
    )
  })

  const mempelaiPria = computed(() => {
    const p = rawGroom.value || state.value.data?.pengantin?.pria
    return {
      namaLengkap: p?.name || p?.nama_lengkap || 'Ar. Zahron Syauqi, S.T.',
      namaPanggilan: p?.nickname || p?.nama_panggilan || 'Zahron',
      ayah: p?.father_name || p?.nama_ayah || 'Muhammad Isa',
      ibu: p?.mother_name || p?.nama_ibu || 'Asmawati',
      urutanAnak: p?.child_of || p?.child_order || p?.urutan_anak || 'Putra Tunggal dari',
      foto: p?.photo_url || p?.foto || null,
      instagram: p?.instagram || null,
    }
  })

  const mempelaiWanita = computed(() => {
    const w = rawBride.value || state.value.data?.pengantin?.wanita
    return {
      namaLengkap: w?.name || w?.nama_lengkap || 'Sari Uswatun Chasanah, S.T.',
      namaPanggilan: w?.nickname || w?.nama_panggilan || 'Sari',
      ayah: w?.father_name || w?.nama_ayah || 'Seneng Latif',
      ibu: w?.mother_name || w?.nama_ibu || 'Khoirul Insani',
      urutanAnak: w?.child_of || w?.child_order || w?.urutan_anak || 'Putri Pertama dari',
      foto: w?.photo_url || w?.foto || null,
      instagram: w?.instagram || null,
    }
  })

  const coupleOrder = computed(() => {
    if (orderGroomFirst.value) {
      return {
        first: mempelaiPria.value,
        second: mempelaiWanita.value,
        title: `${mempelaiPria.value.namaPanggilan} & ${mempelaiWanita.value.namaPanggilan}`,
      }
    }
    return {
      first: mempelaiWanita.value,
      second: mempelaiPria.value,
      title: `${mempelaiWanita.value.namaPanggilan} & ${mempelaiPria.value.namaPanggilan}`,
    }
  })

  const acaraList = computed(() => {
    const acara = content.value?.acara || state.value.data?.acara
    if (Array.isArray(acara) && acara.length > 0) {
      return acara.map((a: any) => ({
        ...a,
        title: a.title || 'ACARA',
        event_date: a.event_date || '2026-11-08',
        tanggal: a.event_date || a.tanggal || 'Minggu, 08 November 2026',
        time_start: a.time_start || (a.event_time ? a.event_time.split('-')[0]?.trim() : '08:00'),
        time_end: a.time_end || (a.event_time ? a.event_time.split('-')[1]?.trim() : '10:00'),
        time_zone: a.time_zone || 'WIB',
        location_name: a.location_name || 'Masjid Agung Gresik',
        address: a.address || '',
        map_url: a.maps_url || a.map_url || 'https://maps.app.goo.gl/sVkhXBxTf18JBiy6A',
      }))
    }
    // Default fallback acara
    return [
      {
        id: 1,
        title: 'AKAD NIKAH',
        event_date: '2026-11-08',
        tanggal: 'Minggu, 08 November 2026',
        time_start: '08:00',
        time_end: '10:00',
        time_zone: 'WIB',
        location_name: 'Masjid Agung Al-Barkah',
        address: 'Jl. Veteran No. 46, Marga Jaya, Bekasi Selatan',
        map_url: 'https://maps.app.goo.gl/sVkhXBxTf18JBiy6A',
      },
      {
        id: 2,
        title: 'RESEPSI PERNIKAHAN',
        event_date: '2026-11-08',
        tanggal: 'Minggu, 08 November 2026',
        time_start: '11:00',
        time_end: '14:00',
        time_zone: 'WIB',
        location_name: 'Grand Ballroom Hotel Santika',
        address: 'Jl. Ahmad Yani No. 1, Bekasi Selatan',
        map_url: 'https://maps.google.com',
      },
    ]
  })

  const countdownDate = computed(() => {
    if (wedding.value?.countdown_date) return wedding.value.countdown_date
    const firstAcara = acaraList.value[0]
    return firstAcara?.event_date || '2026-11-08T08:00:00'
  })

  const tamu = computed(() => {
    const g = state.value.data?.guest
    if (g?.guest_name || g?.name) {
      return {
        namaTamu: g.guest_name || g.name,
        guestCode: g.guest_code || guestCode.value || '',
        pax: g.pax || 1,
      }
    }

    const rawParam = (guestCode.value || '').trim()
    const fallbackName = rawParam ? formatDirectName(rawParam) : 'Tamu Undangan'

    return {
      namaTamu: fallbackName,
      guestCode: rawParam,
      pax: 1,
    }
  })

  const rekeningList = computed(() => {
    const rek = content.value?.rekening || state.value.data?.rekening
    if (Array.isArray(rek) && rek.length > 0) {
      return rek
    }
    return [
      {
        id: 1,
        bank_name: 'BCA',
        account_number: '1234567890',
        account_name: 'Ar. Zahron Syauqi',
        qr_code: null,
      },
      {
        id: 2,
        bank_name: 'Mandiri',
        account_number: '9876543210123',
        account_name: 'Sari Uswatun Chasanah',
        qr_code: null,
      },
    ]
  })

  const ucapanList = computed(() => {
    const list = content.value?.ucapan || state.value.data?.ucapan
    if (Array.isArray(list)) {
      return list
    }
    return []
  })

  async function submitGuestRsvp(body: { nama: string; kehadiran: string; jumlah: number; phone?: string }) {
    const targetSlug = state.value.data?.wedding?.slug || slug || resolveSlug()
    let status: 'hadir' | 'tidak_hadir' | 'masih_ragu' = 'hadir'
    const lower = (body.kehadiran || '').toLowerCase()
    if (lower.includes('tidak') || lower.includes('batal')) {
      status = 'tidak_hadir'
    } else if (lower.includes('ragu')) {
      status = 'masih_ragu'
    } else {
      status = 'hadir'
    }

    const payload = {
      guest_name: body.nama,
      attendance_status: status,
      guest_count: Number(body.jumlah) || 1,
      phone: body.phone || null,
    }
    return apiSubmitRsvp(targetSlug, payload)
  }

  async function submitGuestUcapan(body: { nama: string; ucapan: string; status_kehadiran?: string }) {
    const targetSlug = state.value.data?.wedding?.slug || slug || resolveSlug()
    const payload = {
      guest_name: body.nama,
      message: body.ucapan,
    }
    const result = await apiSubmitUcapan(targetSlug, payload)
    if (state.value.data) {
      if (!state.value.data.content) {
        state.value.data.content = {}
      }
      if (!Array.isArray(state.value.data.content.ucapan)) {
        state.value.data.content.ucapan = []
      }
      state.value.data.content.ucapan.unshift({
        id: result?.data?.id || String(Date.now()),
        guest_name: body.nama,
        nama: body.nama,
        message: body.ucapan,
        ucapan: body.ucapan,
        status_kehadiran: body.status_kehadiran || 'Hadir',
        created_at: 'Baru saja',
      })
    }
    return result
  }

  return {
    loading: computed(() => state.value.loading),
    error: computed(() => state.value.error),
    data: computed(() => state.value.data),
    wedding,
    mempelaiPria,
    mempelaiWanita,
    coupleOrder,
    acaraList,
    countdownDate,
    tamu,
    guestCode,
    rekeningList,
    ucapanList,
    submitGuestRsvp,
    submitGuestUcapan,
  }
}
