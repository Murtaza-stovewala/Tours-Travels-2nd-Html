// Hotel Detail Page JavaScript

// Get hotel slug from URL
const urlParams = new URLSearchParams(window.location.search);
const hotelSlug = urlParams.get("slug");

// Find hotel from data
let currentHotel = null;

document.addEventListener("DOMContentLoaded", function () {
  currentHotel = hotelsData.find((hotel) => hotel.slug === hotelSlug);

  if (!currentHotel) {
    showNotFound();
    return;
  }

  renderHotelDetail();
});

function showNotFound() {
  document.body.innerHTML = `
    <div class="h-screen flex items-center justify-center flex-col gap-4">
      <h1 class="text-2xl font-bold">Hotel Not Found</h1>
      <a href="index.html" class="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-full">
        Go Home
      </a>
    </div>
  `;
}

function renderHotelDetail() {
  renderHeroSection();
  renderHotelContent();
  renderBookingCard();
}

function renderHeroSection() {
  const heroHTML = `
    <img
      src="${currentHotel.image}"
      alt="${currentHotel.title}"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>
    <div class="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div class="bg-cyan-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4 tracking-wider uppercase">
        ${currentHotel.type}
      </div>
      <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight mb-2 drop-shadow-lg">${currentHotel.title}</h1>
      <div class="flex items-center text-lg text-gray-200 font-medium">
        <svg class="h-5 w-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
        ${currentHotel.location}
      </div>
      <div class="flex items-center gap-4 mt-6">
        <div class="flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-lg px-3 py-1.5 border border-white/20">
          <svg class="h-5 w-5 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
          <span class="font-bold text-lg">${currentHotel.rating}</span>
          <span class="text-gray-300 ml-1 text-sm">(${currentHotel.reviews} reviews)</span>
        </div>
      </div>
    </div>
  `;

  document.getElementById("hero-section").innerHTML = heroHTML;
}

function renderHotelContent() {
  const contentHTML = `
    <!-- Overview -->
    <section class="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
      <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
        <span class="w-1 h-8 bg-cyan-500 rounded-full mr-3"></span>
        Overview
      </h2>
      <p class="text-gray-600 leading-relaxed text-lg">${
        currentHotel.overview
      }</p>
    </section>

    <!-- Rooms -->
    <section>
      <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <span class="w-1 h-8 bg-cyan-500 rounded-full mr-3"></span>
        Rooms & Capacity
      </h2>
      <div class="space-y-6">
        ${currentHotel.rooms
          .map(
            (room) => `
          <div class="flex flex-col sm:flex-row overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow rounded-2xl group bg-white">
            <div class="w-full sm:w-1/3 bg-slate-100 relative min-h-[150px] flex items-center justify-center">
              <svg class="h-12 w-12 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
            </div>
            <div class="p-6 flex-grow flex flex-col justify-between">
              <div>
                <div class="flex justify-between items-start mb-2">
                  <h3 class="font-bold text-xl text-gray-800 group-hover:text-cyan-600 transition-colors">${
                    room.name
                  }</h3>
                </div>
                <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600 mt-2">
                  <div class="flex items-center gap-1.5">
                    <svg class="h-4 w-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                    </svg>
                    Up to ${room.capacity} guests
                  </div>
                  <div class="flex items-center gap-1.5">
                    <svg class="h-4 w-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                    </svg>
                    ${room.bed}
                  </div>
                </div>
                <div class="mt-4 pt-4 border-t border-slate-100">
                  <p class="text-sm font-medium text-gray-700 mb-1">Includes:</p>
                  <div class="flex flex-wrap gap-2">
                    ${room.features
                      .map(
                        (f) => `
                      <span class="text-xs bg-cyan-50 text-cyan-700 px-2 py-1 rounded-md border border-cyan-100">${f}</span>
                    `
                      )
                      .join("")}
                  </div>
                </div>
              </div>
              <div class="mt-4 flex items-end justify-between sm:hidden">
                <div>
                  <p class="text-sm text-gray-600">From</p>
                  <p class="text-2xl font-bold text-cyan-600">₹${room.price.toLocaleString()}</p>
                </div>
              </div>
            </div>
            <div class="hidden sm:flex flex-col justify-center items-end p-6 bg-slate-50 border-l border-slate-100 min-w-[140px]">
              <p class="text-sm text-gray-600">From</p>
              <p class="text-2xl font-bold text-cyan-600">₹${room.price.toLocaleString()}</p>
              <p class="text-sm text-gray-600">/ night</p>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    </section>

    <!-- Amenities -->
    <section class="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <span class="w-1 h-8 bg-cyan-500 rounded-full mr-3"></span>
        Amenities
      </h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-4">
        ${currentHotel.amenities
          .map(
            (amenity) => `
          <div class="flex items-center gap-3 group">
            <div class="p-2 bg-cyan-50 rounded-lg group-hover:bg-cyan-100 transition-colors">
              <svg class="h-5 w-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <span class="text-gray-700 font-medium">${amenity}</span>
          </div>
        `
          )
          .join("")}
      </div>
    </section>

    <!-- Gallery -->
    <section>
      <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <span class="w-1 h-8 bg-cyan-500 rounded-full mr-3"></span>
        Gallery
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        ${Array(6)
          .fill(currentHotel.image)
          .map(
            (img, index) => `
          <div class="relative aspect-video rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group">
            <img src="${img}" alt="Gallery ${
              index + 1
            }" class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
          </div>
        `
          )
          .join("")}
      </div>
    </section>
  `;

  document.getElementById("hotel-content").innerHTML = contentHTML;
}

function renderBookingCard() {
  const cardHTML = `
    <div class="rounded-3xl shadow-xl overflow-hidden border-0 ring-1 ring-slate-100 bg-white">
      <div class="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 text-white text-center">
        <p class="text-sm opacity-90 mb-1">Starting from</p>
        <div class="flex justify-center items-baseline gap-1">
          <span class="text-4xl font-bold cursor-default">${currentHotel.price}</span>
        </div>
      </div>
      <div class="p-6">
        <ul class="space-y-4 mb-8">
          <li class="flex items-center gap-3 text-sm text-gray-600">
            <div class="bg-green-100 p-1 rounded-full">
              <svg class="h-3 w-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            Free High Speed WiFi
          </li>
          <li class="flex items-center gap-3 text-sm text-gray-600">
            <div class="bg-green-100 p-1 rounded-full">
              <svg class="h-3 w-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            Best Price Guaranteed
          </li>
          <li class="flex items-center gap-3 text-sm text-gray-600">
            <div class="bg-green-100 p-1 rounded-full">
              <svg class="h-3 w-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            24/7 Support
          </li>
        </ul>
        <button onclick="openBookingModal()" class="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg">
          Book Now
        </button>
        <div class="mt-6 pt-6 border-t border-slate-200">
          <p class="text-sm text-gray-600 mb-3 font-medium">Need assistance?</p>
          <div class="space-y-2">
            <a href="tel:+919876543210" class="flex items-center gap-2 text-sm text-cyan-600 hover:text-cyan-700">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              +91 98765 43210
            </a>
            <a href="mailto:contact@tavelo.in" class="flex items-center gap-2 text-sm text-cyan-600 hover:text-cyan-700">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              contact@tavelo.in
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById("booking-card").innerHTML = cardHTML;
}

function openBookingModal() {
  document.getElementById("booking-modal").classList.remove("hidden");
}

function closeBookingModal() {
  document.getElementById("booking-modal").classList.add("hidden");
}

// Handle form submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("booking-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for your enquiry! We will contact you shortly.");
      closeBookingModal();
      form.reset();
    });
  }
});
