# LawnStarter Technical Interview - Star Wars Analytics Dashboard

A modern Next.js application that provides search functionality for Star Wars characters and films while tracking and analyzing API request patterns. This project demonstrates full-stack development skills with real-time analytics, performance monitoring, and a responsive user interface.

## 🌟 Project Overview

This application serves as a **Star Wars API Search Interface** with built-in **Analytics Dashboard** that tracks API usage patterns, response times, and request statistics. It's designed to showcase modern web development practices and database and API integration skills.

### Key Features

- **🔍 Search Interface**: Search for Star Wars people and films using the SWAPI
- **📊 Analytics Dashboard**: Real-time analytics and performance monitoring
- **⚡ Performance Tracking**: Automatic request timing and statistics collection
- **📱 Responsive Design**: Mobile-first responsive UI with TailwindCSS
- **🚀 Modern Stack**: Next.js 15, TypeScript, Prisma, React Query
- **🐳 Docker Ready**: Complete Docker configuration for development and production

## 🛠 Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first styling
- **React Query** - Server state management
- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation

### Backend & Database
- **Prisma** - Type-safe database ORM
- **SQLite** - Lightweight database for development
- **Next.js API Routes** - Server-side API endpoints

### Development Tools
- **Biome** - Fast linting and formatting
- **Docker** - Containerization for consistent environments
- **pnpm** - Fast, efficient package manager

### External Integration
- **SWAPI (Star Wars API)** - External data source for Star Wars content

## 📋 Prerequisites

- **Node.js** 20+
- **pnpm** (recommended) or npm
- **Docker** & **Docker Compose** (for containerized setup)

## 🚀 Getting Started

### Option 1: Local Development

1. **Clone and install dependencies**
   ```bash
   git clone <repository-url>
   cd frontend
   pnpm install
   ```

2. **Set up the database**
   ```bash
   pnpm db:generate
   pnpm db:push
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Option 2: Docker Development

1. **Start with Docker Compose**
   ```bash
   # Development with hot reload
   docker-compose -f docker-compose.dev.yml up

   # Or production build
   docker-compose up app
   ```

2. **Access the application**
   Open [http://localhost:3000](http://localhost:3000)

## 📊 Application Features

### Search Interface (`/`)
- **Dual Search Types**: Toggle between searching People or Films
- **Real-time Search**: Dynamic search with query parameter persistence
- **Responsive Design**: Mobile-optimized search interface
- **Result Navigation**: Direct links to detailed character/film pages

### Analytics Dashboard (`/dashboard`)
- **Performance Metrics**: Average response time tracking
- **Request Analytics**: Total requests and peak usage hours
- **Usage Patterns**: Top queries and hourly request breakdowns
- **Visual Charts**: Interactive charts for data visualization
- **Auto-refresh**: Updates every 5 minutes

### Key Metrics Tracked
- API response times and performance
- Most popular search queries
- Peak usage hours and patterns
- Request success/error rates
- Hourly request distribution

## 🗂 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API endpoints
│   ├── dashboard/         # Analytics dashboard
│   └── page.tsx          # Main search interface
├── components/            # Reusable UI components
│   ├── dashboard/        # Dashboard-specific components
│   ├── filter/           # Search filtering components
│   └── results/          # Search results components
├── actions/              # Server actions and data fetching
├── hooks/                # Custom React hooks
├── lib/                  # Utilities and configurations
├── types/                # TypeScript type definitions
└── generated/            # Generated Prisma client
```

## 🔧 Available Scripts

```bash
# Development
pnpm dev              # Start development server with Turbopack
pnpm build            # Build for production
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run Biome linting
pnpm lint:fix         # Fix linting issues automatically
pnpm format           # Format code with Biome
pnpm format:check     # Check code formatting

# Database
pnpm db:generate      # Generate Prisma client
pnpm db:push          # Push schema changes
pnpm db:migrate       # Run database migrations
pnpm db:studio        # Open Prisma Studio

# Docker
docker-compose up app                           # Production
docker-compose -f docker-compose.dev.yml up    # Development
```

## 🏗 Architecture Highlights

### Performance Monitoring
- **Axios Interceptors**: Automatic request timing and logging
- **Database Persistence**: All API calls tracked in SQLite
- **Real-time Analytics**: Live dashboard with 5-minute refresh cycles

### Search Implementation
- **Client-side State**: React Query for efficient data fetching
- **URL State Management**: Search parameters persisted in URL
- **Type Safety**: Full TypeScript coverage with Zod validation

### Database Design
```sql
model Stats {
  id        Int      @id @default(autoincrement())
  url       String   # API endpoint called
  method    String   # HTTP method
  status    Int?     # Response status code
  duration  Float    # Request duration in ms
  timestamp DateTime # When the request occurred
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 🐳 Docker Configuration

The project includes optimized Docker setup:

- **Multi-stage builds** for minimal production images
- **Development containers** with hot reload
- **Database persistence** through volume mounting
- **Environment configuration** for different deployment stages

## 🎯 Technical Highlights

This project demonstrates:

1. **Full-Stack Development**: Complete Next.js application with API integration
2. **Database Design**: Efficient schema design and query optimization
3. **Performance Monitoring**: Real-time analytics and metrics collection
4. **Modern React Patterns**: Hooks, Server Components, and Client Components
5. **Type Safety**: Comprehensive TypeScript implementation
6. **DevOps**: Docker containerization and development workflow
7. **Code Quality**: Linting, formatting, and consistent code standards
8. **Responsive Design**: Mobile-first, accessible user interface

## 🔍 Development Notes

### API Integration
The application integrates with the Star Wars API (SWAPI) to fetch:
- Character information and details
- Film data and metadata
- Cross-referenced relationships between entities

### Performance Considerations
- **Automatic caching** with React Query
- **Static generation** where possible
- **Optimized database queries** with Prisma
- **Request deduplication** and error handling

### Data Persistence
All external API requests are logged to provide:
- Usage analytics and patterns
- Performance monitoring
- Error tracking and debugging insights

## 📈 Analytics Features

The dashboard provides insights into:
- **API Performance**: Average response times and success rates
- **Usage Patterns**: Most popular searches and peak hours
- **Request Distribution**: Hourly breakdown of API usage
- **Trending Queries**: Top 5 most searched terms

---

**Developed for LawnStarter Technical Interview**
*Demonstrating modern full-stack development with Next.js, TypeScript, and analytics integration*