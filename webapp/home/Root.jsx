import React from 'react'
import { BrowserRouter } from 'react-router'
import App from './containers/App'

export default props => <App router={BrowserRouter} {...props} />
