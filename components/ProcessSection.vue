<template>
  <section class="bg-primary px-4 py-12 sm:px-8">
    <div class="mx-auto max-w-6xl">
      <h2 class="title text-secondary">Comment se déroule un projet ?</h2>

      <p class="mx-auto mt-6 max-w-4xl text-center text-xl text-white">
        Chaque projet suit les mêmes étapes, afin que vous sachiez à tout moment
        où en est votre application et ce qui reste à réaliser.
      </p>

      <ol class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <ProcessStepCard
          v-for="step in processSteps"
          :key="step.id"
          :step="step"
        />
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
import { processSteps } from '~/constants/process'
</script>
