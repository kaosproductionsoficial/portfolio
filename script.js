// Animação de fade-in ao rolar

// Fade-in animation
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Carousel logic
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let index = 0;

function updateCarousel() {
  const item = track.children[0];
  const itemWidth = item.getBoundingClientRect().width + 20; // 10px margem de cada lado
  track.style.transform = `translateX(-${index * itemWidth}px)`;
}


nextBtn.addEventListener('click', () => {
  if (index < track.children.length - 1) index++;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  if (index > 0) index--;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);