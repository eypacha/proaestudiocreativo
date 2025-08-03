<template>
  <section
    class="pt-40 bg-lila text-gray flex flex-col justify-center relative"
    id="services"
    ref="servicesSection"
  >
    <div class="px-7 md:px-10">
      <div class="flex flex-col md:flex-row lg:p-0 lg:mb-10">
        <div class="w-full lg:w-1/2">
            <h2 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-10 lg:w-min lg:mx-auto">
            ¿En qué
            <span class="text-lustria text-blue">podemos ayudarte?</span>
          </h2>
        </div>
        <div class="w-full lg :w-1/2 text-left lg:text-justify text-xl lg:pr-20 flex flex-col justify-end mb-13 font-medium">
          <p>
            Te ayudamos a darle forma a lo que hacés para que tu proyecto tenga
            dirección, identidad y presencia.
          </p>
          <p>
            Trabajamos con vos para construir una marca que realmente te
            represente.
          </p>
          <p>
            Nuestros servicios están pensados para que puedas conectar con tu
            audiencia con claridad, coherencia y personalidad.
          </p>
        </div>
      </div>
      <div class="flex">
        <div class="p-0 w-full md:w-1/2">
          <div class="w-fit mx-auto">
            <IconHelm class="mb-2" />
            <p class="uppercase font-bold md:text-xl max-w-130 w-full text-balance">
              No se trata sólo de diseño,
              se trata de contar bien lo que hacés
              para conectar con quien lo necesita.
            </p>
          </div>
        </div>
      </div>

     


      <div class="pt-20 pb-50">
        <div
          class="cards flex justify-center gap-9 flex-wrap"
          ref="cardsContainer"
        >
          <Card
            v-for="(card, i) in cards"
            :key="i"
            :title="card.title"
            :subtitle="card.subtitle"
            :text="card.text"
            :class="{ 'md:mt-8': i % 2 == 0 }"
          />
        </div>
      </div>
    </div>
    <div class="absolute waves w-full h-40 bottom-0"></div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import gsap from "gsap";

import Card from "../Card.vue";
import IconHelm from "../icons/iconHelm.vue";

const cards = [
  {
    title: "Asesoría <br/> Estratégica",
    subtitle: "¿Tenés muchas ideas pero no sabés por dónde empezar?",
    text: "Acompañamos a marcas y proyectos a definir su propósito, misión, visión y valores. Creamos estrategias de comunicación y marketing que conectan con tu audiencia.",
  },
  {
    title: "Gestión Integral de Redes",
    subtitle: "¿Las redes te demandan más energía de la que querés dedicarles?",
    text: "Nos encargamos de la creación, planificación y gestión de tus redes sociales, generando contenido de valor y atractivo para tu audiencia.",
  },
  {
    title: "Contenido visual: fotografía & video",
    subtitle:
      "¿Querés mostrar tu proyecto de forma real, creativa y sin poses?",
    text: "Creamos piezas visuales pensadas para mostrar tu proyecto tal como es: real, dinámico y con identidad. Reels, videos, fotos y contenido que conectan con tu audiencia y transmiten tu forma de trabajar. Sin poses forzadas ni fórmulas vacías.",
  },
  {
    title: "Diseño & Desarrollo Web",
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
