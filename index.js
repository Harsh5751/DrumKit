//adds event listener to all buttons
//detecting button press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
  var buttonInnerHTML = this.innerHTML; //get value of button e.g. w,a, etc.
  //console.log(buttonInnerHTML);
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

//detecting keyboard press
document.addEventListener("keydown", hitKey); //document so entire page listens for keyboard.

//event will get keyboard event
function hitKey(event){
  makeSound(event.key);
  buttonAnimation(event.key);
  //console.log(event);
}

function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick_bass = new Audio("sounds/kick-bass.mp3");
      kick_bass.play();
      break;


    default: console.log(buttonInnerHTML);

  }
}

function buttonAnimation(key){
  var activeButton = document.querySelector("." + key); //to get format .w or .a
  activeButton.classList.add("pressed"); //css defined for animation see css file
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100); //remove class after 0.1 seconds of hit
}
