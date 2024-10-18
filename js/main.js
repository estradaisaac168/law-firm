const scrollUpButton = document.getElementById('scrollUp');

// Mostrar el botón después de hacer scroll
window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        scrollUpButton.classList.add('show'); // Mostrar con animación
    } else {
        scrollUpButton.classList.remove('show'); // Ocultar con animación
    }
});

// Scroll suave al hacer clic en el botón de Scroll Up
scrollUpButton.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



const elementos = document.querySelectorAll('.title-animation, .text-animation, .animation-left, .animation-right');

// Creamos el observer usando IntersectionObserver
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');  // Añadimos la clase cuando el elemento entra en la vista
        }
    });
});

// Observamos cada título y descripción
elementos.forEach(el => {
    observer.observe(el);
});



// Efectt navbar
window.onscroll = function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Cambia 50 por el número de píxeles que prefieras
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};



// document.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
// });

// document.addEventListener('selectstart', function (e) {
//     e.preventDefault();
// });

// document.addEventListener('keydown', function (e) {
//     if (e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 'x')) {
//         e.preventDefault();
//     }
// });





