class Timer {
    constructor(title, delay, stopCount) {
        this.title = title;
        this.delay = delay;
        this.stopCount = stopCount;
        this.intervalId = null;
        this.currentCount = 0;
    }

    start() {
        console.log(`Timer ${this.title} started (delay=${this.delay}, stopCount=${this.stopCount})`);
        this.intervalId = setInterval(() => this.tick(), this.delay);
    }

    tick() {
        this.currentCount++;
        console.log(`Timer ${this.title} Tick! | cycles left ${this.stopCount - this.currentCount}`);
        if (this.currentCount === this.stopCount) {
            this.stop();
        }
    }

    stop() {
        clearInterval(this.intervalId);
        console.log(`Timer ${this.title} stopped`);
    }
}

function runTimer(id, delay, counter) {
    const timer = new Timer(id, delay, counter);
    timer.start();
}


