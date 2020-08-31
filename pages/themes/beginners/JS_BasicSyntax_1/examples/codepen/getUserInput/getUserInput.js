writeToOutput('Попълнете формата и кликнете върху бутона!');
function checkUserAge(){
	// взимаме въведените от потребителя години:
	var userAge = getInputsValues().uage;
	var userName = getInputsValues().uname;

	// ЗАДАЧА - реализирайте следната функционалност, която ще се изпълни след кликване на бутона "Go":
	// ако потребителят е пълнолетен (userAge>18г.) то на екрана да се изпише:
	// 	  ""
	// ако потребителят е непълнолетен, но не и малолетен ( userAge<18 и userAge>14 ), то на екрана да се изпише:
	// 	  "UserName, ще имате достъп само до определена функционалност от този сайт"
	// ако потребителят е малолетен  (userAge<14г.) то:
	// 		"Съжелявам userName, отбий се тук след X години!");
	//
	// където userName e името въведено от потребителя, а X = 18-userAge;

	// пример за изписване на екрана на произволен низ, чрез функцията writeToOutput():
	writeToOutput('Това е само тест, ' + userName);

	// НАЧАЛО НА ВАШИЯ КОД:
	if (userAge >=18) {
		writeToOutput('Добре дошли, ' + userName + '!');
	}else if( userAge>14 && userAge<18){
		writeToOutput(userName + ', ще имате достъп само до определена функционалност от този сайт')
	}else{
		writeToOutput( 'Съжелявам ' + userName + ', отбий се тук след ' + (18-userAge) +' години!');
	}


	// КРАЙ НА ВАШИЯ КОД
}

// ************************
// допълнителни DOM функции:
function getInputsValues(){
	var form = document.getElementsByClassName('test')[0];
	var inputs = form.getElementsByTagName('input');
	var inputsValues = {};
	for (var i = 0, len = inputs.length; i < len; i++) {
		inputsValues[inputs[i].id] = inputs[i].value;
	}

	// console.log("inputsValues=", inputsValues);
	return	inputsValues;
}

function getInputData(id){
	var node = document.getElementById(id);
	return node.value;
}

function writeToOutput( result ){
	var outputNode = document.getElementById("output");
	outputNode.innerHTML = result;
}