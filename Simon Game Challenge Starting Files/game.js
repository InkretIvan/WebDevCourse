var randomNumber=0;
var buttonColours = ["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level;

function nextSequence(){
  randomNumber=Math.floor(Math.random()*4);
  var randomChosenColour=buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  animatePress(randomChosenColour);
  playSound(randomChosenColour);
  level++;
  $("h1").text("level "+level);
}

$(document).on("keydown", function(){
  level=0;
  userClickedPattern=[];
  gamePattern=[];
  nextSequence();
})

$(".btn").on("click",function(event){
   var userChosenColour;
  if(this.classList=="btn red"){
     userChosenColour = "red";
  }
  if(this.classList=="btn green"){
     userChosenColour = "green";
  }
  if(this.classList=="btn blue"){
     userChosenColour = "blue";
  }
  if(this.classList=="btn yellow"){
     userChosenColour = "yellow";
  }
userClickedPattern.push(userChosenColour);
playSound(userChosenColour);
animatePress(userChosenColour);
checkAnswer(level);

})

function playSound(name){
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
  },100)
}

function checkAnswer(currentLevel){
  var len=userClickedPattern.length-1;
  if(userClickedPattern[len]!==gamePattern[len]){
    playSound("wrong");
    userClickedPattern=[];
    gamePattern=[];
    $("h1").text("game over!!!");
    setTimeout(function(){
        $("h1").text("Press a key to restart");
    },3000)
  }
  else{
    if(len+1===currentLevel){
        userClickedPattern=[];
        setTimeout(nextSequence,1000);
    }
  }
}
