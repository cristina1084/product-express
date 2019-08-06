var exp = require('express');
var bodyparser = require('body-parser');
const app = exp();
app.set("view engine","ejs");  //setting view to ejs -- can be set to other templates also
app.set("views","./src/views");  //specify folder where ejs pages are saved

app.use(bodyparser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("home");
})

app.get("/newproduct",(req,res)=>{
    res.render("newprod"); 
})

app.get("/viewproducts",(req,res)=>{
    res.render("viewprod");
})

app.get("/remove",(req,res)=>{
    res.render("remprod");
})

app.get("/details",(req,res)=>{
    res.render("details");
})

app.listen(8080,()=>{
    console.log("Listening");
})