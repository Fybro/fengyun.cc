// @flow
import path from 'path'
import express from 'express'
import cors from 'cors'
import compression from 'compression'
import vhost from 'vhost'
import Log from 'log'

import conf from '../webapp/conf/conf'

// import authApp from './auth/main'
import homeApp from './home/main'
import ttd2App from './ttd2/main'

const { host, port } = conf
const app = express()
const log = new Log('info')

const staticApp = express()
staticApp.use(cors())
staticApp.use('/', express.static(path.resolve(__dirname, '../public/static')))

app.use(compression())
app.use(vhost(`static.${host}`, staticApp))

app.use(vhost(host, homeApp))
app.use(vhost(`ttd2.${host}`, ttd2App))

app.get('/', (req, res) => {
    res.send(req.headers.host)
})
// app.use(vhost(`auth.${host}`, authApp))

app.listen(port, () => {
    log.info(`${host}:${port}`)
})
