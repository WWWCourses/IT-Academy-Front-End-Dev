let scroller = {
	init(){
		console.log("Init");
		this.nodes = this.nodes || this.getNodes();
		this.attachEvents();
	},
	getNodes(){
		console.log(`getNodes`);
		nodes = {};
		nodes.navLinks = document.querySelectorAll("main>nav>a");
		nodes.pages = document.querySelectorAll("main>section.articles>article");
		return nodes;
	},
	attachEvents(){
		this.nodes.navLinks.forEach((navLink, navLinkIndex)=>{
			navLink.addEventListener("click", this.scrollPage(navLinkIndex));
		})
	},
	scrollPage(navLinkIndex){
		return	function(){
			console.dir(this);
			scroller.nodes.pages.forEach(page=>{
				page.classList.remove("focus");
			})

			scroller.nodes.pages[navLinkIndex].classList.add("focus")
		}
	}
}

scroller.init();