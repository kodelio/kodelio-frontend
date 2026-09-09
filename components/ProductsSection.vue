<template>
  <section class="bg-white px-4 py-12 sm:px-8">
    <div class="mx-auto max-w-6xl">
      <h2 class="title text-main-blue">Produits et réalisations</h2>

      <p class="mx-auto mt-6 max-w-4xl text-center text-xl text-black">
        {{ company.brand }} édite ses propres applications et développe des
        solutions pour ses clients, publiées sur le web comme sur l'App Store et
        Google Play.
      </p>

      <div class="mt-10 grid gap-6 md:grid-cols-2">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />

        <article class="flex flex-col rounded-2xl bg-primary p-6 text-left">
          <h3 class="text-2xl text-secondary">{{ clientWork.title }}</h3>
          <p class="mt-3 text-lg text-white">{{ clientWork.description }}</p>
          <ul class="mt-4 flex flex-wrap gap-2">
            <li
              v-for="sector in clientWork.sectors"
              :key="sector"
              class="rounded-full border border-white/30 px-3 py-1 text-base text-white"
            >
              {{ sector }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { clientWork, products } from '~/constants/products'
import { company } from '~/constants/company'
</script>
