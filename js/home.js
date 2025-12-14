// Home page specific JavaScript

// Tab switching functionality
document.addEventListener("DOMContentLoaded", function () {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabName = btn.getAttribute("data-tab");

      // Remove active class from all buttons
      tabBtns.forEach((b) => {
        b.classList.remove("bg-cyan-500");
        b.classList.remove("active-tab");
      });

      // Hide all tab contents
      tabContents.forEach((content) => {
        content.classList.add("hidden");
      });

      // Add active class to clicked button
      btn.classList.add("bg-cyan-500");
      btn.classList.add("active-tab");

      // Show corresponding tab content
      document.getElementById(`${tabName}-tab`).classList.remove("hidden");
    });
  });

  // Initialize date pickers
  initDatePickers();

  // Render sections
  renderAboutSection();
  renderHotelsSection();
  renderFlightsSection();
  renderToursSection();
  renderWhyChooseSection();
  renderTestimonialsSection();
});

// Initialize Flatpickr date pickers
function initDatePickers() {
  flatpickr("#flight-date", {
    mode: "range",
    minDate: "today",
    dateFormat: "M d, Y",
  });

  flatpickr("#hotel-checkin", {
    minDate: "today",
    dateFormat: "M d, Y",
  });

  flatpickr("#hotel-checkout", {
    minDate: "today",
    dateFormat: "M d, Y",
  });

  flatpickr("#tour-date", {
    minDate: "today",
    dateFormat: "M d, Y",
  });
}

// Swap airports function
function swapAirports() {
  const fromInput = document.getElementById("flight-from");
  const toInput = document.getElementById("flight-to");
  const temp = fromInput.value;
  fromInput.value = toInput.value;
  toInput.value = temp;
}

