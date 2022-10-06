const Article = require('../models/articles')


const addPost =  (req, res)=>{

    try {
         Article.create(req.body)
       res.status(200).json({message :'dakchi nadi a satt'})
       
      } catch (error) {
       console.log(error.message)
      }
     }
  
  
     const findPost = async (req, res) => {
       const data =  await Article.findAll()
          .then((data) => {
            return data;
          })
          .catch((err) => {
            console.log("This Controller Not Working " + err);
          });

          return data;
      };
        
  
  const findSinglePost = async (req,res)=>{
      const articles = await Article.findOne({
        where: {id : (req.params.id)}
      })   
      res.json(articles)
  }
  
  const updatePost = async (req, res) => {
    const article = await Article.update(
     
      {
        where: { id: req.params.id },
      }
    );
    res.json(article);
  };
  const deletePost = async (req, res) => {
    const articles = await Article.destroy({
      where: { id: req.params.id },
    });

    res.json(articles);
  };
  module.exports={
      addPost,
      findPost,
      findSinglePost,
      updatePost,
      deletePost
  }


