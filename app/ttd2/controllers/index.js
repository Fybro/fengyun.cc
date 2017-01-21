import express from 'express'

const controller = express()

controller.get('/', (req, res) => {
    res.send('controller')
})

export default controller
