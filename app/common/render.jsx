import React from 'react'
import { renderToString } from 'react-dom/server'

import Root from './Root'
import html from './html'

export default (routes, state = {}, location = '/', entry = 'home', title = '风云', style = '') => html(
    renderToString(<Root routes={routes} state={state} location={location} />),
    entry, title, style, state,
)
