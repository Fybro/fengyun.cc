// @flow
import React, { PureComponent } from 'react'

import { bannerStyle } from './styles'

export type Props = {
    navsLeft: any,
    navsRight: any,
}

const footLinks1 = [{
    title: '关于我们',
    href: '#',
}, {
    title: '法律申明',
    href: '#',
}, {
    title: '廉政举报',
    href: '#',
}, {
    title: '友情链接',
    href: '#',
}]

export default class Banner extends PureComponent<void, Props, void> {
    render = () => {
        return (
            <div
                style={{
                    height: '200px',
                    backgroundColor: '#444',
                }}
            >
                <style>
                    {bannerStyle}
                </style>
                <div className="ctn">
                    <div
                        style={{
                        }}
                    >
                        <div
                            style={{
                                margin: '20px 10px',
                            }}
                        >
                            {
                                footLinks1.map((v, k) => (
                                    <a
                                        key={k}
                                        style={{
                                            color: '#fff',
                                            padding: '5px 10px',
                                        }}
                                        href={`${v.href}`}
                                    >
                                        {v.title}
                                    </a>
                                ))
                            }
                        </div>
                        <div
                            style={{
                                color: '#888',
                            }}
                        >
                            © 2016-2017 fengyun.cc 版权所有 蜀ICP备17001579号-1
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
