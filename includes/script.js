var numOfRect=14;

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

window.onload = function(){
	var main = document.getElementById("rect");
	for(var i=0; i<numOfRect-1; i++)
	{
		var newRec = createRec();
		main.appendChild(newRec);
		newRec.style.backgroundColor = getRandomColor();
		
	}
	var newRec = createLastRec();
	main.appendChild(newRec);
	newRec.style.backgroundColor = getRandomColor();
};

function createRec(){
	var newObj = document.createElement("section");
	newObj.className = "rectangles";
	//console.log(newObj);
	var newStar =document.createElement("article");
	newStar.className = "star";
	//console.log(newStar);
	newObj.appendChild(newStar); 
	newObj.onclick = function () {
		if (newStar.style.display == "block")
			newStar.style.display = "none";		
		else
			newStar.style.display = "block";
	};
	return newObj;
	
}
function createLastRec(){
	var newObj = document.createElement("section");
	newObj.className = "rectangles";
	console.log(newObj);
	var plus =document.createElement("article");
	plus.className = "plus";
	newObj.appendChild(plus);
	newObj.onclick = function() {
		var main = document.getElementById("rect");
		var newRec = createRec();
		main.insertBefore(newRec, main.childNodes[0]);
		newRec.style.backgroundColor = getRandomColor();
	};
	return newObj;
	
}


