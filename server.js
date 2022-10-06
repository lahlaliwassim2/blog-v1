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
let bodyParser = require('body-parser')
const { addCmnt, deleteCmnt, schowAll, UpdateCmnt } = require('./controlleurs/comentContrroleur')
const { findPost, addPost, findSinglePost, updatePost, deletePost } = require('./controlleurs/ArticleControlleur');




/* Setting the view engine to ejs. */
app.set('view engine', 'ejs');

/* Importing the routeArticle.js file. */
const ArticleRouter = require('./routes/routeArticle')
const CmntRouter = require('./routes/routeCmnt')


// app.get('/',(req,res)=>{
//     res.send('ca marche ')
// })

app.get('/', async (req,res)=>{
    const posts = await findPost (req, res)
    res.render('index',{
        articles:posts
    })
})

app.get('/cmnt/:id', async (req,res)=>{
    const cmnt = await schowAll (req, res)
    res.render('cmnt',{
        Comment:cmnt,
        idArticle:req.params.id
    })
    console.log(cmnt);
})

/* Rendering the `cmnt.ejs` file. */
// app.get('/cmnt/:id', (req,res)=>{
//     res.render('cmnt',)
// })




Categories.hasMany(Article);
Article.belongsTo(Categories);
Article.hasMany(Comment);
Comment.belongsTo(Article);
Article.hasMany(Avis);
Avis.belongsTo(Article)









db.sync().then(()=>console.log('ca marche ')).catch((error)=>{console.log(error)})

app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
// app.use(bodyParser.json())
app.use('/article',ArticleRouter)
app.use('/cmnt',CmntRouter)

app.listen(3000)

