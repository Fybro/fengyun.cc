// @flow
import render from './render'

export default (router: any) => {
    router.get('/games', (req, res) => {
        res.send(render({}, '/', '风云游戏', ''))
    })
}
