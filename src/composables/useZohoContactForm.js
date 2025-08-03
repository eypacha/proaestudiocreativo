import { ref } from 'vue';

export function useZohoContactForm() {
  const nombre = ref("");
  const email = ref("");
  const mensaje = ref("");

  const errors = ref({});
  const isSubmitting = ref(false);
  const showSuccess = ref(false);
  const showError = ref(false);

  const validateForm = () => {
    const errs = {};
    if (!nombre.value.trim()) {
      errs.nombre = "El nombre es obligatorio.";
    }
    if (!email.value.trim()) {
      errs.email = "El email es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      errs.email = "El email no es válido.";
    }
    if (!mensaje.value.trim()) {
      errs.mensaje = "El mensaje es obligatorio.";
    }
    errors.value = errs;
    return Object.keys(errs).length === 0;
  };

  const submitForm = async () => {
    if (!validateForm()) return;
    isSubmitting.value = true;
    showSuccess.value = false;
    showError.value = false;
    try {
      // Crear iframe oculto para el envío (sin abrir nueva ventana)
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.name = 'contact-form-iframe';
      document.body.appendChild(iframe);

      // Crear formulario que apunte al iframe oculto
      const formElement = document.createElement('form');
      formElement.action = import.meta.env.VITE_ZOHO_FORM_URL;
      formElement.method = 'POST';
      formElement.target = 'contact-form-iframe';
      formElement.style.display = 'none';

      // Crear campos ocultos
      const nameField = document.createElement('input');
      nameField.type = 'hidden';
      nameField.name = 'SingleLine';
      nameField.value = nombre.value;

      const emailField = document.createElement('input');
      emailField.type = 'hidden';
      emailField.name = 'Email';
      emailField.value = email.value;

      const messageField = document.createElement('input');
      messageField.type = 'hidden';
      messageField.name = 'MultiLine';
      messageField.value = mensaje.value;

      // Agregar campos al formulario
      formElement.appendChild(nameField);
      formElement.appendChild(emailField);
      formElement.appendChild(messageField);

      // Agregar al DOM y enviar
      document.body.appendChild(formElement);
      formElement.submit();

      // Limpiar elementos después de un tiempo
      setTimeout(() => {
        if (document.body.contains(formElement)) {
          document.body.removeChild(formElement);
        }
        if (document.body.contains(iframe)) {
          document.body.removeChild(iframe);
        }
      }, 2000);

      // Reset form on success
      nombre.value = "";
      email.value = "";
      mensaje.value = "";
      showSuccess.value = true;
      setTimeout(() => { showSuccess.value = false; }, 5000);
    } catch (e) {
      showError.value = true;
      setTimeout(() => { showError.value = false; }, 5000);
    } finally {
      isSubmitting.value = false;
    }
  };

  return {
    nombre,
    email,
    mensaje,
    errors,
    isSubmitting,
    showSuccess,
    showError,
    submitForm
  };
}
