// Navigation between "pages"
function navigate(sectionId) {
  const pages = document.querySelectorAll('.content-page');
  pages.forEach(page => page.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
}

// Toggle promo options
function togglePromo(show) {
  const options = document.getElementById('promo-options');
  options.style.display = show ? 'block' : 'none';
}
