<template>
  <div class="home-view">
    d
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { getLLMText } from '../llm';
import { useChatStore } from '../stores/chat';

const chat = useChatStore();

onMounted(async () => {

  const text = await getLLMText({
    prompt: chat.messages.map(m => m.content).join('\n'),
  });
  
  console.log('Respuesta LLM:', text);
  chat.addMessage({ role: 'assistant', content: text });
});
</script>
