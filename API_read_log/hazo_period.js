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
	this.commits_period = [];
	this.period;
	this.size;

	this.init = function() {
		this.period = this.year + "_" + this.month;
	}

	this.add = function(commit) {
		this.commits_period.push(commit);
		this.size = this.commits_period.length;	
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

	this.get_commit = function(target) {
		if(target > 0 && target < this.commits_period.length) {
			return this.commits_period[target];
		} else return null;
	}
}