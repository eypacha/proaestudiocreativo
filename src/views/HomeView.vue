<template>
  <div class="home-view">
    <LogoAnim/>
    <Navbar />
    <Hero />
    <Intro />
    <About />
    <Services />
    <Testimonial/>
    <div class="min-h-[100dvh] flex flex-col items-center justify-between">
      <Contact/>
      <Footer/>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Navbar from '@/components/Navbar.vue'
import LogoAnim from '@/components/LogoAnim.vue'
import Hero from '@/components/Hero.vue'
import Intro from '@/components/sections/Intro.vue'
import Services from '@/components/sections/Services.vue'
import Testimonial from '@/components/sections/Testimonials.vue'
import About from '@/components/sections/About.vue'
import Contact from '@/components/sections/Contact.vue'
import Footer from '@/components/Footer.vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
