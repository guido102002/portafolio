(() => {
    "use strict";

    // Año actual en el pie de página
    const anio = document.getElementById("anio");
    if (anio) anio.textContent = new Date().getFullYear();

    // Marca en la navbar la sección que se está viendo
    const enlaces = document.querySelectorAll("[data-seccion]");
    if (!("IntersectionObserver" in window)) return;

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (!entrada.isIntersecting) return;
            enlaces.forEach((enlace) => {
                const activo = enlace.dataset.seccion === entrada.target.id;
                enlace.classList.toggle("active", activo);
                if (activo) {
                    enlace.setAttribute("aria-current", "true");
                } else {
                    enlace.removeAttribute("aria-current");
                }
            });
        });
    }, { rootMargin: "-40% 0px -55% 0px" });

    enlaces.forEach((enlace) => {
        const seccion = document.getElementById(enlace.dataset.seccion);
        if (seccion) observador.observe(seccion);
    });
})();