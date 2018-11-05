/**
Node class
2018-2018
v 0.0.1
*/
function Node(name) {
	this.pos_x = 0;
	this.pos_y = 0;
	this.pos_z = 0;
	this.name = name;
	this.size = 0 ;


	this.position = function(x,y,z) {
		this.pos_x = x;
		this.pos_y = y;
		this.pos_z = z;
	}
  // set
	this.set_size = function(size) {
		this.size = size;

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

	this.get_size = function() {
		return this.size;
	}
}