function Animal(name) {
    this.name = name;
}
Animal.prototype.eat = function () {
    console.log(`${this.name} is eating`);
}
Animal.prototype.sleep = ()=> {
    console.log(`${this.name} is sleeping`);
}

let tom = new Animal("Tom");
// console.dir(tom);
tom.eat();
tom.sleep();