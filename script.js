let slides = document.querySelectorAll('.slide');
let



let slides = document.querySelectorAll('.slide');
let index = 0;

// Show slide function
function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.style.display = "none";
  });
  slides[i].style.display = "block";
}

// Next slide
function nextSlide() {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  showSlide(index);
}

// Prev slide
function prevSlide() {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  showSlide(index);
}

// Auto slide every 4 sec
setInterval(nextSlide, 4000);

// Button controls
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Init
showSlide(index);

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
