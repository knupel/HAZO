// font manager
var font_title;
var font_current;
function load_font() {
  font_title = loadFont('assets/Tokyo-OneSolid.otf');
  font_current = loadFont('assets/DIN-Medium.otf');
  // font_current = loadFont('assets/InterstateCondMono.otf');
}
// version
function hazo_version(font,size) {
  var text_size = size;
  
  fill(0);
  noStroke();
  textFont(font);
  textAlign(CENTER);
  
  textSize(text_size);
  text(api_name,windowWidth/2,windowHeight/2);
  textSize(text_size/2);
  text(version,windowWidth/2,windowHeight/2+text_size/2);
}