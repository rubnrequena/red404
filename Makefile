.PHONY: all dev up down build-backend build-frontend test lint clean help

all: dev

dev: up # Start all services and frontend dev server
    @echo "Starting frontend dev server..."
    cd frontend && npm run dev & # Run in background
    @echo "Starting backend hot-reload with air..."
    cd backend && air # This takes over the terminal for hot-reload

up:
    docker-compose up -d --build db
    docker-compose up -d --build backend
    @echo "Docker services started. DB: 5432, Backend: 8080"
    @echo "Frontend will run on Vite's default port (e.g., 5173)."

down:
    docker-compose down --remove-orphans
    @echo "All Docker services stopped."

build-backend:
    @echo "Building Go backend production image..."
    docker-compose build backend

build-frontend:
    @echo "Building React frontend production assets..."
    cd frontend && npm run build

test:
    @echo "Running backend tests..."
    cd backend && go test ./...
    @echo "Running frontend tests (if you add them)..."
    # cd frontend && npm test

lint:
    @echo "Linting Go backend..."
    cd backend && go fmt ./... && go vet ./...
    # Consider golangci-lint for more comprehensive linting:
    # cd backend && golangci-lint run
    @echo "Linting React frontend..."
    cd frontend && npm run lint

clean:
    @echo "Cleaning temporary files and Docker volumes..."
    rm -rf backend/tmp backend/main
    rm -rf frontend/dist
    docker volume rm my-social-app_db_data || true # Ignore error if volume doesn't exist

help:
    @echo "Usage: make [command]"
    @echo ""
    @echo "Commands:"
    @echo "  dev             - Starts all services and frontend/backend dev servers with hot-reload"
    @echo "  up              - Starts Docker services (DB, Backend) in detached mode"
    @echo "  down            - Stops and removes Docker services"
    @echo "  build-backend   - Builds the production Docker image for the backend"
    @echo "  build-frontend  - Builds the production JavaScript assets for the frontend"
    @echo "  test            - Runs all tests (backend and frontend)"
    @echo "  lint            - Runs linters and formatters"
    @echo "  clean           - Removes temporary files and Docker volumes"
    @echo "  help            - Displays this help message"
