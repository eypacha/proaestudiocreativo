<template>
  <section
    class="pt-40 bg-lila text-gray flex flex-col justify-center relative"
    id="services"
    ref="servicesSection"
  >
    <div class="flex max-w-200 mx-auto">
      <div class="w-full md:w-1/2">
        <h2 class="text-7xl font-bold mb-10">
          ¿En qué <span class="text-lustria text-blue">podemos ayudarte?</span>
        </h2>
      </div>
      <div class="w-full md:w-1/2 text-justify text-lg">
        <p>Te ayudamos a darle forma a lo que hacés para que tu proyecto tenga dirección, identidad y presencia.</p>
        <p>Trabajamos con vos para construir una marca que realmente te represente.</p>
        <p>Nuestros servicios están pensados para que puedas conectar con tu audiencia con claridad, coherencia y personalidad.</p>
      </div>
    </div>
    <div>
      <div class="max-w-200 mx-auto">
        <IconHelm class="mb-2"/>
        <p class="uppercase font-bold text-2xl max-w-130 w-full">
          No se trata de sólo de diseño,<br/>
          se trata de contar bien lo que hacés,<br/>
          para conectar con quien lo necesita</p>
      </div>
    </div>
   <div class="pt-20 pb-60">
      <div class="cards flex justify-center gap-4" ref="cardsContainer">
        <Card
          v-for="(card, i) in cards"
          :key="i"
          :title="card.title"
          :subtitle="card.subtitle"
          :text="card.text"
          :class="{ 'mt-8': i % 2 == 0 }"
        />
      </div>
    </div>
    <div class="absolute waves w-full h-40 bottom-0">

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import gsap from "gsap";

import Card from "../Card.vue";
import IconHelm from "../icons/iconHelm.vue";

const cards = [
  {
    title: "Asesoría Estratégica",
    subtitle: "¿Tenés muchas ideas y no sabés por dónde empezar?",
    text: "Acompañamos a marcas y proyectos a definir su propósito, misión, visión y valores. Creamos estrategias de comunicación y marketing que conectan con tu audiencia.",
  },
  {
    title: "Gestión Integral de Redes",
    subtitle: "¿Las redes te quitan más energía de la que querés dedicarles?",
    text: "Nos encargamos de la creación, planificación y gestión de tus redes sociales, generando contenido relevante y atractivo para tu audiencia.",
  },
  {
    title: "Contenido Audiovisual",
    subtitle: "¿Querés mostrar tu proyecto de forma real, creativa?",
    text: "Desarrollamos contenido audiovisual de alta calidad, incluyendo fotografía, video y animación, para potenciar tu presencia en línea.",
  },
  {
    title: "Diseño Web & E-Commerce",
    subtitle: "¿Querés un sitio que se vea bien y funcione de verdad?",
    text: "Creamos sitios web y tiendas en línea personalizados, optimizados para brindar una experiencia de usuario excepcional y potenciar tus ventas.",
  },
];

const servicesSection = ref(null);
const cardsContainer = ref(null);
let observer = null;

onMounted(async () => {
  await nextTick();
  const cardsEls = cardsContainer.value?.children;
  if (!cardsEls) return;

  gsap.set(cardsEls, { y: 80, opacity: 0 });

  observer = new window.IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(cardsEls, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          });
          observer.disconnect();
        }
      });
    },
    { threshold: 0, rootMargin: "-1px 0px 0px 0px" }
  );

  if (servicesSection.value) {
    observer.observe(servicesSection.value);
  }
});
onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped></style>