// Render About Section
function renderAboutSection() {
  const html = `
    <section class="py-20 bg-slate-50 overflow-hidden">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Image Section -->
          <div class="relative h-[340px] sm:h-[500px] flex items-center justify-center my-8 lg:my-0 lg:mb-0">
            <div class="absolute w-[180px] h-[180px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden shadow-lg z-10 top-0 left-1/2 -translate-x-[60%] sm:left-0 sm:translate-x-0">
              <img src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=400&h=400&fit=crop" alt="Kashmir Landscape" class="w-full h-full object-cover">
            </div>
            <div class="absolute w-[160px] h-[160px] sm:w-[300px] sm:h-[300px] rounded-full overflow-hidden shadow-lg z-20 bottom-0 left-1/2 -translate-x-[40%] sm:left-auto sm:right-0 sm:translate-x-0">
              <img src="https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&h=400&fit=crop" alt="Couple in Rajasthan" class="w-full h-full object-cover">
            </div>
            <div class="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] sm:w-40 sm:h-40 bg-cyan-500 rounded-full flex flex-col items-center justify-center text-white shadow-2xl">
              <span class="text-4xl sm:text-4xl font-bold">15+</span>
              <span class="text-center text-sm sm:text-sm leading-tight">Years Of<br>Experience</span>
            </div>
            <div class="absolute w-[260px] h-[260px] sm:w-[420px] sm:h-[420px] rounded-full border border-cyan-400 sm:border-2 opacity-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <div class="absolute w-[300px] h-[300px] sm:w-[480px] sm:h-[480px] rounded-full border border-cyan-400 sm:border-2 opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <!-- Text Content Section -->
          <div>
            <div class="inline-flex items-center bg-cyan-500 text-white py-1 px-4 rounded-full mb-4">
              <svg class="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              </svg>
              <span class="font-semibold text-sm tracking-wider">ABOUT US</span>
            </div>
            <h2 class="text-2xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              We Help You Discover <span class="text-cyan-500">The Best of India,</span>
              <br>
              <span class="text-cyan-500">Hassle-Free</span>
            </h2>
            <p class="text-gray-600 mb-8">
              From the snow-capped peaks of the Himalayas to the serene backwaters of Kerala, we curate custom itineraries for Indian families, couples, and solo travellers. Experience pan-India coverage with our verified local partners.
            </p>
            <div class="grid grid-cols-1 gap-4 sm:gap-6 mb-8">
              <div class="bg-white p-4 sm:p-6 rounded-2xl shadow-sm flex items-start space-x-4">
                <div class="bg-cyan-100 p-3 rounded-full shrink-0">
                  <svg class="h-6 w-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-gray-800">Get Your Best Deals</h3>
                  <p class="text-sm text-gray-500">Handpicked offers with guaranteed best prices for your dream vacation.</p>
                </div>
              </div>
              <div class="bg-white p-4 sm:p-6 rounded-2xl shadow-sm flex items-start space-x-4">
                <div class="bg-cyan-100 p-3 rounded-full shrink-0">
                  <svg class="h-6 w-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-gray-800">Easy To Booking</h3>
                  <p class="text-sm text-gray-500">Seamless online booking experience with instant confirmation and support.</p>
                </div>
              </div>
            </div>
            <button class="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-full flex items-center gap-2">
              Discover More
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
  document.getElementById("about-section").innerHTML = html;
}

// Render Hotels Section
function renderHotelsSection() {
  const hotels = [
    {
      slug: "beach-bliss-resort-goa",
      name: "Goa Beachfront Resort",
      location: "Goa, India",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500&q=80",
      reviews: "4.5k Reviews",
      price: 6800,
      rating: 4.9,
    },
    {
      slug: "himalayan-serenity-lodge-manali",
      name: "Manali Snow View Hotel",
      location: "Himachal Pradesh, India",
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500&q=80",
      reviews: "3.9k Reviews",
      price: 4500,
      rating: 4.8,
    },
    {
      slug: "jaipur-heritage-haveli",
      name: "Jaipur Heritage Haveli",
      location: "Rajasthan, India",
      image:
        "https://images.unsplash.com/photo-1681642153169-e5daa77025da?w=500&q=80",
      reviews: "3.2k Reviews",
      price: 5200,
      rating: 4.7,
    },
    {
      slug: "beach-bliss-resort-goa",
      name: "Kerala Backwater Resort",
      location: "Kerala, India",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500&q=80",
      reviews: "2.8k Reviews",
      price: 7500,
      rating: 4.6,
    },
  ];

  const cardsHTML = hotels
    .map(
      (hotel) => `
    <div class="swiper-slide">
      <div class="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div class="relative">
          <img src="${hotel.image}" alt="${
        hotel.name
      }" class="w-full h-64 object-cover">
          <button class="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
            <svg class="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </button>
        </div>
        <div class="p-6">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-1">
              ${createStarRating(hotel.rating)}
              <span class="ml-1 text-sm text-gray-600">${hotel.rating}</span>
            </div>
            <span class="text-sm text-gray-500">${hotel.reviews}</span>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">${hotel.name}</h3>
          <div class="flex items-center text-gray-600 mb-4">
            <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span class="text-sm">${hotel.location}</span>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <span class="text-sm text-gray-500">Starting from</span>
              <p class="text-2xl font-bold text-cyan-500">${formatCurrency(
                hotel.price
              )}</p>
              <span class="text-xs text-gray-500">per night</span>
            </div>
            <a href="hotel-detail.html?slug=${
              hotel.slug
            }" class="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full flex items-center gap-1 text-sm font-semibold">
              View
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  const html = `
    <section class="py-20 bg-slate-50 relative">
      <div class="absolute top-0 left-0 right-0 h-1/2 bg-cyan-500/10" style="clip-path: ellipse(100% 55% at 48% 44%);"></div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-12">
          <div class="inline-flex items-center bg-cyan-500 text-white py-1 px-4 rounded-full mb-2">
            <span class="font-semibold text-sm tracking-wider">HOTEL</span>
          </div>
          <h2 class="text-2xl md:text-4xl font-bold text-gray-800">Our Most Popular Hotels</h2>
        </div>
        
        <div class="swiper hotels-swiper">
          <div class="swiper-wrapper">
            ${cardsHTML}
          </div>
          <div class="swiper-pagination mt-8"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>

        <div class="text-center mt-12">
          <a href="hotels.html" class="inline-flex items-center bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full gap-2">
            View All Hotels
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `;
  document.getElementById("hotels-section").innerHTML = html;

  // Initialize Swiper
  new Swiper(".hotels-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
}

