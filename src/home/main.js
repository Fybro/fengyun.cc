import express from 'express'
import compression from 'compression'
import controllers from './controllers'
import routers from './routers'

const app = express()

app.use(compression())
app.use('/api', controllers)
app.use('/', routers)

export default app
