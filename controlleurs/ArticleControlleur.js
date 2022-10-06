const Article = require('../models/articles')


const addPost =  (req, res)=>{

    try {
         Article.create(req.body)
       res.status(200).json({message :'dakchi nadi a satt'})
       
      } catch (error) {
       console.log(error.message)
      }
     }
  
  
  const findPost = async (req,res)=>{
  
      res.send('find kolchi mzyana')
  }
  
  const findSinglePost = async (req,res)=>{
      res.send('find wahad  mzyana')
      
  }
  
  const updatePost = async (req,res)=>{
  
      res.send('update mzyana')
  }
  const deletePost = async (req,res)=>{
  
      res.send('delete mzyana')
  }
  module.exports={
      addPost,
      findPost,
      findSinglePost,
      updatePost,
      deletePost
  }