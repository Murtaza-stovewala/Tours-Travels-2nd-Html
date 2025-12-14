// Data for Hotels, Flights, and Tours

const hotelsData = [
  {
    id: "hotel-1-beach-resort",
    slug: "beach-bliss-resort-goa",
    title: "Beach Bliss Resort",
    location: "Goa, India",
    type: "Resort",
    rating: 4.8,
    reviews: 342,
    price: "₹12,000",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500&q=80",
    overview:
      "A luxurious beachfront resort in the heart of Goa, offering stunning ocean views, private beach access, and world-class amenities. Perfect for a romantic getaway or a family vacation.",
    amenities: [
      "Free WiFi",
      "Restaurant",
      "Spa",
      "Infinity Pool",
      "Airport Pickup",
    ],
    rooms: [
      {
        name: "Deluxe Ocean View",
        capacity: 2,
        bed: "1 King Bed",
        features: ["Private Balcony", "Ocean View"],
        price: 12000,
      },
      {
        name: "Family Suite",
        capacity: 4,
        bed: "2 Queen Beds",
        features: ["Separate Living Area", "Garden View"],
        price: 18000,
      },
    ],
    galleryImageIds: [
      "hotel-1-gallery-1",
      "hotel-1-gallery-2",
      "hotel-1-gallery-3",
    ],
  },
  {
    id: "hotel-2-city-luxury",
    slug: "metropolis-grand-mumbai",
    title: "Metropolis Grand",
    location: "Mumbai, India",
    type: "Hotel",
    rating: 4.9,
    reviews: 512,
    price: "₹18,000",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&q=80",
    overview:
      "An iconic luxury hotel in the bustling city of Mumbai. Known for its impeccable service, opulent decor, and award-winning restaurants. Experience the pinnacle of urban luxury.",
    amenities: [
      "Free WiFi",
      "Restaurant",
      "Spa",
      "Rooftop Bar",
      "Valet Parking",
    ],
    rooms: [
      {
        name: "Executive Suite",
        capacity: 2,
        bed: "1 King Bed",
        features: ["City View", "Lounge Access"],
        price: 25000,
      },
      {
        name: "Luxury Room",
        capacity: 2,
        bed: "1 Queen Bed",
        features: ["City View", "Work Desk"],
        price: 18000,
      },
    ],
    galleryImageIds: [
      "hotel-2-gallery-1",
      "hotel-2-gallery-2",
      "hotel-2-gallery-3",
    ],
  },
  {
    id: "hotel-3-mountain-lodge",
    slug: "himalayan-serenity-lodge-manali",
    title: "Himalayan Serenity Lodge",
    location: "Manali, India",
    type: "Lodge",
    rating: 4.7,
    reviews: 289,
    price: "₹9,500",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500&q=80",
    overview:
      "Nestled in the serene landscapes of Manali, this lodge offers breathtaking views of the Himalayas. A perfect retreat for nature lovers and adventure enthusiasts seeking peace and tranquility.",
    amenities: [
      "Free WiFi",
      "Restaurant",
      "Mountain View",
      "Bonfire",
      "Trekking Tours",
    ],
    rooms: [
      {
        name: "Mountain View Cabin",
        capacity: 3,
        bed: "1 King & 1 Single Bed",
        features: ["Private Deck", "Fireplace"],
        price: 15000,
      },
      {
        name: "Cozy Room",
        capacity: 2,
        bed: "1 Double Bed",
        features: ["Valley View"],
        price: 9500,
      },
    ],
    galleryImageIds: [
      "hotel-3-gallery-1",
      "hotel-3-gallery-2",
      "hotel-3-gallery-3",
    ],
  },
  {
    id: "hotel-4-jaipur",
    slug: "jaipur-heritage-haveli",
    title: "Jaipur Heritage Villa",
    location: "Rajasthan, India",
    type: "Villa",
    rating: 4.9,
    reviews: 550,
    price: "₹9,500",
    image:
      "https://images.unsplash.com/photo-1681642153169-e5daa77025da?w=500&q=80",
    overview:
      "Experience the royal lifestyle in this heritage haveli. Ornate architecture, traditional hospitality, and modern comforts blend seamlessly.",
    amenities: ["Free WiFi", "Pool", "Fine Dining", "Courtyard"],
    rooms: [
      {
        name: "Heritage Suite",
        capacity: 2,
        bed: "1 King Bed",
        features: ["Garden View", "Bathtub"],
        price: 10000,
      },
    ],
    galleryImageIds: ["hotel-4-gallery-1"],
  },
];

