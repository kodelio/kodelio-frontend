<template>
  <nav class="sm:px-8 bg-primary w-full fixed">
    <div class="sm:hidden flex flex-wrap flex-row">
      <img src="/img/icon.png" alt="Kodelio icon" class="h-16 w-auto" />
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
          <a
            class="text-white text-2xl hover:text-secondary block pl-3 pr-3 py-4"
            :href="linkToSection(menuSection)"
            >{{ menuSection.menu }}</a
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

    const linkToSection = computed(() => (section: Section) => {
      return `#${section.id}`
    })

    return { menuSections, isMenuMobileOpen, toggleMobileMenu, linkToSection }
  },
})
</script>
