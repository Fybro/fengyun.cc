// @flow
import React, { PureComponent } from 'react'

import { bannerStyle } from './styles'

export type Props = {
    navsLeft: any,
    navsRight: any,
}

export default class Banner extends PureComponent<void, Props, void> {
    render = () => {
        return (
            <div>
                <style>
                    {bannerStyle}
                </style>
                <div className="ctn">
                    <div
                        style={{
                            backgroundColor: 'cyan',
                            margin: '30px auto',
                        }}
                    >
                    </div>
                </div>
            </div>
        )
    }
}
