// @flow
import path from 'path'
import express from 'express'
import vhost from 'vhost'

import conf from '../webapp/conf/conf'

// import authApp from './auth/main'
import homeApp from './home/main'

const app = express()

const staticApp = express()
staticApp.use('/', express.static(path.resolve(__dirname, '../public')))

app.use(vhost(`static.${conf.host}`, staticApp))

app.use(vhost(conf.host, homeApp))
// app.use(vhost(`auth.${conf.host}`, authApp))

app.listen(conf.port)
