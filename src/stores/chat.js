
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useChatStore = defineStore('chat', () => {
  const messages = ref([{ role: 'user', content: 'hola' }]);

  function addMessage(message) {
    messages.value.push(message);
  }

  function setMessages(newMessages) {
    messages.value = newMessages;
  }

  function clearMessages() {
    messages.value = [];
  }

  return {
    messages,
    addMessage,
    setMessages,
    clearMessages,
  };
});
