/* =====================================================
   RM PODOLOGIA CLÍNICA — script.js
   Funcionalidades:
   - Header scroll shadow
   - Menu mobile (hamburger)
   - Scroll suave
   - Animações via IntersectionObserver
   - FAQ acordeão com ícone animado
===================================================== */

(function () {
  'use strict';

  /* ── Elementos ── */
  const header     = document.getElementById('header');
  const hamburger  = document.getElementById('hamburger');
  const nav        = document.getElementById('nav');
  const animEls    = document.querySelectorAll('[data-animate]');

  /* ── 1. Header shadow on scroll ── */
  function handleHeaderScroll() {
    if (window.scrollY > 12) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  /* ── 2. Menu mobile ── */
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
      // Previne scroll do body quando menu aberto
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Fecha menu ao clicar em um link
    nav.querySelectorAll('.nav__link, .nav__cta').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Fecha menu ao clicar fora
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  /* ── 3. Scroll suave para âncoras ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const headerH = header ? header.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH - 8;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ── 4. Animações de entrada via IntersectionObserver ── */
  if ('IntersectionObserver' in window && animEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -32px 0px' }
    );
    animEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: mostra tudo se o browser não suportar
    animEls.forEach(el => el.classList.add('visible'));
  }

  /* ── 5. FAQ: garante que apenas um item abre por vez ── */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        faqItems.forEach(other => {
          if (other !== item && other.open) other.removeAttribute('open');
        });
      }
    });
  });

  /* ── 6. Botão WhatsApp flutuante: aparece após 3s ou 300px scroll ── */
  const floatBtn = document.getElementById('whatsappFloat');
  if (floatBtn) {
    floatBtn.style.opacity = '0';
    floatBtn.style.transform = 'scale(.85)';
    floatBtn.style.transition = 'opacity .4s ease, transform .4s ease';

    function showFloat() {
      floatBtn.style.opacity = '1';
      floatBtn.style.transform = 'scale(1)';
    }

    setTimeout(showFloat, 3000);
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) showFloat();
    }, { passive: true, once: true });
  }

})();
