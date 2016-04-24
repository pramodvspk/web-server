//Use exports to expose middleware

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
module.exports = middleware