<template>
  <article>
    <h1 class="text-4xl text-primary">Politique de confidentialité</h1>
    <p class="mt-2 text-base text-black/60">
      Dernière mise à jour : {{ legalLastUpdated }}
    </p>

    <p class="mt-6 text-lg leading-relaxed">
      Cette politique décrit la manière dont {{ company.legalName }} collecte et
      traite les données personnelles des visiteurs du site
      {{ contact.websiteUrl }} et des utilisateurs des applications qu'elle
      édite, conformément au Règlement général sur la protection des données
      (RGPD) et à la loi Informatique et Libertés.
    </p>

    <LegalSection title="Responsable du traitement">
      <p>
        {{ company.legalName }} — {{ formattedAddress }}. Contact :
        <ContactFormLink />.
      </p>
    </LegalSection>

    <LegalSection title="Données collectées sur ce site">
      <p>
        Le site ne dépose aucun cookie publicitaire et n'utilise aucun outil de
        profilage. Les seules données collectées le sont lorsque vous nous
        écrivez volontairement :
      </p>
      <ul class="list-disc space-y-2 pl-6">
        <li>
          <span class="font-bold">Formulaire de contact :</span> nom, prénom,
          adresse e-mail et contenu de votre message.
        </li>
        <li>
          <span class="font-bold">Données techniques :</span> en cas d'erreur
          sur le site, un rapport technique anonyme (page concernée, type de
          navigateur, message d'erreur) peut être transmis à notre outil de
          supervision.
        </li>
      </ul>
    </LegalSection>

    <LegalSection title="Finalités et bases légales">
      <ul class="list-disc space-y-2 pl-6">
        <li>
          <span class="font-bold">Répondre à vos demandes</span> — base légale :
          votre consentement, matérialisé par l'envoi du formulaire, et
          l'exécution de mesures précontractuelles.
        </li>
        <li>
          <span class="font-bold"
            >Assurer le bon fonctionnement et la sécurité du site</span
          >
          — base légale : l'intérêt légitime de {{ company.brand }} à maintenir
          un service fiable.
        </li>
        <li>
          <span class="font-bold">Respecter nos obligations légales</span> —
          base légale : obligation légale (conservation des pièces comptables,
          notamment).
        </li>
      </ul>
      <p>
        Aucune donnée n'est utilisée à des fins de prospection commerciale ni
        vendue à des tiers.
      </p>
    </LegalSection>

    <LegalSection title="Applications mobiles éditées par Kodelio">
      <p>
        Les applications éditées par {{ company.brand }} et publiées sur l'App
        Store et Google Play appliquent les mêmes principes : collecte limitée
        au strict nécessaire au fonctionnement du service, absence de revente de
        données et absence de suivi publicitaire.
      </p>
      <p>
        Lorsqu'une application dispose d'un compte utilisateur, celui-ci peut
        être supprimé à tout moment depuis l'application ou sur demande via le
        <ContactFormLink />. La suppression du compte entraîne l'effacement des
        données associées.
      </p>
      <p>
        Le détail des données traitées par chaque application est précisé dans
        sa fiche sur les stores et, le cas échéant, dans sa propre politique de
        confidentialité.
      </p>
    </LegalSection>

    <LegalSection title="Destinataires et sous-traitants">
      <p>
        Vos données sont traitées par {{ company.legalName }} et par les
        prestataires techniques suivants, agissant en qualité de sous-traitants
        :
      </p>
      <ul class="list-disc space-y-2 pl-6">
        <li v-for="processor in processors" :key="processor.name">
          <span class="font-bold">{{ processor.name }}</span> —
          {{ processor.purpose }}. Localisation : {{ processor.location }}.
        </li>
      </ul>
    </LegalSection>

    <LegalSection title="Durée de conservation">
      <ul class="list-disc space-y-2 pl-6">
        <li>
          Messages reçus via le formulaire de contact : trois ans à compter du
          dernier échange.
        </li>
        <li>Rapports d'erreurs techniques : quatre-vingt-dix jours.</li>
        <li>
          Documents comptables et contractuels : dix ans, conformément aux
          obligations légales.
        </li>
      </ul>
    </LegalSection>

    <LegalSection title="Cookies">
      <p>
        Ce site ne dépose pas de cookie de mesure d'audience ni de cookie
        publicitaire. Seuls des moyens de stockage strictement nécessaires au
        fonctionnement du site peuvent être utilisés ; ils ne requièrent pas de
        consentement préalable.
      </p>
    </LegalSection>

    <LegalSection title="Sécurité">
      <p>
        Le site est servi exclusivement en HTTPS. Les échanges avec le
        formulaire de contact sont chiffrés, protégés contre les envois
        automatisés et limités en nombre de requêtes. L'accès aux messages reçus
        est restreint au seul représentant légal de la société.
      </p>
    </LegalSection>

    <LegalSection title="Vos droits">
      <p>
        Conformément au RGPD, vous disposez des droits suivants sur vos données
        :
      </p>
      <ul class="list-disc space-y-2 pl-6">
        <li v-for="right in dataRights" :key="right.name">
          <span class="font-bold">{{ right.name }}</span> —
          {{ right.description }}
        </li>
      </ul>
      <p>
        Pour exercer ces droits, adressez votre demande via le
        <ContactFormLink />. Une réponse vous sera apportée dans un délai d'un
        mois. Si vous estimez, après nous avoir contactés, que vos droits ne
        sont pas respectés, vous pouvez introduire une réclamation auprès de la
        CNIL —
        <a
          href="https://www.cnil.fr"
          target="_blank"
          rel="noopener noreferrer"
          class="text-main-blue underline hover:text-secondary"
          >www.cnil.fr</a
        >.
      </p>
    </LegalSection>

    <LegalSection title="Modification de cette politique">
      <p>
        Cette politique peut être mise à jour pour refléter une évolution du
        site, des applications éditées ou de la réglementation. La date de
        dernière mise à jour figure en haut de cette page.
      </p>
    </LegalSection>
  </article>
</template>

<script setup lang="ts">
import { company, contact, formattedAddress } from '~/constants/company'
import { dataRights, legalLastUpdated, processors } from '~/constants/legal'

definePageMeta({ layout: 'legal' })

const description =
  'Politique de confidentialité de Kodelio : données collectées, finalités, sous-traitants, durées de conservation et exercice de vos droits RGPD.'

useHead({
  link: [{ rel: 'canonical', href: `${contact.websiteUrl}/confidentialite` }],
})

useSeoMeta({
  title: 'Politique de confidentialité - Kodelio',
  description,
  ogTitle: 'Politique de confidentialité - Kodelio',
  ogDescription: description,
  ogType: 'website',
  ogUrl: `${contact.websiteUrl}/confidentialite`,
  ogLocale: 'fr_FR',
  robots: 'index,follow',
})
</script>
