<template>
  <nav class="sm:px-8 bg-primary w-full fixed">
    <div class="sm:hidden flex flex-wrap flex-row">
      <img
        src="img/icon.png"
        alt="Kodelio icon"
        title="Kodelio icon"
        class="h-16 w-auto cursor-pointer"
        width="128"
        height="128"
        @click="scrollTo()"
      />
      <div
        class="flex items-center justify-end ml-auto"
        @click="toggleMobileMenu()"
      >
        <font-awesome-icon
          icon="fa-solid fa-bars"
          class="text-white text-2xl cursor-pointer p-4"
        />
      </div>
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
          <span
            class="text-white text-2xl hover:text-secondary block pl-3 pr-3 py-4 cursor-pointer"
            @click="scrollTo(menuSection.id)"
            >{{ menuSection.menu }}</span
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'
import Section from '@/types/Section'

export default defineComponent({
  name: 'HeaderMenu',
  props: {
    sections: {
      type: Array as () => Section[],
      required: true,
    },
  },
  setup(props) {
    const menuSections = computed(() =>
      props.sections.filter((section) => section.menu)
    )

    const isMenuMobileOpen = ref<Boolean>(false)

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

    const linkToSection = computed(() => (section: Section) => {
      return `#${section.id}`
    })

    return {
      menuSections,
      isMenuMobileOpen,
      toggleMobileMenu,
      scrollTo,
      linkToSection,
    }
  },
})
</script>
