// @flow
import render from '../../common/render'

import App from '../../../webapp/home/containers/App'

export default (state: any, location: string, title: string, style: string) => render(App, state, location, 'home', title, style)
