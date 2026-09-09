<template>
  <li class="flex flex-col rounded-2xl bg-white/10 p-6 text-left">
    <span
      class="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-2xl text-primary"
      aria-hidden="true"
    >
      {{ step.step }}
    </span>
    <h3 class="mt-4 text-2xl text-white">{{ step.title }}</h3>
    <p class="mt-2 text-lg text-white/90">{{ step.description }}</p>
  </li>
</template>

<script setup lang="ts">
import type { ProcessStep } from '~/types/ProcessStep'

defineProps<{
  step: ProcessStep
}>()
</script>
