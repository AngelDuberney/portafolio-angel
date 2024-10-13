// Selecciona el contenedor de la sección
const contenedor = document.querySelector('.contenedor');

// Agrega un evento de clic para deslizar la imagen y revelar el texto
contenedor.addEventListener('click', function() {
  contenedor.classList.toggle('revelar'); // Aplica la clase que desata las animaciones
});

// Selecciona el enlace para la información personal
const personalInfoLink = document.querySelector('#personal-info-link');

// Añade el evento de clic
personalInfoLink.addEventListener('click', function (event) {
  event.preventDefault(); // Evita la redirección automática
  const confirmacion = confirm("¿Seguro? ¡Vas a ver información muy personal!");
  
  if (confirmacion) {5
    // Redirige a la nueva página si el usuario confirma
    window.location.href = 'informacion-personal.html';
  }
});

// Selecciona los elementos
const botonIzquierda = document.getElementById('scroll-izquierda');
const botonDerecha = document.getElementById('scroll-derecha');
const carreteImagenes = document.getElementById('carrete-imagenes');

// Función para mover hacia la izquierda
botonIzquierda.addEventListener('click', function() {
    carreteImagenes.scrollBy({
        left: -200, // Mueve 200px hacia la izquierda
        behavior: 'smooth' // Scroll suave
    });
});

// Función para mover hacia la derecha
botonDerecha.addEventListener('click', function() {
    carreteImagenes.scrollBy({
        left: 200, // Mueve 200px hacia la derecha
        behavior: 'smooth' // Scroll suave
    });
});
