package routers

import (
	"fmt"
	"net/http"

	"github.com/Fybro/fengyun.cc/Home/models"
	"github.com/Fybro/fengyun.cc/Home/templates"
)

// HomeRouter func
func HomeRouter(mux *http.ServeMux) *http.ServeMux {
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, templates.Template(models.User{Username: "这个是首页哈!"}))
	})
	return mux
}
