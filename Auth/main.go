package main

import (
	"fmt"
	"net/http"

	"github.com/Fybro/fengyun.cc/Auth/controllers"
	"github.com/Fybro/fengyun.cc/Auth/routers"
)

func main() {
	mux := http.NewServeMux()
	mux.Handle("/static/", http.FileServer(http.Dir("../public")))

	mux = routers.Routers(mux)
	mux = controllers.Controllers(mux)

	http.ListenAndServe(fmt.Sprintf(":%v", 9999), mux)
}
