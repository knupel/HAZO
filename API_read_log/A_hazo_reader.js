/**
* Hazo log reader
* 2018-2018
* Hazo is a tool to explore the github architectory project dynamicaly
*/
var version = 'version 0.0.2';
var api_name ='hazo log reader';

function preload() {
  load_font();
}
 
function setup() {
  createCanvas(windowWidth,windowHeight);
  colorMode(HSB,360,100,100,100);
  background_random();
  background_hazo();
  load_log('processing.log');
}


function draw() {
  background_hazo();
  display_period();
  hazo_version(font_title,60);
  draw_log(font_current,18);
}


function mousePressed() {
  background_random();
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
  background_random();
}




var hue_bg,saturation_bg,brightness_bg,alpha_bg;
function background_random() {
  hue_bg = random(360);
  saturation_bg = 100;
  brightness_bg = 100;
  alpha_bg = 100;
}


function background_hazo() {
  background(hue_bg,saturation_bg,brightness_bg,alpha_bg);
}






















