// Constructor Function
function Stopwatch() {
    let startTime, endTime, duration, running = 0;

    this.start = function () {
        if(running)
            throw new Error('Stopwatch has already started.');
        running = true;
        startTime = new Date();
    };

    this.stop = function () {
        if(!running)
            throw new Error("Stopwatch isn't started.");
        running = false;
        endTime = new Date();
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        },
        set: function (value) {
            if(!value.x || !value.y)
                throw new Error('Invalid Location.');
            defaultLocation = value;
        }
    });
}

const stopWatch = new Stopwatch();