const flightsData = [
  {
    id: "f1",
    slug: "mumbai-to-delhi",
    from: "Mumbai",
    fromCode: "BOM",
    to: "New Delhi",
    toCode: "DEL",
    airline: "Multiple Airlines",
    dates: "Aug 10, 2025 - Aug 25, 2025",
    price: 3200,
    duration: "~2h 10m",
    stops: "Non-stop",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528615?w=500&q=80",
    bestTime: "Oct - Mar",
    overview:
      "A popular domestic route connecting India's financial capital Mumbai with the national capital New Delhi. Ideal for business travellers, government officials, and tourists looking to explore the Golden Triangle.",
    inclusions: [
      "1 cabin bag (7kg)",
      "Standard check-in baggage (15kg)",
      "Free web check-in",
      "Flexible cancellation (on select fares)",
    ],
    exclusions: [
      "In-flight meals (on low-cost carriers)",
      "Seat selection fees",
      "Excess baggage charges",
      "Travel insurance",
    ],
    schedule: [
      {
        airline: "IndiGo",
        depart: "06:00 AM",
        arrive: "08:10 AM",
        type: "Non-stop",
        price: 3200,
      },
      {
        airline: "Vistara",
        depart: "09:00 AM",
        arrive: "11:15 AM",
        type: "Non-stop",
        price: 4500,
      },
      {
        airline: "Air India",
        depart: "05:00 PM",
        arrive: "07:15 PM",
        type: "Non-stop",
        price: 3800,
      },
    ],
  },
  {
    id: "f2",
    slug: "bengaluru-to-goa",
    from: "Bengaluru",
    fromCode: "BLR",
    to: "Goa",
    toCode: "GOI",
    airline: "Multiple Airlines",
    dates: "Sep 05, 2025 - Sep 20, 2025",
    price: 2500,
    duration: "~1h 15m",
    stops: "Non-stop",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500&q=80",
    bestTime: "Nov - Feb",
    overview:
      "The quickest getaway from the IT capital to the party capital of India. Perfect for weekend trips, beach lovers, and those seeking relaxation by the Arabian Sea.",
    inclusions: [
      "1 cabin bag (7kg)",
      "Standard check-in baggage (15kg)",
      "Free web check-in",
    ],
    exclusions: ["In-flight meals", "Seat selection fees", "Ground transfers"],
    schedule: [
      {
        airline: "Akasa Air",
        depart: "07:00 AM",
        arrive: "08:20 AM",
        type: "Non-stop",
        price: 2500,
      },
      {
        airline: "IndiGo",
        depart: "10:30 AM",
        arrive: "11:50 AM",
        type: "Non-stop",
        price: 2800,
      },
    ],
  },
  {
    id: "f3",
    slug: "kolkata-to-bengaluru",
    from: "Kolkata",
    fromCode: "CCU",
    to: "Bengaluru",
    toCode: "BLR",
    airline: "Multiple Airlines",
    dates: "Oct 01, 2025 - Oct 15, 2025",
    price: 4500,
    duration: "~2h 30m",
    stops: "Non-stop",
    image:
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=500&q=80",
    bestTime: "Sep - Mar",
    overview:
      "Bridging the East and South, this route connects the cultural capital of India with the Silicon Valley. Frequent flights make it easy for professionals and families to commute.",
    inclusions: [
      "1 cabin bag (7kg)",
      "Standard check-in baggage (15kg)",
      "Free web check-in",
    ],
    exclusions: [
      "In-flight meals",
      "Preferred seat selection",
      "Priority boarding",
    ],
    schedule: [
      {
        airline: "IndiGo",
        depart: "05:30 AM",
        arrive: "08:00 AM",
        type: "Non-stop",
        price: 4500,
      },
      {
        airline: "Air Asia",
        depart: "04:00 PM",
        arrive: "06:30 PM",
        type: "Non-stop",
        price: 4800,
      },
    ],
  },
  {
    id: "f4",
    slug: "delhi-to-srinagar",
    from: "New Delhi",
    fromCode: "DEL",
    to: "Srinagar",
    toCode: "SXR",
    airline: "Multiple Airlines",
    dates: "Nov 01, 2025 - Nov 15, 2025",
    price: 3800,
    duration: "~1h 35m",
    stops: "Non-stop",
    image:
      "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=500&q=80",
    bestTime: "Apr - Oct",
    overview:
      "Fly over the majestic Himalayas to reach the Paradise on Earth. This route offers stunning aerial views and connects travelers to the beautiful valleys of Kashmir.",
    inclusions: [
      "1 cabin bag (7kg)",
      "Standard check-in baggage (15kg)",
      "Scenic views included!",
    ],
    exclusions: ["Hotel transfers", "In-flight meals", "Additional baggage"],
    schedule: [
      {
        airline: "SpiceJet",
        depart: "08:00 AM",
        arrive: "09:40 AM",
        type: "Non-stop",
        price: 3800,
      },
      {
        airline: "Air India",
        depart: "11:00 AM",
        arrive: "12:35 PM",
        type: "Non-stop",
        price: 4200,
      },
    ],
  },
];

