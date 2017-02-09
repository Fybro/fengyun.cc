// @flow
import React from 'react'

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
            <div className="ctn">
                <h3>成都风云兄弟网络技术有限责任公司</h3>
                <b>成都风云兄弟网络技术有限责任公司</b>成立于2016年岁末, 公司主要承接网络建设, 游戏开发运营等业务.
            </div>
        )
    }
}
