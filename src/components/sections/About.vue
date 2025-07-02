<template>
  <section class="relative h-[100dvh] p-20 px-10 bg-blue text-gray flex flex-col items-center justify-center outline flex-1" id="about">
    <h2  @mousemove="handleMouseMove" @mouseleave="resetSkew" class="text-8xl font-bold mb-2 cursor-default p-20">
      Cari
      <span ref="skewTarget" class="text-lustria text-lila skewed-text inline-block">
        te amo
      </span>
    </h2>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { gsap } from 'gsap'

const skewTarget = ref(null)

function handleMouseMove(e) {
  const el = skewTarget.value
  const rect = el.getBoundingClientRect()
  
  const y = e.clientY - rect.top
  const percentY = (y / rect.height) * 2 - 1 // -1 to 1
  const skewX = -percentY * 10
  gsap.to(el, { skewX, duration: 0.4, ease: 'power2.out' })
}

function resetSkew() {
  const el = skewTarget.value
  gsap.to(el, { skewX: 0, duration: 0.6, ease: 'power2.out' })
}
</script>

<style scoped>
</style>