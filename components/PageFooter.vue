<template>
  <div class="m-auto">
    <div class="flex flex-row justify-center">
      <a
        href="https://www.linkedin.com/in/laurenttoson/"
        rel="linkedin noopener noreferrer"
        target="_blank"
        alt="LinkedIn"
        aria-label="LinkedIn"
      >
        <RoundIcon
          :icon="['fab', 'linkedin-in']"
          class="text-3xl text-white bg-main-blue mx-2 pt-2 pl-3"
        />
      </a>
      <a
        href="https://calendly.com/laurent-kodelio/reunion-1-heure"
        rel="calendly noopener noreferrer"
        target="_blank"
        alt="Calendly"
        aria-label="Calendly"
      >
        <RoundIcon
          icon="calendar"
          class="text-2xl text-white bg-secondary mx-2 pt-[0.52rem] pl-[0.865rem]"
        />
      </a>
      <a
        href="https://www.malt.fr/profile/laurenttoson"
        rel="malt noopener noreferrer"
        target="_blank"
        alt="Malt"
        aria-label="Malt"
      >
        <img
          src="/img/malt.webp"
          class="w-12 mx-2 hover:shadow-lg rounded-full"
        />
      </a>
    </div>
    <p class="mt-2 text-2xl text-center text-black">
      Copyright {{ copyrightDate }} - Laurent Toson
    </p>
  </div>
</template>

<script setup lang="ts">
const copyrightDate = computed(() => new Date().getFullYear())
</script>
