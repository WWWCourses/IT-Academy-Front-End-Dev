var smartLogger = function(url) {
	var logger;

	if(url.match(/^file:\/\//i)) {
		// local execution
		logger = {
			log: (msg)=>{
				console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);
				console.log(msg)
				console.log(`<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<`);
			},
			dir: (obj)   =>{
				console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);
				console.dir(obj);
				console.log(`<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<`);
			},
		};
	} else if(url.match(/^https?:\/\//i)) {
		// server execution
		logger = {
			// log: ()=>{console.log(`Silence, please`);},
			log: ()=>{},
			dir: ()=>{},
		};
	} else {
		throw new Error('Not a valid URL: ${url}');
	}

	return logger;
};