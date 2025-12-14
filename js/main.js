// Main JavaScript for Tavelo

// Load components
async function loadComponent(elementId, componentPath) {
  try {
    const response = await fetch(componentPath);
    const html = await response.text();
    document.getElementById(elementId).innerHTML = html;
  } catch (error) {
    console.error(`Error loading component ${componentPath}:`, error);
  }
}

// Initialize components
async function initComponents() {
  await loadComponent("header-placeholder", "components/header.html");
  await loadComponent("mobile-nav-placeholder", "components/mobile-nav.html");

  // After loading header, initialize scroll effect
  initHeaderScroll();
  highlightActivePage();
}

// Header scroll effect
function initHeaderScroll() {
  const header = document.getElementById("main-header");
  const logoText = document.getElementById("logo-text");
  const logoIcon = document.getElementById("logo-icon");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!header) return;

  // Check if we're on contact page
  const isContactPage = window.location.pathname.includes("contact.html");

  function updateHeaderStyle(isScrolled) {
    if (isScrolled) {
      header.classList.remove("absolute", "bg-transparent");
      header.classList.add("fixed", "bg-white", "shadow-md");

      if (logoText) logoText.classList.remove("text-white");
      if (logoText) logoText.classList.add("text-cyan-500");

      if (logoIcon) logoIcon.classList.remove("text-white");
      if (logoIcon) logoIcon.classList.add("text-cyan-500");

      navLinks.forEach((link) => {
        link.classList.remove("text-white", "hover:text-cyan-400");
        link.classList.add("text-gray-900", "hover:text-cyan-600");
      });
    } else {
      header.classList.remove("fixed", "bg-white", "shadow-md");
      header.classList.add("absolute", "bg-transparent");

      if (logoText) logoText.classList.remove("text-cyan-500");
      if (logoText) logoText.classList.add("text-white");

      if (logoIcon) logoIcon.classList.remove("text-cyan-500");
      if (logoIcon) logoIcon.classList.add("text-white");

      navLinks.forEach((link) => {
        link.classList.remove("text-gray-900", "hover:text-cyan-600");
        link.classList.add("text-white", "hover:text-cyan-400");
      });
    }
  }

  // Force solid state for contact page
  if (isContactPage) {
    updateHeaderStyle(true);
    return;
  }

  // Handle scroll for other pages
  function handleScroll() {
    const isScrolled = window.scrollY > 50;
    updateHeaderStyle(isScrolled);
  }

  // Initial check
  handleScroll();

  // Add scroll listener
  window.addEventListener("scroll", handleScroll);
}

// Highlight active page in navigation
function highlightActivePage() {
  const currentPath = window.location.pathname;
  const fileName = currentPath.split("/").pop() || "index.html";

  // Map filenames to page names
  const pageMap = {
    "index.html": "home",
    "": "home",
    "flights.html": "flights",
    "flight-detail.html": "flights",
    "hotels.html": "hotels",
    "hotel-detail.html": "hotels",
    "tours.html": "tours",
    "tour-detail.html": "tours",
    "contact.html": "contact",
  };

  const currentPage = pageMap[fileName] || "home";

  // Highlight in header
  setTimeout(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      const page = link.getAttribute("data-page");
      if (page === currentPage) {
        // Check if header is scrolled to determine color
        const header = document.getElementById("main-header");
        const isScrolled =
          header &&
          (header.classList.contains("bg-white") || window.scrollY > 50);

        link.classList.add("font-bold");
        link.classList.remove("font-medium");

        if (isScrolled) {
          link.classList.remove("text-gray-900");
          link.classList.add("text-cyan-600");
        } else {
          link.classList.remove("text-white");
          link.classList.add("text-cyan-400");
        }
      }
    });

    // Highlight in mobile nav
    const mobileNavItems = document.querySelectorAll(".mobile-nav-item");
    mobileNavItems.forEach((item) => {
      const page = item.getAttribute("data-page");
      const iconWrapper = item.querySelector(".icon-wrapper");

      item.classList.remove("text-cyan-500", "text-gray-500");
      if (iconWrapper) {
        iconWrapper.classList.remove("bg-cyan-50");
        iconWrapper.classList.add("bg-transparent");
      }

      if (page === currentPage) {
        item.classList.add("text-cyan-500");
        if (iconWrapper) {
          iconWrapper.classList.remove("bg-transparent");
          iconWrapper.classList.add("bg-cyan-50");
        }
      } else {
        item.classList.add("text-gray-500");
      }
    });
  }, 100);
}

// Utility function to format currency
function formatCurrency(amount) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

// Utility function to create star rating HTML
function createStarRating(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let html = "";

  for (let i = 0; i < fullStars; i++) {
    html +=
      '<svg class="h-4 w-4 fill-current text-yellow-400" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>';
  }

  if (hasHalfStar) {
    html +=
      '<svg class="h-4 w-4 fill-current text-yellow-400" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>';
  }

  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    html +=
      '<svg class="h-4 w-4 fill-current text-gray-300" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>';
  }

  return html;
}

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", initComponents);
