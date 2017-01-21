// @flow
import React from 'react'
import conf from '../../../conf/conf'

import stylesStr from './styles'

export default () => (
    <div className="ctn">
        <div className="r">
            <img
                className="block"
                style={{ width: '100%' }}
                src={`//${conf.imgPubPath}/images/ttd2_download_page.png${conf.imgPs}`} alt=""
            />
        </div>
        <style>
            {stylesStr}
        </style>
        <div className="r">
            <div className="ttd2-download-btn fl jc-c">
                <button>启动下载</button>
            </div>
        </div>
    </div>
)
