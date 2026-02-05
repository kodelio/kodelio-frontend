export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  app: {
    head: {
      title: 'Kodelio - Laurent Toson : développeur full-stack JavaScript',
      htmlAttrs: { lang: 'fr' },
      meta: [
        { name: 'robots', content: 'index,follow' },
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#1a1e39' },
        {
          name: 'description',
          content:
            'Votre entreprise souhaite réaliser une application web ou mobile? Je vous accompagne dans la réalisation de vos projets, de la conception à la maintenance.',
        },
        {
          name: 'keywords',
          content:
            'mobile, react-native, nestjs, tailwind, mobile, tailwindcss, web, nuxtjs, back-end, vuejs, front-end, web, developpement, developpeur, full-stack, fullstack, node, nextjs, reactjs, antipolis, applications, nodejs, vue, react, logiciels, expo, sophia-antipolis, nuxt, site, sophia, javascript, next, netlify, ios, sites, node.js, vue.js, react.js, software, site, nuxt.js, nest, application, app, nice, blog, freelance, typescript, supabase, api',
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
        { rel: 'canonical', href: 'https://kodelio.com/' },
      ],
    },
  },

  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  modules: ['@nuxtjs/tailwindcss', '@sentry/nuxt/module', '@nuxt/eslint'],

  ssr: false,

  runtimeConfig: {
    public: {
      sentry: {
        dsn: process.env.SENTRY_DSN,
      },
    },
  },
})
