// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],
  runtimeConfig: {
    public: {
      configFromNuxt: 'test',
    },
  },

  components: [
    {
      path: '~/packages/blender-ui/components',
      pathPrefix: false,
    },
    {
      path: '~/src/components',
      pathPrefix: false,
    },
  ],
})
