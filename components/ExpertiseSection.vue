<template>
  <section class="bg-primary px-4 py-12 sm:px-8">
    <div class="mx-auto max-w-6xl">
      <h2 class="title text-secondary">Expertise technique</h2>

      <p class="mx-auto mt-6 max-w-4xl text-center text-xl text-white">
        Les projets sont construits avec des technologies éprouvées, choisies
        pour leur pérennité et la facilité de maintenance des applications
        livrées.
      </p>

      <div class="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <TechCategoryList
          v-for="category in techCategories"
          :key="category.id"
          :category="category"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { techCategories } from '~/constants/expertise'
</script>
