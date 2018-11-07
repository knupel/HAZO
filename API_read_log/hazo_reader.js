/**
* Hazo log reader
* 2018-2018
* Hazo is a tool to explore the github architectory project dynamicaly
*/
var version = 'version 0.0.1';
var api_name ='hazo log reader';

function preload() {
  load_font();
}
 
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB,360,100,100,100);
  background_random();
  load_log('processing.log');
}


function draw() {
  hazo_version(font_title,60);
  display_log(font_current,18);
}


function mousePressed() {
  background_random();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background_random();
}


function background_random() {
  background(random(360),100,100);
}






















