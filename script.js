// SELECT
let slides = document.querySelectorAll(".slide");
let current = 0;

// FUNCTION
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

// NEXT
function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

// AUTO SLIDE (3 sec)
setInterval(nextSlide, 3000);

// BUTTONS
document.querySelector(".next").onclick = nextSlide;
document.querySelector(".prev").onclick = () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
};
