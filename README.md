This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your system. Then install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Running the Development Server

To start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page auto-updates as you edit files. You can start editing the page by modifying `app/page.tsx`.

### Running Storybook

To start Storybook for component development and documentation:

```bash
npm run storybook
# or
yarn storybook
# or
pnpm storybook
```

Storybook will be available at [http://localhost:6006](http://localhost:6006).

To build Storybook for production:

```bash
npm run build-storybook
# or
yarn build-storybook
# or
pnpm build-storybook
```

## Libraries and Technologies

This project uses the following libraries and frameworks:

### Core Framework
- **Next.js** (16.0.1) - React framework for production
- **React** (19.2.0) - UI library
- **TypeScript** (5.x) - Type-safe JavaScript

### Styling
- **Tailwind CSS** (4.x) - Utility-first CSS framework
- **tailwind-merge** - Utility to merge Tailwind CSS classes
- **class-variance-authority** - Component variant management
- **clsx** - Utility for constructing className strings conditionally

### Drag and Drop
- **@dnd-kit/core** - Drag and drop toolkit core
- **@dnd-kit/sortable** - Sortable components for drag and drop
- **@dnd-kit/utilities** - Utility functions for dnd-kit

### UI Components (Radix UI)
- **@radix-ui/react-accordion** - Accessible accordion component
- **@radix-ui/react-checkbox** - Accessible checkbox component
- **@radix-ui/react-dialog** - Accessible dialog component
- **@radix-ui/react-select** - Accessible select component
- **@radix-ui/react-separator** - Separator component
- **@radix-ui/react-slot** - Slot component for composition
- **@radix-ui/react-switch** - Accessible switch component
- **@radix-ui/react-tooltip** - Accessible tooltip component

### Icons
- **lucide-react** - Icon library

### Development Tools
- **Storybook** (10.0.5) - Component development environment
- **ESLint** - Code linting
- **Vitest** - Unit testing framework
- **Playwright** - End-to-end testing

### Storybook Addons
- **@storybook/addon-a11y** - Accessibility testing
- **@storybook/addon-docs** - Documentation
- **@storybook/addon-onboarding** - Onboarding guide
- **@storybook/addon-vitest** - Vitest integration
- **@storybook/nextjs-vite** - Next.js + Vite integration

## Project Structure

- `/app` - Next.js app directory (pages and layouts)
- `/components` - React components
  - `/ui` - Base UI components (shadcn/ui style)
- `/contexts` - React context providers
- `/hooks` - Custom React hooks
- `/lib` - Utility functions
- `/assets` - Static assets (icons, images)
- `/stories` - Storybook stories and configuration

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
