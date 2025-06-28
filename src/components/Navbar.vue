<template>
  <nav
    class="navbar w-full flex top-0 bg-gray fixed items-center justify-center px-8 py-5 z-3 transition-colors duration-100"
  >
    <ul class="flex gap-0">
      <li v-for="(section, i) in sections" :key="i">
        <a
          class="text-lg transition-colors text-blue hover:text-lustria"
          :href="section.href"
          :style="
            section.width
              ? {
                  width: section.width + 'px',
                  display: 'inline-block',
                  textAlign: 'center',
                }
              : {}
          "
        >
          {{ section.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useLogoSectionState } from '@/composables/useLogoSectionState';

const sections = [
  {
    href: "#proa",
    label: "Subite a PROA",
    width: 120,
    id: 'proa',
  },
  {
    href: "#services",
    label: "Servicios",
    width: 120,
    id: 'services',
  },
  {
    href: "#about",
    label: "Nuestro rumbo",
    width: 130,
    id: 'about',
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
