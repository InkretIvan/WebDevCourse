const express=require("express");
let ejs = require('ejs');

const app=express();

var listItems=["Jedan","dva","tri"];

app.use(express.urlencoded());
app.set("view engine","ejs");

app.get("/",function(req,res){
  var day=new Date();
  day=day.getDay();

  switch(day){
    case 0:
      day="Sunday";
      break;
    case 1:
      day="Monday";
      break;
    case 2:
      day="Tuesday";
      break;
    case 3:
      day="Wednesday";
      break;
    case 4:
      day="Thursday";
      break;
    case 5:
      day="Friday";
      break;
    case 6:
      day="Saturday";
      break;
  }
  res.render("list",{day: day});

})

app.listen(3000,function(){
  console.log("listening to 3000");
})
