"use strict";
// synchronous code
function syncDemo(){
	function producer(callback){
		// blocking
		for(let i=0; i<100000000; i++){
			i**i
		}
		let data = 'producer is ready with data'
		callback(data)
	}

	function consumer(){	
		console.log(`1. Consumer is asking the producer for data`);
		let data = producer(dataProcess);
		console.log(`2. Meanwhile, consumer is doing some VIW`);
		console.log(`3. Consumer received the data:`);	
	}

	function dataProcess(data){
		console.log(`\t${data}`);
	}

	consumer()
}


function asyncDemo(){

	function resolveAfter2Seconds() {
	  return new Promise(resolve => {
	  	// non-blocking
	    // setTimeout(() => {
	    //   resolve('resolved');
	    // }, 2000);

	    // blocking
	    for(let i=0; i<100000000; i++){
	    	i**i
	    }
	    let data = 'producer is ready with data';
		resolve(data)
	  });
	}

	async function asyncCall() {
	  console.log('calling');
	  var result = await resolveAfter2Seconds();
	  console.log(result);	  
	  // expected output: 'resolved'
	}

	asyncCall();
	console.log(`VIW`);
}


asyncDemo()