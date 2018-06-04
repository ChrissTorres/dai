const con = require( "../dao/connection.js" );

const login = function( username, password ) {
	let query = "SELECT LOGIN( ?, ? )";
	return new Promise( ( resolve, reject ) => {
		con.query( query, [ username, password ], function ( error, result, fields ) { 
			if ( error ) {
				reject( error );
				return;
			}
			// NO hay errores, asi que podemos saber si se logueó o no
			let keys = Object.keys(result[0]);
			resolve( result[0][keys[0]] );
		});
	} );
}

const getMyPets = function( idUser ) {
	let query = "CAll GET_PETS_BY_OWNER( ? )";
	return new Promise( ( resolve, reject ) => {
		con.query( query, [ idUser ], function ( error, result, fields ) { 
			if ( error ) {
				reject( error );
				return;
			}
			result = result[ 0 ].map( function( animal ) {
				let output = {
					id: animal.ID_ANIMAL,
					name: animal.NAME,
					specie: animal.SPECIE,
					gender: animal.GENDER
				};
				return output
			} ); 
			console.log( result );
			resolve( result );
		});
	} );
}

const getIdByUsername = function( username ) {
	let query =  "SELECT `GET_ID_USER_BY_USERNAME`( ? )";
	return new Promise( ( resolve, reject ) => {
		con.query( query, [ username ], function ( error, result, fields ) { 
			if ( error ) {
				reject( error );
				return;
			}
		let keys = Object.keys(result[0]);
		let id = result[ 0 ][ keys[ 0 ] ];
		resolve( id );
		});
	} );
}

module.exports.login = login;
module.exports.getMyPets = getMyPets;
module.exports.getIdByUsername = getIdByUsername;