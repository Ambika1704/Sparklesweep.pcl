# SparkleSweep

SparkleSweep is a full-stack web application for an eco-friendly cleaning service. It gives customers a polished web experience to explore services, compare pricing, create an account, book cleaning appointments, and contact the business through responsive, production-style flows.

The latest version expands the project from a static service website into a working booking platform with authentication, database-backed forms, and reusable UI components.

## Highlights

- Modern marketing homepage with eco-friendly brand positioning and service calls to action
- Responsive navigation with desktop and mobile menu states
- Service catalog covering home, deep, office, baby-safe, post-renovation, and move-in or move-out cleaning
- Transparent pricing page with plan tiers and direct booking actions
- Booking flow with validation, loading states, confirmation feedback, and backend persistence
- Contact form with inquiry storage and user feedback states
- Customer sign-up and login using credentials-based authentication
- Prisma data layer backed by SQLite for local development
- FAQ and testimonials pages to support trust and customer decision-making
- Presentation deck included as `sparklesweep-presentation.html`

## Recent Updates

This repository now includes the following major updates:

- Added Prisma schema, SQLite development database, and shared Prisma client setup
- Added `User`, `Booking`, and `ContactMessage` data models
- Added booking API routes for creating and listing booking requests
- Added contact API routes for creating and listing customer inquiries
- Added customer registration with password hashing through `bcryptjs`
- Added NextAuth credentials login flow with JWT sessions
- Added sign-up and login pages with password visibility controls and error handling
- Improved booking and contact pages with submission states and backend integration
- Added a SparkleSweep presentation deck for project demonstration
- Updated dependencies for authentication, Prisma, forms, and UI support

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **UI:** React 19, Tailwind CSS, shadcn/ui, Radix UI
- **Icons:** Lucide React
- **Database:** SQLite
- **ORM:** Prisma
- **Authentication:** NextAuth with credentials provider
- **Password Security:** bcryptjs
- **Package Manager:** pnpm

## Project Structure

```text
.
|-- app/
|   |-- (site)/
|   |   |-- page.tsx              # Homepage
|   |   |-- booking/              # Booking form and confirmation flow
|   |   |-- contact/              # Contact form and business details
|   |   |-- faq/                  # Frequently asked questions
|   |   |-- login/                # Customer login
|   |   |-- pricing/              # Pricing plans
|   |   |-- services/             # Service catalog
|   |   |-- signup/               # Customer registration
|   |   `-- testimonials/         # Customer testimonials
|   |-- api/
|   |   |-- auth/                 # NextAuth and registration routes
|   |   |-- bookings/             # Booking API
|   |   `-- contact/              # Contact-message API
|   |-- globals.css
|   `-- layout.tsx
|-- components/
|   |-- ui/                       # Reusable shadcn/ui components
|   |-- navbar.tsx
|   |-- footer.tsx
|   `-- page-transition.tsx
|-- hooks/                        # Reusable client hooks
|-- lib/
|   |-- prisma.ts                 # Prisma client instance
|   `-- utils.ts                  # Shared utility helpers
|-- prisma/
|   |-- schema.prisma             # Database schema
|   `-- dev.db                    # Local SQLite database
|-- public/                       # Static assets
|-- styles/                       # Global style assets
|-- sparklesweep-presentation.html
|-- package.json
|-- pnpm-lock.yaml
`-- README.md
```

## Core Data Models

### User

Stores customer account details used for authentication and future booking association.

### Booking

Stores cleaning appointment requests, including customer details, address, selected service, preferred date and time, status, and timestamps.

### ContactMessage

Stores customer inquiries submitted through the contact page.

## API Routes

| Route | Method | Purpose |
| --- | --- | --- |
| `/api/auth/signup` | `POST` | Register a new customer account |
| `/api/auth/[...nextauth]` | `GET`, `POST` | Handle NextAuth authentication |
| `/api/bookings` | `POST` | Create a booking request |
| `/api/bookings` | `GET` | List booking requests |
| `/api/contact` | `POST` | Save a contact inquiry |
| `/api/contact` | `GET` | List contact inquiries |

## Getting Started

### Prerequisites

- Node.js 18 or newer
- pnpm

### Installation

```bash
pnpm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
DATABASE_URL="file:./prisma/dev.db"
NEXTAUTH_SECRET="replace-with-a-secure-random-secret"
NEXTAUTH_URL="http://localhost:3000"
```

### Database Setup

Generate the Prisma client and sync the schema:

```bash
npx prisma generate
npx prisma db push
```

### Run Locally

```bash
pnpm dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Create a production build |
| `pnpm start` | Start the production server |
| `pnpm lint` | Run ESLint |

## Future Improvements

- Customer dashboard for viewing and managing bookings
- Admin panel for booking and contact-message management
- Email confirmations and reminder notifications
- Online payment and invoice support
- Service-area validation and scheduling rules
- Booking reschedule and cancellation workflows

## Summary

SparkleSweep is designed as a professional, full-stack cleaning service platform with a polished customer-facing interface and practical backend functionality. It now covers the core customer journey from discovery to account creation, inquiry, and booking, while leaving a clear path for admin tools, payments, notifications, and production deployment.
