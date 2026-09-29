if (window.lucide) lucide.createIcons();

// 画像が無いときは data-fallback の絵文字プレースホルダに差し替える
document.querySelectorAll('img[data-fallback]').forEach(img => {
  const swap = () => img.replaceWith(Object.assign(document.createElement('div'), { className: 'photo-ph', textContent: img.dataset.fallback }));
  if (img.complete && img.naturalWidth === 0) swap();
  else img.addEventListener('error', swap);
});

// 未実装のリンクはページ移動しない
document.querySelectorAll('a[href="#"]').forEach(a => a.addEventListener('click', e => e.preventDefault()));

document.getElementById('pageTop').addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', open);
});
