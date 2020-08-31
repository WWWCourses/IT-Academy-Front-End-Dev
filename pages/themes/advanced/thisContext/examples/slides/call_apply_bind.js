// create object with Constructor function:
function Foo(id) {
    // define "private" method - can not be called outside the object:
    function _incrementID() {
        this.id+=1;
    }

    this.id = id;

    // define "public" method - can be called outside the method:
    this.incID = function () {
        // this problem solution with call():
        // _incrementID.call(this);

        // this problem solution with bind():
        let _incrementID = _incrementID.bind(this);
    }

}
let obj1 = new Foo(1);


obj1.incID();
obj1.incID();
obj1.incID();
console.log(obj1);
