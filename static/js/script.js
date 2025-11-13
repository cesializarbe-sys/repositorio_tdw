// 🌐 --- MENÚ RESPONSIVE ---
const menuToggle = document.getElementById('menu-toggle');
const menuResponsive = document.getElementById('menu-responsive');

menuToggle.addEventListener('click', () => {
  menuResponsive.classList.toggle('hidden');
});

// 🔄 --- CARRUSEL ---
const carousel = document.getElementById('carousel');
const slides = carousel.querySelectorAll('img');
let index = 0;

function showSlide(i) {
  const slideWidth = slides[0].clientWidth;
  carousel.style.transform = `translateX(-${i * slideWidth}px)`;
}

document.getElementById('next').addEventListener('click', () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

document.getElementById('prev').addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 4000);

window.addEventListener('resize', () => showSlide(index));

// 🧭 --- EFECTO SCROLL EN HEADER ---
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});