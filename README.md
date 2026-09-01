# Kropp — Fitness Club Landing Page

![Astro](https://img.shields.io/badge/Astro-BC52EE?style=flat&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=flat&logo=pnpm&logoColor=white)
[![Netlify Status](https://api.netlify.com/api/v1/badges/754c3f54-4e73-46ee-aaff-fa0e63258241/deploy-status)](https://app.netlify.com/projects/sz-kropp/deploys)

A modern, high-performance landing page for the **Kropp** fitness and crossfit club, built with [Astro](https://astro.build) and optimized for accessibility, responsiveness, and speed.

## ✨ Features

- **Blazing Fast Performance**: Zero JavaScript runtime by default, delivering top-tier Core Web Vitals.
- **Responsive & Pixel-Perfect Design**: Clean layout crafted with modern CSS features (CSS Nesting, CSS Variables, Fluid Typography).
- **Modular Component Architecture**: Reusable UI elements (`Button`, `Field`, `Select`, `Logo`, `SocialSprite`).
- **Type Safety**: Strictly typed component props and attributes via TypeScript (`astro/types`).
- **Optimized Media Assets**: High-resolution and responsive images powered by Astro’s built-in `astro:assets` and Sharp.
- **Accessibility First**: Semantic HTML5 tags, keyboard navigation focus indicators (`:focus-visible`), and accessible form labels.
- **Landing Sections**:
  - Hero banner with quick call-to-actions
  - Motivation & values showcase
  - Training programs & activities
  - Video presentation preview
  - BMI & calorie calculation form and metrics table
  - Gym location details & working hours
  - Community photo gallery
  - Newsletter subscription & social media links

## 🛠️ Tech Stack

- **Framework**: [Astro 7](https://astro.build)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode, typed component props)
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
│   ├── components/         # Reusable UI components (Button, Field, Logo, etc.)
│   ├── layouts/            # Page layouts (Layout.astro)
│   ├── pages/              # Astro pages & routes (index.astro)
│   ├── sections/           # Landing page section blocks (Banner, JoinUs, etc.)
│   └── styles/             # Global styles, reset/normalize, variables
├── astro.config.mjs        # Astro configuration
├── package.json            # Project dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

## 👤 Author

Developed by **Sabyrka**
- GitHub: [@verosabyrka](https://github.com/verosabyrka)
