<template>
  <section
    class="relative h-[100dvh] p-20 px-10 bg-gray text-blue flex flex-col items-center justify-center"
    id="contact"
  >
    <h2 class="text-4xl font-bold mb-2">¿Tenés un proyecto en mente?</h2>
    <h3 class="text-xl text-lustria mb-10">Escribinos para ver cómo podemos ayudarte</h3>

    <form class="w-full max-w-2xl flex flex-col gap-6">
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
          <Textarea id="mensaje" v-model="mensaje" rows="2" />
          <label for="mensaje">Mensaje</label>
        </FloatLabel>
      </div>
      <div class="flex justify-center">
        <Button label="Enviar" class="w-40" />
      </div>
    </form>
  </section>
</template>

<script setup>
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import FloatLabel from "primevue/floatlabel";
import Button from "primevue/button";
import { ref } from 'vue';

const nombre = ref("");
const email = ref("");
const mensaje = ref("");
</script>
