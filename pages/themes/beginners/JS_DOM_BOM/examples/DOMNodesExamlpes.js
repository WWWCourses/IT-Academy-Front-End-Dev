console.log("The Document node object:");
console.dir(document);

console.log("The p Element node object:");
var elementNode = document.getElementById("p1");
console.dir(elementNode);

console.log("The id Attribute node object:");
var atributeNode = document.body.childNodes[1].getAttributeNode('id');
console.dir( atributeNode );

console.log("The 'Paragraph' text node object:");
var textNode = document.body.childNodes[1].childNodes[0];
console.dir( textNode );

console.log("The Comment node object:");
var commentNode = document.body.childNodes[3];
console.dir( commentNode );

console.log( "All child nodes in the Body:" );
var bodyChildrenNodes = document.body.childNodes;
console.dir( bodyChildrenNodes );