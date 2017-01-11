import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('你好api')
})

export default router
