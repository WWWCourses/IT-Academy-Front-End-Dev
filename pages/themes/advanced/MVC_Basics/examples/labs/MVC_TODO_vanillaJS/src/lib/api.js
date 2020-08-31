class API{
	constructor(endpointURL){
		this.endpointURL = endpointURL;
	}

	getTodos() {
		console.log(`	: ${this.endpointURL}`);
    return fetch(this.endpointURL)
      .then(res => res.json())
  }
  getTodo(id) {
    return fetch(`${this.endpointURL}/${id}`)
      .then(res => res.json());
  }
}

export default API;