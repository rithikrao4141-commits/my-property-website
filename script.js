let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");

let current = 0;

// SHOW
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

// NEXT
function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

// AUTO
setInterval(nextSlide, 3000);

// BUTTONS
document.querySelector(".next").onclick = nextSlide;

document.querySelector(".prev").onclick = () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
};

// DOT CLICK
dots.forEach((dot, i) => {
  dot.onclick = () => {
    current = i;
    showSlide(current);
  };
});

// SWIPE (MOBILE)
let startX = 0;

document.querySelector(".slider").addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.querySelector(".slider").addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;

  if (startX > endX + 50) {
    nextSlide();
  } else if (startX < endX - 50) {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }
});
