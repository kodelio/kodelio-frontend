<template>
  <div class="flex flex-row -mb-px h-14">
    <div
      class="h-full w-1/3 rounded-tr-full"
      :class="{
        'bg-primary': color === 'primary',
        'bg-white': color === 'white',
      }"
    />
    <div
      class="h-full w-1/3"
      :class="{
        'bg-primary': color === 'white',
        'bg-white': color === 'primary',
      }"
    />
    <div
      class="h-full w-1/3 rounded-tl-full"
      :class="{
        'bg-primary': color === 'primary',
        'bg-white': color === 'white',
      }"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  color: string
}>()
</script>
