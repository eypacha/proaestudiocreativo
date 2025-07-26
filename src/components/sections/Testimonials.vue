<template>
  <section class="relative pb-20 pt-40 px-7 md:px-10 bg-gray text-blue flex flex-col items-center justify-center" id="testimonials">
    <h2 class="uppercase text-center">
      <span class="font-bold text-2xl md:text-[40px]">Historias que encontraro rumbo y dirección,<br/></span>
      <span class="text-lustria text-2xl md:text-4xl">que nos recuerdan por qué hacemos lo que hacemos</span>
    </h2>
    <div class="w-full mt-20 flex flex-col md:flex-row gap-20">
      <div class="flex-1">
        <Testimonial text="La asesoría me sirvió muchísimo. No había pensado mi esquema de trabajo en redes de una forma tan clara y me di cuenta de que me faltaban herramientas para saber qué decir, qué es realmente útil y qué no. Me fui muy contenta y súper agradecida, además el encuentro duró más de lo previsto y sentí que se dedicaron a fondo." name="Karen, Tinto Rebelde"/>
      </div>
      <div class="flex-1">
        <Testimonial text="La asesoría me sirvió muchísimo. No había pensado mi esquema de trabajo en redes de una forma tan clara y me di cuenta de que me faltaban herramientas para saber qué decir, qué es realmente útil y qué no. Me fui muy contenta y súper agradecida, además el encuentro duró más de lo previsto y sentí que se dedicaron a fondo." name="Karen, Tinto Rebelde"/>
      </div>
      <div class="flex-1">
        <Testimonial text="La asesoría me sirvió muchísimo. No había pensado mi esquema de trabajo en redes de una forma tan clara y me di cuenta de que me faltaban herramientas para saber qué decir, qué es realmente útil y qué no. Me fui muy contenta y súper agradecida, además el encuentro duró más de lo previsto y sentí que se dedicaron a fondo." name="Karen, Tinto Rebelde"/>
      </div>
    </div>
    
  </section>
</template>

<script setup>
import Testimonial from '../Testimonial.vue';
</script>

<style scoped>
</style>