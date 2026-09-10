const BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'
const DEFAULT_SLUG = import.meta.env.VITE_DEFAULT_SLUG || 'tema-psrt'

export const DESIGN_MODE =
  import.meta.env.VITE_DESIGN_MODE === '1' || import.meta.env.VITE_DESIGN_MODE === 'true'

export function isSystemGuestCode(val: string): boolean {
  if (!val) return false
  return /^[A-Za-z]{1,4}\d{2,6}$/i.test(val.trim())
}

export function formatDirectName(val: string): string {
  try {
    return decodeURIComponent(val.replace(/\+/g, ' ')).trim()
  } catch {
    return val.replace(/\+/g, ' ').trim()
  }
}

export function getGuestCode(): string {
  if (typeof window === 'undefined') return ''
  const searchParams = new URLSearchParams(window.location.search)
  const fromQuery =
    searchParams.get('to') ||
    searchParams.get('kode') ||
    searchParams.get('code') ||
    searchParams.get('guest') ||
    searchParams.get('c') ||
    searchParams.get('k') ||
    searchParams.get('tamu') ||
    searchParams.get('u') ||
    searchParams.get('nama') ||
    ''
  if (fromQuery) return fromQuery.trim()

  const segments = window.location.pathname.split('/').filter(Boolean)
  if (segments.length > 0) {
    const last = segments[segments.length - 1]
    if (isSystemGuestCode(last)) {
      return last.trim()
    }
  }
  return ''
}

export function resolveSlug(): string {
  if (typeof window === 'undefined') return DEFAULT_SLUG

  const searchParams = new URLSearchParams(window.location.search)
  const querySlug = searchParams.get('slug')
  if (querySlug) return querySlug

  const segments = window.location.pathname.split('/').filter(Boolean)
  if (segments.length === 0) return DEFAULT_SLUG

  // Filter out theme identifier prefixes
  const nonThemeSegments = segments.filter(
    (s) => !['psrt', 'undangan-psrt', 'temapsrt'].includes(s.toLowerCase())
  )

  if (nonThemeSegments.length === 0) return DEFAULT_SLUG

  // If last segment is a guest code (e.g. /TemaPsrt/tema-psrt/TE001 or /TemaPsrt/TE001)
  const last = nonThemeSegments[nonThemeSegments.length - 1]
  if (isSystemGuestCode(last)) {
    if (nonThemeSegments.length > 1) {
      return nonThemeSegments[nonThemeSegments.length - 2]
    }
    return DEFAULT_SLUG
  }

  return last
}

async function request(path: string, options: RequestInit = {}): Promise<any> {
  let res: Response
  try {
    res = await fetch(`${BASE_URL}${path}`, {
      headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
      ...options,
    })
  } catch (networkError: any) {
    throw new Error(`Network error: ${networkError.message}`)
  }

  let payload: any = null
  try {
    payload = await res.json()
  } catch {
    // Non-JSON response
  }

  if (!res.ok || (payload && payload.success === false)) {
    const message = (payload && payload.message) || `Request failed (${res.status})`
    throw new Error(message)
  }

  return payload
}

export async function getHome(slug: string, to = ''): Promise<any> {
  const query = to ? `?to=${encodeURIComponent(to)}` : ''
  const payload = await request(`/v1/service/menu/getHome/${encodeURIComponent(slug)}${query}`)
  return payload?.data ?? null
}

export async function submitRsvp(slug: string, body: any): Promise<any> {
  if (DESIGN_MODE) {
    throw new Error('Design mode: formulir offline.')
  }
  return request(`/v1/service/menu/hadir2/${encodeURIComponent(slug)}`, {
    method: 'POST',
    body: JSON.stringify(body),
  })
}

export async function submitUcapan(slug: string, body: any): Promise<any> {
  if (DESIGN_MODE) {
    throw new Error('Design mode: formulir offline.')
  }
  return request(`/v1/service/menu/ucapan/${encodeURIComponent(slug)}`, {
    method: 'POST',
    body: JSON.stringify(body),
  })
}
