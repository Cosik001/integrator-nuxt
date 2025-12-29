export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/',
    buildAssetsDir: 'assets'
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  }
})
