<template>
  <section class="p-7 md:p-10 pb-20 md:pb-20">
    <h2 class="text-5xl md:text-9xl mb-2 text-blue md:leading-26 tracking-tight font-bold">
      Le damos<br/>
      rumbo a<br/>
      tu marca<br/>
      con
      <span class="inline-block relative h-12 text-lustria text-lila md:text-[7rem] -mt-2 md:mt-0 top-2 md:-top-10">
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
    <div class="text-right text-blue mt-20 md:mt-10">
      <p class="md:text-3xl font-bold mr-5">Conocé lo</p>
      <div class="hidden md:block">
          <a href="#services">
            <Button label="que hacemos" size="large"/>
          </a>
      </div>
      <div class="md:hidden">
        <a href="#services">
          <Button label="que hacemos" size="medium"/>
        </a>
      </div>
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