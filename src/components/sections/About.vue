<template>
  <section class="relative h-[100dvh] p-20 px-10 bg-blue text-gray flex flex-col items-center justify-center" id="about">
    <h2 class="text-4xl font-bold mb-2">Sobre PROA</h2>
  </section>
</template>

<script setup>
// ...existing code...
</script>

<style scoped>

section::before {
  content: '';
  position: absolute;
  top: -50px;
  left: 0;
  width: 100%;
  height: 60px;
  background-image: url('/images/wave.png');
  background-size: 140px;
  background-position: bottom center;
  background-repeat: repeat-x;
  z-index: 2;
}

</style>