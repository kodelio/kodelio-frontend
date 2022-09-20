<template>
  <div class="m-auto rounded-full hover:shadow-lg w-12 !h-12 cursor-pointer">
    <font-awesome-icon :icon="icon" @click="$emit('onClick')" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'RoundIcon',
  props: {
    icon: {
      type: [Array, String],
      required: true,
    },
  },
})
</script>
