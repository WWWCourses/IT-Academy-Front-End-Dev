function aliansFactory(name, fingers){
	var obj = {};

	obj.name = name || 'anonymous';
	obj.fingers = fingers || '5';

	return obj;
}

var alf = aliansFactory( 'alf', 8 );
var alien2 = aliansFactory( 'zx42', 33 );

console.dir(alf);
console.dir(alien2);