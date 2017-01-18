import express from 'express'

import homeRouter from './homeRouter'
import aboutRouter from './aboutRouter'

const router = express.Router()
homeRouter(router)
aboutRouter(router)

export default router
