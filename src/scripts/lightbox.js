const initLightbox = () => {
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-image');
  const closeBtn = document.getElementById('lightbox-close');
  if (!lb || !lbImg || !closeBtn) return;

  const open = (src, alt='') => {
    lbImg.src = src;
    lbImg.alt = alt;
    lb.classList.remove('hidden');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  };
  const close = () => {
    lb.classList.add('hidden');
    lb.setAttribute('aria-hidden', 'true');
    lbImg.src = '';
    document.body.style.overflow = '';
  };

  const handleImageOpen = (e) => {
    const a = e.target.closest('a[data-lightbox], a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"], a[href$=".webp"]');
    if (!a) return;
    // Allow modifier clicks (open in new tab/window)
    if (e.button !== undefined && e.button !== 0) return;
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
    const href = a.getAttribute('href') || a.querySelector('img')?.src;
    if (!href) return;
    e.preventDefault();
    if (typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();
    open(href, a.querySelector('img')?.alt || '');
  };

  document.addEventListener('pointerdown', handleImageOpen, {capture: true});
  document.addEventListener('click', handleImageOpen, {capture: true});
  document.addEventListener('auxclick', handleImageOpen, {capture: true});

  closeBtn.addEventListener('click', close);
  lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !lb.classList.contains('hidden')) close(); });
};

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', initLightbox);
} else {
  initLightbox();
}