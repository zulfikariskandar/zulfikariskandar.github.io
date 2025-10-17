// Animasi muncul saat di-scroll (fade-up)
document.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll(".project-card, .about, .contact");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  fadeEls.forEach((el) => observer.observe(el));
});

// Efek smooth scroll ke setiap section
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Form handler (demo)
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector("input[type='text']").value;
    alert(`Terima kasih, ${name}! Pesanmu telah terkirim (demo).`);
    form.reset();
  });
}

// Tambahkan kelas animasi CSS
const style = document.createElement("style");
style.textContent = `
  .show {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.8s ease;
  }
  .project-card, .about, .contact {
    opacity: 0;
    transform: translateY(40px);
  }
`;
document.head.appendChild(style);
