(() => {
  'use strict';
  const nav = document.getElementById('site-nav');
  const visible = nav.querySelector('.visible-links');
  const menu = document.getElementById('mobile-menu');
  const menuButton = document.getElementById('menu-toggle');
  const followButton = document.getElementById('follow-toggle');
  const profiles = document.getElementById('profile-links');
  const footer = document.querySelector('.page__footer');

  function closeMenu() {
    menu.classList.add('hidden');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.classList.remove('close');
  }

  function closeProfiles() {
    profiles.classList.remove('is-open');
    followButton.setAttribute('aria-expanded', 'false');
  }

  function layout() {
    while (menu.firstElementChild) visible.appendChild(menu.firstElementChild);
    menuButton.classList.add('hidden');
    closeMenu();
    const available = nav.clientWidth;
    if (visible.scrollWidth > available) {
      menuButton.classList.remove('hidden');
      while (visible.scrollWidth > available - 50 && visible.children.length > 1) {
        menu.prepend(visible.lastElementChild);
      }
    }
    document.body.style.paddingBottom = (footer.offsetHeight + 54) + 'px';
    document.body.style.paddingTop = Math.max(70, document.querySelector('.masthead').offsetHeight) + 'px';
  }

  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    menuButton.classList.toggle('close', !expanded);
    menu.classList.toggle('hidden', expanded);
    closeProfiles();
  });

  followButton.addEventListener('click', () => {
    const expanded = followButton.getAttribute('aria-expanded') === 'true';
    followButton.setAttribute('aria-expanded', String(!expanded));
    profiles.classList.toggle('is-open', !expanded);
    closeMenu();
  });

  document.addEventListener('click', event => {
    if (!nav.contains(event.target)) closeMenu();
    if (!event.target.closest('.author__urls-wrapper')) closeProfiles();
  });

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    if (menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuButton.focus();
    } else if (followButton.getAttribute('aria-expanded') === 'true') {
      closeProfiles();
      followButton.focus();
    }
  });

  let resizePending = false;
  window.addEventListener('resize', () => {
    if (resizePending) return;
    resizePending = true;
    window.requestAnimationFrame(() => { layout(); resizePending = false; });
  });
  window.addEventListener('load', layout, { once: true });
  layout();
})();
