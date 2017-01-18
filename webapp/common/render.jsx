import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import createStore from './store/createStore'

import Root from './Root'

/* eslint no-underscore-dangle: 0 */
const state = window.___INITIAL_STATE__ ? window.___INITIAL_STATE__ : {}
const store = createStore(state)

export default (routes, root) => {
    render(<AppContainer><Root routes={routes} store={store} /></AppContainer>, root)
}
