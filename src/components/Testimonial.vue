<template>
    <div class="text-center text-xl flex flex-col items-center gap-3">
        <iconLike class="mb-3 w-15 animate-heartbeat"/>
        <div class="text-[18px]">"{{ text }}"</div>
        <div class="text-[16px] text-lustria">{{ name }}</div>
    </div>
</template>

<script setup>
import iconLike from './icons/iconLike.vue';

defineProps({
  text: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.animate-heartbeat {
  animation: heartbeat 1s ;
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