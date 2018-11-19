/**
Period
is use to store the commit by month
2018-2018
v 0.0.1
*/
function Period(year,month) {
// function Period() {	

	this.year = year;
	this.month = month;
	this.fill;
	this.stroke;
	this.thickness;
	this.commits = [];
	this.period;


	this.init = function() {
		this.period = this.year + "_" + this.month;
	}

	this.add = function(commit) {
		this.commits.push(commit);
	}

	this.set_fill = function(fill) {
		this.fill = fill;
	}

	this.set_stroke = function(stroke) {
		this.stroke = stroke;
	}

	this.set_thickness = function(thickness) {
		this.thickness = thickness;
	}


  // get

  this.get_fill = function() {
		return this.fill;
	}

	this.get_stroke = function() {
		return this.strokee;
	}

	this.get_thickness = function() {
		return this.thickness;
	}



	this.get_period = function() {
		return this.period;
	}

	this.get_year = function() {
		return this.year;
	}

	this.get_month = function() {
		return this.month;
	}

	this.get_length = function() {
		return this.commits.length;	
	}

	this.get_commit = function(target) {
		if(target > 0 && target < this.commits.length) {
			return this.commits[target];
		} else return null;
	}
}