import { ref, onMounted, onUnmounted } from 'vue';

/**
 * useActiveSectionObserver
 * Detecta la sección visible en pantalla y actualiza el nombre de la sección activa.
 * @param {string[]} sectionIds - Array de ids de las secciones a observar
 * @returns {import('vue').Ref<string>} activeSection
 */
export function useActiveSectionObserver(sectionIds) {
  const activeSection = ref(sectionIds[0]);
  let observer = null;

  onMounted(() => {
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;

    observer = new window.IntersectionObserver(
      (entries) => {
        // Ordenar por el entry más visible
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          activeSection.value = visible[0].target.id;
        }
      },
      {
        threshold: [0.3, 0.6, 1.0],
      }
    );
    sections.forEach(section => observer.observe(section));
  });

  onUnmounted(() => {
    if (observer) observer.disconnect();
  });

  return activeSection;
}
