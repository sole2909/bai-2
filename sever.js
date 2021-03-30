var express = require('express')
var app = express();
var hbs = require('hbs')

app.set('view engine', 'hbs')

var tainguyen = require('path').join(_dirname,'/picture');
app.use(express.static(tainguyen));

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/student',(req,res)=>{
    res.render('student')
})

app.listen(500);
console.log('sever is running!!!')