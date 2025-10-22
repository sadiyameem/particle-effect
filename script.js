let p;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

    p = new Particle();
}

function draw() {
    background(255);
    p.update();
    p.draw();

}

class Particle {
    constructor() {
        // Position
        this.pos = createVector(random(width), random(height));
        // Velocity
        this.vel = createVector(random(-2, 2), random(-2, 2));
        // Size
        this.size = 10;
    }

// update movement by adding velocity
    update() {
        this.pos.add(this.vel);
    }

// draw single particle
    draw() {
        noStroke();
        fill(0);
        circle(this.pos.x, this.pos.y, this.size);
    }

    // detect edges
    edges() {}
}