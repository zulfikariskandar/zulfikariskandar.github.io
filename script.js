// Smooth scroll ke section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Navbar shadow saat scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(15, 23, 42, 0.95)";
    navbar.style.color = "white";
  } else {
    navbar.style.background = "rgba(255,255,255,0.9)";
    navbar.style.color = "#0f172a";
  }
});

// Simulasi kirim pesan
function sendMessage(e) {
  e.preventDefault();
  alert("Pesan berhasil dikirim! Terima kasih telah menghubungi saya 😊");
  e.target.reset();
}
