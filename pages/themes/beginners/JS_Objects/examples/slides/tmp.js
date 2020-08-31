let student1 = {
    "firstName" : "Pesho",
    "surName" : "Petrov",
    "greet": function() {
        console.log(`Hello, I'm ${this.firstName}`);
    }
};

let student2 = {
    "firstName" : "Maria",
    "surName" : "Popova",
    "greet": function() {
        console.log(`Hello, I'm ${this.firstName}`);
    }
}

student1.greet();
student2.greet();

console.dir(student1);
console.dir(student2);