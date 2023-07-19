import express from 'express'
let router = express.Router()
//GET /api/v1/comment/:postId/'
router.get('/api/v1/comment/:postId/:commentId', (req,res,next)=>{

    res.send('comment created v1')
  })
  //GET '/api/v1/comments/:postId/'
  router.get('/api/v1/comments/:postId/:commentId', (req,res,next)=>{
  
    res.send('comment created v1')
  })
  
  
  //PUT '/api/v1/comment/:postId/'
  router.put('/api/v1/comment/:postId/:commentId', (req,res,next)=>{
  
    res.send('comment created v1')
  })
  
  //Delete '/api/v1/comment/:postId/'
  router.delete('/api/v1/comment/:postId/:commentId', (req,res,next)=>{
  
    res.send('comment created v1')
  })
  export default router
  