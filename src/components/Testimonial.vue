<template>
    <div class="text-center text-xl flex flex-col items-center gap-3">
        <iconLike class="mb-3 w-15"/>
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
