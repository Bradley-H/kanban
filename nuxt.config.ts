// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxt/image'],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"}
      ]
    }
  },
  css: [
    '~/assets/global.css'
  ]
})