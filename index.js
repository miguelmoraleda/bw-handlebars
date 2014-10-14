var handlebars = require( 'handlebars' ),
	promise = require( 'promise' );

module.exports = function( template ) {

	var hbs = handlebars.compile( template );

	return function( data ) {

		return new promise( function( onOk, onErr ) {

			try {

				onOk( hbs( data ) );
			} catch( e ) {

				onErr( e );
			}
		});
	};	
};