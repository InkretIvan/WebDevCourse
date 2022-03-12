const express = require("express");
const app=express();

app.use(express.urlencoded());

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
})

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/",function(req,res){
  var num1=Number(req.body.num1);
  var num2=Number(req.body.num2);
  var result=num1+num2;
  res.send(num1+"+"+num2+"="+result);
})

app.post("/bmicalculator",function(req,res){
  var num1=Number(req.body.weight);
  var num2=Number(req.body.height);
  var result=num1/(Math.pow(num2,2));
  res.send("Your bmi is " + result);
})

app.listen(3000,function(){
  console.log("listening to 3000");
})
