# Agent Guidelines for red404 Repository

This document outlines the essential commands and code style guidelines for AI agents operating within the `red404` codebase.

## 1. Build, Lint, and Test Commands

*   **Run all backend tests (Go):** `cd backend && go test ./...`
*   **Run all frontend tests (React):** `cd frontend && npm test` (Note: This command is commented out in the Makefile, indicating no frontend tests are currently implemented. Agents should add tests if implementing new frontend features.)
*   **Lint backend (Go):** `cd backend && go fmt ./... && go vet ./...`
*   **Lint frontend (React/TypeScript):** `cd frontend && npm run lint`
*   **Build backend (Docker):** `docker-compose build backend`
*   **Build frontend (Vite):** `cd frontend && npm run build`

## 2. Code Style Guidelines

*   **Go (Backend):** Adhere to standard Go formatting (`go fmt`) and best practices. Use `go vet` for static analysis.
*   **TypeScript/React (Frontend):**
    *   Follow ESLint rules defined in `frontend/eslint.config.js`.
    *   Prioritize type safety using TypeScript.
    *   Use functional components and React hooks.
    *   Apply Tailwind CSS for styling.
    *   Manage state with Zustand.
*   **General:**
    *   Ensure clear, concise, and idiomatic code.
    *   Implement robust error handling.
    *   Follow existing naming conventions (e.g., camelCase for JS/TS, PascalCase for Go types, snake_case for Go packages/variables).
    *   Maintain consistent import ordering.
