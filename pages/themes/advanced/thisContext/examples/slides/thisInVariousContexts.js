const examples = {
    'asFunction': function(){
    //▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
        function f(){
            console.log( "this in function call:"+this  );
        }

        f();
    //▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
    },
    'asFunctionInStrictMode': function(){
    //▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
        "use strict";
        function f(){
            console.log( "this in strict function call:"+this );
        }

        f();
    //▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
    },
    'IIFE':function(){
        (function(){
            console.log("This in IIFE"+this);
        })();
    },
    'asFunctionThoughLookingAsMethod': function(){
    //▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
        var obj = {
            foo: function(){
                console.log(`this = ${this}`);
            }
        };

        var bar = obj.foo;
        obj.foo(); // this is a method call
        bar(); //this is a "normal" function call
    //▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
    },
    'asMethod': function(){
    //▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
        var obj = {
            foo: function(){
                console.log(`this = ${this}`);
            }
        };

        obj.foo();
    //▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
    },
    'asConstructor': function(){
    //▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
        function Constructor(id){
            this.id = id;
            console.log(`this in Constructor = ${this}`);

            this.sayHello = function(){
                console.log(`Oh, hello dear. I'm obj ${id}`);
                console.log(`this in method = ${this}`);
            }
        };

        var obj1 = new Constructor(1);
        obj1.sayHello();

        // var obj2 = Constructor(2);
    //▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
    },
    'asFunctionInConstructor_Pitfall': function(){
    //▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
        function Constructor(id){
            this.id = id;
            this.saidHello = 0;

            var __sayHello = function(){
                this.saidHello++;
            };
            this.sayHello = function(){
                __sayHello();
                console.log(`obj ${id}`);
                console.log(`I said hello ${this.saidHello} times`);
            }
        };

        var obj1 = new Constructor(1);
        obj1.sayHello();
        obj1.sayHello();
    //▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
    },
    'asFunctionInConstructor_ThatSolution': function(){
    //▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
        function Constructor(id){
            this.id = id;
            this.saidHello = 0;

            var __sayHello = function(that){
                that.saidHello++;
            };
            this.sayHello = function(){
                __sayHello(this);
                console.log(`Oh, hello dear. I'm obj ${id}`);
                console.log(`I said hello ${this.saidHello} times`);
            }
        };

        var obj1 = new Constructor(1);
        obj1.sayHello();
        obj1.sayHello();
    //▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
    },
    'withApply':function(){
    //▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
        const maria = {name: "Maria", age:18};
        function update(name, age){
            this.name = name;
            this.age = age;
        }

        console.log("maria before", maria);
        update.apply(maria, ["Maria Ivanova", 23]);
        console.log("maria after", maria);
    //▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
    },
    'withApplyPitfallSolution': function(){
    //▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
        function Constructor(id){
            this.id = id;
            this.saidHello = 0;

            var __sayHello = function(){
                this.saidHello++;
            };

            this.sayHello = function(){
                __sayHello.apply(this);
                console.log(`Oh, hello dear. I'm obj ${id}`);
                console.log(`I said hello ${this.saidHello} times`);
            }
        };

        var obj1 = new Constructor(1);
        obj1.sayHello();
        obj1.sayHello();
    //▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
    },
    'withCall': function(){
    //▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
        const maria = {name: "Maria", age:18};

        function update(name, age){
            this.name = name;
            this.age = age;
        }

        console.log("maria before", maria);
        update.call(maria, "Maria Ivanova", 23 );
        console.log("maria after", maria);
    //▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
    },
    'throughBind': function(){
    //▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
        const maria = {name: "Maria", age:18};
        function update(name, age){
            this.name = name;
            this.age = age;
        }

        console.log("maria before", maria);
        var updateMaria = update.bind(maria,"Maria Ivanova", 23);
        updateMaria();
        console.log("maria after", maria);
    //▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
    },
    'inClass_LongDemo': function(){
        //▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
        class Rectangle {
			constructor(height, width, color) {
				console.log(`this in constructor: ${this}`);
				Object.assign(this, {height, width, color})
			}

			// Method
			calcArea() {
				console.log(`this in method: ${this}`);
				return this.height * this.width;
			}

			// Static Method
			static compare(r1,r2){
				console.log(`This in static:`,this.name);

				if ((r1.height+r1.width) < (r2.height + r2.width)){
					console.log(`${r1.constructor.name} is smaller`);
				}else if((r1.height+r1.width) > (r2.height + r2.width)){
					console.log('r2 is smaller');
				} else {
					console.log('They are equal!');

				}
			}
		}
		Rectangle.count = 0;

        const rect1 = new Rectangle(18, 10, '#F00');
        const rect2 = new Rectangle(10, 20, '#0F0');

		// console.log(square0.area); // 100
		Rectangle.compare(rect1, rect2)
        //▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
    },
    'inClass_ShortDemo': function(){
	//▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
		class A{
			method1(){
				console.log(`This in method: ${this}`);
			}
			static staticMethod(){
				console.log(`This in static method: ${this}`);
			}
		}

		let obj = new A();

		obj.method1()
		A.staticMethod()
    //▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
    },
}

// examples.inClass_ShortDemo();

for (const key in examples) {
    if (examples.hasOwnProperty(key)) {
        console.log(`\n~~~~~ ${examples[key].name} ~~~~~`);
        examples[key]();
    }
}