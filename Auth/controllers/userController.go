package controllers

import (
	"fmt"
	"net/http"
)

// UserControllers func
func UserControllers(mux *http.ServeMux) *http.ServeMux {
	mux.HandleFunc("/api/user", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "从api来的用户信息!")
	})
	return mux
}
