<template>
  <section
    class="relative pt-40 pb-20 px-4 md:px-10 bg-blue text-gray flex flex-col outline flex-1"
    id="about"
  >
    <h2
      @mousemove="handleMouseMove"
      @mouseleave="resetSkew"
      class="text-5xl md:text-8xl mb-20 cursor-default"
    >
      <span class="font-bold mr-3 uppercase">Nuesto</span>
      <span
        ref="skewTarget"
        class="text-lustria text-lila skewed-text inline-block"
      >
        rumbo </span
      ><br />
      <span class="font-bold text-lila mr-6">PROA</span>
      <span class="font-bold">Estudio Creativo</span>
    </h2>
    <div class="text-xl w-full mb-10 px-20 font-medium">
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
    <div class="flex w-full">
      <div class="w-1/2 flex flex-col justify-center pr-8">
        <IconHelm class="mb-2" />
        <p class="uppercase font-bold text-xl w-full">
          Le damos rumbo a tu marca para que puedas,<br />
          mostrar y vender con confianza,<br />
          coherencia y alineada a tus valores
        </p>
      </div>
      <div class="w-1/2 flex flex-col justify-center items-end pl-8">
        <div class="text-right text-gray text-3xl font-bold">
          <p class="mr-3 leading-7 mb-2">
            Quiero<br />
            encontrar
          </p>
          <Button label="el rumbo" size="large" />
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

<style scoped></style>
