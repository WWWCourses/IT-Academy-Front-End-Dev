function themeSwitcher(themeName){
	alert("themeSwitcher ON");
	document.getElementById('theme').setAttribute('href','/IT-Academy-Front-End-Dev/lib/reveal.js/dist/theme/'+themeName+'.css');
}
function  PrettyPreCodeTmp(){
	var codeNodes = document.querySelectorAll('pre>code');

	for (var i = 0; i < codeNodes.length; i++)
	{
		var content = codeNodes[i].innerHTML;

		// get indent
		var indent =  content.match(/^\n*(\s*)/)[1];

		// remove indent from all lines
		var indentRE = new RegExp("^" + indent, "gm");
		content = content.replace(indentRE, "");

		// clean empty lines on start/end
		content = content.replace(/^\s*/,"");
		content = content.replace(/\s*$/, "");
		console.log(`content: ${content}`);

		// tabs to spaces:
		content = content.replace(/a/, "AAA ")

		codeNodes[i].innerHTML = content;
		codeNodes[i].style.overflow="auto";
	}
}
function  PrettyPreCode(){
	var codeNodes = document.querySelectorAll('pre>code');
	// console.dir(codeNodes);

	for (var i = 0; i < codeNodes.length; i++)
	{
		var content = codeNodes[i].innerHTML;
		// console.log(`content: ${content}`);

		// get indent
		var indent =  content.match(/^\n*(\s*)/)[1];
		// console.log(`indent: -->${indent}<--`);

		// remove indent from all lines
		var indentRE = new RegExp("^" + indent, "gm");
		content = content.replace(indentRE, "");

		// clean empty lines on start/end
		content = content.replace(/^\s*/,"");
		content = content.replace(/\s*$/, "");

		// tabs to spaces
		content = content.replace(/\t/gm,"  ");

		codeNodes[i].innerHTML = content;
		codeNodes[i].style.overflow="auto";
	}
}
function autoTitleLinksWrapImages(){
	var imgs = document.querySelectorAll('.reveal section a>img');
	for (var i = 0; i < imgs.length; i++) {
		imgs[i].parentElement.setAttribute("title", "click for bigger image")
	}
}
function stg(){
	// console.log(`st loaded!!!`);
	var script = document.createElement('script');
	script.onload = function () {
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'UA-121408697-1');
	};
	script.src = "https://www.googletagmanager.com/gtag/js?id=UA-121408697-1";

	document.head.appendChild(script);
}
var sc_project=11747234;
var sc_invisible=1;
var sc_security="d54d4f78";

function stsc(){
	var script = document.createElement('script');
	script.src = "https://www.statcounter.com/counter/counter.js";
	document.head.appendChild(script);

	var img = document.createElement('img');
	img.src = "http://c.statcounter.com/11747234/0/d54d4f78/1/"

	document.body.appendChild(img);
}


// stg();
// stsc();
PrettyPreCode();
autoTitleLinksWrapImages();

