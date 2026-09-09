<template>
  <nav class="fixed z-50 w-full bg-primary sm:px-8">
    <div class="flex flex-row flex-wrap sm:hidden">
      <img
        src="/img/icon.png"
        alt="Kodelio"
        title="Kodelio"
        class="h-16 w-auto cursor-pointer"
        width="128"
        height="128"
        @click="scrollTo()"
      />
      <button
        type="button"
        class="ml-auto flex items-center justify-end p-4"
        :aria-expanded="isMenuMobileOpen"
        aria-label="Ouvrir le menu de navigation"
        @click="toggleMobileMenu()"
      >
        <FontAwesomeIcon
          icon="fa-solid fa-bars"
          class="cursor-pointer text-2xl text-white"
        />
      </button>
    </div>
    <div class="flex justify-center sm:justify-end">
      <ul
        class="hidden sm:flex sm:flex-row sm:space-x-8"
        :class="{ '!block': isMenuMobileOpen }"
      >
        <li
          v-for="menuSection in menuSections"
          :key="menuSection.id"
          class="text-center"
        >
          <button
            type="button"
            class="block cursor-pointer px-3 py-4 text-2xl text-white hover:text-secondary"
            @click="scrollTo(menuSection.id)"
          >
            {{ menuSection.menu }}
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import type { Section } from '~/types/Section'

const props = defineProps<{
  sections: Section[]
}>()

const menuSections = computed(() =>
  props.sections.filter((section) => section.menu),
)

const isMenuMobileOpen = ref(false)

function toggleMobileMenu() {
  isMenuMobileOpen.value = !isMenuMobileOpen.value
}

function scrollTo(id?: string) {
  if (id) {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  isMenuMobileOpen.value = false
}
</script>
