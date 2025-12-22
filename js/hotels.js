// Hotels page specific JavaScript

// Extended hotels data (matching the React component)
const hotelsPageData = [
  {
    id: 1,
    slug: "beach-bliss-resort-goa",
    name: "Goa Beachfront Resort",
    location: "Goa, India",
    type: "Resort",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500&q=80",
    tags: ["Beach Access", "Spa", "Pool"],
    rating: 4.8,
    reviews: 420,
    price: 8500,
  },
  {
    id: 2,
    slug: "himalayan-serenity-lodge-manali",
    name: "Manali Mountain Resort",
    location: "Himachal Pradesh, India",
    type: "Resort",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500&q=80",
    tags: ["Mountain View", "Bonfire", "Trekking"],
    rating: 4.7,
    reviews: 310,
    price: 6200,
  },
  {
    id: 3,
    slug: "jaipur-heritage-haveli",
    name: "Jaipur Heritage Villa",
    location: "Rajasthan, India",
    type: "Villa",
    image:
      "https://images.unsplash.com/photo-1681642153169-e5daa77025da?w=500&q=80",
    tags: ["Heritage", "Pool", "Fine Dining"],
    rating: 4.9,
    reviews: 550,
    price: 9500,
  },
  {
    id: 4,
    slug: "munnar-misty-hills",
    name: "Munnar Hill Homestay",
    location: "Kerala, India",
    type: "Homestay",
    image: "https://gos3.ibcdn.com/348442f7-4c3d-4361-bc7d-20ae61624b35.jpeg",
    tags: ["Tea Garden", "Breakfast", "WiFi"],
    rating: 4.6,
    reviews: 180,
    price: 4500,
  },
  {
    id: 5,
    slug: "rishikesh-riverside-camp",
    name: "Rishikesh Riverside Camp",
    location: "Uttarakhand, India",
    type: "Camp",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&q=80",
    tags: ["River View", "Rafting", "Meals"],
    rating: 4.8,
    reviews: 240,
    price: 3500,
  },
  {
    id: 6,
    slug: "udaipur-lake-palace",
    name: "Udaipur Lake Palace Stay",
    location: "Rajasthan, India",
    type: "Hotel",
    image:
      "https://images.unsplash.com/photo-1706961121527-4017856774c7?w=500&q=80",
    tags: ["Lake View", "Luxury", "Bar"],
    rating: 5.0,
    reviews: 620,
    price: 18000,
  },
  {
    id: 7,
    slug: "coorg-coffee-estate",
    name: "Coorg Coffee Estate",
    location: "Karnataka, India",
    type: "Homestay",
    image:
      "https://www.himalayadestination.com/blog/wp-content/uploads/2020/01/cooorg.jpg",
    tags: ["Nature Walk", "Coffee", "Peaceful"],
    rating: 4.7,
    reviews: 150,
    price: 5200,
  },
  {
    id: 8,
    slug: "darjeeling-tea-retreat",
    name: "Darjeeling Tea Retreat",
    location: "West Bengal, India",
    type: "Resort",
    image:
      "https://images.unsplash.com/photo-1637737118663-f1a53ee1d5a7?w=500&q=80",
    tags: ["Himalayas", "Tea Tasting", "Cozy"],
    rating: 4.6,
    reviews: 200,
    price: 7000,
  },
  {
    id: 9,
    slug: "varanasi-ghat-hotel",
    name: "Varanasi Ghat Hotel",
    location: "Uttar Pradesh, India",
    type: "Hotel",
    image:
      "https://images.unsplash.com/photo-1561359313-0639aad49ca6?w=500&q=80",
    tags: ["Ghat View", "Spiritual", "Central"],
    rating: 4.5,
    reviews: 380,
    price: 4800,
  },
];

// Guest state
let guestState = {
  rooms: 1,
  adults: 2,
  children: 0,
};

// Initialize page
document.addEventListener("DOMContentLoaded", function () {
  initHotelDatePicker();
  updateGuestsDisplay();
  renderHotels();
});

