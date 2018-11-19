/**
Commmit
v 0.0.1
2018-2018
*/
function Commit() {
	this.author;

	this.timestamp;
	this.formattedTime;

	this.year;
	this.month;
	this.day;
	this.hour;
	this.minute;

	this.commit_type;
	this.path;


	this.set = function(timestamp,author,type,path) {
		// time
		this.timestamp = timestamp;

		var date = new Date(parseInt(timestamp)*1000);
		this.year = date.getFullYear();
		this.month = date.getMonth();
		this.day = date.getDay();
		this.hour = date.getHours();
		this.minute = '0' + date.getMinutes();
		this.formattedTime = this.year + '/' + this.month + '/' + this.day + ' at ' + this.hour + ':' + this.get_minute();

		// author
		this.author = author;

		// type	
		if(type == 'M') {
			this.commit_type ='MODIFICATION FILE';
		} else if(type == 'D') {
			this.commit_type ='DELETE FILE';
		} else if(type == 'A') {
			this.commit_type ='ADD FILE';
		} else {
			this.commit_type ='THIS COMMMIT IS SO WEIRD';
		}
    
    // commit path
		this.path = path;
	}

	this.get_time = function() {
		return this.formattedTime;
	}

	this.get_timestamp = function() {
		return this.timestamp;
	}

	this.get_year = function() {
		return this.year;
	}

	this.get_month = function() {
		return this.month;
	}

	this.get_day = function() {
		return this.day;
	}

	this.get_hour = function() {
		return this.hour;
	}

	this.get_minute = function() {
		return this.minute.substr(-2);
	}

	this.get_author = function() {
		return this.author;
	}

	this.get_type = function() {
		return this.commit_type;
	}

	this.get_path = function() {
		return this.path;
	}
}