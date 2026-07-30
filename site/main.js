/* =============================================================
   main.js — Shared navigation and UI interactions
   Runs on every page. Keep side-effects minimal and safe.
   ============================================================= */

(function () {
  'use strict';

  /* --- Active nav link --------------------------------------- */
  function setActiveNav() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav__links a, .nav__drawer a').forEach(function (link) {
      const href = link.getAttribute('href') || '';
      const linkPage = href.split('/').pop();
      if (linkPage === path) {
        link.classList.add('active');
      }
    });
  }

  /* --- Mobile hamburger / drawer ----------------------------- */
  function initMobileNav() {
    const hamburger = document.querySelector('.nav__hamburger');
    const drawer = document.querySelector('.nav__drawer');
    if (!hamburger || !drawer) return;

    hamburger.addEventListener('click', function () {
      const isOpen = drawer.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close drawer when a link inside it is clicked
    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        drawer.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* --- Accordion (FAQ) --------------------------------------- */
  function initAccordions() {
    document.querySelectorAll('.accordion-trigger').forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        const item = trigger.closest('.accordion-item');
        if (!item) return;
        item.classList.toggle('open');
        trigger.setAttribute('aria-expanded', String(item.classList.contains('open')));
      });
    });
  }

  /* --- Technical detail toggle ------------------------------- */
  function initTechToggles() {
    document.querySelectorAll('.tech-toggle__btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const toggle = btn.closest('.tech-toggle');
        if (!toggle) return;
        toggle.classList.toggle('open');
        btn.textContent = toggle.classList.contains('open')
          ? '▲ Hide technical detail'
          : '▼ Show technical detail';
      });
    });
  }

  /* --- Theme switcher ---------------------------------------- */
  var THEME_KEY = 'vena-theme';
  var themeLink = null;

  function applyTheme(theme) {
    if (!themeLink) {
      themeLink = document.createElement('link');
      themeLink.rel = 'stylesheet';
      document.head.appendChild(themeLink);
    }
    if (theme === 'dark') {
      themeLink.href = 'theme-dark.css';
    } else if (theme === 'navy') {
      themeLink.href = 'theme-navy.css';
    } else {
      themeLink.href = '';
    }
    localStorage.setItem(THEME_KEY, theme);
    document.querySelectorAll('.theme-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.theme === theme);
    });
  }

  function initThemeToggle() {
    document.querySelectorAll('.theme-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyTheme(btn.dataset.theme);
      });
    });
    // Restore saved theme
    var saved = localStorage.getItem(THEME_KEY) || 'light';
    applyTheme(saved);
  }

  /* --- Contact / demo form ----------------------------------- */
  function initForms() {
    document.querySelectorAll('form[data-form]').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var btn = form.querySelector('[type=submit]');
        if (btn) {
          btn.textContent = 'Thank you — we\'ll be in touch!';
          btn.disabled = true;
        }
      });
    });
  }

  /* --- Scroll reveal ----------------------------------------- */
  function initScrollReveal() {
    if (!window.IntersectionObserver) return;
    var targets = document.querySelectorAll('.card, .feature-card, .stat-card, .person-card');
    if (!targets.length) return;

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });

    targets.forEach(function (el, i) {
      el.classList.add('js-reveal');
      el.style.transitionDelay = ((i % 4) * 0.08) + 's';
      obs.observe(el);
    });
  }

/* --- Comparison toggle ------------------------------------- */
  function initCompareToggle() {
    var btns = document.querySelectorAll('.compare-toggle__btn');
    if (!btns.length) return;

    function setActive(col) {
      btns.forEach(function (btn) {
        btn.classList.toggle('is-active', btn.dataset.col === col);
      });
      document.querySelectorAll('.compare-table [data-col]').forEach(function (el) {
        el.classList.toggle('is-active', el.dataset.col === col);
      });
    }

    btns.forEach(function (btn) {
      btn.addEventListener('click', function () { setActive(btn.dataset.col); });
    });

    setActive('veritrack');
  }

  /* --- Person bio popup -------------------------------------- */
  function initPersonModal() {
    var modal = document.getElementById('personModal');
    var cards = document.querySelectorAll('.person-card.is-clickable');
    if (!modal || !cards.length) return;

    var elPhoto = modal.querySelector('.person-modal__photo');
    var elPh = modal.querySelector('.person-modal__placeholder');
    var elName = modal.querySelector('.person-modal__name');
    var elTitle = modal.querySelector('.person-modal__title');
    var elOrg = modal.querySelector('.person-modal__org');
    var elBio = modal.querySelector('.person-modal__bio');
    var lastFocus = null;

    function show(el, text) {
      if (text) { el.textContent = text; el.hidden = false; }
      else { el.textContent = ''; el.hidden = true; }
    }

    function open(card) {
      lastFocus = card;
      var d = card.dataset;
      if (d.photo) {
        elPhoto.src = d.photo; elPhoto.alt = d.name || ''; elPhoto.hidden = false; elPh.hidden = true;
      } else {
        elPhoto.hidden = true; elPh.hidden = false;
        elPh.textContent = (d.name || '?').trim().charAt(0);
      }
      show(elName, d.name);
      show(elTitle, d.title);
      show(elOrg, d.org);
      show(elBio, d.bio);
      if (typeof modal.showModal === 'function') { if (!modal.open) modal.showModal(); }
      else { modal.setAttribute('open', ''); }
    }
    function close() {
      if (typeof modal.close === 'function') { modal.close(); }
      else { modal.removeAttribute('open'); if (lastFocus) lastFocus.focus(); }
    }

    cards.forEach(function (card) {
      card.addEventListener('click', function () { open(card); });
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(card); }
      });
    });
    var closeBtn = modal.querySelector('.person-modal__close');
    if (closeBtn) closeBtn.addEventListener('click', close);
    // click on the backdrop (the dialog element itself, not the inner panel) closes it
    modal.addEventListener('click', function (e) { if (e.target === modal) close(); });
    // native <dialog> handles Escape; restore focus to the card that opened it
    modal.addEventListener('close', function () { if (lastFocus) lastFocus.focus(); });
  }

  /* --- Boot -------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    setActiveNav();
    initMobileNav();
    initAccordions();
    initTechToggles();
    initThemeToggle();
    initForms();
    initCompareToggle();
    initScrollReveal();
    initPersonModal();
  });

}());
