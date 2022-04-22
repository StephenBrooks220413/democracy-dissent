const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const ejs = require('ejs')
const fileUpload = require('express-fileupload')
const expressSession = require('express-session')
const bodyParser = require('body-parser')
const path = require('path')
const flash = require('connect-flash')

require('dotenv').config()

/////////////////////////////////////////////////////////////
// Middlewares
const validateMiddleware = require('./middleware/validateMiddleware')
const authMiddleware = require('./middleware/authMiddleware');
const redirectIfAuthenticated = require('./middleware/redirectIfAuthenticated')

const app = new express()
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(morgan())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({exntended:true}))
app.use(fileUpload())
app.use(flash())
app.use(expressSession({
    secret: 'pe86fm8o5e7m68el5y6r8lye5fr'
}))
globalloggedIn = null;
app.use("*", (req, res, next)=>{
    loggedIn = req.session.userId;
    next()
});

/////////////////////////////////////////////////////////////
// DB Connection
mongoose.connect(process.env.DB_URL, {
    useUnifiedTopology:true
})
if(!mongoose){
    console.log('No DB connection')
} else {
    console.log('DB connection')
}
/////////////////////////////////////////////////////////////

app.listen(process.env.PORT || 3000, () => {
    console.log('App listening')
})

/////////////////////////////////////////////////////////////
// Pages
const homeController = require('./controllers/home')
const mediaController = require('./controllers/media')
const filmsController = require('./controllers/films')
const lindbergh911Controller = require('./controllers/lindbergh911')
//////////////////////////////////////////////////////////////////////////
// Projects
const projectsController = require('./controllers/projects')
app.get('/projects', projectsController)
const projectController = require('./controllers/project')
app.get('/project/:id', projectController)
const newProjectController = require('./controllers/newProject')
app.get('/createProject', newProjectController)
const storeProjectController = require('./controllers/storeProject')
app.post('/project/store', authMiddleware, validateMiddleware, storeProjectController)
//////////////////////////////////////////////////////////////////////////
// Blogpost
const postsController = require('./controllers/posts')
app.get('/journals', postsController)
const postController = require('./controllers/post')
app.get('/journal/:id', postController)
const newPostController = require('./controllers/newPost')
app.get('/posts/new', newPostController)
const storePostController = require('./controllers/storePost')
app.post('/posts/store', authMiddleware, validateMiddleware, storePostController)
//////////////////////////////////////////////////////////////////////////
// Users
const loginController = require('./controllers/login')
app.get('/auth/login', redirectIfAuthenticated, loginController)
const registerController = require('./controllers/register')
app.get('/auth/register', redirectIfAuthenticated, registerController)
const storeUserController = require('./controllers/storeUser')
app.post('/users/register', redirectIfAuthenticated, storeUserController)
const loginUserController = require('./controllers/loginUser')
app.post('/users/login', redirectIfAuthenticated, loginUserController)
const logoutController = require('./controllers/logout')
app.get('/auth/logout', logoutController)
const profilesController = require('./controllers/profiles')
app.get('/profiles', profilesController)
const profileController = require('./controllers/profile')
app.get('/profile/:id', profileController)

app.get('/', homeController)
app.get('/media', mediaController)
app.get('/films', filmsController)
app.get('/lindbergh911', lindbergh911Controller)
