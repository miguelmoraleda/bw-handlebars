var handlebars = require( 'handlebars' ),
	promise = require( 'promise' );

module.exports = function( data ) {
	
	return new promise( function( onOk, onErr ) {

		try {

			if( data.model ) {
			
				data.dataDOM = handlebars.compile( data.dataHBS )( data.model );

				onOk( data );
			} else {

				onErr( new Error( 'no model defined in data' ) );
			}
		} catch( e ) {

			onErr( e );
		}
	});
};	