<template>
  <section class="min-h-[100dvh] py-40 px-10 bg-lila text-gray text-center" id="services">
    <h2 class="text-4xl font-bold mb-10">¿En qué podemos ayudarte?</h2>
    <p class="mb-10 max-w-170 mx-auto">Acompañamos proyectos creativos, culturales y con propósito a darle forma su identidad y comunicar desde lo que los hace únicos. Nuestros servicios están pensados para que tu marca conecte co claridad, coherencia y personalidad.</p>
    <div class="cards flex justify-center gap-4">
      <Card
        v-for="(card, i) in cards"
        :key="i"
        :title="card.title"
        :text="card.text"
        :class="{'mt-8': (i % 2 == 0)}" />
    </div>
  </section>
</template>

<script setup>
import Card from '../Card.vue'

const cards = [
  {
      title: 'Asesorías estratégicas',
      text: 'Acompañamos a marcas y proyectos a definir su propósito, misión, visión y valores. Creamos estrategias de comunicación y marketing que conectan con tu audiencia.'
  },
  {
    title: 'Mentorías 1 a 1',
    text: 'Sesiones personalizadas para guiarte en el desarrollo de tu marca, desde la conceptualización hasta la implementación de estrategias efectivas.'

  },
  {
    title: 'Gestión integral de redes',
    text: 'Nos encargamos de la creación, planificación y gestión de tus redes sociales, generando contenido relevante y atractivo para tu audiencia.'
   },
  {
    title: 'Contenido audiovisual',
    text: 'Desarrollamos contenido audiovisual de alta calidad, incluyendo fotografía, video y animación, para potenciar tu presencia en línea.'
  },
  {
    title: 'Diseño Web & E-Commerce',
    text: 'Creamos sitios web y tiendas en línea personalizados, optimizados para brindar una experiencia de usuario excepcional y potenciar tus ventas.'
  } 
]

</script>