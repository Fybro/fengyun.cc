// @flow
import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'

type Props = {
    routes: any,
    store: any,
}

class Root extends PureComponent<void, Props, void> {
    render() {
        const { routes: Routes, store } = this.props
        return (
            <div className="root">
                <Provider store={store}>
                    <BrowserRouter>
                        <Routes />
                    </BrowserRouter>
                </Provider>
            </div>
        )
    }
}

export default Root
