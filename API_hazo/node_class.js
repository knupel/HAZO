/**
Node class
2018-2018
v 0.0.1
*/
function Node(name) {
	this.pos_x = 0;
	this.pos_y = 0;
	this.pos_z = 0;

	this.name = name; // folder or file name
	this.size = 0; // the represente the size in octet, or line ?
	this.level = 0; // 0 is the root
	this.type = 0; // 0 is file > 1 is folder
	this.time_stamp = []; // time stamp of each commit



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