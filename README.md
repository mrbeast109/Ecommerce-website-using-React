# AZURE

AZURE is a frontend fashion e-commerce website built as a complete shopping experience for a premium clothing brand. The site covers product browsing, detailed product pages, a working cart, user accounts, and editorial-style pages for new arrivals and brand storytelling. The design leans toward clean layouts, strong typography, and smooth interactions rather than a generic storefront look.

This is a client-side React application. Product data lives in a local JavaScript file, and user authentication is handled through the browser's local storage. There is no separate backend server.

## Features

**Home**
The landing page opens with a full-width hero video, followed by promotional imagery, a horizontally scrollable new collection slider, category highlights, and links into the full product catalog.

**New Arrivals**
A dedicated page for seasonal drops with editorial layouts, featured products, and quick add-to-cart actions on hover.

**Collections**
The main shop page. Products can be filtered by category, sorted by price, and browsed with pagination. A sidebar on desktop and a slide-out filter panel on mobile keep the layout usable on smaller screens.

**Product Detail**
Individual product pages include an image gallery with thumbnails, color swatches that link to color variants, size selection, expandable description sections, related products, and add-to-bag functionality.

**Shopping Cart**
A slide-out cart drawer lets users add items from anywhere on the site, adjust quantities, remove products, and see a running total. The cart opens automatically when something is added.

**Authentication**
Users can sign up and log in with email and password. Credentials are stored locally in the browser. The navbar updates to show a logout option when someone is signed in.

**About**
A brand-focused page with hero imagery, scroll-triggered content reveals, and sections on the company's design philosophy, craftsmanship, and sustainability messaging.

**Newsletter**
The footer includes an email signup form powered by EmailJS. Subscribers are notified through a configured email template.

**Checkout**
The checkout route exists as a placeholder and is marked as coming soon.

## Tech Stack

| Layer | Technology |
| --- | --- |
| UI Library | React 19 |
| Build Tool | Vite 8 |
| Routing | React Router DOM 7 |
| Styling | Tailwind CSS 4 |
| Animations | GSAP |
| Forms | React Hook Form |
| Icons | Font Awesome (React) |
| Email | EmailJS |
| Linting | Oxlint |

Custom Google Fonts are used throughout the site: Cinzel for the logo, Montserrat for body text, Michroma for display headings, and Red Rose for accent italic text.

## Getting Started

Make sure Node.js is installed, then clone the repository and install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```


Other useful commands:

```bash
npm run build    # production build
npm run preview  # preview the production build locally
npm run lint     # run Oxlint
```

## Environment Variables

The newsletter form in the footer uses EmailJS. Create a `.env` file in the project root with your credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

If these values are not set, the form will fall back to placeholder strings and the subscription will not go through until they are configured.

## Project Structure

```
src/
├── components/       # Pages and shared layout (Navbar, Footer, Home, etc.)
├── card/             # Product cards, grid, and slider components
├── context/          # AuthContext for login and signup state
├── crartDrawer/      # Cart context and slide-out drawer
├── data/             # Product catalog (product.js)
├── App.jsx           # Route definitions and providers
├── main.jsx          # App entry point
└── index.css         # Tailwind imports and custom font theme
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/newarrivals` | New Arrivals |
| `/collections` | Product Collection |
| `/product/:id` | Product Detail |
| `/about` | About |
| `/login` | Login |
| `/signup` | Sign Up |
| `/checkout` | Checkout (placeholder) |

## Product Data

All products are defined in `src/data/product.js`. Each entry includes a name, price, category, description, sizes, color options, and image URLs. Categories cover shirts, dresses, trousers, shoes, outerwear, knitwear, leather pieces, and accessories.

New arrival items on the New Arrivals page use a separate inline product list. Only products present in the main catalog file will have full detail pages.

## Notes

User accounts and cart contents are stored in the browser. Clearing site data or switching devices will reset that information. This setup works well for demos and portfolio projects but is not meant for production use without a real backend and database.

The checkout flow has not been implemented yet. The cart drawer includes a pay button, but completing an order is not supported at this stage.
