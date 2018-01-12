//Libraries
const http = require('http');
//parse URL
const url = require('url');
//inspect variables
const util = require('util');
var getarea=require(__dirname+"/area.js")

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; 



app.get('/getArea',function(req, res){
	var l1=req.query.side1
	var l2=req.query.side2
	var ris=getarea([l1,l2])


	var area={
		area: ris
	}

	//var area=funarea.calcArea([l1,l2])
	//res.json(""+area.area)
	res.write(JSON.stringify(area))
	res.end()
})





//listen in a specific port
app.listen(port);
 
//check status
console.log('Server running at port:' + port);