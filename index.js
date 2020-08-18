/*** Required External Modules מודלים שנצטרך לייבא*/
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");

/*** App Variables משתנים*/
const app = express();
const port = process.env.port | 4080;

/***  App Configuration וההגדרות APP יצירת ה*/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug"); //שימוש במנוע פאג להרצת תצוגה מונעת מידע
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*** Routes Definitions יצירת הראוטניג*/
app.get('/',(req,res)=>{
    res.render("index")
})
app.get('/pic',(req,res)=>{
    res.render("picturs")
})
app.post('/user',(req,res)=>{
    res.render("user",{user:{name:req.body.name}})
})
app.route('/myPug')
.get((req,res)=>{
    res.send("404 Page Not Found");
})
.post((req,res)=>{
    res.status(200).render("myPug",{myPug:req.body})
});

/*** Server Activation הרצת השרת*/
app.listen(port)