import React from 'react'
import { renderToString } from 'react-dom/server'

import Root from './Root'
import template from './template'

export default (routes, state = {}, location = '/', entry = 'home', title = '风云', style = '') => template(
    renderToString(<Root routes={routes} state={state} location={location} />),
    entry, title, style, state,
)
