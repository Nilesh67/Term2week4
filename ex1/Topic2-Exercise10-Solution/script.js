
function moveLeft()
{
  var circle = document.getElementById('circle');
  currentleft= parseInt(circle.offsetLeft);
  if(currentleft ==0 ){
    clearInterval(interval);
    interval = setInterval(moveRight, 5);

  }
  else{
    circle.style.left = currentleft - 1 + 'px';
  }
}
function moveRight()
{
  var circle = document.getElementById('circle');
  currentleft= parseInt(circle.offsetLeft);
  if (window.innerWidth == currentleft + 200) {
    clearInterval(interval);
    interval = setInterval(moveLeft, 5);
  }
  else{
    circle.style.left = currentleft + 1 + 'px'; 
  }
    

}
function moveUp()
{
  var circle = document.getElementById('circle');
  currentup= parseInt(circle.offsetTop);
  if (currentup ==0) {
    clearInterval(interval);
    interval = setInterval(moveDown, 5);
  }
  else{

     circle.style.top = currentup  - 1 + 'px';  
  }
    

}
function moveDown()
{
  var circle = document.getElementById('circle');
  currentup= parseInt(circle.offsetTop);
  if(window.innerHeight == currentup + 200){
    clearInterval(interval);
    interval = setInterval(moveUp, 5);
  }
  circle.style.top = currentup  + 1 + 'px';

}


var interval; 
var leftPressed = false; var rightpressed = false;
var topPressed = false; var downPressed = false;


function myKeyDown(event) {

  clearInterval(interval);

  if (event.keyCode == 37) {
    interval = setInterval(moveLeft, 5);
  }
  if (event.keyCode == 38) {
    interval =setInterval(moveUp, 5);
  }
  if (event.keyCode == 40) {
    interval =setInterval(moveDown, 5);
  }
  if (event.keyCode == 39) {
    interval =setInterval(moveRight, 5);
  }
}

function myLoadEvent() {
  document.addEventListener('keydown', myKeyDown);
}

document.addEventListener('DOMContentLoaded', myLoadEvent);
