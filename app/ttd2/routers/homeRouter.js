// @flow
import render from './render'

export default (router: any) => {
    router.get('/', (req, res) => {
        res.send(render({}, '/', '风云 天天大贰', ''))
    })
}
