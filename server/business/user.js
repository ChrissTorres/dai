const userDao = require( "../dao/user" );

const login = function( req, res ) {
	let user = {
		username: req.body.username,
		password: req.body.password
	}
	userDao.login( user.username, user.password ).then( ( success ) => {
		if( success == 1 ) {
			userDao.getIdByUsername( user.username ).then( ( id ) => {
				console.log( id );
				res.send( id.toString( ) );
			} )
		} else {
			res.status( 401 ).send( "No logueado" );
		}
	} ).catch( ( error ) => {
		res.status( 500 ).send( error );
	} );
}

const getMyPets = function( req, res ) {
	let userId = req.body.id;
	userDao.getMyPets( userId ).then( ( success ) => {
		res.send( success );
	} ).catch( ( error ) => {
		res.status( 500 ).send( error );
	} );
}

module.exports.login = login;
module.exports.getMyPets = getMyPets;