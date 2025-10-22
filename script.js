const particles = [];
let athenaColors;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

    // define colors after p5 is ready
    athenaColors = [
        color('#933633'), // dark red/brown
        color('#ffc06e'), // yellow/orange
        color('#b27a59'), // light brown
        color('#ffffff') // white
];

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
     p.checkParticles(particles.slice(index));   
    });

}

class Particle {
    constructor() {
        // Position
        this.pos = createVector(random(width), random(height));
        // Velocity
        this.vel = createVector(random(-2, 2), random(-2, 2));
        // Size
        this.size = random(5, 15);
        // color
        this.color = random(athenaColors);
    }

// update movement by adding velocity
    update() {
        this.pos.add(this.vel);
        this.edges();
    }

// draw single particle
    draw() {
        noStroke();
        fill(this.color);
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

    // connect particles
    checkParticles(particles) {
        particles.forEach(particle => {
            const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);

            if(d < 120) {
                stroke(this.color);
                line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            }
        });
    }
}