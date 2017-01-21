// @flow
import React from 'react'
import conf from '../../../conf/conf'

export default () => (
    <div className="ttd2-home">
        <div className="ctn">
            <div className="r">
                <img
                    className="block"
                    style={{ width: '100%' }}
                    src={`//${conf.imgPubPath}/images/ttd2_download_page.png${conf.imgPs}`} alt=""
                />
            </div>
            <div className="ttd2-download-btn-wrap">
                <button className="ttd2-download-btn">启动下载</button>
            </div>
        </div>
    </div>
)
