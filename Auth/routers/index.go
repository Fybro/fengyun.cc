package routers

import "net/http"

// Routers func
func Routers(mux *http.ServeMux) *http.ServeMux {
	mux = HomeRouter(mux)
	mux = RegisterRouter(mux)
	mux = LoginRouter(mux)
	return mux
}
