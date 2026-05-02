# SparkleSweep - Cleaning Service Web Application

SparkleSweep is a full-stack web application for an eco-friendly cleaning service. It gives customers a modern web experience to browse services, compare pricing, create an account, book appointments, and contact the business through responsive, user-friendly flows.

The project combines a Next.js frontend with Prisma-backed persistence for customer accounts, booking requests, and contact messages.

## Key Features

- Online booking flow with customer details, address, preferred date and time, and service selection
- Service catalog for regular home cleaning, deep cleaning, office cleaning, baby-safe cleaning, post-renovation cleaning, and move-in or move-out cleaning
- Transparent pricing page with plan tiers and direct booking entry points
- Customer authentication with sign-up and sign-in flows powered by credentials-based auth
- Contact form for customer inquiries with backend persistence
- FAQ and testimonials pages to improve trust and user engagement
- Eco-friendly brand positioning centered on organic products, water conservation, and family-safe cleaning
- Responsive navigation, reusable UI components, and page transitions across the site

## Tech Stack

- Next.js 16 with App Router
- TypeScript
- React 19
- Tailwind CSS
- shadcn/ui and Radix UI
- Prisma ORM
- SQLite
- NextAuth
- bcryptjs
- pnpm

## Project Structure

```text
.
|-- app/
|   |-- (site)/
|   |   |-- page.tsx            # Home page
|   |   |-- booking/            # Booking form and confirmation flow
|   |   |-- contact/            # Contact page
|   |   |-- faq/                # Frequently asked questions
|   |   |-- login/              # Customer login page
|   |   |-- pricing/            # Pricing plans
|   |   |-- services/           # Service catalog
|   |   |-- signup/             # Account registration page
|   |   `-- testimonials/       # Customer testimonials
|   |-- api/
|   |   |-- auth/               # NextAuth and signup endpoints
|   |   |-- bookings/           # Booking API routes
|   |   `-- contact/            # Contact API routes
|   |-- globals.css
|   `-- layout.tsx
|-- components/                 # Shared layout and UI components
|-- hooks/                      # Reusable client hooks
|-- lib/                        # Prisma client and utility helpers
|-- prisma/
|   |-- schema.prisma           # Database schema
|   `-- dev.db                  # SQLite development database
|-- public/                     # Static assets and imagery
|-- styles/                     # Global style assets
|-- package.json
|-- pnpm-lock.yaml
`-- README.md
```

## Data Model

SparkleSweep currently persists the following core entities:

- `User`: customer account information for authentication and booking association
- `Booking`: booking request details including name, email, address, service type, date, time, and status
- `ContactMessage`: customer inquiry submissions from the contact form

## Getting Started

### Prerequisites

- Node.js 18 or newer
- pnpm

### Installation

```bash
pnpm install
```

### Environment

Create or update `.env` with the required application settings:

```env
DATABASE_URL="file:./prisma/dev.db"
NEXTAUTH_SECRET="replace-with-a-secure-random-secret"
NEXTAUTH_URL="http://localhost:3000"
```

### Database

Generate the Prisma client and sync the schema:

```bash
npx prisma generate
npx prisma db push
```

### Development

```bash
pnpm dev
```

Open `http://localhost:3000` in your browser.

### Production

```bash
pnpm build
pnpm start
```

## Available Scripts

- `pnpm dev` - starts the local development server
- `pnpm build` - creates the production build
- `pnpm start` - runs the production server
- `pnpm lint` - runs ESLint

## Future Improvements

- Customer dashboard for viewing and managing bookings
- Admin panel for booking and contact-message management
- Email confirmations and reminder notifications
- Online payments and invoice generation
- Service-area validation and scheduling rules
- Booking reschedule and cancellation workflows

## Summary

SparkleSweep is a modern full-stack cleaning service application designed to combine a strong marketing experience with practical booking and customer interaction flows. It provides a solid foundation for evolving into a production-ready service platform while already covering the core journey from discovery to inquiry and booking.

## Acknowledgment

This project was developed as part of a group academic initiative to build a full-stack application using modern web technologies.

Special acknowledgment to:
- Project team members for their contributions and collaboration
- Open-source community for tools like Next.js, Prisma, and Tailwind CSS
- Learning resources and documentation that supported development

## Author

Ambika B Sajjan  
GitHub: https://github.com/Ambika1704  
Repository: https://github.com/Ambika1704/Sparklesweep.pcl

## License

This project is for educational and demonstration purposes.

## Contributions

This project was developed as part of a group. The current repository reflects the primary implementation and contributions by the author.