const toursData = [
  {
    id: "tour-1-golden-triangle",
    slug: "golden-triangle-tour",
    title: "Golden Triangle Tour",
    location: "Delhi, Agra, Jaipur",
    duration: "5 Days 4 Nights",
    category: "Historical",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=500&q=80",
    price: 14999,
    rating: 4.9,
    reviews: 2500,
    featured: true,
    places: 10,
    bestSeason: "Oct - Mar",
    startCity: "Delhi",
    endCity: "Jaipur",
    groupSize: "2-12 People",
    pace: "Moderate",
    overview:
      "Experience the rich history of India with the classic Golden Triangle tour. Visit the majestic Taj Mahal, the pink city of Jaipur, and the bustling streets of Delhi. This tour is perfect for first-time visitors wanting to see the most iconic sights.",
    highlights: [
      "Visit Taj Mahal",
      "Explore Amber Fort",
      "Rickshaw ride in Chandni Chowk",
      "Fatehpur Sikri tour",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi",
        description:
          "Arrive in Delhi. Transfer to hotel. Evening city walk and welcome dinner.",
      },
      {
        day: 2,
        title: "Delhi Sightseeing",
        description:
          "Visit Red Fort, Jama Masjid, and India Gate. Drive to Agra in the evening.",
      },
      {
        day: 3,
        title: "Taj Mahal & Agra Fort",
        description:
          "Sunrise visit to Taj Mahal. Visit Agra Fort. Drive to Jaipur via Fatehpur Sikri.",
      },
      {
        day: 4,
        title: "Jaipur Exploration",
        description:
          "Visit Amber Fort, City Palace, and Hawa Mahal. Shop at local bazaars.",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Transfer to Jaipur airport or drive back to Delhi for departure.",
      },
    ],
    inclusions: [
      "Accommodation with breakfast",
      "Private AC Vehicle",
      "English speaking guide",
      "Monument entry fees",
    ],
    exclusions: [
      "International flights",
      "Lunch & Dinner",
      "Tips and gratuities",
      "Personal expenses",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=500&q=80",
    ],
  },
  {
    id: "tour-2-goa-beach",
    slug: "goa-beach-holiday",
    title: "Goa Beach Holiday",
    location: "North & South Goa",
    duration: "4 Days 3 Nights",
    category: "Holiday Tour",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500&q=80",
    price: 12500,
    rating: 4.8,
    reviews: 1800,
    featured: true,
    places: 8,
    bestSeason: "Nov - Feb",
    startCity: "Goa",
    endCity: "Goa",
    groupSize: "2-8 People",
    pace: "Relaxed",
    overview:
      "Relax on the sun-kissed beaches of Goa. Enjoy water sports, vibrant nightlife, and Portuguese heritage architecture. A perfect blend of relaxation and adventure.",
    highlights: [
      "Baga & Calangute Beach",
      "Water Sports",
      "Old Goa Churches",
      "Mandovi River Cruise",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Goa",
        description:
          "Arrive at Goa airport. Transfer to resort. Relax at the beach.",
      },
      {
        day: 2,
        title: "North Goa Tour",
        description:
          "Visit Fort Aguada, Baga Beach, and Calangute Beach. Water sports activities.",
      },
      {
        day: 3,
        title: "South Goa & Heritage",
        description:
          "Visit Basilical of Bom Jesus, Mangueshi Temple, and Colva Beach. Evening cruise.",
      },
      {
        day: 4,
        title: "Departure",
        description: "Breakfast at hotel. Transfer to airport for departure.",
      },
    ],
    inclusions: [
      "3 Star Resort Stay",
      "Daily Breakfast",
      "Airport Transfers",
      "Sightseeing by Private Car",
    ],
    exclusions: [
      "Airfare",
      "Water sports charges",
      "Personal expenses",
      "Meals not mentioned",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1544207240-8b1025eb7aeb?w=500&q=80",
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=500&q=80",
    ],
  },
  {
    id: "tour-3-kashmir",
    slug: "kashmir-snow-escape",
    title: "Kashmir Snow Escape",
    location: "Gulmarg & Pahalgam",
    duration: "6 Days 5 Nights",
    category: "Special Tour",
    image:
      "https://images.unsplash.com/photo-1629221816532-0bb00532c667?w=800&q=80",
    price: 18999,
    rating: 5.0,
    reviews: 3200,
    featured: false,
    places: 12,
    bestSeason: "Dec - Mar",
    startCity: "Srinagar",
    endCity: "Srinagar",
    groupSize: "2-15 People",
    pace: "Moderate",
    overview:
      "Witness the paradise on earth. Experience snow-capped mountains, Shikara rides on Dal Lake, and the breathtaking meadows of Gulmarg and Pahalgam.",
    highlights: [
      "Shikara Ride",
      "Gulmarg Gondola",
      "Betaab Valley",
      "Mughal Gardens",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar",
        description:
          "Pickup from airport. Check in to Houseboat. Evening Shikara ride.",
      },
      {
        day: 2,
        title: "Srinagar to Gulmarg",
        description:
          "Drive to Gulmarg. Enjoy Gondola ride and snow activities.",
      },
      {
        day: 3,
        title: "Gulmarg Sightseeing",
        description:
          "Explore Gulmarg. Optional skiing or sledge riding. Return to Srinagar.",
      },
      {
        day: 4,
        title: "Day Trip to Pahalgam",
        description:
          "Visit Saffron fields, Avantipura Ruins, and Betaab Valley.",
      },
      {
        day: 5,
        title: "Srinagar Local Sightseeing",
        description:
          "Visit Mughal Gardens - Nishat, Shalimar. Shopping for handicrafts.",
      },
      {
        day: 6,
        title: "Departure",
        description: "Transfer to Srinagar airport.",
      },
    ],
    inclusions: [
      "Houseboat & Hotel Stay",
      "Breakfast & Dinner",
      "Non-AC Vehicle",
      "Shikara Ride",
    ],
    exclusions: ["Flights", "Gondola Tickets", "Lunch", "Pony Rides"],
    gallery: [
      "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=500&q=80",
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=500&q=80",
    ],
  },
  {
    id: "tour-4-kerala",
    slug: "kerala-backwater-cruise",
    title: "Kerala Backwater Cruise",
    location: "Alleppey, Kerala",
    duration: "3 Days 2 Nights",
    category: "Weekend Trip",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    price: 9500,
    rating: 4.7,
    reviews: 1500,
    featured: false,
    places: 5,
    bestSeason: "Aug - Mar",
    startCity: "Cochin",
    endCity: "Cochin",
    groupSize: "2-6 People",
    pace: "Relaxed",
    overview:
      "Sail through the serene backwaters of Kerala on a traditional houseboat. Enjoy authentic Kerala cuisine and witness the lush green paddy fields and village life.",
    highlights: [
      "Houseboat Stay",
      "Village Walk",
      "Kerala Cuisine",
      "Cochin Fort",
    ],
    itinerary: [
      {
        day: 1,
        title: "Cochin to Alleppey",
        description:
          "Drive to Alleppey. Board the houseboat. Cruise through backwaters.",
      },
      {
        day: 2,
        title: "Alleppey to Cochin",
        description:
          "Morning cruise. Disembark and drive to Cochin. Visit Fort Kochi.",
      },
      {
        day: 3,
        title: "Departure",
        description: "Shopping in Cochin. Transfer to airport/railway station.",
      },
    ],
    inclusions: [
      "1 Night Houseboat",
      "1 Night Hotel",
      "All Meals on Houseboat",
      "Transfers",
    ],
    exclusions: ["Flights/Train", "Personal expenses", "Entrance fees"],
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500&q=80",
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=500&q=80",
    ],
  },
  {
    id: "tour-5-ladakh",
    slug: "ladakh-adventure-expedition",
    title: "Ladakh Adventure Expedition",
    location: "Leh, Nubra Valley, Pangong",
    duration: "7 Days 6 Nights",
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    price: 24999,
    rating: 4.9,
    reviews: 2100,
    featured: false,
    places: 15,
    bestSeason: "May - Sep",
    startCity: "Leh",
    endCity: "Leh",
    groupSize: "4-12 People",
    pace: "Adventurous",
    overview: "Experience the thrill of high-altitude adventure in the breathtaking landscapes of Ladakh. Ride through mountain passes, camp by pristine lakes, and explore ancient monasteries.",
    highlights: ["Khardung La Pass", "Pangong Lake", "Nubra Valley", "Diskit Monastery"],
    itinerary: [
      { day: 1, title: "Arrival in Leh", description: "Arrive in Leh. Rest and acclimatize. Evening walk in Leh market." },
      { day: 2, title: "Leh Local Sightseeing", description: "Visit Shanti Stupa, Leh Palace, and local monasteries." },
      { day: 3, title: "Leh to Nubra Valley", description: "Drive via Khardung La Pass. Visit Diskit Monastery and sand dunes." },
      { day: 4, title: "Nubra to Pangong", description: "Drive to Pangong Lake via Shyok route. Camp by the lake." },
      { day: 5, title: "Pangong to Leh", description: "Sunrise at Pangong. Drive back to Leh via Chang La." },
      { day: 6, title: "Explore Leh", description: "Optional activities - rafting, monastery visits, or shopping." },
      { day: 7, title: "Departure", description: "Transfer to Leh airport for departure." }
    ],
    inclusions: ["Hotel & Camp Stay", "All Meals", "SUV with Driver", "Permits"],
    exclusions: ["Flights", "Travel Insurance", "Personal Expenses", "Tips"],
    gallery: [
      "https://images.unsplash.com/photo-1589308078059-be1415eab60d?w=500&q=80",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500&q=80"
    ]
  },
  {
    id: "tour-6-rajasthan",
    slug: "rajasthan-cultural-heritage",
    title: "Rajasthan Cultural Heritage",
    location: "Jaipur, Udaipur, Jodhpur",
    duration: "8 Days 7 Nights",
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
    price: 19999,
    rating: 4.8,
    reviews: 1900,
    featured: true,
    places: 20,
    bestSeason: "Oct - Mar",
    startCity: "Jaipur",
    endCity: "Jaipur",
    groupSize: "2-10 People",
    pace: "Moderate",
    overview: "Immerse yourself in the royal heritage of Rajasthan. Explore magnificent palaces, historic forts, vibrant markets, and experience traditional Rajasthani culture and cuisine.",
    highlights: ["City Palace Udaipur", "Mehrangarh Fort", "Lake Pichola Cruise", "Desert Safari"],
    itinerary: [
      { day: 1, title: "Arrival in Jaipur", description: "Arrive in Jaipur. Check in to heritage hotel. Evening city tour." },
      { day: 2, title: "Jaipur Sightseeing", description: "Visit Amber Fort, City Palace, Hawa Mahal, and Jantar Mantar." },
      { day: 3, title: "Jaipur to Jodhpur", description: "Drive to Jodhpur. Visit Mehrangarh Fort and Jaswant Thada." },
      { day: 4, title: "Jodhpur to Udaipur", description: "Drive to Udaipur. Evening Lake Pichola boat ride." },
      { day: 5, title: "Udaipur Exploration", description: "Visit City Palace, Jagdish Temple, and Saheliyon ki Bari." },
      { day: 6, title: "Udaipur to Pushkar", description: "Drive to Pushkar. Visit Brahma Temple and Pushkar Lake." },
      { day: 7, title: "Pushkar to Jaipur", description: "Return to Jaipur. Shopping and cultural performance." },
      { day: 8, title: "Departure", description: "Transfer to Jaipur airport for departure." }
    ],
    inclusions: ["Heritage Hotels", "Breakfast & Dinner", "AC Vehicle", "Guide Services"],
    exclusions: ["Flights", "Lunch", "Monument Fees", "Personal Expenses"],
    gallery: [
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=500&q=80",
      "https://images.unsplash.com/photo-1532664189809-02133fee698d?w=500&q=80"
    ]
  }
];

