// Tour Detail Page

const params = new URLSearchParams(window.location.search);
const tourSlug = params.get("slug");
let currentTour = null;

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header-placeholder", "components/header.html").then(() => {
    highlightActivePage("Tours");
  });
  loadComponent("footer-placeholder", "components/footer.html");
  loadComponent("mobile-nav-placeholder", "components/mobile-nav.html");

  currentTour = toursData.find((t) => t.slug === tourSlug);
  if (!currentTour) return showNotFound();

  renderHero();
  renderContent();
  renderSidebar();

  const form = document.getElementById("enquiry-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! We will contact you soon.");
      closeEnquiryModal();
      form.reset();
    });
  }
});

function showNotFound() {
  document.body.innerHTML = `
    <div class="h-screen flex items-center justify-center flex-col gap-4">
      <h1 class="text-2xl font-bold">Tour Not Found</h1>
      <a href="tours.html" class="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-full">Back to Tours</a>
    </div>
  `;
}

function renderHero() {
  const hero = document.getElementById("tour-hero");
  hero.innerHTML = `
    <img src="${currentTour.image}" alt="${
    currentTour.title
  }" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    <div class="absolute bottom-0 left-0 right-0 container mx-auto px-4 sm:px-6 lg:px-8 pb-12 text-white">
      <div class="flex flex-wrap gap-3 mb-4">
        <span class="bg-cyan-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">${
          currentTour.category
        }</span>
        <span class="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold flex items-center"><svg class="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> ${
          currentTour.duration
        }</span>
        <span class="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold flex items-center"><svg class="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg> Best: ${
          currentTour.bestSeason
        }</span>
      </div>
      <h1 class="text-4xl md:text-6xl font-bold mb-2">${currentTour.title}</h1>
      <div class="flex items-center text-lg text-white/90 mb-4">
        <svg class="h-5 w-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
        ${currentTour.location}
      </div>
      <div class="flex items-center gap-2">
        <div class="bg-yellow-400 text-black font-bold px-2 py-0.5 rounded text-sm flex items-center">
          <svg class="h-3 w-3 mr-1 fill-black" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          ${currentTour.rating}
        </div>
        <span class="text-sm opacity-90">(${currentTour.reviews.toLocaleString()} Reviews)</span>
      </div>
    </div>
  `;
}

