# Scholars Scribe - Educational Content Platform

## Overview

Scholars Scribe is a modern full-stack web application built as an educational content hub. It features a blog-style interface where users can browse, search, and read articles across different categories like Technology, Lifestyle, Business, and Creative topics. The application uses a clean, modern design with a blue and yellow color scheme and provides responsive browsing experiences across devices.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints under `/api` namespace
- **Development**: Hot module replacement via Vite middleware in development

### Database Architecture
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon Database)
- **Schema**: Three main tables - users, categories, and articles with proper relationships
- **Storage Implementation**: Currently using in-memory storage with plans for PostgreSQL integration

## Key Components

### Data Models
- **Users**: Basic user management with username/password authentication
- **Categories**: Article categorization with name, description, color, and icon
- **Articles**: Rich content with title, excerpt, content, images, author, category relationships, and metadata (views, featured status, publish dates)

### UI Components
- **shadcn/ui**: Comprehensive component library including cards, buttons, forms, navigation, and layout components
- **Custom Components**: ArticleCard, CategoryCard, Header, Footer, and SearchBar for specialized functionality
- **Responsive Design**: Mobile-first approach with responsive navigation and layouts

### Page Structure
- **Home**: Features hero section, featured articles, recent articles, and category showcase
- **Articles**: List view with search functionality and pagination
- **Article**: Individual article view with full content and metadata
- **Category**: Category-specific article listings
- **About/Contact**: Static informational pages

## Data Flow

1. **Client Requests**: React components make API calls using TanStack React Query
2. **API Layer**: Express.js routes handle CRUD operations for articles, categories, and users
3. **Storage Layer**: Currently in-memory storage implements the IStorage interface, designed for easy migration to database
4. **Response Flow**: Data flows back through the same layers with proper error handling and loading states

## External Dependencies

### Core Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connectivity
- **ORM**: drizzle-orm and drizzle-kit for database operations and migrations
- **UI**: Complete shadcn/ui ecosystem with Radix UI primitives
- **Validation**: Zod for runtime type validation and drizzle-zod integration
- **State Management**: @tanstack/react-query for server state
- **Utilities**: date-fns for date manipulation, clsx and tailwind-merge for styling

### Development Tools
- **Build**: Vite with React plugin and TypeScript support
- **Replit Integration**: Custom plugins for development environment
- **Styling**: PostCSS with Tailwind CSS and Autoprefixer

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React application to `dist/public`
2. **Backend**: esbuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations in `migrations/` directory

### Environment Configuration
- **Development**: Uses Vite dev server with Express middleware
- **Production**: Serves static files from Express with built React app
- **Database**: Configurable via `DATABASE_URL` environment variable

### Scripts
- `npm run dev`: Development mode with hot reloading
- `npm run build`: Production build for both client and server
- `npm run start`: Production server startup
- `npm run db:push`: Database schema synchronization

The application is designed for easy deployment on platforms like Replit, with clear separation between development and production modes, and straightforward environment variable configuration for database connectivity.