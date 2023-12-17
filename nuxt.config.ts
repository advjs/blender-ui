// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  runtimeConfig: {
    public: {
      configFromNuxt: 'test',
    },
  },

  components: [
    {
      path: '~/lib/components',
      pathPrefix: false,
    },
    {
      path: '~/src/components',
      pathPrefix: false,
    },
  ],
})
