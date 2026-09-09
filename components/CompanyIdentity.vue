<template>
  <address class="not-italic text-left">
    <h3 class="text-2xl text-secondary">Coordonnées</h3>
    <dl class="mt-4 space-y-3 text-lg text-white">
      <div>
        <dt class="text-white/70">Siège social</dt>
        <dd>
          {{ company.legalName }}<br />
          {{ address.street }}<br />
          {{ address.postalCode }} {{ address.city }}
        </dd>
      </div>
      <div v-if="contact.phone">
        <dt class="text-white/70">Téléphone</dt>
        <dd>
          <a :href="`tel:${phoneHref}`" class="underline hover:text-secondary">
            {{ contact.phone }}
          </a>
        </dd>
      </div>
      <div>
        <dt class="text-white/70">Rendez-vous</dt>
        <dd>
          <a
            :href="contact.bookingUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="underline hover:text-secondary"
          >
            Réserver un créneau d'échange
          </a>
        </dd>
      </div>
      <div>
        <dt class="text-white/70">Réseaux</dt>
        <dd class="flex flex-wrap gap-x-4">
          <a
            :href="contact.linkedinUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="underline hover:text-secondary"
            >LinkedIn</a
          >
          <a
            :href="contact.maltUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="underline hover:text-secondary"
            >Malt</a
          >
        </dd>
      </div>
    </dl>
  </address>
</template>

<script setup lang="ts">
import { address, company, contact, phoneHref } from '~/constants/company'
</script>
