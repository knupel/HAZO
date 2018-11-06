// link between commit and user
function link() {
  for(var i = 0 ; i < agent.length ; i++) {
    for(var k = 0 ; k < node.length ; k++) {
      var agent_x = agent[i].get_pos_x();
      var agent_y = agent[i].get_pos_y();
      var node_x = node[k].get_pos_x();
      var node_y = node[k].get_pos_y();
      stroke(0);
      noFill();
      strokeWeight(1);
      line(agent_x,agent_y,node_x,node_y);
    }
  }
}


















// node or commit ?
var node = [];

function nodes_setting() {
  node[0] = new Node('Hirkhouf commit');
  var x = random(windowWidth);
  var y = random(windowHeight);
  var z = random(-windowHeight/2,windowHeight/2);
  node[0].position(x,y,z);
}


function nodes() {
  for(var i = 0 ; i < node.length ; i++) {
    var node_x = node[i].get_pos_x();
    var node_y = node[i].get_pos_y();

    var size = 25;
    noStroke();
    fill(0);
    ellipse(node_x,node_y,size,size);
    // rotateX(frameCount * 0.01);
    // rotateY(frameCount * 0.01);
    // box(50);
    fill(255);
    textAlign(CENTER);
    textFont(myFont);
    var text_size = 16;
    textSize(text_size);
    text(node[i].get_name(),node_x,node_y +(text_size *1.5));
  }
}




















// user
var agent = [];

function agents_setting() {
  agent[0] = new Agent('Dinh');
  agent[1] = new Agent('Stan');
}

function agents() {
  // set
  var x = mouseX ;
  var y = mouseY;
  agent[0].position(x,y);
  x = windowWidth -x;
  y = windowHeight -y;
  agent[1].position(x,y);
  fill(255);

  for(var i = 0 ; i < agent.length ; i++) {
    agent[i].set_push(50);
  }
  

  // display
  for(var i = 0 ; i < agent.length ; i++) {
    var agent_x = agent[i].get_pos_x();
    var agent_y = agent[i].get_pos_y();
    var size = agent[i].get_push();

    fill(255);
    noStroke();
    ellipse(agent_x,agent_y,size,size);


    fill(0);
    textAlign(CENTER);
    textFont(myFont);
    var text_size = 24;
    textSize(text_size);
    text(agent[i].get_name(),agent_x,agent_y +(text_size *1.3));
  }
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