<template>
  <section
    class="relative pt-40 pb-20 px-7 md:px-10 bg-blue text-gray flex flex-col outline flex-1"
    id="about"
  >
    <h2
      @mousemove="handleMouseMove"
      @mouseleave="resetSkew"
      class="text-5xl md:text-8xl mb-20 cursor-default"
    >
      <span class="font-bold mr-3 uppercase">Nuestro</span>
      <span
        ref="skewTarget"
        class="text-lustria text-lila skewed-text inline-block text-[60px] md:text-[120px]"
      >rumbo</span><br />
      <span class="font-bold text-lila mr-3 md:mr-6">PROA</span>
      <span class="font-bold">Estudio Creativo</span>
    </h2>
    <div class="text-xl w-full mb-10 md:px-20 font-medium">
      <p class="mb-6">
        En PROA trabajamos con marcas creativas, culturales y con propósito que
        quieren comunicar lo que hacen de forma clara, auténtica y con
        estrategia
      </p>
      <p class="mb-6">
        Nos gusta lo simple, lo real, lo que tiene algo para contar y compartir.
        No creemos en fórmulas mágicas: creemos en crear desde tu historia, tus
        valores y tu estilo.
      </p>
      <p class="mb-6">
        Diseñamos, comunicamos y desarrollamos estrategias que representen lo
        que sos y conecten con quienes te está buscando
      </p>
    </div>
    <div class="flex w-full flex-col md:flex-row">
      <div class="w-full md:w-1/2 flex flex-col justify-center md:pr-8">
        <IconHelm class="mb-2"/>
        <p class="uppercase font-bold md:text-xl w-full text-balance mb-8 md:mb-0">
          Le damos rumbo a tu marca para que puedas,
          mostrar y vender con confianza,
          coherencia y alineada a tus valores
        </p>
      </div>
      <div class="w-full md:w-1/2 flex flex-col justify-center items-end pl-8 pt-1 md:pt-0">
        <div class="text-right text-gray font-bold">
          <p class="mr-3 leading-4 md:leading-7 mb-2 md:text-3xl">
            Quiero<br />
            encontrar
          </p>
          <div class="hidden md:block">
            <Button label="el rumbo" size="large"/>
          </div>
          <div class="md:hidden">
            <Button label="el rumbo" size="medium" class=""/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { gsap } from "gsap";
import IconHelm from "../icons/iconHelm.vue";
import Button from "primevue/button";

const skewTarget = ref(null);

function handleMouseMove(e) {
  const el = skewTarget.value;
  const rect = el.getBoundingClientRect();

  const y = e.clientY - rect.top;
  const percentY = (y / rect.height) * 2 - 1; // -1 to 1
  const skewX = -percentY * 10;
  gsap.to(el, { skewX, duration: 0.4, ease: "power2.out" });
}

function resetSkew() {
  const el = skewTarget.value;
  gsap.to(el, { skewX: 0, duration: 0.6, ease: "power2.out" });
}
</script>