<template>
  <div class="m-auto rounded-full hover:shadow-lg w-12 !h-12 cursor-pointer">
    <FontAwesomeIcon :icon="icon" @click="emit('onClick')" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string | string[]
}>()

const emit = defineEmits<{
  onClick: []
}>()
</script>
