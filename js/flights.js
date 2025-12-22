// Flights Page Logic

let travellers = 1;

document.addEventListener('DOMContentLoaded', () => {
  // Load shared components
  loadComponent('header-placeholder', 'components/header.html').then(() => {
    highlightActivePage('Flights');
  });
  loadComponent('footer-placeholder', 'components/footer.html');
  loadComponent('mobile-nav-placeholder', 'components/mobile-nav.html');

  // Init date picker
  const journeyInput = document.getElementById('journey-date');
  if (journeyInput) {
    const fp = flatpickr(journeyInput, {
      dateFormat: 'd M, Y',
      defaultDate: new Date(),
      onChange: (selectedDates) => {
        const d = selectedDates[0];
        if (!d) return;
        document.getElementById('journey-date-display').textContent = fp.formatDate(d, 'd M, Y');
        document.getElementById('journey-day-display').textContent = fp.formatDate(d, 'l');
      }
    });
    const d = fp.selectedDates[0] || new Date();
    document.getElementById('journey-date-display').textContent = fp.formatDate(d, 'd M, Y');
    document.getElementById('journey-day-display').textContent = fp.formatDate(d, 'l');
    // store for manual open
    window._journeyFlatpickr = fp;
  }

  // Swap From/To
  const swapBtn = document.getElementById('swap-btn');
  if (swapBtn) {
    swapBtn.addEventListener('click', () => {
      const fromEl = document.getElementById('from-city');
      const toEl = document.getElementById('to-city');
      const temp = fromEl.value;
      fromEl.value = toEl.value;
      toEl.value = temp;
    });
  }

  // Travellers controls
  updateTravellersDisplay();

  // Render flights
  renderFlights();
});

function openJourneyDatePicker() {
  if (window._journeyFlatpickr) {
    window._journeyFlatpickr.open();
  }
}

function incrementTravellers() {
  travellers += 1;
  updateTravellersDisplay();
}

function decrementTravellers() {
  travellers = Math.max(1, travellers - 1);
  updateTravellersDisplay();
}

function updateTravellersDisplay() {
  const countEl = document.getElementById('travellers-count');
  const displayEl = document.getElementById('travellers-display');
  if (countEl) countEl.textContent = String(travellers);
  if (displayEl) displayEl.textContent = String(travellers);
}

function toggleTravellersPopover() {
  const pop = document.getElementById('travellers-popover');
  if (!pop) return;
  pop.classList.toggle('hidden');
}

function renderFlights() {
  const container = document.getElementById('flights-list');
  if (!container) return;

  container.innerHTML = '';

  if (!Array.isArray(flightsData) || flightsData.length === 0) {
    container.innerHTML = '<p class="text-gray-600 text-center">No flights available right now.</p>';
    return;
  }

  flightsData.forEach(flight => {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full mb-6 flex flex-col md:flex-row';

    // Get representative schedule or use defaults
    const rep = (flight.schedule && flight.schedule.length > 0) ? flight.schedule[0] : {
      airline: flight.airline,
      depart: '10:00 AM',
      arrive: '12:00 PM',
      type: flight.stops
    };
    const departTime = rep.depart;
    const arriveTime = rep.arrive;
    const airlineName = rep.airline;
    const airlineCode = airlineName.substring(0, 2).toUpperCase();

    card.innerHTML = `
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
            <p class="text-sm font-bold text-gray-500 mt-1">${flight.fromCode}</p>
          </div>

          <!-- Timeline -->
          <div class="flex-1 flex flex-col items-center px-4 w-full">
            <span class="text-xs text-gray-400 mb-2">Duration ${flight.duration}</span>
            <div class="relative w-full flex items-center justify-center">
              <div class="absolute left-0 right-0 h-[2px] border-t-2 border-dotted border-cyan-200"></div>
              <div class="bg-white p-1 z-10">
                <svg class="h-5 w-5 text-cyan-500 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
              <div class="absolute left-0 w-2 h-2 rounded-full bg-cyan-500"></div>
              <div class="absolute right-0 w-2 h-2 rounded-full bg-cyan-500"></div>
            </div>
            <span class="text-xs text-cyan-600 font-medium mt-2 bg-cyan-50 px-2 py-0.5 rounded-full">${flight.stops}</span>
          </div>

          <!-- Arrive -->
          <div class="text-center md:text-right min-w-[80px]">
            <p class="text-gray-400 text-xs font-semibold uppercase mb-1">Saturday</p>
            <p class="text-2xl font-bold text-gray-800">${arriveTime}</p>
            <p class="text-sm font-bold text-gray-500 mt-1">${flight.toCode}</p>
          </div>
        </div>

        <!-- Pills Row -->
        <div class="flex flex-wrap gap-2 justify-center md:justify-center mt-auto">
          <button class="px-3 py-1 btn-rounded border border-cyan-200 text-cyan-600 text-xs font-medium hover:bg-cyan-500 hover:text-white transition-colors">Flight details</button>
          <button class="px-3 py-1 btn-rounded border border-cyan-200 text-cyan-600 text-xs font-medium hover:bg-cyan-500 hover:text-white transition-colors">Fare info</button>
          <button class="px-3 py-1 btn-rounded border border-cyan-200 text-cyan-600 text-xs font-medium hover:bg-cyan-500 hover:text-white transition-colors">Refund</button>
        </div>
      </div>

      <!-- RIGHT SECTION - PRICE + CTA -->
      <div class="p-6 md:w-[25%] flex flex-col justify-center items-center gap-4 relative">
        <!-- QR Section -->
        <div class="absolute top-4 right-4 hidden md:block">
          <div class="bg-white border border-gray-100 p-1 rounded-lg">
            <svg class="h-10 w-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"/></svg>
          </div>
          <span class="absolute -top-3 -right-2 bg-white border border-gray-200 text-[10px] px-2 py-0.5 rounded-full shadow-sm">Scan me</span>
        </div>

        <div class="mt-8 md:mt-12 text-center w-full">
          <p class="text-gray-400 text-sm mb-1">Start from</p>
          <div class="mb-2">
            <span class="text-2xl font-bold text-gray-800">₹${Number(flight.price).toLocaleString('en-IN')}</span>
            <span class="text-xs text-gray-400">/pax</span>
          </div>
          <a href="flight-detail.html?id=${flight.id}" class="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold btn-rounded py-3 shadow-md transition-colors">View Deals</a>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}
