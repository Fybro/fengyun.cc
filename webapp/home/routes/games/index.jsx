// @flow
import React from 'react'

import conf from '../../../conf/conf'

export default class About extends React.PureComponent {

    static defaultProps = {
        maxLoops: 1999,
    }

    static propTypes = {
        maxLoops: React.PropTypes.number.isRequired,
    }

    state = {
        loopsRemaining: this.props.maxLoops,
    }

    render() {
        return (
            <div className="ctn mt-md">
                <div className="r r-g r-g-v">
                    {
                        [...(new Array(50).keys())].map((v, k) => {
                            return (
                                <div className="c-6 c-md-4 c-xl-3" key={k}>
                                    <div className="card">
                                        <img
                                            className="block"
                                            style={{ width: '100%' }}
                                            src={`//${conf.imgPubPath}/images/ttd2_download_page_1.png${conf.imgPs}`}
                                            alt=""
                                        />
                                        <div className="card-block">
                                            <h4 className="card-title">泸州大贰 * 正宗大贰</h4>
                                            <p className="card-text">
                                                {
                                                    '天天大贰是一款集娱乐性,对策性的棋牌游戏!天天大贰是一款集娱乐性,对策性的棋牌游戏!天天大贰是一款集娱乐性,对策性的棋牌游戏!'
                                                }
                                            </p>
                                            <a target="blank" href="//ttd2.fengyun.cc" className="btn btn-primary">查看</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
