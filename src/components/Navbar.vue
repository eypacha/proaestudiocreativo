<template>
  <nav class="navbar fixed w-full flex items-center justify-center px-8 py-4 ">
    <ul class="flex gap-8">
      <li v-for="(section, i) in sections" :key="i">
        <a
          class="text-lg transition-colors"
          :href="section.href"
        >
          {{ section.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const sections = [
  { href: '#sevices', label: 'Servicios' },
  { href: '#portfolio', label: 'Porfolio' },
  { href: '#aboutproa', label: 'Sobre PROA' },
  { href: '#contact', label: 'Contacto' },
];
</script>
