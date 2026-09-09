<template>
  <article>
    <h1 class="text-4xl text-primary">Support</h1>
    <p class="mt-2 text-base text-black/60">
      Dernière mise à jour : {{ legalLastUpdated }}
    </p>

    <p class="mt-6 text-lg leading-relaxed">
      {{ company.legalName }} assure le support de ses applications web et
      mobiles ainsi que des solutions développées pour ses clients. Cette page
      indique comment nous joindre et sous quel délai une réponse vous sera
      apportée.
    </p>

    <LegalSection title="Nous contacter">
      <ul class="list-disc space-y-2 pl-6">
        <li v-if="contact.phone">
          <span class="pr-1 font-bold">Par téléphone :</span>
          <a
            :href="`tel:${phoneHref}`"
            class="text-main-blue underline hover:text-secondary"
            >{{ contact.phone }}</a
          >
        </li>
        <li>
          <span class="font-bold">Par courrier :</span> {{ formattedAddress }}
        </li>
        <li>
          <span class="pr-1 font-bold">Via le formulaire de contact :</span>
          <NuxtLink
            to="/#contact"
            class="text-main-blue underline hover:text-secondary"
            >page d'accueil, section Contact</NuxtLink
          >
        </li>
      </ul>
      <p>{{ businessHours.responseTime }}.</p>
    </LegalSection>

    <LegalSection title="Applications éditées par Kodelio">
      <ul class="list-disc space-y-2 pl-6">
        <li v-for="product in products" :key="product.id">
          <span class="font-bold">{{ product.name }}</span> —
          {{ product.status }}. Support assuré aux coordonnées ci-dessus.
        </li>
      </ul>
    </LegalSection>

    <LegalSection title="Signaler un problème">
      <p>
        Pour accélérer le traitement de votre demande, indiquez dans votre
        message :
      </p>
      <ul class="list-disc space-y-2 pl-6">
        <li>le nom de l'application ou l'adresse du site concerné ;</li>
        <li>l'appareil et la version du système d'exploitation utilisés ;</li>
        <li>les étapes permettant de reproduire le problème.</li>
      </ul>
    </LegalSection>

    <LegalSection title="Suppression de compte et de données">
      <p>
        Vous pouvez demander à tout moment la suppression de votre compte et des
        données associées via le
        <ContactFormLink />. La demande est traitée sous trente jours au plus.
        Les modalités complètes sont décrites dans la
        <NuxtLink
          to="/confidentialite"
          class="text-main-blue underline hover:text-secondary"
          >politique de confidentialité</NuxtLink
        >.
      </p>
    </LegalSection>

    <LegalSection title="Questions fréquentes">
      <dl class="space-y-5">
        <div v-for="entry in faqEntries" :key="entry.question">
          <dt class="text-lg font-bold text-primary">{{ entry.question }}</dt>
          <dd class="mt-1">{{ entry.answer }}</dd>
        </div>
      </dl>
    </LegalSection>
  </article>
</template>

<script setup lang="ts">
import {
  businessHours,
  company,
  contact,
  formattedAddress,
  phoneHref,
} from '~/constants/company'
import { faqEntries } from '~/constants/support'
import { legalLastUpdated } from '~/constants/legal'
import { products } from '~/constants/products'

definePageMeta({ layout: 'legal' })

const description =
  'Support Kodelio : comment nous joindre, délais de réponse, signalement de problème et suppression de compte pour nos applications web et mobiles.'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqEntries.map((entry) => ({
    '@type': 'Question',
    name: entry.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: entry.answer,
    },
  })),
}

useHead({
  link: [{ rel: 'canonical', href: `${contact.websiteUrl}/support` }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(faqSchema),
    },
  ],
})

useSeoMeta({
  title: 'Support - Kodelio',
  description,
  ogTitle: 'Support - Kodelio',
  ogDescription: description,
  ogType: 'website',
  ogUrl: `${contact.websiteUrl}/support`,
  ogLocale: 'fr_FR',
  robots: 'index,follow',
})
</script>
