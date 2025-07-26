<template>
  <section class="p-4 md:p-10 pb-50">
    <h2 class="text-5xl md:text-9xl mb-2 text-blue md:leading-26 tracking-tight font-bold">
      Le damos<br/>
      rumbo a<br/>
      tu marca<br/>
      con
      <span class="inline-block relative h-12 text-lustria text-lila md:text-[7rem] top-2 md:-top-10">
        <span
          v-for="(word, wIdx) in adjetives"
          :key="wIdx"
          class="absolute flex opacity-0 transition-opacity duration-300 word"
          :style="{ opacity: wIdx === currentWordIndex ? 1 : 0 }"
          :class="{
            in: wIdx === currentWordIndex,
            out: wIdx !== currentWordIndex
          }"
          ref="words"
        >
          {{ word }}
        </span>
      </span>
    </h2>
    <div class="text-right text-blue text-3xl font-bold mt-10 md:mt-0">
      <p class="mr-5">Conocé lo</p>
      <Button label="que hacemos" size="large"/>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Button from "primevue/button";

const adjetives = ref([
  'estrategia',
  'diseño',
  'creatividad',
]);
const currentWordIndex = ref(0);
let intervalId = null;

function animateWords() {
  const maxWordIndex = adjetives.value.length - 1;
  const current = currentWordIndex.value;
  const next = current === maxWordIndex ? 0 : current + 1;
  currentWordIndex.value = next;
}

onMounted(() => {
  intervalId = setInterval(animateWords, 2000);
});
onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.word {
  transition: opacity 0.38s, transform 0.38s;
  opacity: 0;
  transform: rotateX(90deg);
}
.word.in {
  opacity: 1;
  transform: rotateX(0deg);
}
.word.out {
  opacity: 0;
  transform: rotateX(90deg);
}
</style>