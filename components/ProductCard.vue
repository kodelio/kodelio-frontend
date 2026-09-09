<template>
  <article class="flex flex-col rounded-2xl bg-white p-6 text-left shadow-lg">
    <div class="flex flex-wrap items-baseline gap-3">
      <h3 class="text-2xl text-main-blue">{{ product.name }}</h3>
      <span class="rounded-full bg-secondary px-3 py-1 text-sm text-primary">{{
        product.status
      }}</span>
    </div>
    <p class="mt-3 text-lg text-black">{{ product.description }}</p>
    <ul class="mt-4 flex flex-wrap gap-2">
      <li
        v-for="platform in product.platforms"
        :key="platform"
        class="rounded-full border border-primary/30 px-3 py-1 text-base text-primary"
      >
        {{ platform }}
      </li>
    </ul>
    <a
      v-if="product.url"
      :href="product.url"
      target="_blank"
      rel="noopener noreferrer"
      class="mt-4 text-lg text-main-blue underline hover:text-secondary"
    >
      Découvrir {{ product.name }}
    </a>
  </article>
</template>

<script setup lang="ts">
import type { Product } from '~/types/Product'

defineProps<{
  product: Product
}>()
</script>
