var result;
function load_log(file_name) {
  result = loadStrings('log/'+file_name);
}

var target_log = 0;
var colour_font = 0;
function draw_log(font,size) {
	var time_to_switch_user = 30;

	if(frameCount%time_to_switch_user == 0) {
		// target_log = floor(random(result.length));
		target_log++;
		compute_diameter_period();
		add_period();
	} 
  
  add_commit(result[target_log]);
  
  var date = commits[commits.length-1].get_time();
  var author = commits[commits.length-1].get_author();
  var type = commits[commits.length-1].get_type();
  var path = commits[commits.length-1].get_path();
  
  display_log(font,size,author,date,type,path);
}


var hazo_diameter =0.0;
function compute_diameter_period() {
	if(periods != null && periods.length > 0) {
		var diam = [];
		for(var i = 0 ; i < periods.length ; i++) {
			diam[i] = periods[i].get_length();
			hazo_diameter += (parseFloat(diam[i]) *.01);
		}
	}
}


function display_period() {
	var diam = hazo_diameter;
	for(var i = 0 ; i < periods.length ; i++) {
		diam -periods[i].get_length();
		text(i+1 + ' | ' + periods[i].get_length() + ' | ' +diam,windowWidth/2, (i+1) *20);
		stroke(periods[i].get_fill());
		noFill();
		ellipse(windowWidth/2,windowHeight/2,diam,diam);
	}
}




var periods = [];
var commits = [];
var commit_buffer;
function add_commit(raw_commit) {
	// add pure commit
	var s = split(String(raw_commit),'|');
	commit_buffer = new Commit();
	commit_buffer.set(s[0],s[1],s[2],s[3]);
	commits.push(commit_buffer);

  // add period and commit for this period
  
}


function add_period() {
	var add_is = true;
	if(periods.length > 0) {	
		var new_period = commit_buffer.get_year() + "_" + commit_buffer.get_month();
		for(var i = 0 ; i < periods.length ; i++) {			
			var period = periods[i].get_period();	
			if(period == new_period) {
				periods[i].add(commit_buffer);
				add_is = false;
				break;
			}	
		}			
	} 

	if(add_is) {
		var year = commit_buffer.get_year();
		var month = commit_buffer.get_month();
		var p = new Period(year,month);
		p.init();
		periods.push(p);
		p.add(commit_buffer);
		
		for(i = 0 ; i < periods.length ; i++) {
			var hue = random(360);
			var c = color(hue,100,100);
			periods[i].set_fill(c);
		}
		
	}
}

















function display_log(font,size,author,date,type,path) {
	colour_inc(.2,0,0);
	noStroke();
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

	if(radius_log < 0) {
		growth_is = false;
	}

	var angle = frameCount *speed;
	var x = cos(angle) *radius_log;
	var y = sin(angle) *radius_log;
	return createVector(x,y);
}
