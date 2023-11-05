let theImg; //intitializing value to anything and can use to link to an id in html that can combine code from the .html and .css files
let xPosition; //The code declares two variables of type int, xPosition and yPosition.
let speed = 5; //initializes value for speed as an integer to be used as a variable in functions
let containerWidth = 1244; //sets furthest right margin
let containerOffset; //returns (top, left, width, height) in pixels relative to the parent
let minXPosition;
let maxPosition;

function moveImg() {
  if (xPosition >= maxPosition) { //declares the variable xPosition, this is where image is on screen. The code then checks if xPosition has reached its maximum value.
  //maxXPosition stores the respective value when it is declared as an integer with no decimal places or commas after; this is used later in this function's logic when comparing whether or not xPosition has reached the maximum value yet or not.
    speed = -Math.abs(speed); //If xPosition has reached maxPosition of containerWidth moveImg() will move the image left by the speed variable and pixels initialized to it.
  } else if (xPosition <= minXPosition) { //otherwise is xPosition has not reached maxPosition of containerWidth moveImg() will move the image right by the speed variable and pixels initialized to it.
  //minXPosition stores the respective value when it is declared as an integer with no decimal places or commas after; this is used later in this function's logic when comparing whether or not xPosition has reached the maximum value yet or not.
    speed = Math.abs(speed); 
  }

  xPosition += speed; //calculates how much faster we should go based on how fast we want our movement speed to be relative to whatever direction we are moving.
  theImg.style.left = (xPosition - containerOffset) + "px"; //theImg uses linked CSS file, will move the image to the left by "px" pixels.
  //declares an integer called containerOffset that stores how many pixels from where we want our new position for our image to start out at in relation to where it currently is on screen (xPosition).
}

function updateContainerWidth() {
  if (window.innerWidth <= 1000) {
    containerWidth = 500;
  } else {
    containerWidth = 1244;
  }
  
  maxPosition = containerWidth + containerOffset - theImg.clientWidth;
}

function setup() {
  theImg = document.getElementById("moving-image"); //theImg is now the same as the id moving-image from the .html file that linked this file
  containerOffset = document.querySelector('.profile').offsetLeft; //This is the starting position for .html class profile
  minXPosition = containerOffset;
  maxPosition = containerWidth + containerOffset - theImg.clientWidth;
  updateContainerWidth();
  xPosition = theImg.offsetLeft + containerOffset;

  startMovingImg();
}

function startMovingImg() {
  setInterval(moveImg, 300); //how many milliseconds before rerunning moveImg function. The higher the number the slower it moves
}

window.addEventListener('resize', () => {
  updateContainerWidth();
  xPosition = theImg.offsetLeft + containerOffset;
});
window.onload = () => {
  setup(); //calls the onload function setup when the page is loaded
  startMovingImg();
};
