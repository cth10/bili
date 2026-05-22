(function() {
  // ========== SCROLL PROGRESS ==========
  var scrollProgress = document.getElementById('scroll-progress');
  function updateScrollProgress() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (scrollProgress) scrollProgress.style.width = progress + '%';
  }
  window.addEventListener('scroll', updateScrollProgress, { passive: true });

  // ========== BACK TO TOP ==========
  var backToTop = document.getElementById('back-to-top');
  function toggleBackToTop() {
    if (backToTop) {
      if (window.pageYOffset > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
  }
  window.addEventListener('scroll', toggleBackToTop, { passive: true });
  if (backToTop) {
    backToTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ========== HEADER SCROLL EFFECT ==========
  var header = document.getElementById('main-header');
  function updateHeader() {
    if (header) {
      if (window.pageYOffset > 50) {
        header.classList.add('shadow-lg');
      } else {
        header.classList.remove('shadow-lg');
      }
    }
  }
  window.addEventListener('scroll', updateHeader, { passive: true });

  // ========== MOBILE MENU ==========
  var mobileMenuBtn = document.getElementById('mobile-menu-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  var menuOpen = false;

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      menuOpen = !menuOpen;
      if (menuOpen) {
        mobileMenu.classList.remove('max-h-0', 'opacity-0');
        mobileMenu.classList.add('max-h-[500px]', 'opacity-100');
        mobileMenuBtn.innerHTML = '<i class="ph-duotone ph-x h-6 w-6"></i>';
      } else {
        mobileMenu.classList.remove('max-h-[500px]', 'opacity-100');
        mobileMenu.classList.add('max-h-0', 'opacity-0');
        mobileMenuBtn.innerHTML = '<i class="ph-duotone ph-list h-6 w-6"></i>';
      }
      
    });

    document.addEventListener('click', function(e) {
      if (menuOpen && !mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        menuOpen = false;
        mobileMenu.classList.remove('max-h-[500px]', 'opacity-100');
        mobileMenu.classList.add('max-h-0', 'opacity-0');
        mobileMenuBtn.innerHTML = '<i class="ph-duotone ph-list h-6 w-6"></i>';
        
      }
    });
  }

  // ========== SMOOTH SCROLL ==========
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var headerOffset = 90;
        var elementPosition = target.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        if (menuOpen && mobileMenu && mobileMenuBtn) {
          menuOpen = false;
          mobileMenu.classList.remove('max-h-[500px]', 'opacity-100');
          mobileMenu.classList.add('max-h-0', 'opacity-0');
          mobileMenuBtn.innerHTML = '<i class="ph-duotone ph-list h-6 w-6"></i>';
          
        }
      }
    });
  });

  // ========== SCROLL REVEAL ==========
  var revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  var revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.05
  });

  revealElements.forEach(function(el) {
    revealObserver.observe(el);
  });

  // ========== ACTIVE NAV LINK ==========
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-link');
  var mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  var activeObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var id = entry.target.getAttribute('id');
        navLinks.forEach(function(link) {
          if (link.getAttribute('data-section') === id) {
            link.classList.add('bili-blue', 'active');
            link.classList.remove('bili-dark');
          } else {
            link.classList.remove('bili-blue', 'active');
            link.classList.add('bili-dark');
          }
        });
        mobileNavLinks.forEach(function(link) {
          if (link.getAttribute('data-section') === id) {
            link.classList.add('bili-blue');
            link.classList.remove('bili-dark');
          } else {
            link.classList.remove('bili-blue');
            link.classList.add('bili-dark');
          }
        });
      }
    });
  }, {
    root: null,
    rootMargin: '-90px 0px -60% 0px',
    threshold: 0
  });

  sections.forEach(function(section) {
    activeObserver.observe(section);
  });

  // ========== INIT PHOSPHOR ==========
  // Phosphor Icons usa webfont, não requer inicialização JS
})();
