
let block1, block2;
let count = 0;
let digits = 9;
let countDiv;
let timeSteps = 5 * Math.pow(10, digits - 3);
// let timeSteps = 50000000;
function setup() {
    createCanvas(600, 600);
    block1 = new Block(150, 20, 1, 0, 0);
    const m2 = pow(100, digits - 1);
    block2 = new Block(300, 100, m2, -5/timeSteps, 20);
    countDiv = createDiv(count);
    countDiv.style("font-size", "72px");
}

function calcMomentum() {
    let m1 = block1.v * block1.m;
    let m1_ = (m1 < 0) ? -m1 : m1;
    let m2 = block2.v * block2.m;
    let m2_ = (m2 < 0) ? -m2 : m2;
    print(m1_ + m2_, m1_, m2_, block1.v, block2.v);
}

function draw() {
    background(41);
    for(let i = 0; i < timeSteps; i++){
        if (block1.collide(block2)) {
            const v1 = block1.bounce(block2);
            const v2 = block2.bounce(block1);
            block1.v = v1;
            block2.v = v2;
            count++;
        }
        if (block1.hitWall()) {
            block1.reverse();
            count++;
        }
        block1.update();
        block2.update();
    }
    block1.show();
    block2.show();

    countDiv.html(nf(count, digits));
}