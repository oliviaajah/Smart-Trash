
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

      // kalau link sama dengan halaman sekarang → reload dengan animasi keluar
      if (window.location.href.includes(href)) {
        document.body.classList.remove("slide-in");
        document.body.classList.add("slide-out");
        setTimeout(() => {
          window.location.reload();
        }, 400);
      } else {
        document.body.classList.remove("slide-in");
        document.body.classList.add("slide-out");
        setTimeout(() => {
          window.location.href = href;
        }, 400);
      }
    }
  });
});

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("slide-in");
});




