<template>
  <div>
    <HeaderMenu :sections="sections" />
    <header class="w-full h-screen mx-auto bg-primary flex flex-col">
      <div class="flex flex-col items-center justify-center h-screen">
        <img
          src="/img/full-white.webp"
          alt="Kodelio logo"
          class="h-36 object-scale-down"
        />
        <h1 class="title text-white sm:mt-4">
          Réalisons ensemble vos projets web
        </h1>
      </div>
      <SectionSeparator color="white" />
    </header>
    <div id="services" class="bg-white">
      <div class="grid md:grid-cols-3 p-8">
        <div class="col-span-2 flex flex-col text-white">
          <h1 class="title mt-4 text-secondary">
            Quels services proposes Kodelio ?
          </h1>
          <p
            class="mt-4 text-center md:text-left py-6 md:px-28 text-xl text-black"
          >
            Kodelio a pour but de proposer aux entreprises et porteurs de
            projets un accompagnement dans la mise en place de leurs projets web
            et dans la concrétisation de leurs idées.
            <br />
            <br />
            Vous souhaitez réaliser une application web sur mesure ? Un logiciel
            SaaS ? Une application mobile ?
            <br />Kodelio collabore avec vous dès la définition de vos besoins
            et la réalisation du cahier des charges. <br />Mais la collaboration
            ne s'arrête pas une fois le code livré. Kodelio vous accompagne
            également dans la mise en production de votre application ainsi que
            dans la maintenance et l'évolution de celle-ci.
          </p>
        </div>
        <RoundImage
          src="img/icon-background.webp"
          alt="Kodelio icon"
          class="hidden md:block"
        />
      </div>
      <SectionSeparator color="primary" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import RoundImage from '~/components/RoundImage.vue'
import Section from '@/types/Section'

export default defineComponent({
  name: 'IndexPage',
  components: { RoundImage },
  setup() {
    const sections = ref<Section[]>([
      {
        id: 'services',
        menu: 'Services',
      },
      {
        id: 'projets',
        menu: 'Projets',
      },
      {
        id: 'contact',
        menu: 'Contact',
      },
    ])
    return { sections }
  },
})
</script>

<style>
.title {
  @apply text-4xl text-center;
}
</style>
