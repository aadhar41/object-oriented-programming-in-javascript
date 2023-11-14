// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function name(radius) {
            console.log('Draw');
        }
    };
}

const circle = createCircle(5);

// -------------------

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function (params) {
        console.log('draw');
    }
}

const another = new Circle(1);
