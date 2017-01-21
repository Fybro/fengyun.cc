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
                    src={`//${conf.imgPubPath}/images/ttd2_download_page_1.png${conf.imgPs}`} alt=""
                />
                <img
                    className="block"
                    style={{ width: '100%' }}
                    src={`//${conf.imgPubPath}/images/ttd2_download_page_2.png${conf.imgPs}`} alt=""
                />
                <img
                    className="block"
                    style={{ width: '100%' }}
                    src={`//${conf.imgPubPath}/images/ttd2_download_page_3.png${conf.imgPs}`} alt=""
                />
            </div>
            <div className="ttd2-download-btn-wrap">
                <button className="ttd2-download-btn">立即下载安装</button>
            </div>
        </div>
    </div>
)