// Initialize date picker
function initHotelDatePicker() {
  const today = new Date();
  const checkOut = new Date();
  checkOut.setDate(today.getDate() + 3);

  flatpickr("#hotel-dates", {
    mode: "range",
    minDate: "today",
    dateFormat: "M d, Y",
    defaultDate: [today, checkOut],
    onChange: function (selectedDates) {
      if (selectedDates.length === 2) {
        updateDateDisplay(selectedDates[0], selectedDates[1]);
      }
    },
  });

  // Initial display
  updateDateDisplay(today, checkOut);
}

// Update date display
function updateDateDisplay(checkIn, checkOut) {
  const options = { month: "numeric", day: "numeric", year: "numeric" };
  const dayOptions = { weekday: "long" };

  document.getElementById("checkin-date").textContent =
    checkIn.toLocaleDateString("en-US", options);
  document.getElementById("checkin-day").textContent =
    checkIn.toLocaleDateString("en-US", dayOptions);

  document.getElementById("checkout-date").textContent =
    checkOut.toLocaleDateString("en-US", options);
  document.getElementById("checkout-day").textContent =
    checkOut.toLocaleDateString("en-US", dayOptions);
}

// Open date picker
function openDatePicker() {
  document.getElementById("hotel-dates")._flatpickr.open();
}

// Toggle guests popover
function toggleGuestsPopover() {
  const popover = document.getElementById("guests-popover");
  popover.classList.toggle("hidden");
}

// Guest counter functions
function incrementRooms() {
  guestState.rooms++;
  updateGuestsDisplay();
}

function decrementRooms() {
  if (guestState.rooms > 1) {
    guestState.rooms--;
    updateGuestsDisplay();
  }
}

function incrementAdults() {
  guestState.adults++;
  updateGuestsDisplay();
}

function decrementAdults() {
  if (guestState.adults > 1) {
    guestState.adults--;
    updateGuestsDisplay();
  }
}

function incrementChildren() {
  guestState.children++;
  updateGuestsDisplay();
}

function decrementChildren() {
  if (guestState.children > 0) {
    guestState.children--;
    updateGuestsDisplay();
  }
}

// Update guests display
function updateGuestsDisplay() {
  const totalGuests = guestState.adults + guestState.children;

  // Update main display
  document.getElementById("rooms-count").textContent = guestState.rooms;
  document.getElementById("total-guests").textContent = totalGuests;
  document.getElementById("adults-count").textContent = guestState.adults;
  document.getElementById("children-count").textContent = guestState.children;

  // Update popover display
  document.getElementById("rooms-display").textContent = guestState.rooms;
  document.getElementById("adults-display").textContent = guestState.adults;
  document.getElementById("children-display").textContent = guestState.children;
}

// Render hotels
function renderHotels() {
  const grid = document.getElementById("hotels-grid");

  const html = hotelsPageData
    .map(
      (hotel) => `
    <div class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100 flex flex-col">
      <div class="relative h-64 overflow-hidden">
        <img src="${hotel.image}" alt="${hotel.name
        }" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
        <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-cyan-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          ${hotel.type}
        </div>
      </div>
      <div class="p-6 flex flex-col flex-grow">
        <div class="flex justify-between items-start mb-2">
          <div>
            <h3 class="text-xl font-bold text-gray-800 mb-1 group-hover:text-cyan-600 transition-colors">${hotel.name
        }</h3>
            <div class="flex items-center text-sm text-gray-500">
              <svg class="h-4 w-4 mr-1 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              ${hotel.location}
            </div>
          </div>
        </div>

        <div class="flex flex-wrap gap-2 mb-4 mt-3">
          ${hotel.tags
          .map(
            (tag) => `
            <span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md">${tag}</span>
          `
          )
          .join("")}
        </div>

        <div class="flex items-center gap-2 mb-6">
          <svg class="h-4 w-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
          <span class="font-bold text-gray-800">${hotel.rating}</span>
          <span class="text-sm text-gray-500">(${hotel.reviews} reviews)</span>
        </div>

        <div class="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p class="text-sm text-gray-500">From</p>
            <p class="text-xl font-bold text-gray-800">₹${hotel.price.toLocaleString(
            "en-IN"
          )}<span class="text-sm font-normal text-gray-500"> / night</span></p>
          </div>
          <a href="hotel-detail.html?slug=${hotel.slug
        }" class="bg-cyan-500 hover:bg-cyan-600 text-white btn-rounded px-6 py-2 font-medium">
            Book
          </a>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  grid.innerHTML = html;
}
