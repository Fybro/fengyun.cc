import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerRouter } from 'react-router'
import createStore from '../../common/store/createStore'
import App from '../../common/containers/App'
import Componet from '../containers/Main'
import config from '../../config/config'

/* eslint camelcase: 0 */
const html = (__public_path__ = '/', state = {}, content = '') => `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <link rel="stylesheet" href="${__public_path__}common/common.css">
  <link rel="stylesheet" href="${__public_path__}home/home.css">
</head>
<body>
  <div id="root">${content}</div>
</body>
<script>
  var baseBrowserUrl = '/completeForm'
  var baseApiUrl = '/api'
  window.___INITIAL_STATE__ = ${JSON.stringify(state)}
</script>
<script src="${__public_path__}common/common.js"></script>
<script src="${__public_path__}home/home.js"></script>
</html>`

export default (location, context, state) => {
  const store = createStore(state)
  return html(config.publicPath, state, renderToString(<ServerRouter location={location} context={context}>
    <App store={store} component={Componet} />
  </ServerRouter>))
}
