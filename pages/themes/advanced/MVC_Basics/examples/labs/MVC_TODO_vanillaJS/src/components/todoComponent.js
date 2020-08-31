import API from '../lib/api';

const todoComponent = {
	'name': 'todoComponent',
	'model':{
		'endpointURL':'https://jsonplaceholder.typicode.com/todos',
		'todos': [],
	},

	view(model){
		// console.log(`model.todos in view`);
		// console.dir(model);

		return `There are ${model.todos.length} items!`;
	},

	controller(model){
		const api = new API(model.endpointURL);
		api
			.getTodos()
			.then(data=>{
				console.log(`data: ${data.length}`);
				model.todos = data;
			})
			.catch(err=>{
		    console.log('Fetch Error:', err);
		  });
	}
}

export default todoComponent;