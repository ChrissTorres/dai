const user = require( "../business/user.js" );

module.exports = function( app ) {
	app.get( "/" , function( req, res ) {
		res.send( "ola k ase" );
	} );
	
	app.post( "/getMyPets" , function( req, res ) {
		user.getMyPets( req, res );
	} );
	
	app.post( "/login" , function( req, res ) {
		user.login( req, res );
	} );
}