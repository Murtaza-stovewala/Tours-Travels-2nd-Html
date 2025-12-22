// Tours Page Logic

let tourGuests = { adults: 2, children: 0 };
let selectedTourType = "";
let activeFilter = "All Tour";

const filterChips = [
  "All Tour",
  "Historical",
  "Holiday Tour",
  "Special Tour",
  "Weekend Trip",
  "Adventure",
  "Cultural",
];

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header-placeholder", "components/header.html").then(() => {
    highlightActivePage("Tours");
  });
  loadComponent("footer-placeholder", "components/footer.html");
  loadComponent("mobile-nav-placeholder", "components/mobile-nav.html");

  // Init date picker
  const tourDateInput = document.getElementById("tour-date");
  if (tourDateInput) {
    const fp = flatpickr(tourDateInput, {
      dateFormat: "M/d/yyyy",
      defaultDate: new Date(),
      onChange: (selectedDates) => {
        const d = selectedDates[0];
        if (!d) return;
        document.getElementById("tour-date-display").textContent =
          fp.formatDate(d, "M/d/Y");
        document.getElementById("tour-day-display").textContent = fp.formatDate(
          d,
          "l"
        );
      },
    });
    const d = fp.selectedDates[0] || new Date();
    document.getElementById("tour-date-display").textContent = fp.formatDate(
      d,
      "M/d/Y"
    );
    document.getElementById("tour-day-display").textContent = fp.formatDate(
      d,
      "l"
    );
    window._tourFlatpickr = fp;
  }

  // Init tour type options
  const typeOptions = document.getElementById("tour-type-options");
  if (typeOptions) {
    filterChips.slice(1).forEach((type) => {
      const btn = document.createElement("button");
      btn.className =
        "w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors";
      btn.textContent = type;
      btn.onclick = () => selectTourType(type);
      typeOptions.appendChild(btn);
    });
  }

  renderFilterChips();
  renderTours();
});

function openTourDatePicker() {
  if (window._tourFlatpickr) window._tourFlatpickr.open();
}

function toggleTourTypePopover() {
  document.getElementById("tour-type-popover").classList.toggle("hidden");
}

function selectTourType(type) {
  selectedTourType = type;
  document.getElementById("tour-type-display").textContent = type;
  toggleTourTypePopover();
}

function toggleTourGuestsPopover() {
  document.getElementById("tour-guests-popover").classList.toggle("hidden");
}

function incrementTourAdults() {
  tourGuests.adults += 1;
  updateTourGuestsDisplay();
}

function decrementTourAdults() {
  tourGuests.adults = Math.max(1, tourGuests.adults - 1);
  updateTourGuestsDisplay();
}

function incrementTourChildren() {
  tourGuests.children += 1;
  updateTourGuestsDisplay();
}

function decrementTourChildren() {
  tourGuests.children = Math.max(0, tourGuests.children - 1);
  updateTourGuestsDisplay();
}

function updateTourGuestsDisplay() {
  const total = tourGuests.adults + tourGuests.children;
  document.getElementById("tour-total-guests").textContent = total;
  document.getElementById("tour-adults").textContent = tourGuests.adults;
  document.getElementById("tour-children").textContent = tourGuests.children;
  document.getElementById("tour-adults-display").textContent =
    tourGuests.adults;
  document.getElementById("tour-children-display").textContent =
    tourGuests.children;
}

function renderFilterChips() {
  const container = document.getElementById("filter-chips");
  if (!container) return;

  container.innerHTML = "";
  filterChips.forEach((chip) => {
    const btn = document.createElement("button");
    btn.className = `px-6 py-2 rounded-full text-sm font-semibold transition-all ${activeFilter === chip
        ? "bg-cyan-500 text-white shadow-lg"
        : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
      }`;
    btn.textContent = chip;
    btn.onclick = () => {
      activeFilter = chip;
      renderFilterChips();
      renderTours();
    };
    container.appendChild(btn);
  });
}

function renderTours() {
  const container = document.getElementById("tours-grid");
  if (!container) return;

  const filteredTours =
    activeFilter === "All Tour"
      ? toursData
      : toursData.filter((tour) => tour.category === activeFilter);

  container.innerHTML = "";

  if (!filteredTours || filteredTours.length === 0) {
    container.innerHTML =
      '<p class="col-span-full text-center text-gray-600">No tours available for this category.</p>';
    return;
  }

  filteredTours.forEach((tour) => {
    const card = document.createElement("div");
    card.className =
      "bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100 flex flex-col";

    card.innerHTML = `
      <div class="relative h-64 overflow-hidden">
        <img src="${tour.image}" alt="${tour.title
      }" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        ${tour.featured
        ? '<div class="absolute top-4 right-4 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">FEATURED</div>'
        : ""
      }
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex justify-between items-end">
          <div class="flex items-center text-white text-xs font-semibold bg-black/30 backdrop-blur-sm px-2 py-1 rounded-md">
            <svg class="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            ${tour.category}
          </div>
          <div class="flex items-center text-white text-xs font-semibold bg-black/30 backdrop-blur-sm px-2 py-1 rounded-md">
            <svg class="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
            ${tour.places} Places
          </div>
        </div>
      </div>
      <div class="p-6 flex flex-col flex-grow">
        <h3 class="text-xl font-bold text-gray-800 mb-1 group-hover:text-cyan-600 transition-colors">${tour.title
      }</h3>
        <div class="flex items-center text-sm text-gray-500 mb-3">
          <svg class="h-4 w-4 mr-1 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          ${tour.location}
        </div>
        <div class="flex items-center gap-2 mb-3">
          <div class="bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-md flex items-center">
            <svg class="h-3 w-3 mr-1 fill-white" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            ${tour.rating.toFixed(1)}
          </div>
          <span class="text-sm text-gray-500">Excellent (${tour.reviews.toLocaleString()} Reviews)</span>
        </div>
        <div class="flex items-center text-sm text-gray-600 mb-6">
          <svg class="h-4 w-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          ${tour.duration}
        </div>
        <div class="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p class="text-sm text-gray-500">From</p>
            <p class="text-lg font-bold text-gray-800">₹${Number(
        tour.price
      ).toLocaleString(
        "en-IN"
      )}<span class="text-sm font-normal text-gray-500"> / person</span></p>
          </div>
          <a href="tour-detail.html?slug=${tour.slug
      }" class="text-sm font-semibold text-cyan-500 hover:text-cyan-600 flex items-center">
            See More <svg class="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}
