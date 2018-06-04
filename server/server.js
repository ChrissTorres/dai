const 	app = require( "express" )( ),
		router = require( "./app/router.js" ),
		bodyParser = require( "body-parser" );
		middleware = require( "./app/middleware" );
		PORT = 3000;

//usar body parser para acceder a los elementos de la página
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true } ) );
// Activar la autorizacion
middleware( app );
// Iniciamos el router
router( app );
app.listen( PORT );