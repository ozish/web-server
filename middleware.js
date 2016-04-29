//Use module exports to expose middleware
var middleware = {
	requireAuthentification : function(req,res,next){// le next permet de renvoyer une erreur
		console.log('private route hit')
		next(); 
	},
	logger: function (req,res,next){
		//new Date().toString()

		console.log('Request: '+ new Date().toString()+ ' '+ req.method+ ' ' + req.originalUrl);
		console.log(req) 
		next();
	}
};

module.exports = middleware;