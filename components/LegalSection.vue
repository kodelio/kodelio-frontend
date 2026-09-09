<template>
  <section class="mt-8">
    <h2 class="text-2xl text-main-blue">{{ title }}</h2>
    <div class="mt-3 space-y-3 text-lg leading-relaxed">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
