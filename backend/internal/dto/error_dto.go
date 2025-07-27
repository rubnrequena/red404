package dto

type ValidationError struct {
	Field   string `json:"field"`
	Message string `json:"message"`
}

type ErrorResponse struct {
	Success bool              `json:"success"`
	Message string            `json:"message"`
	Errors  []ValidationError `json:"errors,omitempty"`
}
