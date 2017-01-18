import render from './render'

export default (router) => {
    router.get('/about', (req, res) => {
        res.send(render({}, req.url, {}))
    })
}
