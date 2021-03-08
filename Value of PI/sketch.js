let r = 200;
let total = 0;
let inCircle = 0;
let pie;
let record_PI = 0;
let piDiv;
function setup() {
    createCanvas(602, 602);
    piDiv = createDiv(record_PI);
    piDiv.style("font-size", "72px");
    rectMode(CENTER);
    background(0);
    translate(width * 0.5, height * 0.5);
    stroke(255);
    strokeWeight(1);
    noFill();
    // ellipse(0, 0, r*2, r*2);
    // rect(0, 0, r*2, r*2);
}

function draw() {
    translate(width * 0.5, height * 0.5);
    for(let i = 0; i < 20000; i++) {
        total++;
        let x = random(-r, r);
        let y = random(-r, r);

        let d = dist(0, 0, x, y);
        // let d = x*x + y*y;
        if(d < r) {
            stroke(0, 255, 0);
            inCircle++;
        } else {
            stroke(255, 0, 0);
        }
        point(x, y);
        pie = 4 * (inCircle / total);
        let record_diff = Math.abs(Math.PI - record_PI);
        let diff = Math.abs(Math.PI - pie);
        if(diff < record_diff) {
            record_diff = diff;
            record_PI = pie;
            piDiv.html(record_PI);
        }
    }
    
}
