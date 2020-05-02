// font manager
var font_title:p5.Font;
var font_current:p5.Font;
function load_font(p:p5):void {
  font_title = p.loadFont('assets/Tokyo-OneSolid.otf');
  font_current = p.loadFont('assets/DIN-Medium.otf');
  // font_current = loadFont('assets/InterstateCondMono.otf');
}
// version
function hazo_version(p:p5, font:p5.Font, size:number):void {  
  p.fill(0,0,0,1);
  p.noStroke();
  p.textFont(font);
  p.textAlign(p.CENTER);
  
  p.textSize(size);
  // p.text(api_name,p.windowWidth/2,p.windowHeight/2);
  p.textSize(size/2);
  //p.text(version,p.windowWidth/2,p.windowHeight/2+size/2);
}