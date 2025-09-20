<template>
  <div class="main-content w-full max-w-2xl mx-auto mt-8 p-6 bg-white/90 rounded-xl shadow-lg">
    <div v-if="parsedAssistant" class="text-gray-800 text-lg" style="white-space: normal; word-break: break-word;">
      <h2 class="text-xl font-bold mb-4 text-blue-700">{{ parsedAssistant.metadata?.title || 'Escena' }}</h2>
      <div>{{ parsedAssistant.text }}</div>
    </div>
    <div v-else class="text-gray-400 italic">...</div>
  </div>
</template>


<script setup>
import { computed } from 'vue';
import { useChatStore } from '../stores/chat';

const chat = useChatStore();

const parsedAssistant = computed(() => {
  const last = chat.messages.slice().reverse().find(m => m.role === 'assistant');
  if (!last) return null;
  try {
    return typeof last.content === 'string' ? JSON.parse(last.content) : last.content;
  } catch {
    return null;
  }
});
</script>

<style scoped>
</style>
