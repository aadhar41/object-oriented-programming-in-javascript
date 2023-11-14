// Constructor Function
function Circle(radius) {
    this.radius = radius;
    let defaultLocation = {x : 0, y : 0};
    let computeOptimumLocation = function (param) {

    };
    this.draw = function (params) {
        computeOptimumLocation(0, 1);
        console.log('draw');
    }
}

const circle = new Circle(10);
