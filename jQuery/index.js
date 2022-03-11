$("h1").css("color","red");

$(document).on("keydown",function(event){
  $("h1").append(event.key);
})
