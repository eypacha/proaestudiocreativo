<template>
  <div class="fixed w-full h-[100dvh] z-2">
    <Logo class="logo-anim" :colorTop="logoTopColor" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Logo from '@/components/Logo.vue';

gsap.registerPlugin(ScrollTrigger);

const logoTopColor = ref('#cc5de8');

function handleScroll() {
  const logo = document.querySelector('.logo-anim');
  const services = document.getElementById('services');
  if (!logo || !services) return;
  const logoRect = logo.getBoundingClientRect();
  const servicesRect = services.getBoundingClientRect();
  // Si el logo se superpone con la sección Services
  if (
    logoRect.bottom > servicesRect.top &&
    logoRect.top < servicesRect.bottom
  ) {
    logoTopColor.value = '#dbdddd';
  } else {
    logoTopColor.value = '#cc5de8';
  }
}

onMounted(() => {
  // El logo inicia en 50vw, termina en 100px
  gsap.to('.logo-anim', {
    width: 70,
    height: 50,
    minWidth: 70,
    minHeight: 50,
    maxWidth: 70,
    maxHeight: 50,
    left: '20px', // 20px de margen
    top: '8px',
    x: 0,
    y: 0,
    transform: 'translate(0, 0)',
    scrollTrigger: {
      trigger: '.logo-anim',
      start: 'top top',
      end: '+=400',
      scrub: true,
    },
  });
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.logo-anim {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50vw;
  max-width: 50vw;
  height: auto;
  max-height: 50vh;
  will-change: transform, width, height, left, top;
}
</style>