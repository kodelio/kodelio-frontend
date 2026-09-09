<template>
  <!--
    Transition courbe entre deux sections. `color` est la couleur de la section
    qui suit ; le conteneur porte celle de la section qui précède, de sorte que
    la courbe se découpe sur elle sans dépendre du fond du parent.
  -->
  <div class="-mb-px" :class="isNextWhite ? 'bg-primary' : 'bg-white'">
    <svg
      class="block h-14 w-full"
      viewBox="0 0 100 10"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0,0 Q25,10 50,10 T100,0 L100,10 L0,10 Z"
        :class="isNextWhite ? 'fill-white' : 'fill-primary'"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  color: string
}>()

const isNextWhite = computed(() => props.color === 'white')
</script>
