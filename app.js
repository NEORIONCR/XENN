const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.site-menu');

function setMenuOpen(open) {
  document.body.classList.toggle('menu-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  menu.inert = !open;
}

menuButton.addEventListener('click', () => {
  setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
});

menu.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenuOpen(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false);
    menuButton.focus();
  }
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const revealElements = document.querySelectorAll('.reveal');

if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('js-motion');
  let motionAnimate;

  // Motion's JavaScript build adds the entrance easing when available.
  // CSS transitions below remain functional if its CDN is unreachable.
  import('https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm')
    .then((motion) => { motionAnimate = motion.animate; })
    .catch(() => {});

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const element = entry.target;
      element.classList.add('is-visible');
      if (motionAnimate) {
        motionAnimate(element, { opacity: [0, 1], y: [28, 0] }, {
          duration: .78,
          easing: [.22, 1, .36, 1],
        });
      }
      observer.unobserve(element);
    }
  }, { threshold: .12, rootMargin: '0px 0px -25px 0px' });

  revealElements.forEach((element) => observer.observe(element));
}
