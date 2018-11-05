/**
User class
2018-2018
v 0.0.1
*/
function User(name) {
	this.pos_x = 0;
	this.pos_y = 0;
	this.name = name;
	this.push = 0 ;


	this.position = function(x,y) {
		this.pos_x = x;
		this.pos_y = y;
	}
  // set
	this.set_push = function(num) {
		this.push = num;

	}
  

  // get
	this.get_pos_x = function() {
		return this.pos_x;
	}

	this.get_pos_y = function() {
		return this.pos_y;
	}

	this.get_name = function() {
		return this.name;
	}

	this.get_push = function() {
		return this.push;
	}
}