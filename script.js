// A small 3D tilt effect for the hero card
const card = document.getElementById("tiltCard");

if (card && window.matchMedia("(pointer: fine)").matches) {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 16;
    const rotateX = (0.5 - (y / rect.height)) * 16;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
}

// Reveal sections gently as they enter the screen
const revealItems = document.querySelectorAll(
  ".content-section, .contact-section"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => {
    item.classList.add("reveal");
    observer.observe(item);
  });
}
