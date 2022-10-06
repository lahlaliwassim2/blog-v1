


const addPost = async (req, res)=>{

    res.send('add kolchi mzyana')
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