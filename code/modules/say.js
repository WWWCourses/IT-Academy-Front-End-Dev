var say = function(){
	var welcome = function(msg){
		alert("Здравейте " + msg + " !" );
	}

	var goodby = function(msg){
		alert("Довиждане " + msg + " !" );
	}

	return {welcome: welcome};
}();