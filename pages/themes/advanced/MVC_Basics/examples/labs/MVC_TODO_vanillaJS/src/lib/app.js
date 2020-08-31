class App{
	constructor(sel){
		this.appElement = document.querySelector(sel);
		this.components = {};
	}

	addComponent(component){
		this.components[component.name] = component;
		component.model = this.proxify(component.model);
	}

	showComponent(componentName){
		this.currentComponent = this.components[componentName];

		if(this.currentComponent) {
      this.currentComponent.controller(this.currentComponent.model);
    }
		this.updateView();
	}

	updateView(){
		console.log(`currentComponent: ${JSON.stringify(this.currentComponent)}`);
		this.appElement.innerHTML = this.currentComponent.view(this.currentComponent.model);
	}

	proxify(model){
    const self = this;

    console.log(`Proxifying this:`);
    console.dir(this);

    return new Proxy(model, {
      set: function(target, property, value) {
        console.log('Changing', property, 'from', target[property], 'to', value);
        target[property] = value;
        self.updateView();
        return true;
      }
    })
  }
}

export default App;