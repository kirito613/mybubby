// Navigasi antar halaman
const navLinks = document.querySelectorAll('nav ul li a');
const pages = document.querySelectorAll('.page-content');

// Fungsi untuk menampilkan halaman
function showPage(pageId) {
  pages.forEach(page => {
    if (page.id === pageId) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  });
}

// Event listener untuk navigasi
navLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // Mencegah reload
    const pageId = this.getAttribute('data-page');
    showPage(pageId);
  });
});

// Form kontak (jika ada di halaman kontak)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Pesan berhasil dikirim! Terima kasih.');
  });
}
