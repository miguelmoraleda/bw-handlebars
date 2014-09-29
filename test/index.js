var bigwheelobjectmodel = require( 'bw-objmodel' ),
	bigwheelhandlebars = require( '../' ),
	model = bigwheelobjectmodel( require( './data' ) ),
	hb = bigwheelhandlebars( '<p>Hello {{name}}</p>' ),
	output = function( out ) {

		console.log( 'using final pass:', out );
	};

// all of the following will output: <p>Hello Matti and Teppo</p>
model( 'main' )( hb )( output );
console.log( 'using function notation:', model( 'main' )( hb )() );
console.log( 'using value variable:', model( 'main' )( hb ).value );

model( 'main' )( bigwheelhandlebars( 'What\'s up {{name}}?' ) )( output );