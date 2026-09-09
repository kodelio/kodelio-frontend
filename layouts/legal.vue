<template>
  <div class="flex min-h-screen flex-col bg-white">
    <header class="bg-primary px-4 py-4 sm:px-8">
      <NuxtLink to="/" aria-label="Retour à l'accueil de Kodelio">
        <img
          src="/img/full-white.webp"
          alt="Kodelio"
          class="h-12 w-auto object-scale-down"
          width="200"
          height="48"
        />
      </NuxtLink>
    </header>

    <main class="mx-auto w-full max-w-4xl flex-1 px-4 py-10 text-black sm:px-8">
      <slot />
    </main>

    <div class="bg-white">
      <PageFooter class="mt-8" />
    </div>
  </div>
</template>
