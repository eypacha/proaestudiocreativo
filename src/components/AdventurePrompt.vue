<template>
  <div class="flex flex-col gap-4 max-w-md mx-auto p-6 bg-white/80 rounded-xl shadow-lg mt-8">
    <label for="prompt-input" class="text-lg font-semibold text-gray-700">Cuentame una historia sobre...</label>
    <input
      id="prompt-input"
      v-model="userPrompt"
      type="text"
      placeholder="una carpa de circo abandonada"
      @keyup.enter="submitPrompt"
      class="border border-gray-300 rounded-md px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
    />
    <button
      @click="submitPrompt"
      class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition disabled:opacity-50"
      :disabled="!userPrompt.trim()"
    >
      Comenzar
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useChatStore } from '../stores/chat';
import { getLLMText } from '../llm';

const userPrompt = ref("una vieja fábrica de robots abandonada");
const chat = useChatStore();

async function submitPrompt() {
  if (!userPrompt.value.trim()) return;
  chat.clearMessages();
  const prompt = `Cuentame una historia sobre ${userPrompt.value.trim()}`;
  chat.addMessage({ role: 'user', content: prompt });
  userPrompt.value = "";

  // Llama al LLM y loguea la respuesta
  try {
    const text = await getLLMText({ prompt });
    console.log('Respuesta LLM:', text);
    chat.addMessage({ role: 'assistant', content: text });
  } catch (e) {
    console.error('Error LLM:', e);
  }
}
</script>

<style scoped>
</style>
