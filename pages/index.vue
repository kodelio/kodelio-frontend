<template>
  <div>
    <HeaderMenu :sections="sections" />
    <header class="w-full h-screen mx-auto bg-primary flex flex-col">
      <div class="flex flex-col items-center justify-center h-screen">
        <img src="/img/full-white.png" class="h-36 object-scale-down" />
        <h1 class="text-3xl text-white sm:mt-4 text-center">
          Réalisons ensemble vos projets web
        </h1>
      </div>
      <SectionSeparator color="white" />
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import Section from '@/types/Section'

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const sections = ref<Section[]>([
      {
        id: 'a-propos',
        menu: 'A propos',
        background: 'white',
      },
      {
        id: 'services',
        menu: null,
        background: 'primary',
      },
      {
        id: 'projets',
        menu: 'Projets',
        background: 'white',
      },
      {
        id: 'contact',
        menu: 'Contact',
        background: 'primary',
      },
    ])
    return { sections }
  },
})
</script>
