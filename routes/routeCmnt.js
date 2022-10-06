let express = require('express')
const { addCmnt, deleteCmnt, schowAll, UpdateCmnt } = require('../controlleurs/comentContrroleur')
let Router= express.Router()




Router.post('/addCmnt',addCmnt)

Router.get('/findAllCmnt',schowAll)
Router.put('/updateCmnt',UpdateCmnt)
Router.delete('/deleteCmnt',deleteCmnt)


module.exports= Router; 