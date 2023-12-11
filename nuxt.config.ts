// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'MovieFinder',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'MovieFinder is a search engine for movies.',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },
  css: ['@/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss', '@element-plus/nuxt', '@pinia/nuxt',],
  runtimeConfig: {
    public: {
      API_BASE: process.env.NUXT_API_URL,
      API_BASE_TOKEN: process.env.NUXT_API_KEY
    }
  },
  elementPlus: {
    icon: 'ElIcon'
  },
})
