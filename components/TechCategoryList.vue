<template>
  <div class="text-left">
    <h3 class="text-xl text-secondary">{{ category.label }}</h3>
    <ul class="mt-3 flex flex-wrap gap-2">
      <li
        v-for="item in category.items"
        :key="item"
        class="rounded-full border border-white/30 px-3 py-1 text-base text-white"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { TechCategory } from '~/types/TechCategory'

defineProps<{
  category: TechCategory
}>()
</script>
