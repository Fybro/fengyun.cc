// @flow
import React, { PureComponent } from 'react'
import { Link } from 'react-router'

import './style.scss'

export type Props = {
    navsLeft: any,
    navsRight: any,
}

export default class Header extends PureComponent<void, Props, void> {
    render = () => {
        const { navsLeft, navsRight } = this.props
        return (
            <div>
                <div className="header">
                    <div className="ctn">
                        <div className="r fl jc-b">
                            <div className="header-left">
                                <ul className="fl w-3">
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
                                <ul className="fl">
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
            </div>
        )
    }
}
