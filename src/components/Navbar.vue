<template>
  <nav class="navbar fixed w-full flex items-center justify-center px-8 py-5 z-2">
    <ul class="flex gap-0">
      <li v-for="(section, i) in sections" :key="i">
        <a
          class="text-lg transition-colors hover:text-lustria"
          :class="isOverServices ? 'text-gray' : 'text-blue'"
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
import { ref, onMounted, onUnmounted } from 'vue';

const sections = [
  { href: "#services", label: "Servicios", width: 120 },
  { href: "#portfolio", label: "Porfolio", width: 110 },
  { href: "#aboutproa", label: "Sobre PROA", width: 130 },
  { href: "#contact", label: "Contacto", width: 100 },
];

const isOverServices = ref(false);

function checkOverlap() {
  const navbar = document.querySelector('.navbar');
  const services = document.getElementById('services');
  if (!navbar || !services) return;
  const navbarRect = navbar.getBoundingClientRect();
  const servicesRect = services.getBoundingClientRect();
  isOverServices.value =
    navbarRect.bottom > servicesRect.top &&
    navbarRect.top < servicesRect.bottom;
}

onMounted(() => {
  window.addEventListener('scroll', checkOverlap, { passive: true });
  checkOverlap();
});
onUnmounted(() => {
  window.removeEventListener('scroll', checkOverlap);
});
</script>
