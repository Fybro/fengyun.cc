// @flow
import React, { PureComponent } from 'react'

import Routes from '../routes'
import Style from '../styles'

export default class App extends PureComponent<void, void, void> {

    render() {
        return (
            <div>
                <Style />
                <Routes />
            </div>
        )
    }
}
