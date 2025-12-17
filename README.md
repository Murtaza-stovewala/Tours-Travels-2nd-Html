# 🚀 Tavelo - Travel & Tourism Website

🌐 **Live Demo**: [https://tours-travels-2nd-html.vercel.app/](https://tours-travels-2nd-html.vercel.app/)

> **Tavelo** is a modern, fully responsive travel booking website built with vanilla HTML, CSS, and JavaScript. It provides a seamless user experience for browsing and booking flights, hotels, and tours across India.

![Author](https://img.shields.io/badge/Author-Murtaza%20StoveWala-cyan)
![Status](https://img.shields.io/badge/Status-Production%20Ready-success)
![HTML](https://img.shields.io/badge/HTML-5-E34F26?logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-06B6D4?logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Pages](#-pages)
- [Installation](#-installation)
- [Usage](#-usage)
- [Data Structure](#-data-structure)
- [Components](#-components)
- [Customization](#-customization)
- [Browser Compatibility](#-browser-compatibility)
- [Performance](#-performance)
- [License](#-license)

---

## 🌟 Overview

**Tavelo** is a static travel website that replicates a modern booking platform experience without backend dependencies. It features:

- **Dynamic Content Rendering**: All hotels, flights, and tours are rendered from a centralized data source (`data.js`)
- **Mobile-First Design**: Fully responsive with custom mobile bottom navigation
- **Interactive UI**: Search functionality, tabbed interfaces, carousels, and date pickers
- **Component-Based Architecture**: Reusable header, footer, and mobile navigation components
- **Premium Design**: Glassmorphism effects, smooth animations, and cyan color scheme

---

## ✨ Features

### 🔍 Search & Discovery
- **Multi-Category Search**: Search for flights, hotels, and tours from the hero section
- **Smart Filters**: Filter by location, price, rating, category, and more
- **Date Selection**: Integrated Flatpickr date picker for journey and booking dates
- **Airport Swap**: One-click swap functionality for flight origin and destination

### 🏨 Hotels
- Browse hotels with filters (location, type, price, rating)
- Detailed hotel pages with room options, amenities, and image galleries
- Dynamic pricing based on selected rooms
- Responsive card layouts with hover effects

### ✈️ Flights
- Search flights between popular Indian cities
- Multiple airline options with pricing comparison
- Flight schedule display with departure/arrival times
- Duration and stops information

### 🗺️ Tours
- Curated tour packages across India
- Categories: Historical, Beach, Adventure, Cultural, Special, Weekend
- Detailed itineraries with day-by-day breakdowns
- Inclusions/exclusions, highlights, and best season information

### 📱 Mobile Experience
- **Fixed Bottom Navigation**: Easy access to Home, Flights, Hotels, Tours, and Contact
- **Active State Indicators**: Visual feedback for current page
- **Touch-Optimized**: All interactive elements designed for mobile use

### 🎨 UI/UX
- **Marquee Section**: Animated scrolling travel categories
- **Feature Cards**: Highlighting USPs like 24/7 support, secure payments
- **Testimonials**: Customer reviews and ratings
- **About Section**: Company information and mission
- **Footer**: Quick links, newsletter subscription, social media

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic markup and structure |
| **TailwindCSS (CDN)** | Utility-first CSS framework for styling |
| **JavaScript (Vanilla ES6+)** | Dynamic content rendering and interactivity |
| **Flatpickr** | Modern date picker library |
| **Swiper.js** | Touch-enabled carousel/slider library |
| **Unsplash API** | High-quality travel imagery |

### External Libraries (CDN)

```html
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Flatpickr (Date Picker) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>

<!-- Swiper (Carousels) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
```

---

## 📁 Project Structure

```
Tours-Travels-2-Html/
├── index.html                  # Homepage with hero search
├── flights.html                # Flight listings page
├── flight-detail.html          # Individual flight details
├── hotels.html                 # Hotel listings page
├── hotel-detail.html           # Individual hotel details
├── tours.html                  # Tour packages page
├── tour-detail.html            # Individual tour details
├── contact.html                # Contact form page
├── 404.html                    # Custom 404 error page
│
├── components/                 # Reusable HTML components
│   ├── header.html            # Site header/navigation
│   ├── footer.html            # Site footer
│   └── mobile-nav.html        # Mobile bottom navigation
│
├── js/                        # JavaScript files
│   ├── data.js                # Centralized data (hotels, flights, tours)
│   ├── main.js                # Global functions (header/footer loading)
│   ├── home.js                # Homepage-specific logic
│   ├── flights.js             # Flight listing logic
│   ├── flight-detail.js       # Flight detail page logic
│   ├── hotels.js              # Hotel listing logic
│   ├── hotel-detail.js        # Hotel detail page logic
│   ├── tours.js               # Tour listing logic
│   ├── tour-detail.js         # Tour detail page logic
│   └── contact.js             # Contact form validation
│
└── README.md                  # Project documentation (this file)
```

---

## 📄 Pages

### 1. **Homepage** (`index.html`)
- Hero section with background image and overlay
- Tabbed search interface (Flights, Hotels, Tours)
- Animated marquee showcasing travel categories
- Feature cards highlighting platform benefits
- Popular hotels, flights, and tours sections
- About us, testimonials, and footer

### 2. **Hotels** (`hotels.html`)
- Grid layout of hotel cards
- Filter by location, type, price, rating
- Click to view hotel details

### 3. **Hotel Detail** (`hotel-detail.html`)
- Hero image and hotel information
- Room options with pricing
- Amenities list
- Image gallery
- Booking form

### 4. **Flights** (`flights.html`)
- List of available flight routes
- Filter by route, price, airline
- Click to view flight schedules

### 5. **Flight Detail** (`flight-detail.html`)
- Route information and pricing
- Multiple airline options with schedules
- Departure/arrival times
- Inclusions and exclusions
- Booking button

### 6. **Tours** (`tours.html`)
- Tour packages in grid layout
- Filter by category, duration, price
- Featured tours highlighted
- Click to view tour details

### 7. **Tour Detail** (`tour-detail.html`)
- Tour overview and highlights
- Day-by-day itinerary
- Inclusions/exclusions
- Image gallery
- Booking information

### 8. **Contact** (`contact.html`)
- Contact form with validation
- Office location and contact details
- Social media links

### 9. **404 Page** (`404.html`)
- Custom error page with navigation options
- Back to homepage button

---

## 🚀 Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required!

### Steps

1. **Clone or Download the Repository**
   ```bash
   git clone https://github.com/Murtaza-stovewala/Tours-Travels-2nd-Html.git
   cd Tours-Travels-2nd-Html
   ```

2. **Open in Browser**
   - Simply open `index.html` in your web browser
   - Or use a local development server:

   **Using VS Code Live Server:**
   - Install the "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"

   **Using Python:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Then visit: http://localhost:8000
   ```

   **Using Node.js:**
   ```bash
   npx http-server
   ```

3. **You're Done!** 🎉
   - No build process, no npm install, no configuration needed

---

## 💡 Usage

### Browsing Content

1. **Search for Travel Options**: Use the hero section search on the homepage
2. **Browse Listings**: Navigate to Flights, Hotels, or Tours pages
3. **Filter Results**: Use the filter sidebar to narrow down options
4. **View Details**: Click "See Details" on any card to view full information
5. **Mobile Navigation**: On mobile, use the bottom navigation bar

### Developer Usage

#### Adding New Hotels
Edit `js/data.js` and add to the `hotelsData` array:

```javascript
{
  id: "hotel-unique-id",
  slug: "url-friendly-slug",
  title: "Hotel Name",
  location: "City, State",
  type: "Resort/Hotel/Lodge/Villa",
  rating: 4.8,
  reviews: 342,
  price: "₹12,000",
  image: "https://images.unsplash.com/...",
  overview: "Description...",
  amenities: ["WiFi", "Pool", "Spa"],
  rooms: [
    {
      name: "Room Type",
      capacity: 2,
      bed: "1 King Bed",
      features: ["Feature 1", "Feature 2"],
      price: 12000
    }
  ],
  galleryImageIds: ["id1", "id2"]
}
```

#### Adding New Flights
Add to `flightsData` array in `js/data.js`:

```javascript
{
  id: "f1",
  slug: "route-slug",
  from: "Origin City",
  fromCode: "ABC",
  to: "Destination City",
  toCode: "XYZ",
  airline: "Multiple Airlines",
  dates: "Date Range",
  price: 3200,
  duration: "~2h 10m",
  stops: "Non-stop",
  image: "url",
  overview: "Description...",
  inclusions: [...],
  exclusions: [...],
  schedule: [...]
}
```

#### Adding New Tours
Add to `toursData` array in `js/data.js`:

```javascript
{
  id: "tour-unique-id",
  slug: "tour-slug",
  title: "Tour Name",
  location: "Location",
  duration: "X Days Y Nights",
  category: "Historical/Adventure/Beach/Cultural",
  image: "url",
  price: 14999,
  rating: 4.9,
  reviews: 2500,
  featured: true,
  overview: "Description...",
  highlights: [...],
  itinerary: [...],
  inclusions: [...],
  exclusions: [...],
  gallery: [...]
}
```

---

## 📊 Data Structure

### Hotels Data Model
- `id`: Unique identifier
- `slug`: URL-friendly identifier
- `title`: Hotel name
- `location`: City and state
- `type`: Resort, Hotel, Lodge, or Villa
- `rating`: Numerical rating (0-5)
- `reviews`: Number of reviews
- `price`: Starting price per night
- `image`: Featured image URL
- `overview`: Description
- `amenities`: Array of features
- `rooms`: Array of room objects
- `galleryImageIds`: Array of image identifiers

### Flights Data Model
- `id`: Unique identifier
- `slug`: URL-friendly identifier
- `from`/`to`: Origin and destination cities
- `fromCode`/`toCode`: IATA airport codes
- `airline`: Airline name
- `dates`: Travel date range
- `price`: Starting price
- `duration`: Flight duration
- `stops`: Non-stop or number of stops
- `schedule`: Array of flight timings

### Tours Data Model
- `id`: Unique identifier
- `slug`: URL-friendly identifier
- `title`: Tour name
- `location`: Tour region
- `duration`: Length of tour
- `category`: Tour type
- `price`: Package price
- `rating`: Customer rating
- `itinerary`: Day-by-day schedule
- `inclusions`/`exclusions`: What's covered

---

## 🧩 Components

### Header Component
- Logo and branding
- Desktop navigation menu
- Responsive mobile menu toggle
- Loaded dynamically via `main.js`

### Footer Component
- Company information
- Quick links (Explore, Company)
- Newsletter subscription
- Social media links
- Copyright notice
- Loaded dynamically via `main.js`

### Mobile Navigation Component
- Fixed bottom navigation bar
- Icon-based navigation
- Active state highlighting
- Smooth transitions
- Only visible on mobile/tablet

---

## 🎨 Customization

### Color Scheme
The site uses a **cyan color theme** (`#06B6D4`). To change:

1. **Global Color**: Search and replace `cyan-` with your preferred Tailwind color
2. **Primary Color**: Replace `06B6D4` hex code throughout the project
3. **Button Styles**: Modify `.bg-cyan-500`, `.hover:bg-cyan-600` classes

### Fonts
Currently using system fonts. To add custom fonts:

```html
<head>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Inter', sans-serif;
    }
  </style>
</head>
```

### Images
All images are sourced from Unsplash. Replace URLs in `data.js` with your own images.

### Animations
Modify animation speeds in `index.html`:

```css
.animate-marquee {
  animation: marquee 30s linear infinite; /* Change 30s to desired speed */
}
```

---

## 🌐 Browser Compatibility

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 90+ | ✅ Full |
| Firefox | 88+ | ✅ Full |
| Safari | 14+ | ✅ Full |
| Edge | 90+ | ✅ Full |
| Opera | 76+ | ✅ Full |
| Mobile Safari | iOS 14+ | ✅ Full |
| Chrome Mobile | Android 5+ | ✅ Full |

---

## ⚡ Performance

### Optimization Tips

1. **Lazy Loading**: Consider adding lazy loading for images
   ```html
   <img loading="lazy" src="..." alt="...">
   ```

2. **CDN Optimization**: Replace CDN links with local copies in production
3. **Image Optimization**: Use WebP format for better compression
4. **Minification**: Minify HTML, CSS, and JS for production

### Lighthouse Scores (Target)
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## 📝 License

This project was developed by **Murtaza StoveWala**. 

For licensing inquiries, please contact via the website's contact form.

---

## 📞 Contact

- **Website**: [Tavelo](#)
- **Email**: contact@tavelo.in
- **Phone**: +91 98765 43210
- **Address**: 1203, Tavelo Tech Park, Cyber City, Gurugram, India

---

## 🙏 Acknowledgments

- **TailwindCSS**: For the utility-first CSS framework
- **Flatpickr**: For the elegant date picker
- **Swiper.js**: For smooth carousels
- **Unsplash**: For high-quality travel images
- **Lucide Icons**: For SVG icons (via inline SVG)

---

## 🔄 Version History

- **v1.0.0** (Current) - Initial production release
  - Complete hotel, flight, and tour booking pages
  - Mobile responsive design
  - Dynamic content rendering
  - Component-based architecture
  - Custom 404 page
  - Contact form

---

**Built with ❤️ for travel enthusiasts by Murtaza StoveWala**
