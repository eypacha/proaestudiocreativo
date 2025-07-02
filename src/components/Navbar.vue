<template>
  <nav
    class="navbar w-full flex items-center justify-between top-0 fixed px-8 py-5 z-3 transition-colors duration-100"
    :style="{ backgroundColor: color }"
  >
    <div class="flex-none w-30">
    </div>
    <div class="flex-1 flex justify-center">
      <ul class="flex gap-0">
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
    <div class="flex-none">
      <Button label="Hablemos" class="w-30" />
    </div>
  </nav>
</template>

<script setup>
import { defineProps } from 'vue';
import Button from "primevue/button";
import { useLogoSectionState } from '@/composables/useLogoSectionState';

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
