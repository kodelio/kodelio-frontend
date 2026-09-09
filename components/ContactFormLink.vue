<template>
  <NuxtLink :to="target" :class="linkClass"
    ><slot>formulaire de contact</slot></NuxtLink
  >
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    linkClass?: string
  }>(),
  {
    linkClass: 'text-main-blue underline hover:text-secondary',
  },
)

/** Ancre de la section Contact de la page d'accueil. */
const target = '/#contact'
</script>
