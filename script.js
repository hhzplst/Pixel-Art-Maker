window.onload = function(){
	pageSetUp();
};

var currentColor;

function pageSetUp(){
	//paint enough painting gird
	//add event listener to all of them
	//row of change paint color
	//add event listener to the change paint color
	for(var i=0; i<1770; i++){
		var newDiv = document.createElement("div");
		newDiv.style.float = "left";
		newDiv.style.margin = "1.5px";
		newDiv.style.width = "20px";
		newDiv.style.height = "20px";
		newDiv.style.borderRadius = "2px";
		if(i<1744){			
			newDiv.style.backgroundColor = "#dfdfdf";
			document.body.appendChild(newDiv);
			newDiv.addEventListener("click", changeColor);
		}else{
			var colorPalette = ["#ff0000", "#e50000", "#cc0000", "#b20000", "#990000", "#ffe700", "#e5cf00", "#ccb800", "#b2a100", "#998a00", "#49ff00", "#41e500", "#3acc00", "#33b200", "#2b9900", "#0092ff", "#0083e5", "#0074cc", "#0066b2", "#005799", "#c900ff", "#b400e5", "#a000cc", "#8c00b2", "#780099", "#dfdfdf"];
			newDiv.style.backgroundColor = colorPalette[i-1744];
			document.body.appendChild(newDiv);
			newDiv.addEventListener("click", newColor);
		}
	}
}

function newColor(){
	currentColor = this.style.backgroundColor; 
}

function changeColor(){
	this.style.backgroundColor = currentColor;
}


		// var colorPalette = ["#ff0000", "#e50000", "#cc0000", "#b20000", "#990000", "#ffe700", "#e5cf00", "#ccb800", "#b2a100", "#998a00", 
			//  "#49ff00", "#41e500", "#3acc00", "#33b200", "#2b9900", "#0092ff", "#0083e5", "#0074cc", "#0066b2", "#005799", 
			//  "#c900ff", "#b400e5", "#a000cc", "#8c00b2", "#780099"];

			// for(var j=0; j<25; j++){
			// 	newDiv.style.backgroundColor = colorPalette[j];
			// }		


// for(var i=0; i<100; i++){
// 		var newDiv = document.createElement("div"); 
// 		newDiv.style.float = "left";
// 		newDiv.style.paddingBotom = "11.1%";
// 		newDiv.style.width = "11.1%";
// 		newDiv.style.height = "150px";

// 		if(i%2 === 0){
// 			newDiv.style.backgroundColor = getRandomColor();
// 			document.body.appendChild(newDiv);
// 		}else{
// 			newDiv.style.backgroundColor = getRandomColor();
// 			document.body.appendChild(newDiv);
// 		}
// 	}
// for(var i=0; i<100; i++){
// 	var newDiv = document.createElement("div"); 
// 	newDiv.style.float = "left";
// 	newDiv.style.paddingBotom = "11.1%";
// 	newDiv.style.width = "11.1%";
// 	newDiv.style.height = "150px";	

// 	if(i%2 === 0){
// 		newDiv.style.backgroundColor = getRandomColor();
// 		document.body.appendChild(newDiv);
// 	}else{
// 		newDiv.style.backgroundColor = getRandomColor();
// 		document.body.appendChild(newDiv);
// 	}
// }

// setInterval(flashColor, 2000);

// function getRandomColor() {
//     var letters = '0123456789ABCDEF'.split('');
//     var color = '#';
//     for (var i = 0; i < 6; i++ ) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// function flashColor(){
// 	for(var i=0; i<100; i++){
// 		document.getElementsByTagName("div")[i].style.backgroundColor = getRandomColor();
// 	}
// }



