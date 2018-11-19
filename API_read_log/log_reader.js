var result;
function load_log(file_name) {
  result = loadStrings('log/'+file_name);
}

var target_log = 0;
var colour_font = 0;

function draw_log(font,size) {
	var time_to_switch_user = 600;
	if(frameCount%time_to_switch_user == 0) {
		target_log = floor(random(result.length));
	} 
  
  var s = split(String(result[target_log]),'|');
  var commit = new Commit();
  commit.set(s[0],s[1],s[2],s[3]);

  var date = commit.get_time();
  var author = commit.get_author();
  var type = commit.get_type();
  var path = commit.get_path();
  
  display_log(font,size,author,date,type,path);
}




function display_log(font,size,author,date,type,path) {
	colour_inc(.2,0,0);
	fill(color(colour_log_x,colour_log_y,colour_log_z));
	textFont(font);
  // textAlign(LEFT);
	var offset_y = [];
  for(var i = 0 ; i < 4 ; i++) {
  	offset_y[i] =  i*(size *1.1);
  }
  
  var pos = position(.01,windowWidth/6);
  var pos_x =  mouseX + pos.x;
  var pos_y =  mouseY + pos.y;
  textSize(size*2);
  text(author,pos_x,pos_y +offset_y[0] -(size *.4));
  textSize(size);
  text(date,pos_x,pos_y +offset_y[1]);
  text(type,pos_x,pos_y +offset_y[2]);
  text(path,pos_x,pos_y +offset_y[3]);
}


function log_date(timestamp) { 
	var date = new Date(parseInt(timestamp)*1000);
	var year = date.getFullYear();
	var month = date.getMonth();
	var day = date.getDay();
	var hour = date.getHours();
	var minute = "0" + date.getMinutes();
	var formattedTime = year + '/' + month + '/' + day + ' at ' + hour + ':' + minute.substr(-2);
	return formattedTime;
}

function log_author(author) {
	return author;
}

function log_type(type) {
	var commit_type;
	if(type == 'M') {
		commit_type ='MODIFICATION FILE';
	} else if(type == 'D') {
		commit_type ='DELETE FILE';
	} else if(type == 'A') {
		commit_type ='ADD FILE';
	} else {
		commit_type ='THIS COMMMIT IS SO WEIRD';
	}
	return commit_type;
}

function log_path(path) {
	return path;
}


var colour_log_x = 0;
var colour_log_y = 100;
var colour_log_z = 100;
function colour_inc(speed_x,speed_y,speed_z) {
	colour_log_x += speed_x;
	colour_log_y += speed_y;
	colour_log_z += speed_z;
	if(colour_log_x > 360) colour_log_x = 0;
	if(colour_log_y > 100) colour_log_y = 0;
	if(colour_log_z > 100) colour_log_z = 0;
}


var radius_log = 0;
var growth_is = false;
function position(speed,dist_max) {
	var inc_radius = speed*5;
	if(!growth_is) {
		radius_log += inc_radius;
	} else {
		radius_log += (-1 *inc_radius);
	}

	if(radius_log > dist_max) {
		growth_is = true;
	} 
	if(radius_log <0) {
		growth_is = false;
	}


	var angle = frameCount *speed;
	var x = cos(angle) *radius_log;
	var y = sin(angle) *radius_log;
	return createVector(x,y);
}
