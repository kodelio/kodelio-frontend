<template>
  <section>
    <HeaderMenu :sections="sections" />
  </section>
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
        title: 'Qui est derrière Kodelio ?',
        background: 'white',
      },
      {
        id: 'services',
        menu: null,
        title: 'Quels services proposes Kodelio ?',
        background: 'primary',
      },
      {
        id: 'projets',
        menu: 'Projets',
        title: 'Projets',
        background: 'white',
      },
      {
        id: 'contact',
        menu: 'Contact',
        title: null,
        background: 'primary',
      },
    ])
    return { sections }
  },
})
</script>
