<template>
  <div class="waves w-full">
    <footer class="relative pt-18 pb-17 text-center text-white text-base flex items-center justify-center gap-5 md:gap-10">
      <a
        v-for="(icon, i) in icons"
        :key="i"
        :href="icon.url"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-lila rounded-full cursor-pointer flex items-center justify-center"
      >
        <component :is="icon.component"  class="w-10 h-10" />
      </a>
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
  { component: IconWhatsapp, url: 'https://wa.me/XXXXXXXXXXX' },
  { component: IconInstagram, url: 'https://instagram.com/proa.estudiocreativo' },
  { component: IconEnvelope, url: 'mailto:proaestudiocreativo@gmail.com' },
  { component: IconFacebook, url: 'https://facebook.com/XXXXXXXXXXX' },
  { component: IconLinkedin, url: 'https://linkedin.com/in/XXXXXXXXXXX' },
];
</script>