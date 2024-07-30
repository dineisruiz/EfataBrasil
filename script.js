    margin-top;
// Atualiza os mapas conforme a seleção da localização
function updateMaps() {
    var locationSelect = document.getElementById("location-select");
    var mapsContainer = document.getElementById("maps-container").children;

    for (var i = 0; i < mapsContainer.length; i++) {
        mapsContainer[i].style.display = "none";
    }

    var selectedLocation = locationSelect.value;
    var selectedMap = document.getElementById(selectedLocation);
    selectedMap.style.display = "block";
}

// Carrossel de imagens
var slideIndex = 0;
showSlides();

function showSlides() {
    var slides = document.getElementsByClassName("carousel-item");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Troca de imagem a cada 2 segundos
}

// Toggle para o menu em dispositivos móveis
var menuToggle = document.querySelector(".menu-toggle");
var navbar = document.querySelector(".navbar nav");

menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("show-menu");
});