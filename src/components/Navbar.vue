<template>
  <nav class="navbar fixed w-full flex items-center justify-center px-8 py-4 z-2">
    <ul class="flex gap-0">
      <li v-for="(section, i) in sections" :key="i">
        <a
          class="text-lg transition-colors hover:text-lustria text-blue"
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
const sections = [
  { href: "#sevices", label: "Servicios", width: 120 },
  { href: "#portfolio", label: "Porfolio", width: 110 },
  { href: "#aboutproa", label: "Sobre PROA", width: 130 },
  { href: "#contact", label: "Contacto", width: 100 },
];
</script>
