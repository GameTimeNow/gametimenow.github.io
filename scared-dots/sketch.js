var font;
var vehicles = [];
var t = "GAMES";
var fsize = 192;
var r = 8;
var sf = .1;
var rainbow = true;

function preload(){
	font = loadFont("AvenirNextLTPro-Demi.otf");
}

function setup(){
	createCanvas(800, 300);
	background(30, 31, 32);
	textSize(fsize);
	var tWidth = textWidth(t);
	while(tWidth>width-20){
		fsize -= 20;
		r -= 1;
		sf += .1;
		textSize(fsize);
		tWidth = textWidth(t);
	}
	var points = font.textToPoints(t, (width-tWidth-20)/2, 200, fsize, {sampleFactor:sf})
	//var points = font.textToPoints(t, 20, 200, 192)
	for (var i = 0; i<points.length;i++){
		var p = points[i];
		var vehicle = new Vehicle(p.x, p.y);
		vehicles.push(vehicle);
	}
}

function draw(){
	colorMode(RGB,255,255,255);
	background(30, 31, 32);
	for (var i = 0; i < vehicles.length; i++){
		var v = vehicles[i];
		v.behaviours();
		v.update();
		v.show();
	}
}

function mousePressed() {
	for (var i = 0; i<vehicles.length;i++){
		var v = vehicles[i];
		v.vel=p5.Vector.random2D().mult(30)
	}
}

function toggleRainbow(){
	rainbow = !rainbow;
}
