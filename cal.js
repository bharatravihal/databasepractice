const express= require("express");
const app=express();
const bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}))


app.listen(3000,function(req,res){
    console.log("port 3000");
})
app.get("/",function(req,res){
    res.sendFile(__dirname+"/cal.html");
})


var num3;
app.post("/calculate",function(req,res){
   var num1=req.body.number1;
  var  num2=req.body.number2;
   num3 =num1*num2;

   console.log(num3);
   res.redirect("/calculate");
})
app.get("/calculate",function(req,res){
    res.send(num3);
})