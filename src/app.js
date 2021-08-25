const express = require('express');
const app = express();
const path = require('path')
const hbs = require('hbs')
const port = process.env.PORT || 8000;

const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partial_Path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', templates_path)
hbs.registerPartials(partial_Path)

app.use(express.static(static_path))

app.get("/",(req, res)=> {
    res.render('index')

})
app.get("/about",(req, res)=> {
    res.render('about')

})
app.get("/weather",(req, res)=> {
    res.render('weather')

})
app.get("*",(req, res)=> {
    res.render("404", {
        errorComment: "Opps! Page not"
    })

})
app.listen(port,()=>{
console.log(`listening to port no ${port}`)
})