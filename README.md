# The Wild Oasis

An internal admin dashboard for **The Wild Oasis** — a boutique hotel and cabin rental in the heart of the Italian Dolomites. Staff use it to manage bookings, cabins, guest check-ins, and hotel settings from a single, modern web interface.

Built as part of [Jonas Schmedtmann's Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course/), this project demonstrates production-style React patterns: feature-based architecture, server state management, authentication, and a real backend.

---

## Features

### Dashboard
- At-a-glance stats: bookings, sales, check-ins, and occupancy
- Interactive charts for sales trends and stay duration
- Today's activity feed with arrivals and departures

### Bookings
- View, filter, sort, and paginate all reservations
- Booking detail pages with guest and payment info
- Delete bookings with confirmation

### Cabins
- Full CRUD for cabin inventory
- Image upload to cloud storage
- Discount pricing and capacity management

### Check-in / Check-out
- Dedicated check-in flow for arriving guests
- One-click checkout for departing guests
- Real-time today activity on the dashboard

### Authentication & Account
- Email/password login and signup via Supabase Auth
- Protected routes — unauthenticated users are redirected to login
- Update profile, avatar, and password from the account page

### Settings
- Configure hotel-wide settings (breakfast price, booking fees, etc.)

### UI & UX
- Dark mode toggle with persisted preference
- Toast notifications for success and error feedback
- Responsive layout with sidebar navigation
- Reusable component library (tables, modals, forms, filters)

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 |
| Build tool | Vite |
| Routing | React Router v6 |
| Server state | TanStack React Query |
| Backend | Supabase (PostgreSQL, Auth, Storage) |
| Styling | Styled Components |
| Forms | React Hook Form |
| Charts | Recharts |
| Dates | date-fns |
| Notifications | React Hot Toast |
| Error handling | React Error Boundary |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)
- A [Supabase](https://supabase.com/) project with the Wild Oasis schema set up

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd the-wild-oasis

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app runs at `http://localhost:5173` by default.

### Supabase Setup

This app expects a Supabase project with:

- **Auth** — email/password provider enabled
- **Database tables** — `cabins`, `bookings`, `guests`, `settings`, and related schema
- **Storage bucket** — `cabins` (for cabin images) and `avatars` (for user profile photos)

Supabase credentials are loaded from environment variables (never commit real keys to git):

```bash
cp .env.example .env
```

Then fill in your values in `.env`:



> **Note:** The anon key is safe to use in the browser — Supabase security relies on Row Level Security (RLS) policies on the server. Still, keep credentials in `.env` so they are not checked into version control. If a key was ever committed, rotate it in the [Supabase dashboard](https://supabase.com/dashboard) under **Project Settings → API**.

> The course provides a pre-built Supabase project and seed data scripts in `src/data/` for populating the database with sample cabins, guests, and bookings.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## Project Structure

```
src/
├── context/          # React context providers (dark mode)
├── data/             # Seed data and database upload scripts
├── features/         # Feature modules (domain logic + UI)
│   ├── authentication/
│   ├── bookings/
│   ├── cabins/
│   ├── check-in-out/
│   ├── dashboard/
│   └── settings/
├── hooks/            # Shared custom hooks
├── pages/            # Route-level page components
├── services/         # Supabase client and API functions
├── styles/           # Global styles
├── ui/               # Reusable UI components
└── utils/            # Helpers and constants
```

Each feature folder follows a consistent pattern:

- **Components** — feature-specific UI
- **Custom hooks** (`use*.js`) — React Query hooks wrapping API calls
- **API logic** lives in `src/services/` and is consumed by the hooks

---

## Deployment

The project includes a `netlify.toml` with SPA redirect rules, so it deploys cleanly to [Netlify](https://www.netlify.com/):

```bash
npm run build
# Deploy the dist/ folder to your hosting provider
```

For other platforms (Vercel, GitHub Pages, etc.), ensure all routes redirect to `index.html` so client-side routing works correctly.

---

## Demo Credentials

If using the course's shared Supabase instance, log in with the credentials provided in the course materials.

---

## License

This project is for educational purposes as part of the Ultimate React Course.
