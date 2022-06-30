export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Kodelio',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { name: 'robots', content: 'index,follow' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#1a1e39' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Votre entreprise souhaite réaliser un nouveau site ou une application web ou tout simplement mettre à jour une solution existante? Je vous accompagne avec mon expertise dans la réalisation de vos projets, de la conception à la maintenance.',
      },
      { name: 'author', content: 'Kodelio' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/img/icon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/composition-api'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
