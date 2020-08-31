// за да "прихванем" scroll върху целия прозорец:
window.addEventListener('scroll', changeHeaderOn5linesScroll);

// хедъра, който ще променяме:
var headerNode = document.getElementsByTagName('header')[0];

var htmlNode = document.documentElement;

// функция, която променя стила на header, когато
// потребителя скролне вертикално повече от половината
function changeHeaderOnHalfPageScroll(){
	// височината на vewport-a:
	var vh = window.innerHeight;
	// височината на реалното съдържание в body:
	var bh = htmlNode.scrollHeight;
	console.log("vh=", vh, "; bodyHeight=", bh);

	if ( bh>vh && htmlNode.scrollTop > (bh-vh)/2 ){
		headerNode.style.background = 'rgba(80, 80, 80, .5)';
		headerNode.style.color = '#333';
		console.log("scrollTop" , htmlNode.scrollTop );
	}

	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// Задача за упражнение:
	// довършете функцията, така че когато потребителя се върне в
	// началото на страницата елементът (header) да връща оригиналното
	// си офомление
}

// когато се скролнат 5 реда (5em)
function changeHeaderOn5linesScroll(){
	// взимаме текущия размер на шрифра на елемента:
	bodyFontSize = getFontSize( htmlNode );

	console.log(`htmlNode.scrollTop: ${htmlNode.scrollTop}`);

	if(htmlNode.scrollTop > 5*bodyFontSize ){
		headerNode.style.opacity = '0.5';
		console.log(htmlNode.scrollTop)
	}
}

function getFontSize(el){
	var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
	return parseFloat(style);
}