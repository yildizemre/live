// Menü, kaydırınca beliren bölümler ve şov sekmeleri
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', scrollY > 20);
addEventListener('scroll', onScroll, { passive: true }); onScroll();

const burger = document.getElementById('burger');
const links = document.getElementById('links');
burger.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
links.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
  links.classList.remove('open'); burger.setAttribute('aria-expanded', false);
}));

const io = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

const scr = document.getElementById('scr');
const tabs = document.querySelectorAll('.screen-tabs button');
let auto = 0, timer;
const show = (b) => {
  tabs.forEach((x) => x.classList.toggle('on', x === b));
  scr.style.opacity = 0;
  setTimeout(() => { scr.src = `img/${b.dataset.img}.webp`; scr.alt = 'Yayın görüntüsü: ' + b.textContent; scr.style.opacity = 1; }, 200);
};
tabs.forEach((b, i) => b.addEventListener('click', () => { clearInterval(timer); auto = i; show(b); }));
timer = setInterval(() => { auto = (auto + 1) % tabs.length; show(tabs[auto]); }, 4000);

document.getElementById('yr').textContent = new Date().getFullYear();
