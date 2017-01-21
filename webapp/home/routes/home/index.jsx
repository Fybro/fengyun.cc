// @flow
import React from 'react'

import Banner from './components/Banner'
import Footer from './components/Footer'

export default () => (
    <div className="fl fl-c">
        <Banner />
        <div
            className="body fl-1"
            style={{ height: '500px' }}
        >
            <div className="ctn">
            </div>
        </div>
        <Footer />
    </div>
)
