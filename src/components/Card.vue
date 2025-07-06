<template>
  <div class="card group relative w-45 h-62 [perspective:1000px]">
    <div
      class="front absolute inset-0 bg-gray text-blue leading-4 rounded-lg p-3 flex flex-col justify-between gap-3 [backface-visibility:hidden] [transition:transform_0.6s_cubic-bezier(.4,0,.2,1)] z-20 group-hover:rotate-y-[-180deg]"
    >
      <div class="bg-blue rounded-lg aspect-[5/4]">
      </div>
      <div class="flex-1 text-left px-1">
        <h3 class="w-full text-lg text-balance leading-4 font-bold mb-2">{{ title }}</h3>
        <p class="text-sm font-medium mt-1 leading-4" v-if="subtitle">{{ subtitle }}</p>
      </div>
    </div>
    <div class="back absolute inset-0 bg-gray text-blue rounded-lg p-4 flex items-center justify-center [backface-visibility:hidden] [transition:transform_0.6s_cubic-bezier(.4,0,.2,1)] rotate-y-180 z-10 group-hover:rotate-y-0">
      <p class="text-sm text-left">{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
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
  }
});
</script>
