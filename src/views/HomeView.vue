<template>
  <div class="home-view">
    <Navbar />
    <Hero />
    <Section1 />
    <Section2 />
    <Section3 />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import Footer from '@/components/Footer.vue'
import Section1 from '@/components/sections/Section1.vue'
import Section2 from '@/components/sections/Section2.vue'
import Section3 from '@/components/sections/Section3.vue'
</script>
