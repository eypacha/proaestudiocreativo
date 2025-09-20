<template>
  <div class="main-content w-full max-w-2xl mx-auto mt-8 p-6 bg-white/90 rounded-xl shadow-lg">
    <div v-if="parsedAssistant" class="text-gray-800 text-lg" style="white-space: normal; word-break: break-word;">
      <h2 class="text-xl font-bold mb-4 text-blue-700">{{ parsedAssistant.title || 'Escena' }}</h2>
      <div>{{ typewriterText }}</div>
      <div v-if="parsedAssistant.actions && parsedAssistant.actions.length" class="mt-8">
        <ul class="flex flex-wrap gap-2">
          <li v-for="(accion, idx) in parsedAssistant.actions" :key="accion">
            <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-base font-medium">{{ accion }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div v-else class="text-gray-400 italic">...</div>
  </div>
</template>


<script setup>
import { computed } from 'vue';
import { useChatStore } from '../stores/chat';

const chat = useChatStore();

import { ref, watch } from 'vue';

const parsedAssistant = computed(() => {
  const last = chat.messages.slice().reverse().find(m => m.role === 'assistant');
  if (!last) return null;
  try {
    return typeof last.content === 'string' ? JSON.parse(last.content) : last.content;
  } catch {
    return null;
  }
});

const typewriterText = ref("");

watch(
  () => parsedAssistant.value?.description,
  async (newDesc) => {
    typewriterText.value = "";
    if (!newDesc) return;
    const words = newDesc.split(/(\s+)/); // incluye espacios para mantener formato
    for (let i = 0; i < words.length; i++) {
      typewriterText.value += words[i];
      await new Promise(res => setTimeout(res, words[i].trim() ? 20 : 0));
    }
  },
  { immediate: true }
);
</script>

<style scoped>
</style>
