import express from 'express'
let router = express.Router()

//GET '/api/v1/post/:userId/'
router.get('/api/v1/post/:userId/:postId', (req,res,next)=>{

    res.send('post created')
  })
  //GET '/api/v1/posts/:userId/:postId'
  router.get('/api/v1/post/:userId/:postId', (req,res,next)=>{
  
    res.send('post created')
  })
  
  //POST '/api/v1/post/'
  router.post('/api/v1/post/', (req,res,next)=>{
  
    res.send('post created')
  })
  
  
  //PUT '/ap1/v1/post/:userId/:postId'
  router.put('/api/v1/post/:userId/:postId', (req,res,next)=>{
  
    res.send('post created')
  })
  
  
  //DELETE '/api/v1/posts/:userId/:postId'
  router.delete('/api/v1/post/', (req,res,next)=>{
  
    res.send('post created')
  })
 
 
  export default router
