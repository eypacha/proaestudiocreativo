<template>
  <div class="fixed w-full h-[100dvh] z-4 pointer-events-none">
    <a href="#proa" class="logo-link logo-anim cursor-pointer pointer-events-auto" aria-label="Ir al inicio">
      <Logo  />
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Logo from '@/components/Logo.vue';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  
  gsap.to('.logo-anim', {
    width: 70,
    height: 50,
    minWidth: 70,
    minHeight: 50,
    maxWidth: 70,
    maxHeight: 50,
    left: '32px',
    top: '14px',
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
});

</script>

<style scoped>
.logo-link {
  display: block;
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
.logo-anim {
  width: 100%;
  height: 100%;
}
</style>