<template>
  <div class="main-content w-full max-w-2xl mx-auto mt-8 p-6 bg-white/90 rounded-xl shadow-lg">
    <div v-if="parsedAssistant" class="text-gray-800 text-lg" style="white-space: normal; word-break: break-word;">
      <h2 class="text-xl font-bold mb-4 text-blue-700">{{ parsedAssistant.metadata?.title || 'Escena' }}</h2>
      <span>
        <template v-for="(token, i) in displayedWords" :key="i">
          <template v-if="token.text === '\n'">
            <br />
          </template>
          <span
            v-else-if="token.isSpecial"
            class="bg-yellow-200 text-yellow-900 font-bold px-1 rounded cursor-pointer transition"
            :class="{ 'ring-2 ring-blue-400': selectedWord === i, 'opacity-50': selectedVerb !== null && selectedWord !== i }"
            @click="handleWordClick(i, token.text)"
          >
            {{ token.text }}
          </span>
          <span v-else>{{ token.text }}</span>
        </template>
      </span>
      <div v-if="showActions" class="mt-8">
        <h3 class="text-lg font-semibold text-gray-700 mb-2">Acciones</h3>
        <ul class="flex flex-wrap gap-2">
          <li v-for="(accion, idx) in acciones" :key="accion">
            <span
              class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-base font-medium cursor-pointer hover:bg-blue-200 transition"
              :class="{ 'ring-2 ring-blue-600': selectedVerb === idx, 'opacity-50': selectedVerb !== null && selectedVerb !== idx }"
              @click="selectVerb(idx)"
            >
              {{ accion }}
            </span>
          </li>
        </ul>
      </div>

    </div>
    <div v-else class="text-gray-400 italic">...</div>
  </div>
</template>


<script setup>
import { computed, ref, watch } from 'vue';
import { useChatStore } from '../stores/chat';


const acciones = [
  'agarrar',
  'mirar',
  'oler',
  'escuchar',
  'atacar',
  'romper',
  'abrir',
  'lanzar',
  'leer',
];

const selectedVerb = ref(null); // índice del verbo seleccionado
const selectedWord = ref(null); // índice de la palabra especial seleccionada
const showActions = ref(false);

function selectVerb(idx) {
  selectedVerb.value = idx;
}

function handleWordClick(i, word) {
  if (selectedVerb.value === null) return;
  selectedWord.value = i;
  // Loguea la frase combinada
  // eslint-disable-next-line no-console
  console.log(`${acciones[selectedVerb.value]} ${word}`);
}

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

const displayedWords = ref([]);

function parseWords(text) {
  // Divide el texto en tokens: palabras normales, palabras especiales ([[...]]), espacios y saltos de línea
  const regex = /(\[\[(.+?)\]\])|(\n)|([ \t]+)|([^\s\[\]\n]+)/g;
  const result = [];
  let match;
  while ((match = regex.exec(text))) {
    if (match[2]) {
      result.push({ text: match[2], isSpecial: true });
    } else if (match[3]) {
      result.push({ text: '\n', isSpecial: false });
    } else if (match[4]) {
      result.push({ text: match[4], isSpecial: false }); 
    } else if (match[5]) {
      result.push({ text: match[5], isSpecial: false });
    }
  }
  return result;
}

async function revealWords(words) {
  displayedWords.value = [];
  showActions.value = false;
  for (let i = 0; i < words.length; i++) {
    displayedWords.value.push(words[i]);
    // Solo animar palabras y especiales, no espacios
    if (!/^\s+$/.test(words[i].text)) {
      await new Promise(res => setTimeout(res, 50));
    }
  }
  showActions.value = true;
}

watch(
  () => parsedAssistant.value?.text,
  async (newText) => {
    if (!newText) {
      displayedWords.value = [];
      return;
    }
    const words = parseWords(newText);
    await revealWords(words);
  },
  { immediate: true }
);
</script>

<style scoped>
</style>
