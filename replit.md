# replit.md

## Overview

SportHub is a comprehensive web platform for managing and participating in sports competitions, specifically designed for cycling events. The application features a modern React frontend with a Node.js/Express backend, utilizing PostgreSQL for data persistence through Drizzle ORM. The platform enables users to participate in competitions, organize events, track rankings, and manage personal profiles.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side navigation
- **Styling**: Tailwind CSS with custom sport-themed design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API with `/api` prefix routing
- **Session Management**: Express sessions with PostgreSQL storage
- **Error Handling**: Centralized error middleware

### Design System
- **Primary Color**: `#fcbf06` (yellow) - Sport-themed branding
- **Background**: `#2e2e2e` (dark gray) - Dark theme optimized
- **Text**: `#ffffff` (white) - High contrast accessibility
- **Component Library**: Custom components built on Radix primitives

## Key Components

### Database Schema
The application uses a relational database structure with the following main entities:

- **Users**: User profiles with ranking, points, and subscription information
- **Competitions**: Event management with location, status, and organization details
- **Trainings**: Training session management and scheduling
- **Registrations**: User participation tracking for events

### Page Structure
- **Level 0**: Home page (`/`)
- **Level 1**: Main sections (Profile, Events, Ranking, Subscriptions, Map, Help)
- **Level 2**: Profile subsections (Judge, Settings, Calendar, Create)
- **Level 3**: Calendar subdivisions (Trainings, Events)

### Navigation System
- Responsive navigation with dropdown menus for nested sections
- Mobile-optimized hamburger menu for smaller screens
- Breadcrumb navigation for deep page hierarchies

## Data Flow

1. **User Authentication**: Session-based authentication with PostgreSQL session storage
2. **Event Management**: CRUD operations for competitions and trainings
3. **Ranking System**: Point-based ranking calculation from competition results
4. **Real-time Updates**: Live competition tracking and result updates
5. **Geographic Integration**: Map-based event discovery with coordinate storage

## External Dependencies

### Production Dependencies
- **Database**: `@neondatabase/serverless` - Serverless PostgreSQL connection
- **ORM**: `drizzle-orm` with `drizzle-zod` for type-safe database operations
- **UI Library**: Comprehensive Radix UI component suite
- **State Management**: `@tanstack/react-query` for server state
- **Styling**: `tailwindcss` with utility-first approach
- **Date Handling**: `date-fns` for temporal operations

### Development Dependencies
- **Build Tools**: Vite with React plugin and TypeScript support
- **Database Tools**: `drizzle-kit` for migrations and schema management
- **Code Quality**: TypeScript strict mode with comprehensive type checking

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev` - Runs concurrent frontend and backend development servers
- **Hot Reload**: Vite HMR for frontend, tsx watch mode for backend
- **Database**: Uses environment variable `DATABASE_URL` for connection

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Deployment**: Single command `npm run build` creates production-ready application

### Database Management
- **Schema**: Managed through Drizzle migrations in `/migrations` directory
- **Push**: `npm run db:push` applies schema changes to database
- **Environment**: Requires `DATABASE_URL` environment variable

## Changelog
```
Changelog:
- July 03, 2025. Initial setup
```

## User Preferences
```
Preferred communication style: Simple, everyday language.
```