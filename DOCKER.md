# Docker Setup

This document explains how to run the frontend application using Docker.

## Prerequisites

- Docker
- Docker Compose

## Quick Start

### Production

```bash
# Build and run the application
docker-compose up app

# Or run the setup script
chmod +x docker-setup.sh
./docker-setup.sh
```

The application will be available at `http://localhost:3000`.

### Development

For development with hot reload:

```bash
docker-compose -f docker-compose.dev.yml up
```

The development server will be available at `http://localhost:3000`.

## Available Commands

### Build the Docker image
```bash
docker build -t frontend-app .
```

### Run production container
```bash
docker-compose up app
```

### Run development container with hot reload
```bash
docker-compose -f docker-compose.dev.yml up
```

### Database operations
```bash
# Generate Prisma client
docker-compose run app pnpm db:generate

# Push database schema
docker-compose run app pnpm db:push

# Run database migrations
docker-compose run app pnpm db:migrate
```

### Shell access
```bash
# Access the running container
docker-compose exec app sh

# Run a one-off container
docker-compose run --rm app sh
```

## Docker Images

The Dockerfile uses a multi-stage build:

1. **deps**: Installs dependencies and generates Prisma client
2. **builder**: Builds the Next.js application
3. **runner**: Production runtime with minimal dependencies

## Environment Variables

The application expects the following environment variables:

- `DATABASE_URL`: SQLite database file path (default: `file:./dev.db`)
- `NODE_ENV`: Environment mode (`development` or `production`)

## Database Persistence

The SQLite database file is mounted as a volume to persist data between container restarts:

```yaml
volumes:
  - ./prisma/dev.db:/app/prisma/dev.db
```

## Troubleshooting

### Database issues
If you encounter database issues, try rebuilding the database:

```bash
docker-compose --profile setup run --rm db-setup
```

### Port conflicts
If port 3000 is already in use, modify the port mapping in `docker-compose.yml`:

```yaml
ports:
  - "3001:3000"  # Changed from 3000:3000
```

### Permission issues
On some systems, you might need to adjust file permissions:

```bash
sudo chown -R $USER:$USER prisma/
```
