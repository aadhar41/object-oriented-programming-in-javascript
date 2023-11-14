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
circle.draw();
