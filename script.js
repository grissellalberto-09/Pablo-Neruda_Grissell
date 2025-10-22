/**
 * Archivo: script.js
 * Funcionalidad: Interactividad básica para la página de Pablo Neruda
 */

// 1. Mensaje de bienvenida y verificación de carga en la consola
document.addEventListener('DOMContentLoaded', () => {
    console.log("¡Bienvenido a la página homenaje a Pablo Neruda!");
    console.log("El DOM (Document Object Model) se ha cargado completamente. El script está activo.");
});


// 2. Desplazamiento Suave (Smooth Scrolling)
// Permite que la navegación entre secciones (ej. al hacer clic en 'Biografía') sea fluida.

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Detiene el salto instantáneo del navegador
        e.preventDefault();

        // Obtiene el ID del destino (ej. '#biografia')
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Aplica el desplazamiento suave al elemento
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Asegura que el elemento de destino esté en la parte superior
            });
        }
    });
});

// Puedes añadir más funcionalidades aquí en el futuro (ej. un carrusel de imágenes o validación de formulario)
