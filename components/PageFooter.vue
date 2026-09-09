<template>
  <footer class="m-auto px-4 pb-6 text-black">
    <div class="flex flex-row justify-center">
      <a
        :href="contact.linkedinUrl"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Profil LinkedIn de Laurent Toson"
      >
        <RoundIcon
          :icon="['fab', 'linkedin-in']"
          class="mx-2 bg-main-blue pl-3 pt-2 text-3xl text-white"
        />
      </a>
      <a
        :href="contact.bookingUrl"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Prendre rendez-vous"
      >
        <RoundIcon
          icon="calendar"
          class="mx-2 bg-secondary pl-[0.865rem] pt-[0.52rem] text-2xl text-white"
        />
      </a>
      <a
        :href="contact.maltUrl"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Profil Malt de Laurent Toson"
      >
        <img
          src="/img/malt.webp"
          alt="Malt"
          class="mx-2 w-12 rounded-full hover:shadow-lg"
        />
      </a>
    </div>

    <nav
      class="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg"
      aria-label="Liens légaux"
    >
      <NuxtLink to="/" class="hover:text-main-blue">Accueil</NuxtLink>
      <NuxtLink to="/support" class="hover:text-main-blue">Support</NuxtLink>
      <NuxtLink to="/mentions-legales" class="hover:text-main-blue">
        Mentions légales
      </NuxtLink>
      <NuxtLink to="/confidentialite" class="hover:text-main-blue">
        Confidentialité
      </NuxtLink>
    </nav>

    <div class="mt-6 text-center text-base">
      <p>
        {{ company.legalName }} — {{ company.legalForm }} au capital de
        {{ company.shareCapital }} — RCS {{ company.rcsCity }}
        {{ company.siren }}
      </p>
      <p class="mt-3">Copyright {{ copyrightYear }} - {{ company.brand }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { company, contact } from '~/constants/company'

const copyrightYear = computed(() => new Date().getFullYear())
</script>
