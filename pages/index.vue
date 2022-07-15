<template>
  <div class="text-primary">Hello {{ name }}</div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const name = computed(() => `Kodelio`)

    return {
      name,
    }
  },
})
</script>