// Popular cities for autocomplete
const popularCities = [
  { id: 1, name: "Mumbai", state: "Maharashtra" },
  { id: 2, name: "Delhi", state: "Delhi" },
  { id: 3, name: "Bengaluru", state: "Karnataka" },
  { id: 4, name: "Goa", state: "Goa" },
  { id: 5, name: "Jaipur", state: "Rajasthan" },
  { id: 6, name: "Kolkata", state: "West Bengal" },
  { id: 7, name: "Chennai", state: "Tamil Nadu" },
  { id: 8, name: "Hyderabad", state: "Telangana" },
  { id: 9, name: "Pune", state: "Maharashtra" },
  { id: 10, name: "Ahmedabad", state: "Gujarat" },
  { id: 11, name: "Surat", state: "Gujarat" },
  { id: 12, name: "Lucknow", state: "Uttar Pradesh" },
  { id: 13, name: "Agra", state: "Uttar Pradesh" },
  { id: 14, name: "Kochi", state: "Kerala" },
  { id: 15, name: "Udaipur", state: "Rajasthan" },
  { id: 16, name: "Manali", state: "Himachal Pradesh" },
  { id: 17, name: "Shimla", state: "Himachal Pradesh" },
  { id: 18, name: "Rishikesh", state: "Uttarakhand" },
  { id: 19, name: "Varanasi", state: "Uttar Pradesh" },
  { id: 20, name: "Amritsar", state: "Punjab" },
];

