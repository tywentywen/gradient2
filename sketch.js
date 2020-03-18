function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(30);
}

function draw() {
	background(0);
	noStroke();
	let time = (millis() / 1000) * (-mouseY)/400;
	console.log(mouseY);

	for (let i = 0; i < windowHeight; i++){
		fill(127 + 127 * (sin(i * 0.01 + time)),
				 127 + 127 * (sin(i * 0.015 + time)),
				 127 + 127 * (sin(i * 0.03 + time)));
		ellipse(500 + 100 * sin(i * 0.02 + time), 50 + i, 50 + 40 * sin(i * 0.005 + time));
	}

}



function setGradient(c1, c2) {
  // noprotect
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}
