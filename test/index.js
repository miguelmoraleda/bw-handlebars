var promise = require( 'promise' ),
	bigwheelhandlebars = require( '../' ),
	model = require( './data' ),
	srcHBS = '<p>Hello {{name}}</p>';

promise.resolve( model.main ).then( bigwheelhandlebars( srcHBS ) ).then( function( html ) {

	console.log( html );
});