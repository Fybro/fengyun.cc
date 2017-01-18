// @flow
import React, { PureComponent } from 'react'
import { Link } from 'react-router'

import './style.scss'

type Props = {
    navsLeft: Array,
    navsRight: Array,
}

export default class Header extends PureComponent {
    props: Props

    render = () => {
        const { navsLeft, navsRight } = this.props
        return (
            <div>
                <div className="header">
                    <div className="container">
                        <div className="header-left">
                            <ul>
                                {
                                    navsLeft.map((nav, key) => {
                                        const isRight = nav.title === '更'
                                        return (
                                            <li key={key} className={`${isRight ? 'header-nav-right' : ''}`}>
                                                <Link activeClassName="active" to={nav.href}>
                                                    {key === 0 ? <i className="fa fa-home" /> : undefined}{nav.title}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="header-right">
                            <ul>
                                {
                                    navsRight.map((nav, key) => {
                                        const isRight = nav.title === '更多'
                                        return (
                                            <li key={key} className={`${isRight ? 'header-nav-right' : ''}`}>
                                                <Link to={nav.href}>{nav.title}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
