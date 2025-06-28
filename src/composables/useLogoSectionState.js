import { ref, onMounted, onUnmounted } from 'vue';

/**
 * useLogoSectionState
 * Detecta en qué sección está visualmente el logo (por superposición) y expone el estado para sincronizar colores.
 * @param {string[]} sectionIds - Array de ids de las secciones relevantes (en orden de prioridad visual)
 * @param {string} logoSelector - Selector del logo (por defecto '.logo-anim')
 * @returns {import('vue').Ref<string>} logoSection
 */
export function useLogoSectionState(sectionIds, logoSelector = '.logo-anim') {
  const logoSection = ref(sectionIds[0]);

  function checkLogoSection() {
    const logo = document.querySelector(logoSelector);
    if (!logo) return;
    const logoRect = logo.getBoundingClientRect();
    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (!section) continue;
      const sectionRect = section.getBoundingClientRect();
      if (
        logoRect.bottom > sectionRect.top &&
        logoRect.top < sectionRect.bottom
      ) {
        logoSection.value = id;
        return;
      }
    }
    // Si no hay superposición, default a la primera
    logoSection.value = sectionIds[0];
  }

  onMounted(() => {
    window.addEventListener('scroll', checkLogoSection, { passive: true });
    window.addEventListener('resize', checkLogoSection);
    setTimeout(checkLogoSection, 100); // Primer chequeo tras render
  });
  onUnmounted(() => {
    window.removeEventListener('scroll', checkLogoSection);
    window.removeEventListener('resize', checkLogoSection);
  });

  return logoSection;
}
