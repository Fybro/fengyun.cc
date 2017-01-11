package templates

import (
	"encoding/json"
	"fmt"
)

const s = `<!DOCTYPE html>
<html>
    <head>
        <title>Hello</title>
        <link rel="stylesheet" href="/static/common/common.css" />
        <link rel="stylesheet" href="/static/home/home.css" />
    </head>
    <body>
    <div id="root"></div>
    </body>
    <script>window.__INITIAL_STATE__ = %s </script>
    <script src="/static/common/common.js"></script>
    <script src="/static/home/home.js"></script>
</html>`

// Template func
func Template(state interface{}) string {
	b, _ := json.Marshal(state)
	return fmt.Sprintf(s, string(b))
}
