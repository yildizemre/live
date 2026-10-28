// En güncel Android paketi — yeni sürümde yalnızca bu satır değişir
const APK_URL = 'https://expo.dev/artifacts/eas/SukRIAlrNeEE_ayUfZnL0w81ly73p5NYXXJ6JtdC6Ik.apk';
document.getElementById('apk').href = APK_URL;

// Mobil menü
const burger = document.getElementById('burger');
const links = document.getElementById('links');
const setMenu = (open) => { links.classList.toggle('open', open); burger.setAttribute('aria-expanded', open); burger.setAttribute('aria-label', open ? 'Menüyü kapat' : 'Menüyü aç'); };
burger.addEventListener('click', () => setMenu(!links.classList.contains('open')));
links.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

// Kaydırınca menüye cam zemin
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', scrollY > 20);
addEventListener('scroll', onScroll, { passive: true }); onScroll();

// Kaydırınca belirme
const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el, i) => { el.style.transitionDelay = `${(i % 5) * 60}ms`; io.observe(el); });

// Yayın görüntüsü sekmeleri
const scr = document.getElementById('scr');
const cap = document.getElementById('cap');
document.querySelectorAll('.out-tabs button').forEach((b) => b.addEventListener('click', () => {
  document.querySelectorAll('.out-tabs button').forEach((x) => { x.classList.toggle('on', x === b); x.setAttribute('aria-selected', x === b); });
  scr.style.opacity = 0;
  setTimeout(() => { scr.src = `img/${b.dataset.img}.webp`; scr.alt = 'Yayın görüntüsü: ' + b.textContent; cap.textContent = b.dataset.cap; scr.style.opacity = 1; }, 150);
}));

document.getElementById('yr').textContent = new Date().getFullYear();
