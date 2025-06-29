<template>
  <section
    class=" py-40 px-10 bg-lila text-gray text-center flex flex-col justify-center relative"
    id="services"
    ref="servicesSection"
  >
    <h2 class="text-5xl font-bold mb-10">¿En qué podemos ayudarte?</h2>
    <p class="mb-10 max-w-170 mx-auto text-lg">
      Acompañamos proyectos creativos, culturales y con propósito a darle forma
      su identidad y comunicar desde lo que los hace únicos. Nuestros servicios
      están pensados para que tu marca conecte co claridad, coherencia y
      personalidad.
    </p>
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
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import Card from "../Card.vue";
import gsap from "gsap";

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
    { threshold: 1 }
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
