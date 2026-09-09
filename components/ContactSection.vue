<template>
  <section class="bg-primary px-4 py-12 sm:px-8">
    <div class="mx-auto max-w-6xl">
      <h2 class="title text-white">
        Une question ? Un projet ? Prenons contact.
      </h2>

      <p class="mx-auto mt-6 max-w-4xl text-center text-xl text-white/90">
        {{ businessHours.responseTime }}. Vous pouvez aussi réserver directement
        un créneau d'échange d'une heure.
      </p>

      <div class="mt-10 grid gap-10 md:grid-cols-2">
        <CompanyIdentity />

        <div>
          <h3 class="text-2xl text-secondary">Formulaire de contact</h3>
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { businessHours } from '~/constants/company'
</script>
