const comment = require('../models/comment')

const addCmnt = async (req,res)=>{

    try {
        comment.create(req.body)
    //   res.status(200).json({message :'dakchi nadi a satt'})
      res.redirect(req.body.articleId)
      
     } catch (error) {
      console.log(error.message)
     }
}


const schowAll = async (req, res) => {
    const id = req.params.id;
    const data =  await comment.findAll({ where:{articleId:id}})
       .then((data) => {
         return data;
       })
       .catch((err) => {
         console.log("This Controller Not Working " + err);
       });

       return data;
   };



// const schow = async (req,res)=>{
//     res.render('cmnt')
// }



const UpdateCmnt = async (req,res)=>{
    res.render('cmnt')
}

const deleteCmnt = async(req,res)=>{
    res.send('delete cmnt mzyana ')
}
module.exports={
    addCmnt,
    
    deleteCmnt,
    schowAll,
    UpdateCmnt
}