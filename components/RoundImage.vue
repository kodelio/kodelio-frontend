<template>
  <img
    :src="src"
    :alt="alt"
    :title="alt"
    loading="lazy"
    class="rounded-full border border-2 object-cover w-48 h-48 m-auto shadow-lg"
    @click="emit('onClick')"
  />
</template>

<script setup lang="ts">
defineProps<{
  src: string
  alt: string
}>()

const emit = defineEmits<{
  onClick: []
}>()
</script>
