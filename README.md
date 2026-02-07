# Sparkle Sweep — Web Application

A Next.js + Tailwind CSS marketing/site starter used for a cleaning service demo.

## Features

- App directory routing using Next.js
- Tailwind CSS + utility UI components
- Accessible Radix UI primitives

## Prerequisites

- Node.js 18 or newer
- pnpm (recommended) — this repo includes a `pnpm-lock.yaml`

If you don't have pnpm installed you can use npm or yarn, but the commands below use `pnpm`.

## Install

From the project root, run:

```bash
pnpm install
```


## Available Scripts

- `pnpm dev` — Run the development server (Next.js)
- `pnpm build` — Build the production app
- `pnpm start` — Start the production server after build
- `pnpm lint` — Run ESLint over the project

These map to the npm script names in `package.json`.

## Running Locally

Start the dev server:

```bash
pnpm dev
```

Open http://localhost:3000 in your browser.

To build and run production locally:

```bash
pnpm build
pnpm start
```

Port override examples:

# On Unix/macOS
```bash
PORT=3001 pnpm dev
```

# On Windows PowerShell
```powershell
$env:PORT=3001; pnpm dev
```

## Project Structure (high level)

- `app/` — Next.js app routes and layouts
- `components/` — Reusable UI components
- `public/` — Static assets
- `styles/` — Global CSS / Tailwind

