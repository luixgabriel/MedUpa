var bodyParser = require('body-parser')
var express = require("express")
var app = express()
var router = require("./routes/routes")
var ejs = require('ejs')
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use("/",router);
app.use(express.static('public'));
app.set('view engine', 'ejs')


app.listen(8687,() => {
    console.log("Servidor rodando")
});
