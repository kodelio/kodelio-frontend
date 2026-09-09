<template>
  <header class="mx-auto flex min-h-screen w-full flex-col bg-primary">
    <div
      class="flex flex-1 flex-col items-center justify-center px-4 pb-24 pt-28 text-center sm:py-24"
    >
      <img
        src="/img/full-white.webp"
        alt="Kodelio"
        class="h-36 object-scale-down"
        width="600"
        height="144"
      />

      <h1 class="title mt-6 px-4 text-white">
        Réalisons ensemble vos projets web et mobiles.
      </h1>

      <p class="mt-6 max-w-3xl text-xl text-white/90">
        {{ company.brand }} conçoit et développe des applications web, des
        applications mobiles iOS et Android et des plateformes SaaS sur mesure
        pour les entreprises et les porteurs de projets.
      </p>

      <p class="mt-4 text-lg text-white/70">
        {{ address.displayCity }}, {{ address.country }}
      </p>

      <div class="mt-8 flex flex-col gap-4 sm:flex-row">
        <a
          href="#contact"
          class="rounded-lg bg-secondary px-6 py-3 text-xl text-primary hover:bg-main-blue hover:text-white"
        >
          Démarrer un projet
        </a>
        <a
          :href="contact.bookingUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-lg border border-white px-6 py-3 text-xl text-white hover:border-secondary hover:text-secondary"
        >
          Prendre rendez-vous
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { address, company, contact } from '~/constants/company'
</script>
