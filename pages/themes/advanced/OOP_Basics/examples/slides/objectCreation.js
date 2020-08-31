/* -------------------------------------------------------------------------- */
/*                                 by literal                                 */
/* -------------------------------------------------------------------------- */
const apple = {
    // define properties:
    color: "red",
    price: [3.5, 2, 2.5],

    // define methods:
    calcMinPrice: function(){
        return  Math.min( ...this.price ); // from ES6
    },
    calcMaxPrice: function(){
        return  Math.max( ...this.price ); // from ES6
    }
}
// objects usage:
console.log(`apple min price: ${apple.calcMinPrice()}`);

/* -------------------------------------------------------------------------- */
/*                            by "Factory" Function                           */
/* -------------------------------------------------------------------------- */
const appleFactory = function( color, prices ){
    const obj = {};

    // define properties:
    obj.color = color;
    obj.prices = prices;

    // define methods:
    obj.calcMinPrice = function(){
        return  Math.min( ...this.prices ); // from ES6
    };
    obj.calcMaxPrice = function(){
        return  Math.max( ...this.prices ); // from ES6
    };

    return obj;
}

// create object instances:
const apple1 = appleFactory("red", [3.5, 2, 2.5]);
const apple2 = appleFactory("green", [1.80, 2.10, 2.40]);

// objects usage:
console.log( "apple1 min price: ", apple1.calcMinPrice());
console.log( "apple2 min price: ", apple2.calcMinPrice());


/* -------------------------------------------------------------------------- */
/*                           by "Constructor" Function                        */
/* -------------------------------------------------------------------------- */
const AppleConstructor = function( color, prices ){
    // define properties:
    this.color = color;
    this.prices = prices;

    // define methods:
    this.calcMinPrice = function(){
        return  Math.min( ...this.prices ); // from ES6
    };
    this.calcMaxPrice = function(){
        return  Math.max( ...this.prices ); // from ES6
    };
}

// create object instances:
const apple3 = new AppleConstructor("red", [3.5, 2, 2.5]);
const apple4 = new AppleConstructor("green", [1.80, 2.10, 2.40]);

// objects usage:
console.log( "apple3 min price: ", apple3.calcMinPrice());
console.log( "apple4 min price: ", apple4.calcMinPrice());

/* -------------------------------------------------------------------------- */
/*                               By Class Syntax                              */
/* -------------------------------------------------------------------------- */
class AppleClass{
    constructor( color, prices ){
        // define properties:
        this.color = color;
        this.prices = prices;
    }

    // define methods:
    calcMinPrice(){
        return  Math.min( ...this.prices ); // from ES6
    }

    calcMaxPrice(){
        return  Math.max( ...this.prices ); // from ES6
    }
}


// create object instances:
const apple5 = new AppleClass("red", [3.5, 2, 2.5]);
const apple6 = new AppleClass("green", [1.80, 2.10, 2.40]);

// objects usage:
console.log( "apple5 min price: ", apple5.calcMinPrice());
console.log( "apple6 min price: ", apple6.calcMinPrice());
