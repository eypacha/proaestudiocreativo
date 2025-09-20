<template>
  <div class="main-content w-full max-w-2xl mx-auto mt-8 p-6 bg-white/90 rounded-xl shadow-lg min-h-[700px] flex flex-col">
    <div class="flex flex-col flex-1 text-gray-800 text-lg" style="white-space: normal; word-break: break-word;">
      <div v-if="loading || !parsedAssistant" class="text-gray-400 italic flex-1 flex items-center justify-center text-2xl">...</div>
      <div v-else class="flex flex-col flex-1 gap-6">
        <h2
          class="text-xl font-bold text-blue-700 transition-opacity duration-700"
          :style="{ opacity: showTitle ? 1 : 0 }"
        >{{ typewriterTitle }}</h2>
          <template v-if="chat.messages.filter(m => m.role === 'assistant').length > 1">
            <div
              class="transition-opacity duration-700 rounded-md h-[440px] overflow-y-auto"
              :style="{ opacity: showText ? 1 : 0 }"
            >{{ typewriterText }}</div>
            <div v-if="parsedAssistant.actions && parsedAssistant.actions.length" class="mt-8 outline-dashed outline-1 outline-gray-300">
              <ul class="flex flex-wrap gap-4">
                <li v-for="(accion, idx) in parsedAssistant.actions" :key="accion">
                  <div
                    class="bg-blue-100 cursor-pointer text-blue-800 px-3 py-1 rounded-full text-base font-medium transition-opacity duration-700"
                    :style="{ opacity: showActions[idx] ? 1 : 0, pointerEvents: showActions[idx] ? 'auto' : 'none' }"
                    @click="handleActionClick(accion)"
                  >{{ accion }}</div>
                </li>
              </ul>
            </div>
          </template>
      </div>
    </div>
  </div>
</template>


<script setup>
import { computed, ref, watch, nextTick } from 'vue';
import { useChatStore } from '../stores/chat';
import { getLLMText } from '../llm';

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

const typewriterTitle = ref("");
const typewriterText = ref("");
const showTitle = ref(false);
const showText = ref(false);
const showActions = ref([false, false, false]);
const loading = ref(false);

async function handleActionClick(accion) {
  if (loading.value) return;
  loading.value = true;
  chat.addMessage({ role: 'user', content: accion });
  try {
    const history = chat.messages.map(m => ({ role: m.role, content: m.content }));
  const text = await getLLMText({ messages: history });
  console.log('LLM response:', text);
  chat.addMessage({ role: 'assistant', content: text });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Error LLM:', e);
  } finally {
    loading.value = false;
  }
}

watch(
  () => parsedAssistant.value,
  async (newVal) => {
    showTitle.value = false;
    showText.value = false;
    // Inicializar showActions con el largo correcto de las acciones
    const actionsLength = Array.isArray(newVal?.actions) ? newVal.actions.length : 0;
    showActions.value = Array(actionsLength).fill(false);
    await nextTick();
    typewriterTitle.value = "";
    typewriterText.value = "";
    if (!newVal) return;
    // Animar título palabra por palabra
    showTitle.value = true;
    const titleWords = (newVal.title || "Escena").split(/(\s+)/);
    for (let i = 0; i < titleWords.length; i++) {
      typewriterTitle.value += titleWords[i];
      await new Promise(res => setTimeout(res, titleWords[i].trim() ? 20 : 0));
    }
    // Animar texto palabra por palabra
    await new Promise(res => setTimeout(res, 100));
    showText.value = true;
    typewriterText.value = "";
    const descWords = (newVal.description || "").split(/(\s+)/);
    for (let i = 0; i < descWords.length; i++) {
      typewriterText.value += descWords[i];
      await new Promise(res => setTimeout(res, descWords[i].trim() ? 10 : 0));
    }
    // Esperar y mostrar acciones una a una
      for (let i = 0; i < actionsLength; i++) {
        await new Promise(res => setTimeout(res, 200));
        showActions.value[i] = true;
      }
    }
  ,
  { immediate: true }
);
</script>

<style scoped>
</style>
