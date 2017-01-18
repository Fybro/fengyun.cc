// @flow
import render from './render'

export default (router: any) => {
    router.get('/about', (req, res) => {
        res.send(render({}, '/', '关于风云', ''))
    })
}
