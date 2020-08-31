var board2d = [
	[ 0,  0 , 0],
	[ 0,  0 , 0],
	[ 0,  0 , 0]
];
var timerGlobal = "timerGlobal";
console.time(timerGlobal);// start timerGlobal

createHTMLBoard(board2d);
showConsoleBoard( board2d );



function createHTMLBoard(board){
	var table = document.querySelector('.playground table');
	var boardWidth = getBoardWidth( board );
	var boardHeight = getBoardHeight( board );

	// set a cell size:
	var cellSize = {num: 3, unit: 'em'};

	for (var i = 0; i < boardHeight; i++) {
		var row = table.insertRow(i);
		for (var j = 0; j < boardWidth; j++) {
			var cell = row.insertCell(j);
			cell.innerHTML = ' ';
			cell.style.width = cellSize.num + cellSize.unit;
			cell.style.height = cellSize.num + cellSize.unit;
			cell.addEventListener('click', setX );
		}
	}

	// set the size of playground container:
	var playground = document.getElementsByClassName('playground')[0];
	playground.style.width = (boardWidth)*cellSize.num + cellSize.unit;
	console.log("playground.style.width:", playground.style.width);

	// #set the size of the buttons:
	var buttons = document.querySelectorAll('.playground .buttons button');
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].style.width = 1.5 * cellSize.num + cellSize.unit;
		buttons[i].style.height = .6 * cellSize.num + cellSize.unit;
	}
}

function getBoardHeight( board ){
	return board.length;
}
function getBoardWidth( board ){
	return board[0].length;
}
function setX(){
	var timerSetX = "timerSetX";
	console.time(timerSetX);// Start timer
	var node = this;
	var board = board2d;
	var sign = 'X';

	var i = node.parentNode.rowIndex;
	var j = node.cellIndex;

	board[i][j] = sign;
	redrawHTMLCell( node, i, j, sign);
	showConsoleBoard( board2d );

	console.timeEnd(timerSetX);
}

function redrawHTMLCell( node,i, j, sign ){
	// var cell = document.querySelector(
	// 	`.board tr:nth-child(${i+1})>td:nth-child(${j+1})`
	// );
	var node = node;

	node.innerHTML = sign;
	// node.style.backgroundColor = "#FFBC00";
}


function showConsoleBoard( board ){
	var boardStr = "";
	for (var i = 0; i < board.length; i++) {
		boardStr += "|";
		var fakeRow = "";

		for (var j = 0; j < board[i].length; j++) {
			boardStr += board[i][j] + "|";
		}
		boardStr += "\n";
	}

	console.log(boardStr);
}


console.timeEnd(timerGlobal); // end timerGlobal


