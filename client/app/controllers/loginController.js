function LoginController( $router ) {
	this.init = function( ) {
		loginView.init( );
	}
	
	this.login = function( username, password ) {
		$router.post( "http://localhost:3000/login", 
		"username=" + username + "&password=" + password )
		.then( ( success ) => {
			localStorage.setItem( "id", success );
			console.log( "El id es ", success );
			$router.redirect( "home" );
		} ).catch( ( error ) => {
			loginView.showMessage( "Contraseña o username no corresponden" );
			console.log( error );
		} );
	}
}