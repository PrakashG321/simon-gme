let color=["blue","red","green","yellow"]
let gamepattern=[];
userclickedpattern=[];
level=0;
started=false;

$(document).keypress(function(){
if (!started){
  nextSequence();
  started=true;
}
})


$(".btn").click(function(){
  let userchoosencolor=this.id;
  userclickedpattern.push(userchoosencolor);
  playsound(userchoosencolor);
  animatepress(userchoosencolor);
  checkAnswer(userclickedpattern.length-1);
})

function checkAnswer(currentlevel){
  if(userclickedpattern[currentlevel]===gamepattern[currentlevel]){
   if(userclickedpattern.length===gamepattern.length){
    setTimeout (function(){
      nextSequence();
    },1000)
   }
  }else{
    console.log("wrong");
   playsound("wrong");
   $("body").addClass("game-over")
  
    setTimeout (function(){
    $("body").removeClass("game-over");
   },200)
   $("h1").html("game over!!! press any key to start a new game")
   startover();
  }
}

function nextSequence(){
  userclickedpattern=[];
  level++;
 $('h1').html("level "+level)
  let random_number=Math.floor(Math.random()*4);
  let randomchosencolor=color[random_number];
  gamepattern.push(randomchosencolor);
  $("#" + randomchosencolor).fadeIn(100).fadeOut(100).fadeIn(100);
playsound(randomchosencolor);
}

function playsound(name){
  let audio=new Audio("sounds/"+name+".mp3")
  audio.play();
}

function animatepress(currentcolor){
  $("#"+currentcolor).addClass("pressed");
  setTimeout (function() {
    $("#"+currentcolor).removeClass("pressed");
    
  },100)
}

function startover(){
  level=0;
  gamepattern=[]
  started=false;
}

