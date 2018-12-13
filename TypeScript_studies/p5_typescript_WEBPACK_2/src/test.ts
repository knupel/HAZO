var sketch = (p: p5) => {

    const morph = new Morph();

    p.preload = () => {

    }
    
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        morph.setup(p);
    }
    
    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }
    
    p.draw = () => {
        p.background(255,0,0);
        morph.draw(p);        
    }
}

var sketchP = new p5(sketch);
