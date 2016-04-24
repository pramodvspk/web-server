var express= require('express');
var app= express();
var port= 3000;

var middleware= {
	requireAuthentication: function(req, res, next){
		console.log("Private route hit!!");
		next();
	},
	logger: function(req, res, next){
		console.log("Request " + req.method+" "+req.originalUrl+" at time "+new Date().toString());
		next();
	}
}

app.use(middleware.logger)

//app.use(middleware.requireAuthentication);

app.get('/about', middleware.requireAuthentication , function(req, res){
	res.send("This is our about page!!!");
});

app.use(express.static(__dirname+"/Public"));


app.listen(port, function(){
	console.log("The express server started at port: "+port)
	console.log(app.stack)
});

