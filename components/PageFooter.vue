<template>
  <div class="m-auto">
    <div class="flex flex-row justify-center">
      <RoundIcon
        :icon="['fab', 'linkedin-in']"
        class="text-3xl text-white bg-main-blue mx-2 pt-2 pl-3"
        @onClick="openLinkedInProfile"
      />
      <RoundIcon
        icon="calendar"
        class="text-2xl text-white bg-secondary mx-2 pt-[0.52rem] pl-[0.865rem]"
        @onClick="openCalendly"
      />
    </div>
    <p class="mt-2 text-2xl text-center text-black">
      Copyright {{ copyrightDate }} - Laurent Toson EI
    </p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import RoundIcon from '~/components/RoundIcon.vue'

export default defineComponent({
  name: 'PageFooter',
  components: { RoundIcon },
  setup() {
    const copyrightDate = computed(() => {
      return new Date().getFullYear()
    })

    const openLinkedInProfile = () => {
      window.open('https://www.linkedin.com/in/laurenttoson/', '_blank')
    }

    const openCalendly = () => {
      window.open(
        'https://calendly.com/laurent-kodelio/reunion-1-heure',
        '_blank'
      )
    }

    return { copyrightDate, openLinkedInProfile, openCalendly }
  },
})
</script>
