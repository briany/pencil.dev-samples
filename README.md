# Energy Dashboard

A modern, responsive home energy monitoring dashboard built with Next.js and Tailwind CSS. Designed in [Pencil](https://pencil.dev) and generated to production-ready code.

![Light Mode](https://img.shields.io/badge/theme-light-brightgreen) ![Dark Mode](https://img.shields.io/badge/theme-dark-gray)

## Features

- **Real-time Energy Monitoring** - Track solar production, battery levels, home consumption, and grid exchange
- **Energy Flow Visualization** - See how energy flows from solar panels to battery, home, and grid
- **Production Chart** - Hourly breakdown of daily energy production
- **Dark Mode Support** - Toggle between light and dark themes with persistent preference
- **Responsive Sidebar** - Navigation with monitoring and system sections

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React + Material Symbols
- **Fonts**: JetBrains Mono (primary) + Geist (secondary)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/briany/pencil.dev-samples.git
cd pencil.dev-samples

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # CSS variables for theming
│   ├── layout.tsx       # Root layout with fonts
│   └── page.tsx         # Main dashboard page
└── components/
    ├── EnergyFlow.tsx   # Energy distribution diagram
    ├── MetricCard.tsx   # Reusable metric display card
    ├── ProductionChart.tsx  # Hourly production bar chart
    ├── Sidebar.tsx      # Navigation sidebar
    └── ThemeToggle.tsx  # Light/dark mode toggle
```

## Theming

The dashboard uses CSS custom properties for theming. Colors are defined in `globals.css`:

- Light mode: Warm grays with orange accents
- Dark mode: Deep blacks with vibrant orange accents

Theme preference is persisted to `localStorage` and respects system preferences on first visit.

## License

MIT
