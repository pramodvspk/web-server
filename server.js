var express= require('express');
var app= express();
var port= process.env.PORT || 3000;


var middleware= require('./middleware.js')

app.use(middleware.logger)

app.use(middleware.requireAuthentication);

app.get('/about', middleware.requireAuthentication , function(req, res){
	res.send("Hello welcome to our about page!!!");
});

app.use(express.static(__dirname+"/Public"));


app.listen(port, function(){
	console.log("The express server started at port: "+port)
	console.log(app.stack)
});

