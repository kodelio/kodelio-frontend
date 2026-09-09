<template>
  <article
    class="flex flex-col h-full rounded-2xl bg-white/95 p-6 text-left shadow-lg"
  >
    <h3 class="text-2xl text-main-blue">{{ service.title }}</h3>
    <p class="mt-3 text-lg text-black">{{ service.description }}</p>
    <ul class="mt-4 space-y-2">
      <li
        v-for="deliverable in service.deliverables"
        :key="deliverable"
        class="flex items-start text-base text-black"
      >
        <span class="mr-2 text-secondary" aria-hidden="true">•</span>
        {{ deliverable }}
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
import type { Service } from '~/types/Service'

defineProps<{
  service: Service
}>()
</script>
