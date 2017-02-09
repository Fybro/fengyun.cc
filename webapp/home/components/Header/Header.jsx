// @flow
import React, { PureComponent } from 'react'
import { Link } from 'react-router'

import LogoIcon from '../../../common/components/LogoIcon'

import { headerStyle } from './styles'

export type Props = {
    navsLeft: any,
    navsRight: any,
}

export default class Header extends PureComponent<void, Props, void> {
    render = () => {
        return (
            <div>
                <style>
                    {headerStyle}
                </style>
                <div className="header">
                    <div className="ctn">
                        <div className="r fl jc-b">
                            <div className="header-left">
                                <ul className="fl">
                                    <li className="fl ai-q">
                                        <Link className="fl ai-c" to="/">
                                            <LogoIcon color="#c00" width={28} height={28} />
                                        </Link>
                                    </li>
                                    <li className="fl ai-q">
                                        <Link to="/games">游戏</Link>
                                    </li>
                                    <li className="fl ai-q">
                                        <Link to="/about">关于</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="header-right">
                                <ul className="fl">
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
