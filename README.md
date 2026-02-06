# Card Team Member

A **Next.js** application for displaying and managing team member cards with a beautiful UI and dark mode support.

## Features

- 🎨 **Modern UI Components** - Custom-built UI components with Tailwind CSS
- 🌙 **Dark Mode** - Built-in dark/light theme toggle
- 🔍 **Team Search** - Combobox component to search and filter team members
- 📱 **Responsive Design** - Mobile-friendly interface
- 🎯 **Type-Safe** - Full TypeScript support
- ⚡ **Next.js 16** - Latest version with App Router

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Radix UI, Base UI
- **Icons**: Lucide React
- **Theme**: next-themes

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YujiSeto/card-team-member.git
cd card-team-member
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/              # Next.js app router
├── components/       # Reusable React components
│   ├── ui/          # Base UI components
│   └── team/        # Team-specific components
├── data/            # Static data and members
├── lib/             # Utility functions
└── types/           # TypeScript type definitions
```
