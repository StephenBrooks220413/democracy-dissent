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
app.get('/', homeController)
