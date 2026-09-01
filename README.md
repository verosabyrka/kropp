# Kropp — Fitness Club Landing Page

![Astro](https://img.shields.io/badge/Astro-BC52EE?style=flat&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=flat&logo=pnpm&logoColor=white)
[![Netlify Status](https://api.netlify.com/api/v1/badges/754c3f54-4e73-46ee-aaff-fa0e63258241/deploy-status)](https://app.netlify.com/projects/sz-kropp/deploys)

A modern, high-performance landing page for the **Kropp** fitness and crossfit club, built with [Astro](https://astro.build) and optimized for accessibility, responsiveness, and speed.

## ✨ Features

- **Blazing Fast Performance**: Zero JavaScript runtime overhead by default, delivering top-tier Core Web Vitals.
- **Responsive & Modern Styling**: Layout crafted with modern CSS features (CSS Nesting, CSS Variables, Fluid Typography, Custom Scrollbar).
- **Interactive Micro-features**:
  - **BMI & Calorie Calculator**: Real-time fitness calculation (BMI, BMR, TDEE) using the Mifflin-St Jeor formula, styled `<dialog>` modal with smooth animations and background scroll-lock.
  - **Custom Accessible Select**: Custom dropdown component with full keyboard navigation (WAI-ARIA compliant), options filtering, and native form integration.
  - **Magnetic Play Button**: Smooth floating video play button with kinetic cursor tracking and linear interpolation (LERP) in the video section.
  - **Mobile Burger Navigation**: Responsive drawer navigation with morphing hamburger-to-cross icon animation.
- **Modular Component Architecture**: Reusable UI elements (`Button`, `Field`, `Select`, `Logo`, `SocialSprite`).
- **SEO & Social Sharing**: Open Graph and Twitter Cards meta tags, canonical URL handling, and accessible semantic markup.
- **Type Safety**: Strictly typed component props and attributes via TypeScript (`astro/types`) and isolated utility functions in `src/utils/`.
- **Optimized Media Assets**: High-resolution and responsive images powered by Astro’s built-in `astro:assets` and Sharp, plus SVG symbols sprite for icons.
- **Landing Sections**:
  - Hero banner with quick call-to-actions
  - Motivation & values showcase
  - Training programs & activities
  - Video presentation preview with interactive play button
  - BMI & calorie calculation form and metrics table
  - Gym location details & working hours
  - Community photo gallery
  - Newsletter subscription & social media links

## 🛠️ Tech Stack

- **Framework**: [Astro 7](https://astro.build)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode, typed component props, business logic helpers)
- **Image Optimization**: [Sharp](https://sharp.pixelplumbing.com/)
- **Styling**: Native CSS with modern features (CSS Variables, Nesting, Flexbox/Grid)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Deployment**: [Netlify](https://www.netlify.com/)

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed:
- **Node.js**: `>= 22.12.0`
- **pnpm**: `>= 9.0.0` (or `npm` / `yarn`)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/verosabyrka/kropp.git
   cd kropp
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Start the development server**:
   ```bash
   pnpm dev
   ```
   Open [http://localhost:4321](http://localhost:4321) in your browser to view the project.

## 🧞 Available Scripts

| Command | Action |
| :--- | :--- |
| `pnpm dev` | Starts local development server at `localhost:4321` |
| `pnpm build` | Compiles the production build into `./dist/` |
| `pnpm preview` | Locally previews the production build before deployment |
| `pnpm astro` | Runs Astro CLI commands (`astro check`, `astro add`, etc.) |

## 📂 Project Structure

```text
kropp/
├── public/                 # Static assets (favicons, etc.)
├── src/
│   ├── assets/             # Media assets (images, icons, fonts)
│   ├── components/         # Reusable UI components (Button, Field, Select, Logo, etc.)
│   ├── layouts/            # Page layouts & meta tags (Layout.astro)
│   ├── pages/              # Astro pages & routes (index.astro)
│   ├── sections/           # Landing page section blocks (Banner, JoinUs, Calculate, etc.)
│   ├── styles/             # Global styles, reset/normalize, variables
│   └── utils/              # Calculation helpers & business logic (calculator.ts)
├── astro.config.mjs        # Astro configuration
├── package.json            # Project dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

## 👤 Author

Developed by **Sabyrka**
- GitHub: [@verosabyrka](https://github.com/verosabyrka)
