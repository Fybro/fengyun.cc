const fs = require('fs')
const path = require('path')
const oss = require('ali-oss')
const co = require('co')
const glob = require('glob')

const store = oss({
    accessKeyId: 'LTAIzpBx3qKD0jTN',
    accessKeySecret: '2TTgIO8JfH2Bbb8gbKwsTrMLTTHP4X',
    bucket: 'fengyunccstatic',
    region: 'oss-cn-shanghai',
})

const staticPath = path.resolve(__dirname, '../../public/static')
const files = glob.sync(`${staticPath}/**/*`, { nodir: true })

function* push() {
    for (let i = 0; i < files.length; i += 1) {
        const filename = files[i].replace(path.resolve(__dirname, '../../public/static'), '').replace('/', '')

        if (filename.indexOf('images') > -1) {
            yield store.put(filename, path.resolve(__dirname, `../../public/static/${filename}`))
        }
    }
}

co(push)
