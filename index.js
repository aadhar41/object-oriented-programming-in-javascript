// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function (params) {
        console.log('draw');
    }
}

const circle = new Circle(10);

for(let key in circle) {
    if(typeof circle[key] !== 'function')
        console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);

if('radius' in circle)
    console.log('Circle has a radius.');