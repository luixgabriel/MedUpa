var bodyParser = require('body-parser')
var express = require("express")
var app = express()
var router = require("./routes/routes")
var ejs = require('ejs')
var flash = require('connect-flash')
var session = require('express-session')
var {Message} = require('./middleware/message')


const sessionOptions = session({
    secret: '122124',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})

app.use(sessionOptions)
app.use(flash())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'));
app.use(Message);
app.use("/",router);
app.set('view engine', 'ejs')


app.listen(8687,() => {
    console.log("Servidor rodando")
});
