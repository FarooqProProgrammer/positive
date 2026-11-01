<div align="center">

# 🚀 Positivus — Digital Marketing Agency Platform

**A high-performance, cinematic digital marketing agency landing page built with Next.js 16, React 19, Tailwind CSS v4, and the ScrollCraft animation engine.**

[![Next.js](https://img.shields.io/badge/Next.js-16.4.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](CONTRIBUTING.md)

[Features](#-key-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Project Structure](#-project-structure) • [SEO & Meta](#-seo--social-sharing)

</div>

---

## 📖 Overview

**Positivus** is a modern, neo-brutalist marketing agency web experience crafted for service and creative businesses. It combines bold typography (`Space Grotesk`), sharp high-contrast layouts with black-bordered elevation, and smooth, hardware-accelerated **ScrollCraft** interactions that make exploring the page feel like an interactive film.

---

## ✨ Key Features

- **⚡ Modern Modern Core:** Built on **Next.js 16 (App Router)** and **React 19** powered by Turbopack for near-instant builds and HMR.
- **🎨 Neo-Brutalist Agency Aesthetics:** Crisp black outlines, `#B9FF66` electric lime accents, `#191A23` dark surfaces, and balanced visual hierarchy.
- **📜 ScrollCraft Cinematic Motion Engine:**
  - **Reading Progress Bar:** Sleek top-pinned progress indicator (`[data-sc-progress]`) with subtle glow.
  - **Dimensional Hero Parallax:** Multi-plane depth separation with ambient orbital halo, foreground floating badges, and 3D illustration tilt.
  - **Flow Reveals & Stagger:** Smooth, single-fire `IntersectionObserver` entrances (`[data-sc-in]` with `[data-sc-stagger]`).
  - **Interactive 3D Card Tilt:** Smooth spring-damped pointer tilt on service and team cards (`[data-sc-tilt]`).
  - **Cursor Spotlight:** Dynamic radial illumination that follows the cursor across dark and light card surfaces (`[data-sc-spotlight]`).
  - **Magnetic Buttons:** Interactive magnetic pull on CTAs and badges (`[data-sc-magnet]`).
  - **Reduced Motion Support:** Respects `prefers-reduced-motion: reduce` seamlessly with instant graceful degradation.
- **📱 True Responsive Fidelity:** Verified across ultra-compact mobile (320px), standard smartphones (390px), tablets (768px), laptops (1280px), and wide monitors with **zero horizontal overflow**.
- **🔍 Full-Spectrum SEO:**
  - OpenGraph & Twitter Card previews.
  - Native dynamic `sitemap.ts` and `robots.ts`.
  - Semantic HTML5 structure and accessible ARIA attributes.
- **🧰 Developer Experience:** Integrated with [React Grab](https://github.com/react-grab) for rapid in-browser element inspection.

---

## 🛠 Tech Stack

| Technology | Role | Version |
| :--- | :--- | :--- |
| **Next.js** | Full-Stack React Framework (App Router + Turbopack) | `16.4.3` |
| **React** | Component Architecture & Server Components | `19.3.0` |
| **Tailwind CSS** | Atomic Utility Styling Engine | `v4` |
| **TypeScript** | Type Safety & Developer Ergonomics | `^5` |
| **Lucide Icons** | Clean Vector Iconography | `^1.66` |
| **ScrollCraft** | Zero-dependency Scroll & Pointer Interaction Runtime | Engine |
| **pnpm** | Fast, disk space efficient package manager | `v11` |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.18.0 (Recommended: Node 20 LTS or Node 22)
- **pnpm** (or npm / yarn / bun)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/positivus.git
cd positivus
```

### 2. Install dependencies

```bash
pnpm install
# or: npm install | yarn install | bun install
```

### 3. Start the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
pnpm build
pnpm start
```

---

## 📂 Project Structure

```text
├── app/
│   ├── favicon.ico          # Application favicon
│   ├── globals.css          # Tailwind CSS v4 setup & ScrollCraft device classes
│   ├── layout.tsx           # Root layout with comprehensive SEO metadata & fonts
│   ├── page.tsx             # Main landing page orchestrating all sections
│   ├── robots.ts            # Dynamic robots.txt configuration
│   └── sitemap.ts           # Dynamic XML sitemap generator
├── components/
│   ├── CaseStudies.tsx      # Case studies with key metric highlights
│   ├── Contact.tsx          # Interactive consultation request form
│   ├── CtaBanner.tsx        # High-conversion mid-page CTA banner
│   ├── Footer.tsx           # Agency footer with navigation and newsletter
│   ├── Hero.tsx             # Dimensional layered hero with parallax & badges
│   ├── Logotypes.tsx        # Partner brands ticker with staggered reveal
│   ├── Navbar.tsx           # Sticky responsive navigation with mobile drawer
│   ├── ScrollCraftInit.tsx  # ScrollCraft client runtime & progress bar
│   ├── SectionHeader.tsx    # Standardized section header with badge pills
│   ├── Services.tsx         # 6 core service cards with 3D tilt & spotlight
│   ├── Team.tsx             # Team members grid with social links
│   ├── Testimonials.tsx     # Interactive testimonial carousel
│   └── WorkingProcess.tsx   # Step-by-step accordion process guide
├── lib/
│   └── scrollcraft.js       # Zero-dependency ScrollCraft animation engine
├── public/
│   └── images/              # SVGs, illustrations, and team assets
├── next.config.ts           # Next.js configuration
├── package.json             # Scripts & dependencies
└── tsconfig.json            # TypeScript configuration
```

---

## 🔍 SEO & Social Sharing

This repository comes pre-configured with SEO best practices:

- **MetadataBase & Canonical URLs** configured for production.
- **OpenGraph & Twitter Card tags** for previews when shared on Twitter/X, LinkedIn, Discord, and Slack.
- **Automated Sitemap (`/sitemap.xml`)** and **Robots Rules (`/robots.txt`)**.

### Recommended GitHub Repository Settings for Public Release

When making this repository public on GitHub, configure the **About** section on the right side of the repository page:

- **Description:**
  > Modern, high-performance Digital Marketing Agency landing page built with Next.js 16, React 19, Tailwind CSS v4, and ScrollCraft 3D scroll animations.
- **Website:** `https://your-deployment-url.vercel.app`
- **Topics / Tags:**
  `nextjs16` `react19` `tailwindcss4` `typescript` `landing-page` `marketing-agency` `scroll-animation` `scrollcraft` `neo-brutalism` `responsive-web-design` `seo-optimized`

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