// Render Flights Section
function renderFlightsSection() {
  const flights = flightsData.slice(0, 4);

  const cardsHTML = flights
    .map((flight) => {
      const rep =
        flight.schedule && flight.schedule.length > 0
          ? flight.schedule[0]
          : {
              airline: flight.airline,
              depart: "10:00 AM",
              arrive: "12:00 PM",
              type: flight.stops,
            };
      const departTime = rep.depart;
      const arriveTime = rep.arrive;
      const airlineName = rep.airline;
      const airlineCode = airlineName.substring(0, 2).toUpperCase();

      return `
        <div class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full mb-2 flex flex-col md:flex-row">
          <!-- LEFT SECTION - AIRLINE BRAND -->
          <div class="p-6 md:w-[25%] flex items-center md:justify-center border-b md:border-b-0 md:border-r border-dashed border-gray-200 gap-4">
            <div class="h-14 w-14 rounded-full bg-cyan-50 flex items-center justify-center shrink-0">
              <span class="text-cyan-600 font-bold text-xl">${airlineCode}</span>
            </div>
            <div class="flex flex-col">
              <span class="text-lg font-bold text-gray-800">${airlineName}</span>
              <span class="text-xs text-gray-400">Economy</span>
            </div>
          </div>

          <!-- MIDDLE SECTION - FLIGHT INFO -->
          <div class="p-6 md:w-[50%] flex flex-col justify-center border-b md:border-b-0 md:border-r border-dashed border-gray-200">
            <div class="flex flex-col md:flex-row justify-between items-center mb-6 gap-6 md:gap-2">
              <!-- Depart -->
              <div class="text-center md:text-left min-w-[80px]">
                <p class="text-gray-400 text-xs font-semibold uppercase mb-1">Friday</p>
                <p class="text-2xl font-bold text-gray-800">${departTime}</p>
                <p class="text-sm font-bold text-gray-500 mt-1">${
                  flight.fromCode
                }</p>
              </div>

              <!-- Timeline -->
              <div class="flex-1 flex flex-col items-center px-4 w-full">
                <span class="text-xs text-gray-400 mb-2">Duration ${
                  flight.duration
                }</span>
                <div class="relative w-full flex items-center justify-center">
                  <div class="absolute left-0 right-0 h-[2px] border-t-2 border-dotted border-cyan-200"></div>
                  <div class="bg-white p-1 z-10">
                    <svg class="h-5 w-5 text-cyan-500 rotate-90" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m17.8 19.2-1.8-8.2 3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2Z"/>
                    </svg>
                  </div>
                  <div class="absolute left-0 w-2 h-2 rounded-full bg-cyan-500"></div>
                  <div class="absolute right-0 w-2 h-2 rounded-full bg-cyan-500"></div>
                </div>
                <span class="text-xs text-cyan-600 font-medium mt-2 bg-cyan-50 px-2 py-0.5 rounded-full">${
                  flight.stops
                }</span>
              </div>

              <!-- Arrive -->
              <div class="text-center md:text-right min-w-[80px]">
                <p class="text-gray-400 text-xs font-semibold uppercase mb-1">Saturday</p>
                <p class="text-2xl font-bold text-gray-800">${arriveTime}</p>
                <p class="text-sm font-bold text-gray-500 mt-1">${
                  flight.toCode
                }</p>
              </div>
            </div>

            <!-- Pills Row -->
            <div class="flex flex-wrap gap-2 justify-center md:justify-center mt-auto">
              <button class="px-3 py-1 rounded-full border border-cyan-200 text-cyan-600 text-xs font-medium hover:bg-cyan-500 hover:text-white transition-colors">Flight details</button>
              <button class="px-3 py-1 rounded-full border border-cyan-200 text-cyan-600 text-xs font-medium hover:bg-cyan-500 hover:text-white transition-colors">Fare info</button>
              <button class="px-3 py-1 rounded-full border border-cyan-200 text-cyan-600 text-xs font-medium hover:bg-cyan-500 hover:text-white transition-colors">Refund</button>
            </div>
          </div>

          <!-- RIGHT SECTION - PRICE + CTA + QR -->
          <div class="p-6 md:w-[25%] flex flex-col justify-center items-center gap-4 relative">
            <!-- QR Section -->
            <div class="absolute top-4 right-4 hidden md:block">
              <div class="bg-white border border-gray-100 p-1 rounded-lg">
                <svg class="h-10 w-10 text-gray-800" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <rect width="5" height="5" x="3" y="3" rx="1"/>
                  <rect width="5" height="5" x="16" y="3" rx="1"/>
                  <rect width="5" height="5" x="3" y="16" rx="1"/>
                  <path d="M21 16h-3a2 2 0 0 0-2 2v3"/>
                  <path d="M21 21v.01"/>
                  <path d="M12 7v3a2 2 0 0 1-2 2H7"/>
                  <path d="M3 12h.01"/>
                  <path d="M12 3h.01"/>
                  <path d="M12 16v.01"/>
                  <path d="M16 12h1"/>
                  <path d="M21 12v.01"/>
                  <path d="M12 21v-1"/>
                </svg>
              </div>
              <span class="absolute -top-3 -right-2 bg-white border border-gray-200 text-[10px] px-2 py-0.5 rounded-full shadow-sm">Scan me</span>
            </div>

            <div class="mt-8 md:mt-12 text-center w-full">
              <p class="text-gray-400 text-sm mb-1">Start from</p>
              <div class="mb-2">
                <span class="text-2xl font-bold text-gray-800">₹${flight.price.toLocaleString(
                  "en-IN"
                )}</span>
                <span class="text-xs text-gray-400">/pax</span>
              </div>

              <a href="flight-detail.html?slug=${
                flight.slug
              }" class="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full py-3 shadow-md inline-block transition-colors">
                View Deals
              </a>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  const html = `
    <section class="py-20 bg-slate-50 relative">
      <div class="absolute top-0 left-0 right-0 h-1/2 bg-cyan-500/10" style="clip-path: ellipse(100% 55% at 48% 44%);"></div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-12">
          <div class="inline-flex items-center bg-cyan-500 text-white py-1 px-4 rounded-full mb-2 shadow-sm">
            <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="m17.8 19.2-1.8-8.2 3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2Z"/>
            </svg>
            <span class="font-semibold text-sm tracking-wider">FLIGHT</span>
          </div>
          <h2 class="text-2xl md:text-4xl font-bold text-gray-800">Our Most Popular Flights</h2>
        </div>

        <div class="flex flex-col gap-2 max-w-5xl mx-auto">
          ${cardsHTML}
        </div>

        <div class="text-center mt-12">
          <a href="flights.html" class="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-colors inline-flex items-center mx-auto shadow-lg transform hover:scale-105 duration-200">
            Discover More
            <svg class="h-5 w-5 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="1"/>
              <circle cx="19" cy="12" r="1"/>
              <circle cx="5" cy="12" r="1"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="absolute bottom-[-2rem] right-4 hidden md:block">
        <button class="bg-cyan-500 text-white rounded-full p-3 shadow-lg hover:bg-cyan-600 transition-colors" onclick="window.scrollTo({ top: 0, behavior: 'smooth' })">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="m18 15-6-6-6 6"/>
          </svg>
        </button>
      </div>
    </section>
  `;
  document.getElementById("flights-section").innerHTML = html;
}

// Render Tours Section
function renderToursSection() {
  const tours = toursData.slice(0, 4);

  const cardsHTML = tours
    .map(
      (tour) => `
    <div class="swiper-slide">
      <div class="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div class="relative">
          <img src="${tour.image}" alt="${
        tour.title
      }" class="w-full h-64 object-cover">
          <div class="absolute top-4 left-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            ${tour.category}
          </div>
          <div class="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-cyan-500">
            ${tour.duration}
          </div>
        </div>
        <div class="p-6">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-1">
              ${createStarRating(tour.rating)}
              <span class="ml-1 text-sm text-gray-600">${tour.rating}</span>
            </div>
            <span class="text-sm text-gray-500">${tour.reviews} Reviews</span>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">${tour.title}</h3>
          <div class="flex items-center text-gray-600 mb-4">
            <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span class="text-sm">${tour.location}</span>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <span class="text-sm text-gray-500">Starting from</span>
              <p class="text-2xl font-bold text-cyan-500">${formatCurrency(
                tour.price
              )}</p>
            </div>
            <a href="tour-detail.html?slug=${
              tour.slug
            }" class="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full flex items-center gap-1 text-sm font-semibold">
              Explore
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  const html = `
    <section class="py-20 bg-slate-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <div class="inline-flex items-center bg-cyan-500 text-white py-1 px-4 rounded-full mb-2">
            <span class="font-semibold text-sm tracking-wider">TOURS</span>
          </div>
          <h2 class="text-2xl md:text-4xl font-bold text-gray-800">Explore Amazing Tours</h2>
        </div>
        
        <div class="swiper tours-swiper">
          <div class="swiper-wrapper">
            ${cardsHTML}
          </div>
          <div class="swiper-pagination mt-8"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>

        <div class="text-center mt-12">
          <a href="tours.html" class="inline-flex items-center bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full gap-2">
            View All Tours
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `;
  document.getElementById("tours-section").innerHTML = html;

  // Initialize Swiper
  new Swiper(".tours-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
}

// Render Why Choose Us Section
function renderWhyChooseSection() {
  const html = `
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-flex items-center bg-cyan-100 text-cyan-500 py-2 px-4 rounded-full mb-4 shadow-sm font-semibold">
            <svg class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
            WHY CHOOSE US
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800">Discover Beautiful India With Us</h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8">
            <div class="flex items-start group">
              <div class="relative">
                <div class="bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold absolute -top-3 -left-3 z-10">01</div>
                <div class="bg-cyan-500 p-5 rounded-full shadow-lg">
                  <svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
              </div>
              <div class="ml-6 bg-white shadow-lg rounded-2xl p-6 flex-1 transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <h3 class="text-xl font-bold text-gray-800 mb-2">100% Safe & Verified Stays</h3>
                <p class="text-gray-500 leading-relaxed">We verify every hotel and homestay partner to ensure safety standards for families and solo travellers.</p>
              </div>
            </div>

            <div class="flex items-start group">
              <div class="relative">
                <div class="bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold absolute -top-3 -left-3 z-10">02</div>
                <div class="bg-cyan-500 p-5 rounded-full shadow-lg">
                  <svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
              <div class="ml-6 bg-white shadow-lg rounded-2xl p-6 flex-1 transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <h3 class="text-xl font-bold text-gray-800 mb-2">Best Price Guarantee</h3>
                <p class="text-gray-500 leading-relaxed">Get the lowest rates on hotels and tours across India with no hidden booking fees.</p>
              </div>
            </div>

            <div class="flex items-start group">
              <div class="relative">
                <div class="bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold absolute -top-3 -left-3 z-10">03</div>
                <div class="bg-cyan-500 p-5 rounded-full shadow-lg">
                  <svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
                  </svg>
                </div>
              </div>
              <div class="ml-6 bg-white shadow-lg rounded-2xl p-6 flex-1 transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <h3 class="text-xl font-bold text-gray-800 mb-2">Regional Support 24/7</h3>
                <p class="text-gray-500 leading-relaxed">Support available in English, Hindi, and regional languages for your convenience.</p>
              </div>
            </div>
          </div>

          <div class="relative flex justify-center items-center h-[320px] sm:h-[500px] mt-8 lg:mt-0">
            <img
              src="https://live.themewild.com/tavelo/assets/img/choose/02.jpg"
              alt="Traveler with map"
              class="absolute z-10 w-[140px] h-[140px] sm:w-[280px] sm:h-[280px] rounded-full object-cover shadow-lg border-4 sm:border-8 border-white top-[80px] left-[10px] sm:top-[120px] sm:left-[0px]"
            />
            <img
              src="https://live.themewild.com/tavelo/assets/img/choose/01.jpg"
              alt="Two happy travelers"
              class="absolute z-0 w-[180px] h-[180px] sm:w-[350px] sm:h-[350px] rounded-full object-cover shadow-2xl border-4 sm:border-8 border-white top-[20px] right-[10px] sm:top-[50px] sm:right-[0px]"
            />
          </div>
        </div>
      </div>
    </section>
  `;
  document.getElementById("why-choose-section").innerHTML = html;
}

// Render Testimonials Section
function renderTestimonialsSection() {
  const testimonials = [
    {
      quote:
        "We booked our honeymoon in Kerala with Tavelo and everything from hotels to cabs was perfectly planned. The houseboat experience was magical!",
      name: "Aarav Sharma",
      location: "Mumbai",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&q=80",
      mainImage:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80",
    },
    {
      quote:
        "The Golden Triangle tour was well organized. Our driver was polite and the guides were knowledgeable. Highly recommend for family trips.",
      name: "Priya Nair",
      location: "Bengaluru",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      mainImage:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80",
    },
    {
      quote:
        "Solo backpacking in Himachal was a dream come true thanks to the 24/7 support. Safe stays and great local experiences!",
      name: "Karan Mehta",
      location: "Delhi",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      mainImage:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    },
  ];

  let currentIndex = 0;

  function renderTestimonial(index) {
    const testimonial = testimonials[index];
    return `
      <section class="py-20 bg-gray-50 overflow-hidden">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <div class="inline-flex items-center bg-cyan-100/60 text-cyan-600 py-2 px-4 rounded-full mb-4 shadow-sm font-semibold">
              <svg class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              TESTIMONIAL
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800">Our Most Popular Testimonials</h2>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="relative text-left">
              <svg class="absolute -top-8 -left-8 w-24 h-24 text-cyan-500/10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <div class="relative z-10">
                <p class="text-lg text-gray-600 leading-relaxed mb-8">
                  "${testimonial.quote}"
                </p>
                <div class="flex justify-between items-center">
                  <div class="flex items-center">
                    <img
                      src="${testimonial.avatar}"
                      alt="${testimonial.name}"
                      class="w-16 h-16 rounded-full object-cover shadow-md border-4 border-white"
                    />
                    <div class="ml-4">
                      <h4 class="text-xl font-bold text-gray-800">${testimonial.name}</h4>
                      <p class="text-gray-500">${testimonial.location}</p>
                    </div>
                  </div>
                  <div class="flex gap-4">
                    <button onclick="prevTestimonial()" class="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                      <svg class="h-5 w-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                      </svg>
                    </button>
                    <button onclick="nextTestimonial()" class="bg-cyan-500 text-white p-3 rounded-full shadow-md hover:bg-cyan-600 transition-colors">
                      <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative flex justify-center items-center h-[450px]">
              <div class="w-full h-full bg-cyan-500/20 rounded-3xl transform -rotate-6"></div>
              <img
                src="${testimonial.mainImage}"
                alt="${testimonial.name}"
                class="absolute w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    `;
  }

  document.getElementById("testimonials-section").innerHTML =
    renderTestimonial(currentIndex);

  // Make functions global
  window.nextTestimonial = function () {
    currentIndex = (currentIndex + 1) % testimonials.length;
    document.getElementById("testimonials-section").innerHTML =
      renderTestimonial(currentIndex);
  };

  window.prevTestimonial = function () {
    currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    document.getElementById("testimonials-section").innerHTML =
      renderTestimonial(currentIndex);
  };
}
