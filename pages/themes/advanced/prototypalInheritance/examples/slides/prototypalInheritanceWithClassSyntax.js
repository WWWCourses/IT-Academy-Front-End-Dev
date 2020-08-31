// define Car Class:
class Car{
    constructor(speed){
        this.manufacturer = undefined;
        this.speed = speed;
    }

    drive = function () {
        if (this.wings >= 2) {
            console.log(`Flying wiht ${this.speed} km/h`);
        } else {
            console.log(`Driving wiht ${this.speed} km/h`);
        }
    }
}

// define Ford Class, which will inherits from Car:
class Ford extends Car{
    constructor(speed) {
        // call the Parent Constructor first:
        super(speed);
        this.manufacturer = "Ford";
    }
}

// create a Ford object
let ford = new Ford(200);

// create another Ford object, and attach wings to it:
let fordOfPesho = new Ford(300);
fordOfPesho.wings = 2;

// let's use the object:
ford.drive();
fordOfPesho.drive();