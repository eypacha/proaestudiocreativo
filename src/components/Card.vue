<template>
  <div class="card group relative w-40 h-55 [perspective:1000px]">
    <div
      class="front absolute inset-0 bg-gray text-blue font-bold leading-4 rounded-lg p-3 flex flex-col justify-between gap-3 [backface-visibility:hidden] [transition:transform_0.6s_cubic-bezier(.4,0,.2,1)] z-20 group-hover:rotate-y-[-180deg]"
    >
      <div class="flex-1 flex items-center">
        <h3 class="text-center w-full text-balance">{{ title }}</h3>
      </div>
      <div class="bg-lila rounded-lg aspect-square">
        <!-- ...existing code... -->
      </div>
    </div>
    <div class="back absolute inset-0 bg-gray text-blue rounded-lg p-4 flex items-center justify-center [backface-visibility:hidden] [transition:transform_0.6s_cubic-bezier(.4,0,.2,1)] rotate-y-180 z-10 group-hover:rotate-y-0">
      <p class="text-xs">{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  }
});
</script>
