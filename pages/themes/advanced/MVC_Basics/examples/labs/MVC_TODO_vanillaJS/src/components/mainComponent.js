const mainComponent = {
	"name": "mainComponent",
	"model":{},
	view(){
		return `
			<header>MVC_TODOs Clean UI</header>
			<main>
		    <nav>
		      <ul>
		        <li><a href="#">Home</a></li>
		        <li><a href="#/todos">TodoList</a></li>
		      </ul>
		    </nav>
		  </main>
		  <footer>2018</footer
		`
	},
	controller(model){
		console.log(`Main controller executed!`);
	}
}

export default mainComponent;