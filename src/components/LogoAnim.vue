<template>
  <div class="fixed w-full h-[100dvh] z-4 pointer-events-none">
    <a
      href="#proa"
      class="logo-anim cursor-pointer pointer-events-auto block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] max-w-[50vw] h-auto max-h-[50vh]"
      aria-label="Ir al inicio"
    >
      <Logo />
    </a>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Logo from '@/components/Logo.vue';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const anim = gsap.to('.logo-anim', {
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
      invalidateOnRefresh: true
    },
  });

  ScrollTrigger.addEventListener('refresh', () => {
    if (window.scrollY >= 400) {
      const el = document.querySelector('.logo-anim');
      if (el) {
        el.style.left = '32px';
        el.style.top = '14px';
        el.style.width = '70px';
        el.style.height = '50px';
        el.style.transform = 'translate(0, 0)';
      }
      if (anim.scrollTrigger) {
        anim.scrollTrigger.disable();
      }
    }
  });
});

</script>

<style scoped>
.logo-anim {
  will-change: transform, width, height, left, top;
}
</style>