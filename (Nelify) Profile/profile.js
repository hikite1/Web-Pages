let theImg; //intitializing value to anything and can use to link to an id in html that can combine code from the .html and .css files
let xPosition; //The code declares two variables of type int, xPosition and yPosition.
let speed = 5; //initializes value for speed as an integer to be used as a variable in functions
let containerWidth = window.innerWidth; //sets furthest right margin
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
  containerWidth = window.innerWidth * 0.95; // Set container width to 80% of the window width
  maxPosition = containerWidth + containerOffset - theImg.clientWidth;
}

function setup() {
  theImg = document.getElementById("moving-image");
  containerOffset = document.querySelector('.profile').offsetLeft;
  minXPosition = containerOffset;
  updateContainerWidth();
  xPosition = theImg.offsetLeft + containerOffset;
  maxPosition = containerWidth + containerOffset - theImg.clientWidth;

  startMovingImg();
}


function startMovingImg() {
  const interval = 300;
  setInterval(moveImg, interval); //how many milliseconds before rerunning moveImg function. The higher the number the slower it moves
}

window.addEventListener('resize', () => {
  updateContainerWidth();
  maxPosition = containerWidth + containerOffset - theImg.clientWidth;
  xPosition = theImg.offsetLeft + containerOffset;
});

window.onload = () => {
  setup(); //calls the onload function setup when the page is loaded
  startMovingImg();
};
