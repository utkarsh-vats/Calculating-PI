
let pi = 4;
let iterations = 0;
let history = [];
let piDiv, piDiv2;
function setup() {
  createCanvas(600, 400);
  piDiv = createDiv(pi * 4);
  piDiv2 = createDiv(PI);
  piDiv.style("color", "#000").style("font-size", "72px");
}

function draw() {
  background(41);
  let den = iterations * 2 + 3;
  if(iterations % 2 == 0) {
    pi -= (4 / den);
  } else {
    pi += (4 / den);
  }
  history.push(pi);
  let piY = map(PI, 2, 4, height, 0);
  stroke(255, 0, 0);
  line(0, piY, width, piY);
  let spacing = width / history.length;
  stroke(255);
  noFill();
  beginShape();
  for(let i = 0; i < history.length; i++){
    let x = i * spacing;
    let y = map(history[i], 2, 4, height, 0);
    vertex(x, y);
  }
  endShape();
  print(history.length);
  piDiv.html(pi);
  piDiv2.html(PI);
  iterations++;
}