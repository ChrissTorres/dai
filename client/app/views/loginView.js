function LoginView( ) {
	this.init = function( ) {
		document.getElementById( "message" ).style.display = "none";
		
		document.getElementById( "loginForm" ).addEventListener( "submit" , function ( e ) {
			let username = document.getElementById( "username" ).value;
			let password = document.getElementById( "pwd" ).value;
			loginController.login( username, password );
		} );
	}
	
	this.showMessage = function( message ) {
		let messageBox = document.getElementById( "message" );
		messageBox.innerHTML = message;
		messageBox.style.display = "block";
	}
}