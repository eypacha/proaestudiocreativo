<template>
  <div class="home-view">
    <LogoAnim/>
    <Navbar />
    <Hero />
    <Intro />
    <Services />
    <Section3 />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import LogoAnim from '@/components/LogoAnim.vue'
import Hero from '@/components/Hero.vue'
import Intro from '@/components/sections/Intro.vue'
import Services from '@/components/sections/Services.vue'
import Section3 from '@/components/sections/Section3.vue'
import Footer from '@/components/Footer.vue'
</script>
