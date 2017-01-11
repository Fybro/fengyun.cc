import React, { PureComponent } from 'react'

import Style from './styles'

export default class Header extends PureComponent {
  render = () => {
    return (
      <div>
        <Style />
        <div className="header">
          <div className="container">
            你好头部
          </div>
        </div>
      </div>
    )
  }
}
