/* ─── STICKY HEADER ─── */
const header = document.getElementById('stickyHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

/* ─── FAQ ACCORDION ─── */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
  btn.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); btn.click(); }
  });
});

/* ─── SCROLL REVEAL ─── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ─── PHOTO PLACEHOLDERS ─── */
const photoContainerSelector = '.intro-photo-wrap, .intro-pain-img, .pain-img-wrap, .why-photo-wrap, .about-photo-wrap, .reason-card-img';

document.querySelectorAll(photoContainerSelector + ' img').forEach(img => {
  const container = img.closest(photoContainerSelector);
  if (!container) return;
  const markLoaded = () => container.classList.add('has-photo');
  if (img.complete && img.naturalWidth > 0) {
    markLoaded();
  } else {
    img.addEventListener('load', markLoaded);
  }
});
