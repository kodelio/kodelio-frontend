<template>
  <div>
    <HeaderMenu :sections="sections" />

    <HeroSection />

    <SectionSeparator id="services" color="white" />
    <ServicesSection />

    <SectionSeparator id="expertise" color="primary" />
    <ExpertiseSection />

    <SectionSeparator id="products" color="white" />
    <ProductsSection />

    <SectionSeparator id="process" color="primary" />
    <ProcessSection />

    <SectionSeparator id="about" color="white" />
    <AboutSection />

    <SectionSeparator id="contact" color="primary" />
    <ContactSection />

    <SectionSeparator color="white" />
    <div class="bg-white">
      <PageFooter class="pt-4" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Section } from '~/types/Section'
import { contact } from '~/constants/company'

const sections = ref<Section[]>([
  { id: 'services', menu: 'Services' },
  { id: 'expertise', menu: null },
  { id: 'products', menu: 'Produits' },
  { id: 'process', menu: null },
  { id: 'about', menu: 'À propos' },
  { id: 'contact', menu: 'Contact' },
])

const description =
  'Kodelio conçoit et développe des applications web, des applications mobiles iOS et Android et des plateformes SaaS sur mesure, de la conception à la maintenance.'

useOrganizationSchema()

useHead({
  link: [{ rel: 'canonical', href: `${contact.websiteUrl}/` }],
})

useSeoMeta({
  title: 'Kodelio - Développement d’applications web et mobiles sur mesure',
  description,
  ogTitle: 'Kodelio - Développement d’applications web et mobiles sur mesure',
  ogDescription: description,
  ogType: 'website',
  ogImage: `${contact.websiteUrl}/img/full-white.webp`,
  ogUrl: `${contact.websiteUrl}/`,
  ogLocale: 'fr_FR',
  ogSiteName: 'Kodelio',
  twitterCard: 'summary_large_image',
  twitterSite: contact.twitterHandle,
  twitterCreator: contact.twitterHandle,
})
</script>

<style>
.title {
  @apply text-4xl text-center;
}
</style>
