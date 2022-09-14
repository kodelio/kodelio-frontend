<template>
  <img
    :src="src"
    :alt="alt"
    class="rounded-full border border-2 object-cover w-48 h-48 m-auto shadow-lg"
    @click="$emit('onClick')"
  />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'RoundImage',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
})
</script>
