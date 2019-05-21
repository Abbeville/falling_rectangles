if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
	/*On document ready, the start function is invoked*/
  start();
} else {
  document.addEventListener("DOMContentLoaded", start);
}

/*Entry Point*/
function start(){
	/*Another way to do this is by creating random new Elements if i dont 
	want to hardcode .rectangle elements.*/
	for (var i = 0; i < 12; i++) {
		createRectangle();
	}
  var rectangles = document.getElementsByClassName("rectangle");

  for (var i = 0; i < rectangles.length; i++) {
  	rectangles[i].style.background = getColor();
  	rectangles[i].style.height = getHeight();

  	var speed = Math.floor(Math.random() * 10);
  	falling(rectangles[i], speed);
  }
}

function createRectangle(){
	var holder = document.createElement("div");
	holder.classList.add("object_holder");

	var rectangle = document.createElement("div");
	rectangle.classList.add("rectangle");

	holder.appendChild(rectangle);

	document.getElementById("root").appendChild(holder);
}

function falling(rectangle, speed){
	var position = rectangle.style.top;
	const refreshRate = 1000/60;
	const maxYPosition = 600;
	let speedY = 1;
	let positionY = 0;

	window.setInterval(move, speed);

	function move(){

	  positionY = positionY + speedY;
	  if (positionY > maxYPosition || positionY < -10) {
	    speedY = speedY * (-1);
	  }
	  if(speedY < 1){
	  	rectangle.style.display = "none";
	  	rectangle.style.top = positionY + 'px';
	  }else{
	  	rectangle.style.display = "block";
	  	rectangle.style.top = positionY + 'px';
	  }
	
	}
}

function getHeight(){
	var height = Math.floor(Math.random() * 100);

	return height + "px";
}

function getColor(){
	var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
}

/*I can also use Es6 Very well*/
/*
class Rectangle{

	constructor(height, color){

	}

	createRectangle(){

	}

	generateRectangle(){

	}

}*/