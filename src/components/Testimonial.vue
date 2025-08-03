<template>
    <div class="text-center text-xl flex flex-col items-center gap-3 max-w-[500px] mx-auto">
        <iconLike ref="iconRef" class="mb-3 w-15" :class="heartbeatClass"/>
        <div class="text-[18px]">"{{ text }}"</div>
        <div class="text-[16px] text-lustria">{{ name }}</div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import iconLike from './icons/iconLike.vue';

const iconRef = ref(null);
const heartbeatClass = ref('');

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

let intervalId;
onMounted(() => {
  intervalId = setInterval(() => {
    heartbeatClass.value = 'animate-heartbeat';
    setTimeout(() => {
      heartbeatClass.value = '';
    }, 1000);
  }, 3000);
});
onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.animate-heartbeat {
  animation: heartbeat 1s forwards;
}
@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }
  10% {
    transform: scale(1.1);
  }
  20% {
    transform: scale(1.2);
  }
  30% {
    transform: scale(1.1);
  }
  40% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1.1);
  }
  60% {
    transform: scale(1);
  }
}
</style>