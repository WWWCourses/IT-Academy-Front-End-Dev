const tasks = {
    't1': function () {

    },
    't2':function () {
        // да се дефинира функция calcRectangleArea(), която връща лицето на правоъгълник, със зададени като обект дължина и ширина:
        function calcRectangleArea(rectangle) {
            return rectangle.width * rectangle.height
        }

        // дадено
        let rectangle = {
            'width': 6,
            'height':3
        };
        let area = calcRectangleArea(rectangle);

        console.log(`The area of rectangle is: ${area}`);

        // очакван резултат:
        // The area of rectangle is: 18

    },
    't3':function () {

    },
    't4':function () {

    },
}
tasks.t2();