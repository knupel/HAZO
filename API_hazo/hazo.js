/**
* Hazo
* 2018-2018
* Hazo is a tool to explore the github architectory project dynamicaly
*/
var version = 'version 0.0.2';
var api_name ='hazo';

var myFont;

 
function setup() {
  // createCanvas(windowWidth, windowHeight,WEBGL);
  createCanvas(windowWidth, windowHeight);
  myFont = loadFont('assets/Tokyo-OneSolid.otf');
  users_setting();
  nodes_setting();

}




function draw() {
  background(255,0,0);
  link();
  users();
  nodes();
  hazo_version();
}


function mousePressed() {
  var x = random(windowWidth);
  var y = random(windowHeight);
  var z = random(-windowHeight/2,windowHeight/2);
  node[0].position(x,y,z);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



















