<template>
  <div class="bg-gray text-blue font-bold leading-4 w-40 h-55 rounded-lg p-3 flex flex-col justify-between gap-3">
    <div class="flex-1 flex items-center">
      <h3 class="text-center w-full">{{ title }}</h3>
    </div>
    <div class="bg-lila rounded-lg aspect-square">
      <!-- ...existing code... -->
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>
