<template>
  <div>
    <HeaderMenu :sections="sections" />
    <header class="w-full h-screen mx-auto bg-primary flex flex-col">
      <div class="flex flex-col items-center justify-center h-screen">
        <img
          src="img/full-white.webp"
          alt="Kodelio logo"
          class="h-36 object-scale-down"
          width="600"
          height="144"
        />
        <div class="text-white sm:mt-4 title">
          <h1 class="px-4">Réalisons ensemble vos projets web.</h1>
        </div>
      </div>
      <SectionSeparator id="services" color="white" />
    </header>
    <div class="bg-white">
      <div class="grid md:grid-cols-3 p-8">
        <div class="col-span-2 flex flex-col text-white">
          <h2 class="title mt-4 text-main-blue">
            Quels services propose Kodelio ?
          </h2>
          <p
            class="mt-4 text-center md:text-left py-6 md:px-28 text-xl text-black"
          >
            Kodelio a pour but de proposer aux entreprises et porteurs de
            projets un accompagnement sur-mesure dans la mise en place de leurs
            projets web et dans la concrétisation de leurs idées.
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
      <SectionSeparator id="about" color="primary" />
    </div>
    <div class="bg-primary">
      <div class="grid md:grid-cols-3 p-8">
        <RoundImage
          src="img/laurent.webp"
          alt="Photo Laurent"
          class="hidden md:block"
        />
        <div class="col-span-2 flex flex-col text-white">
          <h2 class="title mt-4 text-secondary">Qui est derrière Kodelio ?</h2>
          <p
            class="mt-4 text-center md:text-left py-6 md:px-28 text-xl text-white"
          >
            Je m'appelle Laurent Toson et je suis développeur web full-stack
            depuis quelques années.
            <br />
            Avec une expérience diversifiée dans des secteurs tels que la santé
            et la technologie de l'information, je m'adapte rapidement à chaque
            nouveau défi.
            <br /><br />
            Je mets l'accent sur la création de solutions sur mesure, adaptées à
            vos besoins, en utilisant les dernières technologies et meilleures
            pratiques actuelles.
            <br /><br />Vous souhaitez développer un SaaS ou une application Web
            ? Discutons ensemble de votre projet et voyons comment je peux
            apporter une valeur ajoutée grâce à un travail de haute qualité.
            <br />Mon objectif ? Votre satisfaction !
          </p>
        </div>
      </div>
      <SectionSeparator id="partners" color="white" />
    </div>
    <div class="bg-white">
      <div class="grid md:grid-cols-3 p-8">
        <div class="col-span-2 flex flex-col text-white">
          <h2 class="title mt-4 text-main-blue">Partenaires</h2>
          <p
            class="mt-4 text-center md:text-left py-6 md:px-28 text-xl text-black"
          >
            <i>"Seul on va plus vite, ensemble on va plus loin."</i>
            <br /><br />
            Dans mon activité freelance, ce proverbe prend tout son sens. Mes
            partenaires et moi, on partage plus que des projets : une véritable
            passion pour l'innovation et l'excellence. Ensemble, on échange nos
            idées, on combine nos talents, et on crée quelque chose d'unique.
            C'est cette collaboration qui nous permet d'aller toujours plus
            loin.<br /><br />
            Allez voir ce que mes partenaires font :
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://tekeo.studio/"
              class="hover:text-secondary text-main-blue"
              >Tekeo</a
            >
            ,
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://corpuscloud.com/"
              class="hover:text-secondary text-main-blue"
              >CorpusCloud</a
            >
          </p>
        </div>
        <RoundImage
          src="img/partners.webp"
          alt="Partners logos"
          class="hidden md:block"
        />
      </div>
      <SectionSeparator id="contact" color="primary" />
    </div>
    <div class="bg-primary">
      <div class="grid md:grid-cols-2 p-8">
        <div class="flex items-center justify-center">
          <h2 class="title text-white">
            Une question ? <br />Un projet ? <br />N'hésitez pas à prendre
            contact !
          </h2>
        </div>
        <ContactForm />
      </div>
      <SectionSeparator color="white" />
    </div>
    <div class="bg-white">
      <PageFooter class="mt-4 mb-2" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import ContactForm from '~/components/ContactForm.vue'
import HeaderMenu from '~/components/HeaderMenu.vue'
import PageFooter from '~/components/PageFooter.vue'
import RoundImage from '~/components/RoundImage.vue'
import Section from '@/types/Section'
import SectionSeparator from '~/components/SectionSeparator.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    HeaderMenu,
    RoundImage,
    ContactForm,
    SectionSeparator,
    PageFooter,
  },
  setup() {
    const sections = ref<Section[]>([
      {
        id: 'services',
        menu: 'Services',
      },
      {
        id: 'about',
        menu: 'A propos',
      },
      {
        id: 'partners',
        menu: 'Partenaires',
      },
      {
        id: 'contact',
        menu: 'Contact',
      },
    ])

    return { sections }
  },
  head() {
    return {
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content:
            'Kodelio - Laurent Toson : développeur full-stack JavaScript',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Votre entreprise souhaite réaliser une application web ou mobile? Je vous accompagne dans la réalisation de vos projets, de la conception à la maintenance.',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://kodelio.com/img/full-white.webp',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://kodelio.com/',
        },
        {
          property: 'og:locale',
          content: 'fr_FR',
        },
        {
          hid: 'twitter:site',
          property: 'twitter:site',
          content: '@_kodelio',
        },
        {
          hid: 'twitter:creator',
          property: 'twitter:creator',
          content: '@_kodelio',
        },
      ],
    }
  },
})
</script>

<style>
.title {
  @apply text-4xl text-center;
}
</style>
