(function{
	console.log(`st loaded!!!`);
	var script = document.createElement('script');
	script.onload = function () {
	    //do stuff with the script
	    window.dataLayer = window.dataLayer || [];
	    function gtag(){dataLayer.push(arguments);}
	    gtag('js', new Date());

	    gtag('config', 'UA-121408697-1');
	};
	script.src = "https://www.googletagmanager.com/gtag/js?id=UA-121408697-1";

	document.head.appendChild(script);
})()
