export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Kodelio - Laurent Toson : développement de projets web',
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
      { name: 'author', content: 'Laurent Toson' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/icon.png' },
      { rel: 'canonical', href: 'https://kodelio.com/' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/fontawesome.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/composition-api/module',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sentry',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  purgeCSS: {
    whitelistPatterns: [/svg.*/, /fa.*/],
  },

  devServerHandlers: [],

  sentry: {
    dsn: process.env.SENTRY_DSN, // Enter your project's DSN here
    // Additional Module Options go here
    // https://sentry.nuxtjs.org/sentry/options
    config: {
      // Add native Sentry config here
      // https://docs.sentry.io/platforms/javascript/guides/vue/configuration/options/
    },
  },
}
