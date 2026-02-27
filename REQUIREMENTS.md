# Native360 Project Requirements

## Project Type
Node.js / Next.js 16 with TypeScript

## Package Manager
pnpm (recommended) or npm

## Node Version
Node.js 18+ recommended

## Core Dependencies

### Framework & UI
- next: 16.1.6
- react: 19.2.4
- react-dom: 19.2.4
- typescript: 5.7.3

### UI Component Library (shadcn/ui + Radix UI)
- @radix-ui/react-accordion: 1.2.12
- @radix-ui/react-alert-dialog: 1.1.15
- @radix-ui/react-aspect-ratio: 1.1.8
- @radix-ui/react-avatar: 1.1.11
- @radix-ui/react-checkbox: 1.3.3
- @radix-ui/react-collapsible: 1.1.12
- @radix-ui/react-context-menu: 2.2.16
- @radix-ui/react-dialog: 1.1.15
- @radix-ui/react-dropdown-menu: 2.1.16
- @radix-ui/react-hover-card: 1.1.15
- @radix-ui/react-label: 2.1.8
- @radix-ui/react-menubar: 1.1.16
- @radix-ui/react-navigation-menu: 1.2.14
- @radix-ui/react-popover: 1.1.15
- @radix-ui/react-progress: 1.1.8
- @radix-ui/react-radio-group: 1.3.8
- @radix-ui/react-scroll-area: 1.2.10
- @radix-ui/react-select: 2.2.6
- @radix-ui/react-separator: 1.1.8
- @radix-ui/react-slider: 1.3.6
- @radix-ui/react-slot: 1.2.4
- @radix-ui/react-switch: 1.2.6
- @radix-ui/react-tabs: 1.1.13
- @radix-ui/react-toast: 1.2.15
- @radix-ui/react-toggle: 1.1.10
- @radix-ui/react-toggle-group: 1.1.11
- @radix-ui/react-tooltip: 1.2.8

### Styling
- tailwindcss: 4.2.0
- @tailwindcss/postcss: 4.2.0
- autoprefixer: 10.4.20
- postcss: 8.5
- tw-animate-css: 1.3.3
- tailwind-merge: 3.3.1
- class-variance-authority: 0.7.1

### Form & Validation
- react-hook-form: 7.54.1
- @hookform/resolvers: 3.9.1
- zod: 3.24.1

### Charts & Data Visualization
- recharts: 2.15.0

### Utilities
- clsx: 2.1.1
- lucide-react: 0.564.0
- date-fns: 4.1.0
- next-themes: 0.4.6
- sonner: 1.7.1
- @vercel/analytics: 1.6.1

### UI Components
- cmdk: 1.1.1
- embla-carousel-react: 8.6.0
- input-otp: 1.4.2
- react-day-picker: 9.13.2
- react-resizable-panels: 2.1.7
- vaul: 1.1.2

### Dev Dependencies
- @types/node: 22
- @types/react: 19.2.14
- @types/react-dom: 19.2.3

## Installation

```bash
# Install dependencies using pnpm
pnpm install

# Or using npm
npm install
```

## Available Scripts

```bash
# Development server
pnpm dev
npm run dev

# Production build
pnpm build
npm run build

# Start production server
pnpm start
npm start

# Linting
pnpm lint
npm run lint
```

## Features

- Professional property management and elder companionship services website
- Responsive design with Tailwind CSS v4
- Modern UI components with shadcn/ui
- Form handling with React Hook Form and Zod validation
- Auto-sliding carousel hero section with service images
- Contact form with WhatsApp integration
- Native360 branding with teal and navy blue color scheme
- Smooth animations and transitions

## Deployment

Ready for deployment on Vercel with zero-config setup.

```bash
pnpm build
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
