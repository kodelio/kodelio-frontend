<template>
  <section class="bg-white px-4 py-12 sm:px-8">
    <div class="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
      <RoundImage
        src="/img/laurent.webp"
        alt="Laurent Toson, fondateur de Kodelio"
        class="hidden md:block"
      />

      <div class="col-span-2 flex flex-col">
        <h2 class="title text-main-blue">
          Qui est derrière {{ company.brand }} ?
        </h2>

        <div class="mt-6 space-y-4 text-xl text-black">
          <p>
            {{ company.legalRepresentative }} est développeur web full-stack et
            dirige {{ company.brand }}. Fort d'une expérience dans des secteurs
            variés, notamment la santé et les technologies de l'information, il
            accompagne ses clients sur l'ensemble du cycle de vie de leurs
            applications.
          </p>
          <p>
            L'accent est mis sur des solutions sur mesure, construites avec les
            technologies actuelles et les bonnes pratiques du métier : code
            testé, sécurité, performance et documentation.
          </p>
          <p>
            Vous souhaitez développer un SaaS, une application web ou une
            application mobile ? Discutons de votre projet et voyons ensemble
            comment y apporter de la valeur.
          </p>
        </div>

        <div class="mt-6 flex flex-wrap gap-4 text-lg">
          <a
            :href="contact.linkedinUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="text-main-blue underline hover:text-secondary"
          >
            Profil LinkedIn
          </a>
          <a
            :href="contact.maltUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="text-main-blue underline hover:text-secondary"
          >
            Profil Malt
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { company, contact } from '~/constants/company'
</script>
