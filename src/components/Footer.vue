<template>
  <div class="waves w-full">
    <footer class="relative pt-15 pb-20 text-center text-white text-base flex items-center justify-center gap-10">
      <div v-for="(icon, i) in icons" :key="i" class="bg-lila rounded-full cursor-pointer">
        <component :is="icon.component" color="#dbdddd" class="w-10 h-10" />
      </div>
    </footer>
  </div>
</template>

<script setup>
import IconWhatsapp from "@/components/icons/iconWhatsapp.vue";
import IconInstagram from "@/components/icons/iconInstagram.vue";
import IconEnvelope from "@/components/icons/iconEnvelope.vue";
import IconFacebook from "@/components/icons/iconFacebook.vue";
import IconLinkedin from "@/components/icons/iconLinkedin.vue";

const icons = [
  { component: IconWhatsapp },
  { component: IconInstagram },
  { component: IconEnvelope },
  { component: IconFacebook },
  { component: IconLinkedin },
];
</script>