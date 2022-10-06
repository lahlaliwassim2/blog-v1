let express = require('express');
let app = express()
let db = require('./config/db')
let Sequelize = require('sequelize')
let Categories = require('./models/categories')
let user = require('./models/users')
const Avis = require('./models/avis')
const Comment = require('./models/comment')
const Article = require('./models/articles');
const User = require('./models/users');


const ArticleRouter = require('./routes/routeArticle')
const CmntRouter = require('./routes/routeCmnt')


app.get('/',(req,res)=>{
    res.send('ca marche ')
})



Categories.hasMany(Article);
Article.belongsTo(Categories);
Article.hasMany(Comment);
Comment.belongsTo(Article);
Article.hasMany(Avis);
Avis.belongsTo(Article)
User.hasMany(Comment);
Comment.belongsTo(User);
User.hasMany(Avis);
Avis.belongsTo(User);

db.sync().then(()=>console.log('ca marche ')).catch((error)=>{console.log(error)})


app.use('/article',ArticleRouter)
app.use('/cmnt',CmntRouter)

app.listen(3000)

