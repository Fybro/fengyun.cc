package controllers

import "net/http"

// Controllers func
func Controllers(mux *http.ServeMux) *http.ServeMux {
	mux = UserControllers(mux)
	return mux
}
