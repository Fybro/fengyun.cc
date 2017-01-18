import React from 'react'
import { renderToString } from 'react-dom/server'

import Root from './Root'
import template from './template'

export default (routes, state, location, p) => {
    const { title, style, entry } = p
    return template({
        entry: entry ? entry : '',
        title: title ? title : '',
        style: style ? style : '',
        state: state ? state : '',
        content: renderToString(
            <Root routes={routes} state={state} location={location} />,
        ),
    })
}
