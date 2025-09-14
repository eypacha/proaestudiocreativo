
<template>
  <div class="home-view">
  <AdventurePrompt v-if="!hasUserMessage" />
  <MainContent v-else />
  </div>
</template>

<script setup>
import AdventurePrompt from '../components/AdventurePrompt.vue';
import MainContent from '../components/MainContent.vue';
import { useChatStore } from '../stores/chat';
import { computed } from 'vue';

const chat = useChatStore();
const hasUserMessage = computed(() => chat.messages.some(m => m.role === 'user'));
</script>
