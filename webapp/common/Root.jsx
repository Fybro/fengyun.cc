// @flow
import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'

import createStore from './store/createStore'

import Style from './styles'

type Props = {
    routes: any,
    state: any,
}

class Root extends PureComponent<void, Props, void> {
    render() {
        const { routes: Routes, state } = this.props
        return (
            <div>
                <Style />
                <Provider store={createStore(state)}>
                    <BrowserRouter>
                        <Routes />
                    </BrowserRouter>
                </Provider>
            </div>
        )
    }
}

export default Root
