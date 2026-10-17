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

// İzleyici ne görür: sekmeler
const scr = document.getElementById('scr');
const cap = document.getElementById('cap');
document.querySelectorAll('.out-tabs button').forEach((b) => b.addEventListener('click', () => {
  document.querySelectorAll('.out-tabs button').forEach((x) => { x.classList.toggle('on', x === b); x.setAttribute('aria-selected', x === b); });
  scr.style.opacity = 0;
  setTimeout(() => { scr.src = `img/${b.dataset.img}.webp`; scr.alt = 'Yayın görüntüsü: ' + b.textContent; cap.textContent = b.dataset.cap; scr.style.opacity = 1; }, 150);
}));

// Özellik satırı üstüne gelince soldaki telefon o ekranı göstersin
const fimg = document.getElementById('fimg');
const rows = document.querySelectorAll('#spec > div');
const showRow = (row) => {
  rows.forEach((r) => r.classList.toggle('on', r === row));
  const src = `img/${row.dataset.img}.webp`;
  if (!fimg.src.endsWith(src)) { fimg.style.opacity = 0; setTimeout(() => { fimg.src = src; fimg.style.opacity = 1; }, 150); }
};
rows.forEach((r) => { r.addEventListener('mouseenter', () => showRow(r)); r.addEventListener('click', () => showRow(r)); });
showRow(rows[0]);

document.getElementById('yr').textContent = new Date().getFullYear();
