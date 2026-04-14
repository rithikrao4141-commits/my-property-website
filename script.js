let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");

let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

setInterval(nextSlide, 3000);

document.querySelector(".next").onclick = nextSlide;

document.querySelector(".prev").onclick = () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
};

dots.forEach((dot, i) => {
  dot.onclick = () => {
    current = i;
    showSlide(current);
  };
});
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});
