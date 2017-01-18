import render from './render'

export default (router) => {
    router.get('/', (req, res) => {
        res.send(render({}, req.url, {}))
    })
}
