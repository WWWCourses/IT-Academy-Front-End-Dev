class Router{
	constructor(app){
		this.app = app;
		this.routes = [];

		window.addEventListener('hashchange', this.onHashChange.bind(this));
		window.addEventListener('DOMContentLoaded',()=>window.location.hash = '')
	}

	addRoute(componentName, urlRegex){
		this.routes.push({componentName,urlRegex});
	}

	onHashChange(){
		// get the route which urlRegex matches the current hash
		const hash = window.location.hash;
		const matchingURLs = this.routes.filter(r=>hash.match(new RegExp(r.urlRegex)));
		const route = matchingURLs[0];
		console.log(`route: ${JSON.stringify(route)}`);

		// if route is found show respective component:
		if(route){
			this.app.showComponent(route.componentName);
		}else{
			console.log(`route not found`);
		}
	}
}


export default Router;