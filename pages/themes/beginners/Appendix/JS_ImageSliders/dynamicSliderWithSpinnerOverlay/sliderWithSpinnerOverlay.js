// lets not pollute the global scope - use IIFE:
(function(){
	'use strict';

	// define common variables:
	var imgURLs = [
		"http://imageshack.com/a/img922/3858/5Pd5dc.jpg",
		"http://imageshack.com/a/img923/3776/lKVbAp.jpg",
		"http://imageshack.com/a/img923/6770/WXkPF9.jpg",
		"http://imageshack.com/a/img923/2200/SzDjvi.jpg",
		"http://imageshack.com/a/img924/8715/tz0p3T.jpg",
	],
	i = 0,
	intervalID,
	imgNode = document.querySelector("#imgWrapper"),
	spinnerOverlay = document.querySelector('.spinner_overlay');

	// set first image to be loaded
	loadImage(0);


	// attach events
	document.addEventListener("DOMContentLoaded", onDOMContentLoaded);
	document.getElementsByClassName('next')[0].addEventListener("click", onNextClick);
	document.getElementsByClassName('prev')[0].addEventListener("click", onPrevClick);

	// listeners functions
	function onDOMContentLoaded(){
		intervalID = setInterval(loadImage, 2000, +1);
	}
	function onNextClick(){
		clearInterval(intervalID);
		loadImage(+1);
	}
	function onPrevClick(){
		clearInterval(intervalID);
		loadImage(-1)
	}


	// helper functions
	function loadImage(n){
		// increment URLs index:
		i += n;

		// i should be changed only in interval: [0, imgURLs.length-1]
		if( i<0){
			i = imgURLs.length-1;
		}else if( i==imgURLs.length){
			i = 0;
		}
		// console.log(`i=${i}`);

		imgNode.setAttribute("src", imgURLs[i]);

		// show spinner overlay before if image is not loaded:
		if(!imgNode.complete){
			spinnerOverlay.style.display = "block";
		}

		// hide spinner overlay after loading:
		imgNode.onload = function(){
			spinnerOverlay.style.display = "none";
		}
	}
}());