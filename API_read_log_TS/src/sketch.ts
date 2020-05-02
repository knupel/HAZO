/**
* HAZO
* v 0.1.0
* 2019-2019
* Hazo is a tool to explore the github architectory project dynamicaly
*/
import vec from './vector/Z_vec'
import vec2 from './vector/Z_vec2'
import vec3 from './vector/Z_vec3'
import vec4 from './vector/Z_vec4'

var version:string = 'version 0.0.2';
var api_name:string = 'hazo log reader';

var sketch = (p:p5) => {
  p.preload = () => {

  }

  p.setup = () => {
    w = p.windowWidth;
    h = p.windowHeight;
    p.createCanvas(w,h,p.WEBGL);
    p.colorMode(p.HSB,1,1,1,1);
    colour_bg.set_x(hue_random(p));
  }

  p.draw = () => {
    background(p,colour_bg);
    // hazo_version(p,font_title,60);

    p.fill(0,0,0,1);
    p.rect(p.mouseX -(w/2),p.mouseY -(h/2),50,50);
    // p.square(p.mouseX -(w/2),p.mouseY -(h/2),50); // proof this types P5 is not the last
    p.textSize(50);
    p.text("trucbidule",p.mouseX -(w/2),p.mouseY -(h/2)); // don't work ???
  }

  p.windowResized = () => {
    w = p.windowWidth;
    h = p.windowHeight;
    p.createCanvas(w,h,p.WEBGL);
  }

  p.mousePressed = () => {
    colour_bg.set_x(hue_random(p));
  }
}

var hazo = new p5(sketch);

let w:number = 0;
let h:number = 0;

let colour_bg:vec4 = new vec4(1);




function hue_random(p:p5):number {
  return p.random(1);
}

function background(p:p5,c:vec4):void {
  p.background(c.x(),c.y(),c.z(),c.w());
}









