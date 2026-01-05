const initLightbox = () => {
  let lb = document.getElementById('lightbox');
  let lbImg = document.getElementById('lightbox-image');
  let closeBtn = document.getElementById('lightbox-close');
  let handlersAttached = false;

  const createFallback = () => {
    lb = document.createElement('div');
    lb.id = 'lightbox';
    lb.className = 'fixed inset-0 z-50 hidden flex items-center justify-center bg-black/70 p-4';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.setAttribute('aria-hidden', 'true');

    closeBtn = document.createElement('button');
    closeBtn.id = 'lightbox-close';
    closeBtn.className = 'fixed top-6 right-6 z-[9999] bg-black/80 hover:bg-black/95 text-white p-3 rounded-full cursor-pointer pointer-events-auto focus:outline-none focus:ring-2 focus:ring-white shadow-xl ring-1 ring-white/20';
    closeBtn.setAttribute('aria-label', 'Close');
    closeBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
      <span class="sr-only">Close</span>
    `;

    lbImg = document.createElement('img');
    lbImg.id = 'lightbox-image';
    lbImg.className = 'max-h-[90vh] max-w-[90vw] object-contain rounded-md shadow-lg';

    lb.appendChild(closeBtn);
    lb.appendChild(lbImg);
    document.body.appendChild(lb);
  };

  const ensureElements = () => {
    lb = document.getElementById('lightbox') || lb;
    lbImg = document.getElementById('lightbox-image') || lbImg;
    closeBtn = document.getElementById('lightbox-close') || closeBtn;
    if (!lb || !lbImg || !closeBtn) createFallback();
  };

  const open = (src, alt = '') => {
    ensureElements();
    lbImg.src = src;
    lbImg.alt = alt;
    lb.classList.remove('hidden');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  };

  const close = () => {
    if (!lb) return;
    lb.classList.add('hidden');
    lb.setAttribute('aria-hidden', 'true');
    if (lbImg) lbImg.src = '';
    document.body.style.overflow = '';
  };

  const attachHandlers = () => {
    if (handlersAttached) return;
    handlersAttached = true;

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

    // Use capture phase to intercept navigation as early as possible
    document.addEventListener('pointerdown', handleImageOpen, {capture: true});
    document.addEventListener('click', handleImageOpen, {capture: true});
    document.addEventListener('auxclick', handleImageOpen, {capture: true});

    // delegated close
    document.addEventListener('click', (e) => {
      if (e.target && (e.target.id === 'lightbox-close' || e.target.closest('#lightbox-close'))) close();
      if (e.target && e.target.id === 'lightbox') close();
    });

    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && lb && !lb.classList.contains('hidden')) close(); });
  };

  attachHandlers();
};

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', initLightbox);
} else {
  initLightbox();
}
