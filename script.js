const particles = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

    const particlesLength = Math.floor(window.innerWidth / 10);

    for(let i = 0; i < particlesLength; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    background(255);
    particles.forEach((p, index) => {
     p.update();
     p.draw();   
    });

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
        this.edges();
    }

// draw single particle
    draw() {
        noStroke();
        fill(0);
        circle(this.pos.x, this.pos.y, this.size);
    }

    // detect edges
    edges() {
        if(this.pos.x < 0 || this.pos.x > width) {
            this.vel.x *= -1;
        }

        if(this.pos.y < 0 || this.pos.y > height) {
            this.vel.y *= -1;
        }
    }
}