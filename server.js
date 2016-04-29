var express= require ('express');
var app = express();
var PORT = 3000; //variable en MAJUSCULE = Cste

//creation d'un nouvel objet
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

app.use(middleware.logger);// appel de la methode logger

//app.use(middleware.requireAuthentification); // faut specifier le middleware au début

/*app.get('/', function (req,res){//('/ le slash sert au routage')
	res.send('hello Katy!'); // sert a la redirection automatique si on tape que l'adresse URL
});*/

// /about
//About Us page

app.get('/about',middleware.requireAuthentification, function (req,res){//('/ le slash sert au routage')
	res.send('hello about page!!!');
	});

app.use(express.static(__dirname+"\\public")); 
//console.log("le server.js du console.log est affiché");

app.listen(3000, function (){
	console.log("le server.js demarre sur le port " + PORT+ "!");
}); 