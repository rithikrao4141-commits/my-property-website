

let slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide(i) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[i].classList.add('active');
}

function nextSlide() {
  index++;
  if (index >= slides.length) index = 0;
  showSlide(index);
}

function prevSlide() {
  index--;
  if (index < 0) index = slides.length - 1;
  showSlide(index);
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

setInterval(nextSlide, 4000);

// start
showSlide(index);
// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

@media (max-width: 768px) {
  nav {
    position: absolute;
    top: 60px;
    right: 10px;
    background: rgba(0,0,0,0.95);
    border-radius: 10px;
    display: none;
    flex-direction: column;
    padding: 15px;
  }

  nav.active {
    display: flex;
  }
}
