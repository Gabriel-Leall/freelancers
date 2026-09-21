const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const header = document.querySelector<HTMLElement>('.site-header');
const dialog = document.querySelector<HTMLDialogElement>('#site-menu');
const toggle = document.querySelector<HTMLButtonElement>('#menu-toggle');
const closeButton = document.querySelector<HTMLButtonElement>('#menu-close');
let menuAnimation: Animation | undefined;
let menuClosing = false;

const updateHeader = () => header?.classList.toggle('is-compact', scrollY > 75);
updateHeader();
addEventListener('scroll', updateHeader, { passive: true });

function finishClose(destination?: string) {
  dialog?.close();
  document.body.classList.remove('menu-open');
  toggle?.setAttribute('aria-expanded', 'false');
  menuClosing = false;
  if (destination) {
    const url = new URL(destination, location.href);
    if (url.pathname === location.pathname && url.hash) {
      history.pushState(null, '', url.hash);
      const target = document.querySelector<HTMLElement>(url.hash);
      target?.scrollIntoView({ behavior: reduced.matches ? 'instant' : 'smooth' });
      target?.setAttribute('tabindex', '-1');
      target?.focus({ preventScroll: true });
    } else location.assign(destination);
  } else toggle?.focus({ preventScroll: true });
}

function closeMenu(destination?: string) {
  if (!dialog?.open || menuClosing) return;
  menuClosing = true;
  menuAnimation?.cancel();
  if (reduced.matches) return finishClose(destination);
  menuAnimation = dialog.animate(
    [{ transform: 'translateY(0)' }, { transform: 'translateY(-100%)' }],
    { duration: 420, easing: 'cubic-bezier(.77,0,.18,1)' },
  );
  menuAnimation.addEventListener('finish', () => finishClose(destination), { once: true });
}

toggle?.addEventListener('click', () => {
  if (!dialog || dialog.open) return;
  menuAnimation?.cancel();
  dialog.showModal();
  document.body.classList.add('menu-open');
  toggle.setAttribute('aria-expanded', 'true');
  if (!reduced.matches) {
    menuAnimation = dialog.animate(
      [{ transform: 'translateY(-100%)' }, { transform: 'translateY(0)' }],
      { duration: 620, easing: 'cubic-bezier(.77,0,.18,1)' },
    );
    dialog.querySelectorAll<HTMLElement>('nav a').forEach((link, index) => {
      link.animate(
        [{ transform: 'translateY(42px)', opacity: 0 }, { transform: 'translateY(0)', opacity: 1 }],
        { duration: 520, delay: 230 + index * 70, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards' },
      );
    });
  }
  closeButton?.focus({ preventScroll: true });
});

closeButton?.addEventListener('click', () => closeMenu());
dialog?.addEventListener('cancel', (event) => {
  event.preventDefault();
  closeMenu();
});
dialog?.querySelectorAll<HTMLAnchorElement>('a[href^="/#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    closeMenu(link.href);
  });
});
