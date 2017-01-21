// @flow
import render from '../common/render'
import App from './containers/App'

import './styles/index.scss'

const root = document.getElementById('root')

render(App, root)

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        render(App, root)
    })
}
