export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  app: {
    head: {
      title: 'Kodelio - Développement d’applications web et mobiles sur mesure',
      htmlAttrs: { lang: 'fr' },
      meta: [
        { name: 'robots', content: 'index,follow' },
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#1a1e39' },
        {
          name: 'description',
          content:
            'Kodelio conçoit et développe des applications web, des applications mobiles iOS et Android et des plateformes SaaS sur mesure, de la conception à la maintenance.',
        },
        { name: 'author', content: 'Laurent Toson' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/img/icon.webp' },
        {
          rel: 'preload',
          fetchpriority: 'high',
          as: 'image',
          type: 'image/webp',
          href: '/img/full-white.webp',
        },
      ],
    },
  },

  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  modules: ['@nuxtjs/tailwindcss', '@sentry/nuxt/module', '@nuxt/eslint'],

  // Le site est pré-rendu en HTML statique : le contenu et les informations
  // légales doivent rester lisibles sans exécution de JavaScript, notamment par
  // les moteurs de recherche et lors des vérifications d'identité d'entreprise.
  ssr: true,

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/support', '/mentions-legales', '/confidentialite'],
    },
  },

  runtimeConfig: {
    public: {
      sentry: {
        dsn: process.env.SENTRY_DSN,
      },
    },
  },
})
