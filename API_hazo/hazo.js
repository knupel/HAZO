/**
* Hazo
* 2018-2018
* Hazo is a tool to explore the github architectory project dynamicaly
*/
var version = 'version 0.0.3';
var api_name ='hazo';

var myFont;

 
function setup() {
  // createCanvas(windowWidth, windowHeight,WEBGL);
  createCanvas(windowWidth, windowHeight);
  myFont = loadFont('assets/Tokyo-OneSolid.otf');
  agents_setting();
  nodes_setting();

}




function draw() {
  background(255,0,0);
  link();
  agents();
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





// version
function hazo_version() {
  var text_size = 60;
  textAlign(CENTER);
  textFont(myFont);
  fill(0);
  // if(mouseIsPressed) 
  textSize(text_size);
  text(api_name,windowWidth/2,windowHeight/2);
  textSize(text_size/2);
  text(version,windowWidth/2,windowHeight/2+text_size/2);
}


















