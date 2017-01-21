// @flow
import render from '../../common/render'

import App from '../../../webapp/ttd2/containers/App'

export default (state: any, location: string, title: string, style: string) => render(App, state, location, 'ttd2', title, style)