// Popular airports for autocomplete
const popularAirports = [
  {
    id: 1,
    iata: "BOM",
    name: "Chhatrapati Shivaji Maharaj International Airport",
    city: "Mumbai",
  },
  {
    id: 2,
    iata: "DEL",
    name: "Indira Gandhi International Airport",
    city: "New Delhi",
  },
  {
    id: 3,
    iata: "BLR",
    name: "Kempegowda International Airport",
    city: "Bengaluru",
  },
  {
    id: 4,
    iata: "MAA",
    name: "Chennai International Airport",
    city: "Chennai",
  },
  {
    id: 5,
    iata: "HYD",
    name: "Rajiv Gandhi International Airport",
    city: "Hyderabad",
  },
  {
    id: 6,
    iata: "CCU",
    name: "Netaji Subhas Chandra Bose International Airport",
    city: "Kolkata",
  },
  { id: 7, iata: "GOI", name: "Goa International Airport", city: "Goa" },
  { id: 8, iata: "PNQ", name: "Pune Airport", city: "Pune" },
  { id: 9, iata: "JAI", name: "Jaipur International Airport", city: "Jaipur" },
  {
    id: 10,
    iata: "AMD",
    name: "Sardar Vallabhbhai Patel International Airport",
    city: "Ahmedabad",
  },
  { id: 11, iata: "COK", name: "Cochin International Airport", city: "Kochi" },
  {
    id: 12,
    iata: "SXR",
    name: "Sheikh ul-Alam International Airport",
    city: "Srinagar",
  },
  {
    id: 13,
    iata: "TRV",
    name: "Trivandrum International Airport",
    city: "Thiruvananthapuram",
  },
  {
    id: 14,
    iata: "IXC",
    name: "Chandigarh International Airport",
    city: "Chandigarh",
  },
  {
    id: 15,
    iata: "GAU",
    name: "Lokpriya Gopinath Bordoloi International Airport",
    city: "Guwahati",
  },
];
