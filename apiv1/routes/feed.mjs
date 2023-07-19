import express from 'express'
let router = express.Router()
//GET '/api/feed/:userId'
router.get('/api/v1/feed/:userId/', (req,res,next)=>{

    res.send('feed created v1')
  })

  export default router
