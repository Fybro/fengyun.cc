import path from 'path'
import compression from 'compression'
import express from 'express'
import vhost from 'vhost'

import config from './config/config'
import home from './home/main'

const app = express()

app.use(compression())
app.use(express.static(path.resolve(__dirname, '../public/static')))
app.use(vhost('fengyundev.cc', home))

app.listen(config.port)
