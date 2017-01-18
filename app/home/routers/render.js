import render from '../../common/render'

import App from '../../../webapp/home/containers/App'

export default (state, location, p) => render(App, state, location, { ...p, entry: 'home' })
