<template>
  <section class="bg-white px-4 py-12 sm:px-8">
    <div class="mx-auto max-w-6xl">
      <h2 class="title text-main-blue">Nos services</h2>

      <p class="mx-auto mt-6 max-w-4xl text-center text-xl text-black">
        {{ company.brand }} accompagne les entreprises et les porteurs de
        projets dans la conception, le développement et la maintenance de leurs
        applications, de la définition du besoin jusqu'à la mise en production.
      </p>

      <div class="mt-10 grid gap-6 md:grid-cols-2">
        <ServiceCard
          v-for="service in services"
          :key="service.id"
          :service="service"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { company } from '~/constants/company'
import { services } from '~/constants/services'
</script>
