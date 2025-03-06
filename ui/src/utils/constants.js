// Create a new file for constants including base URLs
export const BASE_URL = import.meta.env.VITE_API_URL || 'https://api.chancetv.com'
export const ASSETS_URL = import.meta.env.VITE_ASSETS_URL || 'https://assets.chancetv.com'
export const IMAGE_PATHS = {
  logo: './images/logo.png',
  hero: './images/hero-bg.jpg',
  about: './images/about-bg.jpg',
  events: './images/events-bg.jpg',
  academy: './images/academy-bg.jpg',
  auditions: './images/auditions-bg.jpg',
  streaming: './images/streaming-bg.jpg',
  auth: './images/auth-bg.jpg',
  account: './images/account-bg.jpg'
} 