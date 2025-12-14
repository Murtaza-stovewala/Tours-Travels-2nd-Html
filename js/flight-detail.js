// Flight Detail Page

const params = new URLSearchParams(window.location.search);
const slug = params.get('slug');
const flightId = params.get('id');
let currentFlight = null;

document.addEventListener('DOMContentLoaded', () => {
  // Load header component
  loadComponent('header-placeholder', 'components/header.html').then(() => {
    highlightActivePage('Flights');
  });

  // Find flight by either slug or id
  if (slug) {
    currentFlight = flightsData.find(f => f.slug === slug);
  } else if (flightId) {
    currentFlight = flightsData.find(f => f.id === flightId || Number(f.id) === Number(flightId));
  }

  if (!currentFlight) {
    return showNotFound();
  }

  renderContent();
  renderBookingCard();

  // Scroll to top
  window.scrollTo(0, 0);
});

function showNotFound() {
  document.body.innerHTML = `
    <div class="h-screen flex items-center justify-center flex-col gap-4">
      <h1 class="text-2xl font-bold">Flight Not Found</h1>
      <a href="flights.html" class="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-full">Back to Flights</a>
    </div>
  `;
}

function renderContent() {
  // Determine representative schedule
  const mainSchedule = (currentFlight.schedule && currentFlight.schedule.length > 0)
    ? currentFlight.schedule[0]
    : {
      airline: currentFlight.airline,
      depart: '07:40 AM',
      arrive: '08:47 AM',
      type: currentFlight.stops,
      price: currentFlight.price
    };

  const c = document.getElementById('flight-content');
  c.innerHTML = `
    <!-- MAIN SUMMARY CARD -->
    <div class="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
      <!-- Card Header -->
      <div class="bg-blue-50/50 p-4 border-b border-gray-100 flex items-center gap-3">
        <svg class="h-5 w-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        <span class="font-semibold text-gray-700 text-sm">
          Flight from ${currentFlight.fromCode}, ${currentFlight.from} → ${currentFlight.toCode}, ${currentFlight.to}
        </span>
      </div>

      <!-- Card Body -->
      <div class="p-6 md:p-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          
          <!-- Departure -->
          <div class="text-center md:text-left min-w-[100px]">
            <p class="text-sm font-semibold text-gray-400 mb-1">Friday</p>
            <p class="text-3xl font-bold text-gray-800 mb-1">${mainSchedule.depart}</p>
            <p class="text-lg font-bold text-gray-600">${currentFlight.fromCode}</p>
            <p class="text-xs text-gray-400">${currentFlight.from}</p>
          </div>

          <!-- Duration Timeline -->
          <div class="flex-1 w-full flex flex-col items-center px-4">
            <span class="text-xs text-gray-400 font-medium mb-3">Duration ${currentFlight.duration}</span>
            <div class="relative w-full flex items-center justify-center">
              <div class="absolute left-0 right-0 h-[2px] border-t-2 border-dotted border-cyan-200"></div>
              <div class="bg-white p-2 z-10 border border-cyan-100 rounded-full shadow-sm">
                <svg class="h-5 w-5 text-cyan-500 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
              <div class="absolute left-0 w-2.5 h-2.5 rounded-full bg-cyan-500 ring-4 ring-white"></div>
              <div class="absolute right-0 w-2.5 h-2.5 rounded-full bg-cyan-500 ring-4 ring-white"></div>
            </div>
            <span class="text-xs text-cyan-600 font-medium mt-3 bg-cyan-50 px-3 py-1 rounded-full">${currentFlight.stops}</span>
          </div>

          <!-- Arrival -->
          <div class="text-center md:text-right min-w-[100px]">
            <p class="text-sm font-semibold text-gray-400 mb-1">Saturday</p>
            <p class="text-3xl font-bold text-gray-800 mb-1">${mainSchedule.arrive}</p>
            <p class="text-lg font-bold text-gray-600">${currentFlight.toCode}</p>
            <p class="text-xs text-gray-400">${currentFlight.to}</p>
          </div>
        </div>

        <div class="flex flex-col md:flex-row justify-between items-center border-t border-dashed border-gray-200 pt-6 gap-4">
          <div class="flex gap-4">
            <div class="flex items-center text-green-600 text-sm font-medium bg-green-50 px-3 py-1 rounded-full">
              <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Refundable
            </div>
            <div class="flex items-center text-gray-600 text-sm font-medium bg-gray-100 px-3 py-1 rounded-full">
              <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Baggage Included
            </div>
          </div>
          <button class="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-2 font-bold shadow-md">Flight Details</button>
        </div>
      </div>
    </div>

    <!-- CONVENIENCE SECTION -->
    <div class="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8">
      <h3 class="text-xl font-bold text-gray-800 mb-6">Extra convenience for your trip</h3>
      <div class="space-y-4">
        ${[
      "Booking hotel and flight together saves you up to 30%",
      "Add airport transfer for special price for you!",
      "Get travel insurance with 50% discount"
    ].map(text => `
          <div class="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl hover:shadow-md transition-shadow cursor-pointer group">
            <div class="flex items-center gap-4">
              <div class="h-10 w-10 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                </svg>
              </div>
              <span class="font-bold text-gray-700 text-sm md:text-base">${text}</span>
            </div>
            <svg class="h-5 w-5 text-gray-400 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        `).join('')}
      </div>
      <button class="w-full mt-6 rounded-full border-2 border-blue-200 text-blue-600 font-bold hover:bg-blue-50 hover:text-blue-700 py-6">
        Show more extra convenience for your trip
      </button>
    </div>

    <!-- SCHEDULE SECTION -->
    <div>
      <h3 class="text-xl font-bold text-gray-800 mb-6">Flight Schedule</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${(currentFlight.schedule || []).map(slot => `
          <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4">
            <div class="flex justify-between items-center">
              <div class="text-left">
                <span class="text-xs text-gray-400 block mb-1">${currentFlight.fromCode}</span>
                <span class="text-xl font-bold text-gray-800">${slot.depart}</span>
              </div>
              <div class="flex flex-col items-center px-2">
                <span class="text-[10px] text-gray-400 mb-1">Duration</span>
                <svg class="h-4 w-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
                <span class="text-[10px] text-gray-400 mt-1">1h 13m</span>
              </div>
              <div class="text-right">
                <span class="text-xs text-gray-400 block mb-1">${currentFlight.toCode}</span>
                <span class="text-xl font-bold text-gray-800">${slot.arrive}</span>
              </div>
            </div>
            <div class="border-t border-dashed border-gray-100 pt-3 flex justify-between items-center">
              <span class="text-xs text-gray-400">Fri, Jun 28, 2025</span>
              <span class="text-xs font-bold text-cyan-600">${slot.airline}</span>
            </div>
          </div>
        `).join('')}
        ${(currentFlight.schedule && currentFlight.schedule.length < 2) ? `
          <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4 opacity-60">
            <div class="flex justify-between items-center">
              <div class="text-left">
                <span class="text-xs text-gray-400 block mb-1">${currentFlight.fromCode}</span>
                <span class="text-xl font-bold text-gray-800">09:00 AM</span>
              </div>
              <div class="flex flex-col items-center px-2">
                <svg class="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
              <div class="text-right">
                <span class="text-xs text-gray-400 block mb-1">${currentFlight.toCode}</span>
                <span class="text-xl font-bold text-gray-800">10:20 AM</span>
              </div>
            </div>
            <div class="border-t border-dashed border-gray-100 pt-3 flex justify-between items-center">
              <span class="text-xs text-gray-400">Fri, Jun 28, 2025</span>
            </div>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

function renderBookingCard() {
  const totalPrice = (currentFlight.price * 1.18).toFixed(0);
  const taxes = (currentFlight.price * 0.18).toFixed(0);

  const card = document.getElementById('booking-card');
  card.innerHTML = `
    <div class="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
      <h3 class="font-bold text-gray-800 mb-6 text-center">Booking Details</h3>
      
      <!-- Profile Summary -->
      <div class="flex flex-col items-center mb-8 pb-8 border-b border-dashed border-gray-200">
        <div class="h-20 w-20 rounded-full bg-orange-100 mb-4 flex items-center justify-center">
          <svg class="h-10 w-10 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
        </div>
        <h4 class="text-lg font-bold text-gray-800">John Doe</h4>
        <p class="text-sm text-gray-400">Primary Passenger</p>
        
        <div class="grid grid-cols-2 gap-x-8 gap-y-4 w-full mt-6 text-sm">
          <div>
            <p class="text-gray-400 text-xs">Airlines</p>
            <p class="font-bold text-gray-700">${currentFlight.airline}</p>
          </div>
          <div class="text-right">
            <p class="text-gray-400 text-xs">Flight Class</p>
            <p class="font-bold text-gray-700">Economy</p>
          </div>
          <div>
            <p class="text-gray-400 text-xs">Passenger</p>
            <p class="font-bold text-gray-700">1 Adult</p>
          </div>
          <div class="text-right">
            <p class="text-gray-400 text-xs">Baggage</p>
            <p class="font-bold text-gray-700">20 kg</p>
          </div>
        </div>
      </div>
      
      <!-- Price Details -->
      <div class="space-y-4 mb-8">
        <h4 class="font-bold text-gray-800 text-sm">Price Details</h4>
        <div class="flex justify-between text-sm text-gray-600">
          <span>Base Fare</span>
          <span class="font-medium">₹${Number(currentFlight.price).toLocaleString('en-IN')}</span>
        </div>
        <div class="flex justify-between text-sm text-gray-600">
          <span>Taxes & Fees</span>
          <span class="font-medium">₹${Number(taxes).toLocaleString('en-IN')}</span>
        </div>
        <div class="border-t border-dashed border-gray-200 pt-4 flex justify-between text-lg font-bold text-gray-800">
          <span>Total</span>
          <span class="text-orange-500">₹${Number(totalPrice).toLocaleString('en-IN')}</span>
        </div>
      </div>
      
      <button onclick="window.location.href='contact.html'" class="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-6 rounded-xl shadow-lg transition-transform hover:scale-[1.02]">
        Continue Booking
      </button>
    </div>
  `;
}
