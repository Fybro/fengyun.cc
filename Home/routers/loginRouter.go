package routers

import (
	"fmt"
	"net/http"

	"github.com/Fybro/fengyun.cc/Home/models"
	"github.com/Fybro/fengyun.cc/Home/templates"
)

// LoginRouter func
func LoginRouter(mux *http.ServeMux) *http.ServeMux {
	mux.HandleFunc("/login", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, templates.Template(models.User{Username: "这个是登录页面哈!!"}))
	})
	return mux
}
