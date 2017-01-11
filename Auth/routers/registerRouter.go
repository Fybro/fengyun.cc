package routers

import (
	"fmt"
	"net/http"

	"github.com/Fybro/fengyun.cc/Auth/models"
	"github.com/Fybro/fengyun.cc/Auth/templates"
)

// RegisterRouter func
func RegisterRouter(mux *http.ServeMux) *http.ServeMux {
	mux.HandleFunc("/register", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, templates.Template(models.User{Username: "这个是注册页面哈!!"}))
	})
	return mux
}
