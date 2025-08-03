<template>
  <section class="relative pb-20 pt-40 px-7 md:px-10 bg-gray text-blue flex flex-col items-center justify-center" id="testimonials">
    <h2 class="uppercase text-center">
      <div class="font-bold text-2xl md:text-[32px] lg:text-[40px] md:max-w-[550px] md:leading-10 lg:max-w-full mb-1 md:mb-2 lg:mb-1">Historias que encontraro rumbo y dirección,<br/></div>
      <div class="text-lustria text-2xl md:text-3xl lg:text-4xl md:max-w-[550px] md:leading-10 lg:max-w-full mx-auto">que nos recuerdan por qué hacemos lo que hacemos</div>
    </h2>
    <div class="w-full mt-20 flex flex-col lg:flex-row gap-20">
      <div class="flex-1">
        <Testimonial text="La asesoría me sirvió muchísimo. No había pensado mi esquema de trabajo en redes de una forma tan clara y me di cuenta de que me faltaban herramientas para saber qué decir, qué es realmente útil y qué no. Me fui muy contenta y súper agradecida, además el encuentro duró más de lo previsto y sentí que se dedicaron a fondo." name="Karen, Tinto Rebelde"/>
      </div>
      <div class="flex-1">
        <Testimonial text="Lo que más valoro del proceso juntas es tu dedicación, paciencia y buena onda. Me sorprendió cómo pequeños detalles lograron mejorar tanto la imagen, la interacción con el público y nuestra forma de comunicar. Siempre nos explicás el cómo y el por qué de cada decisión, y respondés con claridad nuestras dudas. La comunicación se volvió más organizada y auténtica, y eso se notó: hubo muy buena reacción del público ante los cambios, valorando las mejoras en la imagen, los diseños y el contenido." name="Vale y Mica, Amaru Circo"/>
      </div>
      <div class="flex-1">
        <Testimonial 
          text="Confiar en PROA para crear mi web fue la mejor decisión. Supieron captar mi esencia y plasmarla en cada detalle del sitio, acompañándome en todo el proceso con ideas creativas y soluciones prácticas. Ahora tengo una página que realmente me representa y conecta con mi público."
          name="Ey Pacha!"
        />
      </div>
    </div>
    
  </section>
</template>

<script setup>
import Testimonial from '../Testimonial.vue';
</script>

<style scoped>
</style>