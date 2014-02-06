var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	res.render('add');
	var newname = req.query.name;
	var newdescription = req.query.description;
	var JSONobject = {

			"name": newname,
			"description": newdescription,
			"imageURL":"http://lorempixel.com/400/400/people"


	};
	console.log(JSONobject);
	data["friends"].push(JSONobject);
 }