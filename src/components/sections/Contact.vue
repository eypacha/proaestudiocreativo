<template>
  <section
    class="relative w-full pt-30 pb-20 px-10 bg-gray text-blue flex flex-col items-center justify-center flex-1"
    id="contact"
  >
    <h2 class="text-3xl md:text-[40px] font-bold leading-8 mb-2 md:mb-5 text-center">¿Tenés un proyecto en mente?</h2>
    <h3 class="text-xl md:text-3xl text-lustria leading-6 mb-10 text-center">Escribinos y te ayudamos</h3>

    <form class="w-full max-w-2xl flex flex-col gap-6 md:px-10 mt-4 md:mt-6">
      <div class="flex gap-4">
        <div class="w-1/2">
          <FloatLabel>
            <InputText id="nombre" type="text" v-model="nombre" />
            <label for="nombre">Nombre</label>
          </FloatLabel>
        </div>
        <div class="w-1/2">
          <FloatLabel>
            <InputText id="email" type="email" v-model="email" />
            <label for="email">Email</label>
          </FloatLabel>
        </div>
      </div>
      <div>
        <FloatLabel>
          <InputText id="mensaje" v-model="mensaje" />
          <label for="mensaje">Mensaje</label>
        </FloatLabel>
      </div>
      <div class="flex justify-center mt-7">
        <Button label="Enviar" class="w-30" />
      </div>
    </form>
  </section>
</template>

<script setup>
import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";
import Button from "primevue/button";
import { ref } from 'vue';

const nombre = ref("");
const email = ref("");
const mensaje = ref("");
</script>
