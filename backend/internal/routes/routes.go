package routes

import (
	"net/http"

	"github.com/escuadron-404/red404/backend/internal/handlers"
)

// SetupRoutes configures all application routes.
// It returns a http.Handler that wraps all defined routes.
func SetupRoutes(userHandler *handlers.UserHandler) http.Handler { // Changed parameter
	mux := http.NewServeMux()

	// Register user-related routes
	UserRoutes(mux, userHandler) // Removed db parameter

	// add more routes here as needed

	return mux
}

func UserRoutes(mux *http.ServeMux, userHandler *handlers.UserHandler) { // Removed db parameter
	mux.HandleFunc("POST /api/users", userHandler.CreateUser)
	mux.HandleFunc("GET /api/users/{id}", userHandler.GetUserByID)
	mux.HandleFunc("GET /api/users", userHandler.GetAllUsers)
	mux.HandleFunc("PUT /api/users/{id}", userHandler.UpdateUser)
	mux.HandleFunc("DELETE /api/users/{id}", userHandler.DeleteUser)
}
