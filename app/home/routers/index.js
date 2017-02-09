import express from 'express'

import homeRouter from './homeRouter'
import aboutRouter from './aboutRouter'
import gamesRouter from './gamesRouter'

const router = express.Router()
homeRouter(router)
aboutRouter(router)
gamesRouter(router)

export default router
