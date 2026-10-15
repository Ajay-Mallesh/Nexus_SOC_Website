/* ===================================================================
   CRYPTO_TOP WEBSITE - Main JavaScript
   Navigation, Page Management & Interactions
   =================================================================== */

document.addEventListener('DOMContentLoaded', function() {
  setupOfflineMode();
  initializeNavigation();
  setupPageRouting();
  setupMobileMenu();
  setupBackToTop();
  setupWelcomePopup();
});

function setupOfflineMode() {
  const offlinePage = document.getElementById('offlinePage');
  const retryButton = document.getElementById('retryOfflineBtn');

  if (!offlinePage) return;
  if (window.location.protocol === 'file:') return;

  const showOfflinePage = () => {
    document.body.classList.add('offline-mode');
    offlinePage.classList.add('active');
  };

  const hideOfflinePage = () => {
    document.body.classList.remove('offline-mode');
    offlinePage.classList.remove('active');
  };

  const checkServerConnectivity = async () => {
    if (!navigator.onLine) {
      showOfflinePage();
      return false;
    }

    try {
      const response = await fetch('./?t=' + Date.now(), {
        method: 'GET',
        cache: 'no-store'
      });

      if (response.ok) {
        hideOfflinePage();
        return true;
      }

      throw new Error('Connectivity check failed');
    } catch (error) {
      showOfflinePage();
      return false;
    }
  };

  window.addEventListener('online', () => {
    checkServerConnectivity();
  });

  window.addEventListener('offline', () => {
    showOfflinePage();
  });

  if (retryButton) {
    retryButton.addEventListener('click', () => {
      checkServerConnectivity();
    });
  }

  checkServerConnectivity();
}

// ===================================================================
// WELCOME POPUP LOGIC (RELOAD TRIGGERED W/ CLOSE ACTION)
// ===================================================================

function setupWelcomePopup() {
  const popup = document.getElementById("welcomePopup");
  const closeBtn = document.getElementById("closePopupBtn");

  if (!popup || !closeBtn) return;

  // Triggers automatically on every page reload setup
  setTimeout(() => {
    popup.classList.add("show");
  }, 600);

  // Handle closing button action ('X' anchor tag/button interaction)
  closeBtn.addEventListener("click", function() {
    popup.classList.remove("show");
    
    // Completely clear structural layout overlay footprint when transitions end
    setTimeout(() => {
      popup.style.setProperty("display", "none", "important");
    }, 400);
  });
}

// ===================================================================
// NAVIGATION INITIALIZATION
// ===================================================================

function initializeNavigation() {
  // Handle main navigation links
  document.querySelectorAll('a[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pageId = link.getAttribute('data-page');
      const sectionId = link.dataset.section;
      const hash = pageId + (sectionId ? `?section=${encodeURIComponent(sectionId)}` : '');
      if (window.location.hash.slice(1) === hash) {
        navigateToPage(pageId, sectionId);
      } else {
        window.location.hash = hash;
      }
      closeMobileMenu();
      updateNavbarActive(pageId);
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.submenu').forEach(menu => {
        menu.classList.remove('active');
      });
    }
  });
}

// ===================================================================
// PAGE ROUTING & NAVIGATION
// ===================================================================

function navigateToPage(pageId, sectionId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  // Show selected page
  const selectedPage = document.getElementById(pageId);
  if (selectedPage) {
    selectedPage.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (sectionId) {
      const selectedSection = document.getElementById(sectionId);
      if (selectedSection) {
        window.setTimeout(() => selectedSection.scrollIntoView({ behavior: 'instant', block: 'start' }), 0);
      }
    }
  }

  // Update navbar active state
  updateNavbarActive(pageId);
}

function updateNavbarActive(pageId) {
  document.querySelectorAll('nav > ul > li').forEach(item => {
    const matchesPage = Array.from(item.querySelectorAll('a[data-page]'))
      .some(link => link.dataset.page === pageId);
    item.classList.toggle('active', matchesPage);
  });
}

function getRouteFromHash() {
  const [route, query = ''] = window.location.hash.slice(1).split('?');
  const params = new URLSearchParams(query);
  return {
    pageId: route ? decodeURIComponent(route) : 'home',
    sectionId: params.get('section')
  };
}

// ===================================================================
// PAGE ROUTING SETUP
// ===================================================================

function setupPageRouting() {
  // Check URL hash for initial page
  const route = getRouteFromHash();
  navigateToPage(route.pageId, route.sectionId);

  // Handle back/forward buttons
  window.addEventListener('hashchange', () => {
    const nextRoute = getRouteFromHash();
    navigateToPage(nextRoute.pageId, nextRoute.sectionId);
  });

  // Set default page on load
  if (!window.location.hash) {
    navigateToPage('home');
  }
}

// ===================================================================
// MOBILE MENU MANAGEMENT
// ===================================================================

function setupMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');

  // Toggle main menu
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      menuToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });
  }

  // Handle dropdown toggles
  document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const dropdown = toggle.closest('.dropdown');
      const submenu = dropdown.querySelector('.submenu');
      
      if (window.innerWidth <= 768) {
        // Mobile: toggle submenu
        const isActive = submenu.classList.contains('active');
        
        // Close all other submenus
        document.querySelectorAll('.submenu').forEach(menu => {
          if (menu !== submenu) {
            menu.classList.remove('active');
          }
        });
        
        // Toggle current submenu
        if (!isActive) {
          submenu.classList.add('active');
        }
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    const isInNav = e.target.closest('nav');
    const isMenuToggle = e.target.closest('.menu-toggle');
    
    if (!isInNav && !isMenuToggle) {
      closeMobileMenu();
    }
  });

  // Close submenus when window resizes to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      document.querySelectorAll('.submenu').forEach(menu => {
        menu.classList.remove('active');
      });
    }
  });
}

function closeMobileMenu() {
  const navMenu = document.querySelector('nav ul');
  const menuToggle = document.querySelector('.menu-toggle');
  if (navMenu && window.innerWidth <= 768) {
    navMenu.classList.remove('active');
    if (menuToggle) {
      menuToggle.textContent = '☰';
    }
    // Close all submenus
    document.querySelectorAll('.submenu').forEach(menu => {
      menu.classList.remove('active');
    });
  }
}

// ===================================================================
// BACK TO TOP BUTTON
// ===================================================================

function setupBackToTop() {
  const backToTopButton = document.getElementById('backToTop');
  
  if (!backToTopButton) return;
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });
  
  // Scroll to top when clicked
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ===================================================================
// UTILITY FUNCTIONS
// ===================================================================

function toggleSection(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.classList.toggle('hidden');
  }
}

function loadExternalContent(url, containerId) {
  const container = document.getElementById(containerId);
  if (container) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        container.innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading content:', error);
        container.innerHTML = '<p class="error">Failed to load content. Please try again later.</p>';
      });
  }
}

// ===================================================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ===================================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.hasAttribute('data-page')) return;

    const href = this.getAttribute('href');
    if (href !== '#' && href.length > 1) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// ===================================================================
// RESPONSIVE MENU HANDLING
// ===================================================================

window.addEventListener('resize', () => {
  const navMenu = document.querySelector('nav ul');
  if (window.innerWidth > 768 && navMenu) {
    navMenu.classList.remove('active');
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
      menuToggle.textContent = '☰';
    }
  }
});

// ===================================================================
// EXPORT FUNCTIONS FOR EXTERNAL USE
// ===================================================================

window.navigateToPage = navigateToPage;
window.toggleSection = toggleSection;
window.loadExternalContent = loadExternalContent;
