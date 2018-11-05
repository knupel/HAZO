// link between commit and user
function link() {
  for(var i = 0 ; i < user.length ; i++) {
    for(var k = 0 ; k < node.length ; k++) {
      var user_x = user[i].get_pos_x();
      var user_y = user[i].get_pos_y();
      var node_x = node[k].get_pos_x();
      var node_y = node[k].get_pos_y();
      stroke(0);
      noFill();
      strokeWeight(1);
      line(user_x,user_y,node_x,node_y);
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
var user = [];

function users_setting() {
  user[0] = new User('Dinh');
  user[1] = new User('Stan');
}

function users() {
  // set
  var x = mouseX ;
  var y = mouseY;
  user[0].position(x,y);
  x = windowWidth -x;
  y = windowHeight -y;
  user[1].position(x,y);
  fill(255);

  for(var i = 0 ; i < user.length ; i++) {
    user[i].set_push(50);
  }
  

  // display
  for(var i = 0 ; i < user.length ; i++) {
    var user_x = user[i].get_pos_x();
    var user_y = user[i].get_pos_y();
    var size = user[i].get_push();

    fill(255);
    noStroke();
    ellipse(user_x,user_y,size,size);


    fill(0);
    textAlign(CENTER);
    textFont(myFont);
    var text_size = 24;
    textSize(text_size);
    text(user[i].get_name(),user_x,user_y +(text_size *1.3));
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