<template>
  <div class="flex flex-row -mb-px h-14">
    <div
      class="h-full w-1/3 rounded-tr-full"
      :class="{
        'bg-primary': color === 'primary',
        'bg-white': color === 'white',
      }"
    ></div>
    <div
      class="h-full w-1/3"
      :class="{
        'bg-primary': color === 'white',
        'bg-white': color === 'primary',
      }"
    ></div>
    <div
      class="h-full w-1/3 rounded-tl-full"
      :class="{
        'bg-primary': color === 'primary',
        'bg-white': color === 'white',
      }"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'SectionSeparator',
  props: {
    color: {
      type: String,
      required: true,
    },
  },
})
</script>
