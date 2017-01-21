import React, { PureComponent } from 'react'
import { Match } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
/* eslint import/no-unresolved: 0, import/no-extraneous-dependencies: 0, import/extensions: 0 */

import appActions from '../../common/store/modules/app'
import pageActions from '../../common/store/modules/page'

import Home from '../routes/home/index.jsx'

class App extends PureComponent {

    render = () => (
        <div>
            <Match exactly pattern="/" component={Home} />
        </div>
    )
}


function mapStateToProps(state) {
    return { ...state }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators({ ...appActions, ...pageActions }, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
