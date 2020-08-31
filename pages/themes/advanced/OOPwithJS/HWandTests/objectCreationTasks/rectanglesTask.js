
// Represent the data, about 5 rectangles with next properties:

// id: 1, width: 40, height: 20
// id: 2, width: 30, height: 30
// id: 3, width: 10, height: 80
// id: 4, width: 90, height: 2
// id: 5, width: 20, height: 20

// Write a function which will return the id of the rectangle with biggest area.

function Rectangle(width, height) {
    this.id = `r${id++}`;
    this.width = width;
    this.height = height;
    this.calcArea = function () {
        return this.width*this.height;
    }
}

let id = 1;
let rectangles = [
    new Rectangle(40, 20),
    new Rectangle(30, 30),
    new Rectangle(10, 80),
    new Rectangle(90, 2),
    new Rectangle(20, 20),
]

function findMaxAreaRectangle(rectanges) {
    let maxArea = 0, maxRectId;
    for (let i = 0; i < rectangles.length; i++) {
        const rectangle = rectangles[i];
        const area = rectangle.calcArea();

        if(area > maxArea){
            maxArea = area;
            maxRectId = rectangle.id;
        }
    }

    return maxRectId;
}

console.log( findMaxAreaRectangle(rectangles) );



