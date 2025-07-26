<template>
  <div
    class="card relative w-52 h-73 [perspective:1000px]"
    @touchstart="flipped = !flipped"
    @mouseenter="flipped = true"
    @mouseleave="flipped = false"
  >
    <div
      class="w-full h-full absolute inset-0 [transform-style:preserve-3d] [transition:transform_0.6s_cubic-bezier(.4,0,.2,1)]"
      :style="flipped ? 'transform: rotateY(180deg);' : ''"
    >
      <div
        class="front absolute inset-0 bg-gray text-blue leading-4 rounded-lg p-3 flex flex-col justify-between gap-3 [backface-visibility:hidden] z-20"
      >
        <div class="bg-blue rounded-lg aspect-[5/4]"></div>
        <div class="flex-1 text-left px-1">
          <h3 class="w-full text-lg text-balance leading-[18px] font-bold mb-2" v-html="title"/>
          <p class="text-[14px] font-medium mt-1 leading-4" v-if="subtitle" v-html="subtitle"/>
        </div>
      </div>
      <div
        class="back absolute inset-0 bg-blue text-gray rounded-lg p-4 flex items-center justify-center [backface-visibility:hidden] rotate-y-180 z-10"
      >
        <div>
          <div class="flex mb-2 gap-1">
            <IconHelm color="var(--color-lila)" class="w-4"/>
            <IconHelm color="var(--color-lila)" class="w-4"/>
            <IconHelm color="var(--color-lila)" class="w-4"/>
          </div>
          <p class="text-sm text-left">{{ text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue';
import IconHelm from './icons/iconHelm.vue';

const flipped = ref(false);

defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>
