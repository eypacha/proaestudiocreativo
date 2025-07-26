<template>
  <nav
    class="navbar w-full flex items-center justify-between top-0 fixed px-8 py-5 z-3 transition-colors duration-100"
    :style="{ backgroundColor: color }"
  >
    <div class="flex-1 flex justify-center md:flex">
      <ul class="hidden md:flex gap-0">
        <li v-for="(section, i) in sections" :key="i">
          <a
            class="text-lg transition-colors text-blue hover:text-lustria"
            :href="section.href"
            :style="section.width ? { width: section.width + 'px', display: 'inline-block', textAlign: 'center' } : {}"
          >
            {{ section.label }}
          </a>
        </li>
      </ul>
    </div>
    <div class="flex-none hidden md:block">
      <Button label="Hablemos" class="w-30" />
    </div>
    <!-- Hamburguesa solo en mobile, alineada a la derecha -->
    <div class="flex-none md:hidden flex items-center">
      <button @click="drawerVisible = true" aria-label="Abrir menú">
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
          <rect y="7" width="32" height="3" rx="1.5" fill="currentColor"/>
          <rect y="14" width="32" height="3" rx="1.5" fill="currentColor"/>
          <rect y="21" width="32" height="3" rx="1.5" fill="currentColor"/>
        </svg>
      </button>
    </div>
    <!-- Drawer para mobile -->
    <Sidebar v-model:visible="drawerVisible" position="right" class="md:hidden" :style="{ width: '166px' }" :showCloseIcon="false">
      <div class="flex justify-end p-4">
        <button @click="drawerVisible = false" aria-label="Cerrar menú" class="text-2xl text-gray hover:text-blue focus:outline-none">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <line x1="7" y1="7" x2="21" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <line x1="21" y1="7" x2="7" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
      <ul class="flex flex-col gap-6 mt-4">
        <li v-for="(section, i) in sections" :key="i">
          <a
            class="text-lg transition-colors text-gray hover:text-lustria block text-center py-2"
            :href="section.href"
            @click="drawerVisible = false"
          >
            {{ section.label }}
          </a>
        </li>
      </ul>
      <div class="mt-10 flex justify-center">
        <Button label="Hablemos" class="w-30" @click="drawerVisible = false" />
      </div>
    </Sidebar>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';
import Button from "primevue/button";
import Sidebar from "primevue/sidebar";
import { useLogoSectionState } from '@/composables/useLogoSectionState';

const drawerVisible = ref(false);

const props = defineProps({
  color: {
    type: String,
    default: '#dbdddd',
  },
});

const color = props.color;

const sections = [
  {
    href: "#proa",
    label: "Subite a PROA",
    width: 160,
    id: 'proa',
  },
  {
    href: "#about",
    label: "Nuestro rumbo",
    width: 140,
    id: 'about',
  },
  {
    href: "#services",
    label: "Servicios",
    width: 120,
    id: 'services',
  },
  {
    href: "#testimonials",
    label: "Testimonios",
    width: 120,
    id: 'testimonials',
  },
  {
    href: "#contact",
    label: "Contacto",
    width: 100,
    id: 'contact',
  },
];

const sectionClasses = {
  proa: { bg: 'bg-gray', text: 'text-blue' },
  services: { bg: 'bg-lila', text: 'text-gray' },
  about: { bg: 'bg-blue', text: 'text-gray' },
  contact: { bg: 'bg-gray', text: 'text-blue' },
};

const activeSection = useLogoSectionState(sections.map(s => s.id));
</script>
