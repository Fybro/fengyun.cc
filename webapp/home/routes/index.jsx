import React, { PureComponent } from 'react'
import { Match, Miss } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
/* eslint import/no-unresolved: 0, import/no-extraneous-dependencies: 0, import/extensions: 0 */
import NoMatch from '../../common/components/PageNotFound'

import appActions from '../../common/store/modules/app'
import pageActions from '../../common/store/modules/page'

import Header from '../components/Header/index'
import Home from '../routes/home/index.jsx'
import About from '../routes/about/index.jsx'
import Topics from '../routes/topics/index.jsx'

class App extends PureComponent {

    render = () => {
        const { page } = this.props
        const { navsLeft, navsRight } = page
        return (
            /* eslint no-undef: 0 */
            <div>
                <Header navsLeft={navsLeft} navsRight={navsRight} />
                <Match exactly pattern="/" component={Home} />
                <Match pattern="/about" component={About} />
                <Match pattern="/topics" component={Topics} />
                <Miss component={NoMatch} />
            </div>
        )
    }
}


function mapStateToProps(state) {
    return { ...state }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators({ ...appActions, ...pageActions }, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
