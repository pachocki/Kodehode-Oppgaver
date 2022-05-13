
//Drum kits buttons
var drumButtons = document.querySelectorAll(".drum").length;

//Iterating over every button and make sound

for (var i = 0; i < drumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

//Make sound on keypress
document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

//Making sound on click
function makeSound(key) {

  switch (key) {
    case "a":
        let tom = new Audio('sounds/snare.mp3');
        tom.play();
        break;
        

        case "s":
          let hihat = new Audio("sounds/hihat.mp3");
          hihat.play();
          break;

    case "d":
        let openhat = new Audio('sounds/tom-tom.mp3');
        openhat.play();
        break;

    

    case "k":
        let kick = new Audio('sounds/floor-tom-drum.mp3');
        kick.play();
        break;

    case "l":

        let snare = new Audio("sounds/crash-cymbal.mp3");
        snare.play();
        break;

  
    default: console.log(key);

  }
}

//Button animation on click
function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}