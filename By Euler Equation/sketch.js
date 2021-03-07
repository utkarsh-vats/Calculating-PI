
let piSq = 0;
let pi;
let piDiv, piDiv2;
let it = 1;
let history = [0];
const yScale = 4;
let piY, origin;
function setup() {
    createCanvas(400, 400);
    piY = map(PI, -yScale, yScale, height, 0);
    origin = map(0, -yScale, yScale, height, 0);
    piDiv = createDiv(sqrt(piSq));
    piDiv2 = createDiv(PI);
    piDiv.style("color", "#000").style("font-size", "72px");
    frameRate(10);
}

function draw() {
    background(41);
    // translate(0, -height / 2);
    let deno = it * it;
    piSq += 6 / deno;
    pi = sqrt(piSq);
    history.push(pi);
    stroke(255, 0, 0);
    line(0, piY, width, piY);
    line(0, origin, width, origin);
    stroke(255);
    noFill();
    const spacing = width / history.length;
    beginShape();
    for(let i = 0; i < history.length; i++) {
        const x = spacing * i;
        const y = map(history[i], -yScale, yScale, height, 0);
        vertex(x + 10, y);
    }
    endShape();
    piDiv.html(pi);
    it++;
}