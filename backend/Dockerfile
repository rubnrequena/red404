# Stage 1: Build the Go application
FROM golang:1.23-alpine AS builder

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .

# Build the application
RUN CGO_ENABLED=0 GOOS=linux go build -o /main ./cmd/api

# Stage 2: Create a minimal image
FROM alpine:latest

WORKDIR /app

# Install any runtime dependencies if needed (e.g., ca-certificates for HTTPS)
RUN apk add --no-cache ca-certificates

# Copy the compiled binary from the builder stage
COPY --from=builder /main .

# Copy .air.toml for local dev within container (if you choose that path)
COPY backend/.air.toml .

# Expose the port the application listens on
EXPOSE 8080

# Command to run the application
CMD ["./main"] # This will be overridden by `air` for dev, or by your production entrypoint
