import express from 'express'
import { createServerRenderContext } from 'react-router'

import render from './render'

const router = express.Router()
const context = createServerRenderContext()

router.get('/*', (req, res) => {
  res.send(render(req.url, context, { app: 1 }))
})

export default router
