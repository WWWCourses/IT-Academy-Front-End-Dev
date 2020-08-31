let testNode = document.querySelector(".test"),
	colors = ["red", "green", "blue"],
	i = 0;


function autoChangeColor(node){
	// подаваме на setInterval 2 аргумента: анонимна функция и брой милисекунди през които да се извиквва функцията 
	setInterval(function(){		
		node.style.backgroundColor = colors[i];				
		i = (i+1) % colors.length;
		console.log("i=", i);
	}, 1000);

}

autoChangeColor(testNode);