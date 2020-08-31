let main = function(){
	// "cache" DOM:
	var outputNode = document.querySelector(".output");
	var gameFieldNode = document.querySelector(".gameField");
	var dropdownMenuNde = document.querySelector(".dropdown-menu");
	var btnNode = document.querySelector(".guessBtn");
	var userInputNode = document.querySelector(".userInput input");
	var surpriseNode = document.querySelector(".surprise");

	// асоциираме събитието onclick на бутона с функцията guessNumber
	btnNode.addEventListener("click", guessNumber);

	// искаме и при натискане на enter върху input полето да се задейства фунцкцията:
	userInputNode.addEventListener("keydown", processUserInput)

	// след избор на ниво =>:
	// машината си намисля число;
	// показваме игралното поле
	// фокусираме userInput полето
	dropdownMenuNde.addEventListener("click", (еvent)=>{
		genMachineNumber(еvent.target.getAttribute("data-value"));
		gameFieldNode.style.display = "block";
		userInputNode.focus();
	})


	function guessNumber() {
		// прочитаме какво е въвел потребителя, като преобразуваме текста до число:
		var userNumber = userInputNode.value * 1;
		// console.log("typeof userNumber: ", typeof(userNumber) );

		// логика на играта:
		if (userNumber > machineNumber) {
			outputNode.innerHTML = `${userNumber} - грешен опит. Надолу!`;
			outputNode.style.backgroundColor = "#99F";
		} else if (userNumber === machineNumber) {
			outputNode.innerHTML = "Браво, познахте от " + count + "-я път!";
			outputNode.style.backgroundColor = "#99FF99";
			surpriseNode.style.display = "block"
		} else {
			outputNode.innerHTML = `${userNumber} - грешен опит. Нагоре!`;
			outputNode.style.backgroundColor = "#F99";
		}

		// фокусираме и изчистваме инпут полето
		userInputNode.focus();
		userInputNode.value = "";
	}

	function processUserInput(e){
		if(e.keyCode == 13){
			guessNumber()
		}
	}

	function genMachineNumber(level){
		var min,max;
			// според избраното ниво определяме интервала на Машинното число:
		if (level == 1){
			min = 1, max = 50
		}else if (level == 2){
			min = 1, max = 100
		}else if (level == 3){
			min = 1, max = 500
		}else{
			min = 1, max = 50
		}

		// Generate a random integer between min (include) and max (include)
		machineNumber =  Math.floor(Math.random() * (max - min + 1)) + min;
		console.log(`machineNumber: ${machineNumber}`);
	}

	function createNode(parent, node){
	}




	// MAIN
	var machineNumber;

	// променлива, в която ще броим опитите на потребителя:
	var count = 1;


}()


