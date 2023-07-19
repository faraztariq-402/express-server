import express from 'express'
let router = express.Router()


router.post('/api/v1/login', (req, res) => {
    res.send('this is login v2' + new Date())
  })
  router.post('/api/v1/signup', (req, res) => {
    res.send('this is signup v2' + new Date())
  })

  export default router