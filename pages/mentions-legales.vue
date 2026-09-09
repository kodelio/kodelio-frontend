<template>
  <article>
    <h1 class="text-4xl text-primary">Mentions légales</h1>
    <p class="mt-2 text-base text-black/60">
      Dernière mise à jour : {{ legalLastUpdated }}
    </p>

    <LegalSection title="Éditeur du site">
      <p>
        Le site {{ contact.websiteUrl }} est édité par
        <span class="font-bold">{{ company.legalName }}</span
        >, {{ company.legalForm }} au capital de {{ company.shareCapital }},
        dont le siège social est situé {{ formattedAddress }}.
      </p>
      <p>
        Immatriculée au RCS de {{ company.rcsCity }} sous le numéro
        {{ company.siren }} — TVA intracommunautaire {{ company.vatNumber }}.
      </p>
      <p>
        Directeur de la publication :
        {{ company.legalRepresentative }},
        {{ company.legalRepresentativeRole }}.
      </p>
      <p>
        Pour toute demande, utilisez le
        <ContactFormLink />
        <template v-if="contact.phone">
          —
          <a
            :href="`tel:${phoneHref}`"
            class="text-main-blue underline hover:text-secondary"
            >{{ contact.phone }}</a
          >
        </template>
      </p>
    </LegalSection>

    <LegalSection title="Activité">
      <p>
        {{ company.legalName }} conçoit, développe et maintient des applications
        web, des applications mobiles iOS et Android et des plateformes SaaS
        pour le compte d'entreprises et de porteurs de projets, et édite ses
        propres applications.
      </p>
    </LegalSection>

    <LegalSection title="Hébergeur">
      <p>
        Le site est hébergé par {{ hosting.name }}, {{ hosting.address }} —
        <a
          :href="hosting.websiteUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="text-main-blue underline hover:text-secondary"
          >{{ hosting.websiteUrl }}</a
        >.
      </p>
    </LegalSection>

    <LegalSection title="Propriété intellectuelle">
      <p>
        L'ensemble des éléments composant ce site — structure, textes, logo,
        images et code source — est la propriété exclusive de
        {{ company.legalName }} ou fait l'objet d'une autorisation
        d'utilisation. Toute reproduction ou adaptation, totale ou partielle,
        sans autorisation écrite préalable est interdite. Les marques et logos
        de tiers cités demeurent la propriété de leurs détenteurs respectifs.
      </p>
    </LegalSection>

    <LegalSection title="Données personnelles">
      <p>
        Le traitement des données personnelles collectées via ce site et via les
        applications éditées par {{ company.brand }} est décrit dans la
        <NuxtLink
          to="/confidentialite"
          class="text-main-blue underline hover:text-secondary"
          >politique de confidentialité</NuxtLink
        >.
      </p>
    </LegalSection>

    <LegalSection title="Responsabilité et droit applicable">
      <p>
        {{ company.legalName }} s'efforce d'assurer l'exactitude des
        informations publiées sur ce site, qui ont une valeur informative et ne
        constituent pas un engagement contractuel. Les liens vers des sites
        tiers ne sauraient engager sa responsabilité.
      </p>
      <p>
        Les présentes mentions légales sont soumises au droit français. En cas
        de litige, et à défaut de résolution amiable, les tribunaux français
        sont seuls compétents.
      </p>
    </LegalSection>
  </article>
</template>

<script setup lang="ts">
import {
  company,
  contact,
  formattedAddress,
  hosting,
  phoneHref,
} from '~/constants/company'
import { legalLastUpdated } from '~/constants/legal'

definePageMeta({ layout: 'legal' })

const description =
  'Mentions légales de Kodelio : éditeur du site, identité de la société, directeur de la publication et hébergeur.'

useHead({
  link: [{ rel: 'canonical', href: `${contact.websiteUrl}/mentions-legales` }],
})

useSeoMeta({
  title: 'Mentions légales - Kodelio',
  description,
  ogTitle: 'Mentions légales - Kodelio',
  ogDescription: description,
  ogType: 'website',
  ogUrl: `${contact.websiteUrl}/mentions-legales`,
  ogLocale: 'fr_FR',
  robots: 'index,follow',
})
</script>
