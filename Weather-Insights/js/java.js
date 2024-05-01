const express = require('express');
const path = require('path')
var hbs = require('hbs')

const port = process.env.PORT || 3000;
const app = express();

const static_path = path.join(__dirname, "../public/css file")
// this method will helps to require remaining linked file express( css file,image source file) of this page 
 
app.set('views', path.join(__dirname, ".././views"));
app.set('view engine', 'hbs');
 app.use(express.static(static_path))

app.get("" , (req, res) =>{ 
    res.render('htmlfile')
})  
  
app.get("/weather", (req, res) =>{
    res.render('weather')
})
   
app.get("/ABOUT", (req, res) =>{
    res.send("WElCOME ITS HOME CHANNEL")
}) 

app.listen(port,() =>{
    console.log(`listining on the port no ${port}`)
})                 