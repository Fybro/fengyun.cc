// @flow
import React, { PureComponent } from 'react'
import { Link } from 'react-router'

import conf from '../../../conf/conf'

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
                                    <li>
                                        <img
                                            className="block header-logo"
                                            src={`//${conf.imgPubPath}/images/fybro_logo.jpg${conf.imgPs}`} alt=""
                                        />
                                    </li>
                                    <li>
                                        <a href="http://ttd2.fengyun.cc:9999">游戏</a>
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
