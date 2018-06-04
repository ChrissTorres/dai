function HomeController( $router ) {
	this.init = function( ) {
		// Recuperar el ID
		let id = localStorage.getItem( "id" );
		if( !id ) {
			$router.redirect( "login" );
		}
		// Me traigo los animales
		$router.post( "http://localhost:3000/getMyPets", "id=" + id ).then( ( success ) => {
			console.log( success );
			homeView.showAnimals( success );
		} ).then( ( error ) => {
			console.log( error );
		} );
	}
} 