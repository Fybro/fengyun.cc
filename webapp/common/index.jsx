import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import createStore from './store/createStore'
import Root from './Root'

/* eslint no-underscore-dangle: 0 */
const initialState = window.___INITIAL_STATE__ ? window.___INITIAL_STATE__ : {}
const store = createStore(initialState)

export default (router, root) => {
    render(<AppContainer><Root store={store} router={router} /></AppContainer>, root)
}