function renderContent() {
  const content = document.getElementById("tour-content");
  content.innerHTML = `
    <!-- Overview -->
    <section>
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
      <p class="text-gray-600 leading-relaxed text-lg">${
        currentTour.overview
      }</p>
    </section>

    <!-- Highlights -->
    <section>
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Tour Highlights</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${currentTour.highlights
          .map(
            (h) => `
          <div class="flex items-center p-3 bg-white rounded-xl shadow-sm border border-gray-100">
            <svg class="h-5 w-5 text-cyan-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span class="text-gray-700 font-medium">${h}</span>
          </div>
        `
          )
          .join("")}
      </div>
    </section>

    <!-- Quick Facts -->
    <section class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <h2 class="text-xl font-bold text-gray-800 mb-6">Quick Facts</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <p class="text-xs text-gray-500 uppercase tracking-wider mb-1">Duration</p>
          <p class="font-bold text-gray-800 flex items-center"><svg class="h-4 w-4 mr-2 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>${
            currentTour.duration
          }</p>
        </div>
        <div>
          <p class="text-xs text-gray-500 uppercase tracking-wider mb-1">Start / End</p>
          <p class="font-bold text-gray-800 flex items-center"><svg class="h-4 w-4 mr-2 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>${
            currentTour.startCity
          }</p>
        </div>
        <div>
          <p class="text-xs text-gray-500 uppercase tracking-wider mb-1">Group Size</p>
          <p class="font-bold text-gray-800 flex items-center"><svg class="h-4 w-4 mr-2 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>${
            currentTour.groupSize
          }</p>
        </div>
        <div>
          <p class="text-xs text-gray-500 uppercase tracking-wider mb-1">Pace</p>
          <p class="font-bold text-gray-800">${currentTour.pace}</p>
        </div>
      </div>
    </section>

    <!-- Itinerary -->
    <section>
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Itinerary</h2>
      <div class="space-y-4">
        ${currentTour.itinerary
          .map(
            (item, idx) => `
          <div class="border border-gray-200 rounded-xl bg-white">
            <button onclick="toggleAccordion(${idx})" class="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
              <div class="flex items-center text-left">
                <span class="bg-cyan-100 text-cyan-700 font-bold px-3 py-1 rounded-md text-sm mr-4 shrink-0">Day ${item.day}</span>
                <span class="text-lg font-bold text-gray-800">${item.title}</span>
              </div>
              <svg id="accordion-icon-${idx}" class="h-5 w-5 text-gray-400 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="accordion-content-${idx}" class="hidden px-4 pb-4 pl-16 text-gray-600 text-base leading-relaxed">
              ${item.description}
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    </section>

    <!-- Inclusions / Exclusions -->
    <section class="grid md:grid-cols-2 gap-8">
      <div class="bg-green-50/50 p-6 rounded-2xl border border-green-100">
        <h3 class="font-bold text-green-800 mb-4 text-lg">Inclusions</h3>
        <ul class="space-y-3">
          ${currentTour.inclusions
            .map(
              (inc) => `
            <li class="flex items-start text-gray-700 text-sm">
              <svg class="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              ${inc}
            </li>
          `
            )
            .join("")}
        </ul>
      </div>
      <div class="bg-red-50/50 p-6 rounded-2xl border border-red-100">
        <h3 class="font-bold text-red-800 mb-4 text-lg">Exclusions</h3>
        <ul class="space-y-3">
          ${currentTour.exclusions
            .map(
              (exc) => `
            <li class="flex items-start text-gray-700 text-sm">
              <svg class="h-4 w-4 text-red-500 mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
              ${exc}
            </li>
          `
            )
            .join("")}
        </ul>
      </div>
    </section>

    <!-- Gallery -->
    <section>
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Gallery</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${currentTour.gallery
          .map(
            (img, idx) => `
          <img src="${img}" alt="Gallery ${idx}" class="w-full h-64 object-cover rounded-2xl shadow-sm hover:shadow-lg transition-shadow" />
        `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderSidebar() {
  const sidebar = document.getElementById("booking-sidebar");
  sidebar.innerHTML = `
    <div class="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
      <div class="mb-6">
        <p class="text-sm text-gray-500">Starting from</p>
        <div class="flex items-end gap-2">
          <span class="text-3xl font-bold text-gray-900">₹${Number(
            currentTour.price
          ).toLocaleString("en-IN")}</span>
          <span class="text-gray-500 mb-1">/ person</span>
        </div>
      </div>
      <button onclick="openEnquiryModal()" class="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-xl shadow-md transition-all hover:scale-105">
        Enquire Now
      </button>
      <div class="mt-4 pt-4 border-t border-gray-100 flex items-center justify-center gap-6 text-gray-500 text-sm">
        <span class="flex items-center gap-1"><svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg> +91 98765 43210</span>
        <span class="flex items-center gap-1"><svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg> support@tavelo.in</span>
      </div>
    </div>
    <div class="bg-blue-50 p-6 rounded-3xl border border-blue-100">
      <h4 class="font-bold text-blue-900 mb-2">Why book with us?</h4>
      <ul class="space-y-2 text-sm text-blue-800">
        <li class="flex gap-2"><svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> Verified Tour Operators</li>
        <li class="flex gap-2"><svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> Best Price Guarantee</li>
        <li class="flex gap-2"><svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> 24/7 Support</li>
      </ul>
    </div>
  `;
}

function toggleAccordion(idx) {
  const content = document.getElementById(`accordion-content-${idx}`);
  const icon = document.getElementById(`accordion-icon-${idx}`);
  content.classList.toggle("hidden");
  icon.classList.toggle("rotate-180");
}

function openEnquiryModal() {
  document.getElementById("enquiry-modal").classList.remove("hidden");
}

function closeEnquiryModal() {
  document.getElementById("enquiry-modal").classList.add("hidden");
}
