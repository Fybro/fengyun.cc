// @flow
import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { ServerRouter, createServerRenderContext } from 'react-router'

import createStore from '../../webapp/common/store/createStore'
import Style from '../../webapp/common/styles'

const context = createServerRenderContext()

type Props = {
    routes: any,
    state: any,
    location: string,
}

export default class Root extends PureComponent<void, Props, void> {
    render() {
        const { routes: Routes, state, location } = this.props
        return (
            <div>
                <Style />
                <Provider store={createStore(state)}>
                    <ServerRouter context={context} location={location}>
                        <Routes />
                    </ServerRouter>
                </Provider>
            </div>
        )
    }
}
