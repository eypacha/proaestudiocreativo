<template>
  <div class="main-content w-full max-w-2xl mx-auto mt-8 p-6 bg-white/90 rounded-xl shadow-lg min-h-[700px] flex flex-col">
  <div class="flex flex-col flex-1 text-gray-800 text-lg" style="white-space: normal; word-break: break-word;">
      <div v-if="!parsedAssistant" class="text-gray-400 italic">...</div>
      <h2
        v-if="parsedAssistant"
        class="text-xl font-bold mb-4 text-blue-700 transition-opacity duration-700"
        :style="{ opacity: showTitle ? 1 : 0 }"
      >{{ parsedAssistant.title || 'Escena' }}</h2>
      <div
        v-if="parsedAssistant"
        class="transition-opacity duration-700 rounded-md flex-1 min-h-[200px] overflow-y-auto"
        :style="{ opacity: showText ? 1 : 0 }"
      >{{ typewriterText }}</div>
      <div v-if="parsedAssistant && parsedAssistant.actions && parsedAssistant.actions.length">
        <ul class="flex flex-wrap gap-4">
          <li v-for="(accion, idx) in parsedAssistant.actions" :key="accion">
            <div
              class="bg-blue-100 cursor-pointer text-blue-800 px-3 py-1 rounded-full text-base font-medium transition-opacity duration-700"
              :style="{ opacity: showActions[idx] ? 1 : 0 }"
            >{{ accion }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script setup>
import { computed } from 'vue';
import { useChatStore } from '../stores/chat';

const chat = useChatStore();

import { ref, watch, nextTick } from 'vue';

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
const showTitle = ref(false);
const showText = ref(false);
const showActions = ref([false, false, false]);

watch(
  () => parsedAssistant.value,
  async (newVal) => {
    showTitle.value = false;
    showText.value = false;
    showActions.value = [false, false, false];
    await nextTick();
    if (!newVal) return;
    // Mostrar título
    showTitle.value = true;
    // Esperar un poco y mostrar texto
    await new Promise(res => setTimeout(res, 400));
    typewriterText.value = newVal.description || "";
    showText.value = true;
    // Esperar y mostrar acciones una a una
    if (Array.isArray(newVal.actions)) {
      for (let i = 0; i < newVal.actions.length; i++) {
        await new Promise(res => setTimeout(res, 250));
        showActions.value[i] = true;
      }
    }
  },
  { immediate: true }
);
</script>

<style scoped>
</style>
