
// Tutup modal jika klik di luar
window.onclick = function(event) {
  const modal = document.getElementById("loginModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}


const links = document.querySelectorAll("nav ul li a");
links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});


document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    const href = this.getAttribute("href");
    if (href && href.endsWith(".html")) {
      e.preventDefault();
      document.body.classList.add("fade-slide");
      setTimeout(() => {
        window.location.href = href;
      }, 400); // tunggu animasi selesai
    }
  });
});

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("slide-in");
});



document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    const href = this.getAttribute("href");
    if (href && href.endsWith(".html")) {
      e.preventDefault();
      document.body.classList.add("slide-out");
      setTimeout(() => {
        window.location.href = href;
      }, 400); // tunggu animasi selesai
    }
  });
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    const href = this.getAttribute("href");
    if (href && href.endsWith(".html")) {
      e.preventDefault();

      // Tambahkan efek zoom ke teks yang diklik
      this.classList.add("nav-zoom");

      // Setelah animasi selesai, pindah halaman
      setTimeout(() => {
        window.location.href = href;
      }, 400);
    }
  });
});


