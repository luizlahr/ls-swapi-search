#!/bin/bash

# Docker setup script for the frontend application

set -e

echo "🐳 Setting up Docker for frontend application..."

# Function to print colored output
print_step() {
    echo "📋 $1"
}

print_success() {
    echo "✅ $1"
}

print_error() {
    echo "❌ $1"
}

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    print_error "Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Build the application
print_step "Building Docker image..."
docker build -t frontend-app .

if [ $? -eq 0 ]; then
    print_success "Docker image built successfully!"
else
    print_error "Failed to build Docker image"
    exit 1
fi

# Setup database
print_step "Setting up database..."
docker-compose --profile setup run --rm db-setup

if [ $? -eq 0 ]; then
    print_success "Database setup completed!"
else
    print_error "Failed to setup database"
    exit 1
fi

print_success "Docker setup completed! 🎉"
echo ""
echo "🚀 Quick start commands:"
echo "  Production:  docker-compose up app"
echo "  Development: docker-compose -f docker-compose.dev.yml up"
echo "  Build only:  docker build -t frontend-app ."
echo ""
