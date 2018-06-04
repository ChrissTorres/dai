function HomeView( ) {

	this.showAnimals = function( animals ) {
		let table = document.getElementById( "animals" );
		animals = JSON.parse( animals );	
		console.log( animals )
		for ( let j in animals ) {
			let row = document.createElement( "tr" );
			for( let i in animals[ j ] ) {
				let td = document.createElement( "td" );
				td.innerHTML = animals[ j ][ i ];
				row.appendChild( td );
			}
			table.appendChild( row );
		}
	}
} 