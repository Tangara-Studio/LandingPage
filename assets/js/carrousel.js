const images = [
    'assets/images/TangaraCharacters/TS-dino.png',
    'assets/images/TangaraCharacters/EmileDubois.png',
    'assets/images/TangaraCharacters/CapAnky.png',
    'assets/images/TangaraCharacters/CrewMember.png',
];

let currentIndex = 0;
const imgElement = document.getElementById('carousel-img');

// Función para cambiar la imagen
function changeImage() {
    // Elimina la clase visible para hacer la salida animada
    imgElement.classList.remove('visible');
    imgElement.classList.add('invisible');

    // Espera a que la animación de salida termine (1 segundo)
    setTimeout(() => {
        // Cambia la imagen
        imgElement.src = images[currentIndex];

        // Vuelve a hacer visible la nueva imagen
        imgElement.classList.remove('invisible');
        imgElement.classList.add('visible');

        // Cambia el índice de la imagen actual
        currentIndex = (currentIndex + 1) % images.length; // Reinicia al principio al llegar al final
    }, 1000); // Tiempo igual al de la animación
}

// Inicializa el carrusel con la primera imagen
imgElement.src = images[currentIndex];
imgElement.classList.add('visible');
currentIndex++;

// Cambia la imagen cada 4 segundos
setInterval(changeImage, 4000);