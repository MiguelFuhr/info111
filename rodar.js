const track = document.getElementById("track");
const cards = document.querySelectorAll(".card");
const total = cards.length;
let index = 0;

function updateCarousel() {
    track.style.transform = `translateX(-${index * 220}px)`;
}

function next() {
    index++;
    if (index >= total) index = 0; // volta pro começo
    updateCarousel();
}

function prev() {
    index--;
    if (index < 0) index = total - 1; // vai pro último
    updateCarousel();
}