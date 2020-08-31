// ################ MODEL ################
// data
//
var model = {
	// should come from user
	data: {},
	setData: function(x,y){
		this.data.x = x;
		this.data.y = y;
	},
	res: 0,
	calculate: function(x, y){
		this.res = x+y;
	},
	updateView: function(){
		view.showResult(res);
	}
}


// ################  VIEW  ################
// what user sees
//
var view = {
	nodes: (function(){
		return{
			// TODO: CAHCE DOM ????
			output: document.getElementsByClassName("output")[0],
			input: document.getElementsByClassName("input")[0],
			op1:document.querySelector(".operand:nth-of-type(1)"),
			op2:document.querySelector(".operand:nth-of-type(2)"),
			calcBtn: document.getElementsByClassName('calcBtn')[0],
		}
	})(),
	showResult: function(n){
		this.nodes.output.innerHTML = n;
	}
}



// ############## CONTROLER ###############
// VIEW <---- CONTROLER ----> MODEL
//
var controler = {
	handlers: {
		'click': function(){
			model.calculate(model.data.x, model.data.y);
			this.getData();
		}
	},
	events:{
		'click': function(){
			console.dir(view.nodes.calcBtn);
			view.nodes.calcBtn.addEventListener('click', controler.handlers.click.bind(this));
		}
	},
	bindEvents: function(){
		for(let e in this.events){
			this.events[e]();
		}
	},
	getData:function(){
		var x = view.op1.value;
		var y = view.op1.value;
		model.setData(x,y);
	},
	init:function(){

	}
}

controler.bindEvents();

