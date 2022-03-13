const express = require("express");
const https = require("https");

const app=express();

app.get("/",function(req,res){
  const url = "https://api.openweathermap.org/data/2.5/forecast?q=Zagreb&appid=dbed53f97c332871947c57ad53b673ab&units=metric";
  https.get(url,function(response){
    response.on("data",function(data){
      var temp=JSON.parse(data);
      console.log(temp.list[0].main.temp);
      res.write("The temperature is " + temp.list[0].main.temp + " degrees Celsius");
      res.send();
    })
  })
})

app.listen(3000,function(){
  console.log("listening");
})
