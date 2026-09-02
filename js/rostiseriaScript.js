// Menú móvil
const toggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

toggle.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen);
  toggle.textContent = isOpen ? '✕' : '☰';
});

mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  });
});

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => io.observe(el));

// Formulario de contacto / pedido (ejemplo)
const contactForm = document.querySelector('#contacto form');
if (contactForm){
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Formulario de ejemplo — conectá esto a tu email, WhatsApp o servicio de pedidos.');
  });
}

// Formulario de comentarios (ejemplo)
const commentForm = document.getElementById('comentarioForm');
if (commentForm){
  commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('¡Gracias por tu comentario! (formulario de ejemplo — conectalo a tu email o base de datos para guardarlos de verdad).');
    commentForm.reset();
  });
}