/*
function setHead0(){
	element = document.getElementsByClassName('head');
	element[0].style.backgroundImage = 'url(images/head0.png)';
}
function setHead1(){
	element = document.getElementsByClassName('head');
	element[0].style.backgroundImage = 'url(images/head1.png)';
}
function setHead2(){
	element = document.getElementsByClassName('head');
	element[0].style.backgroundImage = 'url(images/head2.png)';
}
function setHead3(){
	element = document.getElementsByClassName('head');
	element[0].style.backgroundImage = 'url(images/head3.png)';
}
function setHead4(){
	element = document.getElementsByClassName('head');
	element[0].style.backgroundImage = 'url(images/head4.png)';
}


function myload(){
	var element = document.getElementById('head0');
	element.addEventListener('click',setHead0);
	var element = document.getElementById('head1');
	element.addEventListener('click', setHead1);
	var element = document.getElementById('head2');
	element.addEventListener('click', setHead2);
	var element = document.getElementById('head3');
	element.addEventListener('click', setHead3);
	var element = document.getElementById('head4');
	element.addEventListener('click', setHead4);
}
*/
var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;


function myKeyDown(event) {
  var element = document.getElementById('player');
    if (event.keyCode == 37) {
        leftPressed = true;
        element.className = 'character standLeft walkLeft';
    }
    if (event.keyCode == 38) {
        upPressed = true;
        element.className = 'character standup walkUp';
    }
    if (event.keyCode == 40) {
        downPressed = true;
        element.className = 'character standDown walkDown';
    }
    if (event.keyCode == 39) {
        rightPressed = true;
        element.className = 'character standRight walkRight';
    }
}

function myKeyUp(event) {
  var element =document.getElementById('player');
    if (event.keyCode == 37) {
        leftPressed = false;
        element.className = 'character standLeft';
    }

    if (event.keyCode == 38) {
        upPressed = false;
        element.className = 'character standUp';
    }

    if (event.keyCode == 40) {
        downPressed = false;
        element.className = 'character standDown';
    }
    if (event.keyCode == 39) {
        rightPressed = false;
        element.className = 'character standRight';
    }
}

function moveInterval(){
	if(leftPressed == true){
		moveLeft();
	}
	if(rightPressed == true){
		moveRight();
	}
	if(upPressed == true){
		moveUp();
	}
	if(downPressed == true){
		moveDown();
	}
}

function moveUp() {
  var element = document.getElementById('player');
  var positionTop = element.offsetTop;
  element.style.top = positionTop - 1 + 'px';
}
function moveDown() {
  var element = document.getElementById('player');
  var positionTop = element.offsetTop;
  element.style.top = positionTop + 1 + 'px';
}
function moveLeft() {
  var element = document.getElementById('player');
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft - 1 + 'px';
}
function moveRight() {
  var element = document.getElementById('player');
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft + 1 + 'px';
}

function setHead(){
	element = document.getElementsByClassName('head');
	element[0].style.backgroundImage = 'url(images/'+ this.id+'.png)';
}
function setBody(){
	element = document.getElementsByClassName('body');
	element[0].style.backgroundImage = 'url(images/'+ this.id+'.png)';
}
function hideSidebar(){
	var element = document.getElementsByTagName('aside');
	element[0].style.display = 'none';
}
function showSidebar(){
  var element = document.getElementsByTagName('aside');
  element[0].style.display = 'block';
}

function myload(){
	//hide Sidebar
	var element = document.getElementById('closeside');
	element.addEventListener('click',hideSidebar);

	//show sidebar
	var element = document.getElementById('player');
  	element.addEventListener('click',showSidebar);

	//set heads
	var element = document.getElementsByClassName('heads');
	heads = element[0].getElementsByTagName('li');
	for(var i = 0; i < heads.length; i++){
		heads[i].addEventListener('click',setHead);
	}
	//set bodies
	var element = document.getElementsByClassName('bodies');
	bodies = element[0].getElementsByTagName('li');
	for(var i = 0; i < bodies.length; i++){
		bodies[i].addEventListener('click',setBody);
	}
	document.addEventListener('keydown', myKeyDown);
  	document.addEventListener('keyup', myKeyUp);
  	setInterval(moveInterval, 10);
}
document.addEventListener('DOMContentLoaded',myload);