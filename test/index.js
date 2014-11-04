var promise = require( 'promise' ),
	test = require( 'tape' ),
	bigwheelhandlebars = require( '../' ),
	model = require( './data' ),
	srcHBS = '<p>Hello {{name}}</p>';

test( 'testing handlebars templating', function( t ) {

	t.plan( 1 );

	promise.resolve( { model: model.main, dataHBS: srcHBS } )
	.then( bigwheelhandlebars )
	.then( function( data ) {

		t.equal( data.dataDOM, '<p>Hello Matti and Teppo</p>' );
	})
	.catch( function( e ) {

		t.error( e, 'failed generating model through template value' );
	});	
});
