var exp = require('express');
var bodyparser = require('body-parser');
const app = exp();
app.set("view engine","ejs");  //setting view to ejs -- can be set to other templates also
app.set("views","./src/views");  //specify folder where ejs pages are saved
var prod_array = [{product:"prod1",price:234, qty:90}]

app.use(bodyparser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("home");
})

app.get("/newproduct",(req,res)=>{
    res.render("newprod"); 
})

app.get("/viewproducts",(req,res)=>{
    res.render("viewprod", {prod: prod_array});
})

app.get("/remove",(req,res)=>{
    res.render("remprod");
})

app.post("/details",(req,res)=>{
    res.render("details",{product:req.body.product, price:req.body.price, qty:req.body.qty});
})

app.listen(8080,()=>{
    console.log("Listening");
})
