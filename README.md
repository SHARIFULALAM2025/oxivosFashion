# Oxivos Fashion — Frontend E-commerce Storefront

A modern, fully responsive fashion storefront built as a frontend-only project — browsing products, filtering, viewing product details, and managing a shopping cart, all powered by local dummy data.

> Built for the **Oxivos Web Development Agency** — Round 1 Frontend Developer Task.

---

## 🔗 Live Demo & Repository

| Resource | Link |
|---|---|
| 🌐 Live Site (Vercel) | `https://oxivos-fashion-inky.vercel.app/` |
| 💻 GitHub Repository | `https://github.com/SHARIFULALAM2025/oxivosFashion` |

---

## ✨ Features

### Core Pages
- **Home** — Hero/banner slider plus a grid of featured products
- **Products** — Full product listing in a responsive grid
- **Product Details** — Image gallery, color & size selectors, quantity stepper, and Add to Cart
- **Cart** — Item list with quantity controls, remove item, subtotal, and an empty-cart state

### Bonus Features Implemented
- 🔍 Search bar (filter products by name)
- ↕️ Sort by price (low → high / high → low)
- 🗂️ Category filter
- 🌗 Dark mode toggle (theme persisted via CSS variables + provider)
- 🖼️ Product image gallery with thumbnail navigation and expand/lightbox view
- 🛒 Cart quantity controls (increment/decrement, auto-remove at zero)
- 🔔 Cart badge in the navbar showing live item count
- 💾 Cart state persisted in `localStorage` (survives page refresh)
- ⏳ Loading state and empty-cart state
- 🔔 SweetAlert2-powered alerts/notifications
- 🚫 Custom 404 / Not Found page

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [react-icons](https://react-icons.github.io/react-icons/)
- **Alerts:** [SweetAlert2](https://sweetalert2.github.io/)
- **State Management:** React Context API (`CartContext`) + `useReducer`
- **Data Source:** Local JSON files (no backend/database)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📁 Project Structure

```
my-app/
├── public/
│   └── oxivos.png
├── src/
│   ├── app/
│   │   ├── (Auth)/
│   │   ├── cart/
│   │   │   └── page.jsx
│   │   ├── contact/
│   │   │   └── page.jsx
│   │   ├── navigation/
│   │   │   ├── FeedBack.json
│   │   │   ├── hero.json          # product & slider dummy data
│   │   │   └── route.json         # nav links
│   │   ├── product/
│   │   │   ├── [id]/
│   │   │   │   └── page.jsx       # dynamic product details route
│   │   │   └── page.jsx           # product listing page
│   │   ├── register/
│   │   │   └── page.jsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js
│   │   ├── not-found.js
│   │   └── page.js                # home page
│   └── Components/
│       ├── AllProduct/AllProduct.jsx
│       ├── Button/Button.jsx
│       ├── Card/Card.jsx
│       ├── CartProduct/
│       │   ├── CartItem.jsx
│       │   ├── CartProduct.jsx
│       │   ├── CartSummary.jsx
│       │   └── EmptyCart.jsx
│       ├── Contact/Contact.jsx
│       ├── Context/CartContext.jsx
│       ├── DarkMode/DarkMode.jsx
│       ├── FeatureProduct/FeatureProduct.jsx
│       ├── FeedBack/FeedBack.jsx
│       ├── Footer/
│       │   ├── Footer.jsx
│       │   └── payImageData.js
│       ├── Hero/Hero.jsx
│       ├── Loader/Loader.jsx
│       ├── Navbar/Navbar.jsx
│       ├── NotFound/NotFound.jsx
│       ├── ProductDetails/ProductDetails.jsx
│       └── provider/ThemeProvider.js
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18 or later
- npm (or yarn/pnpm)

### Installation

```bash
# Clone the repository
git clone <https://github.com/SHARIFULALAM2025/oxivosFashion.git>
cd my-app

# Install dependencies
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | Run ESLint checks |

---

## 🧠 Cart State Management

Cart state is managed globally with React's **Context API** and **`useReducer`** (`Components/Context/CartContext.jsx`):

- `addToCart(product, { size, color, quantity })` — adds a product (each unique size/color combination is tracked as its own cart line)
- `removeFromCart(lineId)` — removes a specific line item
- `updateQuantity(lineId, quantity)` — updates quantity (auto-removes the item if it drops below 1)
- `clearCart()` — empties the cart
- `totalItem` / `totalPrice` — derived cart totals
- Cart state is persisted to `localStorage`, so it survives page refreshes and new sessions

---

## ☁️ Deployment (Vercel)

1. Push your code to a GitHub repository.
2. Go to [vercel.com](https://vercel.com/) and click **New Project**.
3. Import your GitHub repository.
4. Framework preset: **Next.js** (auto-detected).
5. Click **Deploy** — Vercel will handle the build (`next build`) and hosting automatically.
6. Once deployed, copy the live URL into the **Live Demo** section above.

No environment variables are required since this project uses local dummy data only.

---

## 📱 Responsiveness

The entire UI — navbar, hero, product grid, product details, and cart — is built mobile-first with Tailwind CSS breakpoints (`sm`, `md`, `lg`) and tested across mobile, tablet, and desktop viewports.

---

## 🎨 Theming

Light/dark mode is powered by CSS custom properties (`--background`, `--foreground`, `--primary`, `--accent`, `--card`, `--border`, `--muted`) defined in `globals.css` and toggled via `Components/provider/ThemeProvider.js`, so every component adapts automatically without duplicated `dark:` classes.

---

## 📬 Contact

**Oxivos Web Development Agency**
🌐 [https://oxivos-fashion-inky.vercel.app/](https://oxivos-fashion-inky.vercel.app/) · ✉️ hello@oxivos.com · 📞 01688399676

---

## 👤 Author

`<SHARIFUL ALAM>`
`<sharifullinkdin2025@gmail.com>`