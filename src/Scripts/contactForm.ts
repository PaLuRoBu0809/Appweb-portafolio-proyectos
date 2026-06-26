// src/scripts/contactForm.ts

const form = document.getElementById('contact-form') as HTMLFormElement;
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');
const toastIcon = document.getElementById('toast-icon');

// Función súper robusta para mostrar el Toast
function showToast(message: string, type: 'success' | 'error') {
  if (!toast || !toastMessage || !toastIcon) return;

  toastMessage.innerText = message;
  
  // 1. Limpiamos colores viejos por si acaso
  toast.classList.remove('border-green-500', 'text-green-400', 'border-red-500', 'text-red-400');

  // 2. Aplicamos colores según el tipo
  if (type === 'success') {
    toast.classList.add('border-green-500', 'text-green-400');
    toastIcon.innerHTML = "✓";
  } else {
    toast.classList.add('border-red-500', 'text-red-400');
    toastIcon.innerHTML = "✕";
  }

  // 3. Lo hacemos visible
  toast.classList.remove('opacity-0', 'translate-y-5', 'pointer-events-none');
  toast.classList.add('opacity-100', 'translate-y-0');

  // 4. Lo ocultamos después de 4 segundos
  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', 'translate-y-5', 'pointer-events-none');
  }, 4000);
}

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault(); 

    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    const originalButtonText = submitButton.innerText;
    
    submitButton.innerText = 'Enviando...';
    submitButton.disabled = true;

    const formData = new FormData(form);
    formData.append("access_key", "345a1e37-bd2b-4e9c-845a-a2060e6ba84b"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        showToast("Mensaje enviado con éxito. ¡Hablamos pronto!", "success");
        form.reset(); 
      } else {
        showToast("Hubo un error al enviar el mensaje.", "error");
      }
    } catch (error) {
      console.error("Error:", error);
      showToast("Error de conexión. Revisa tu internet.", "error");
    } finally {
      submitButton.innerText = originalButtonText;
      submitButton.disabled = false;
    }
  });
}