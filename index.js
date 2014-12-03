var handlebars = require( 'handlebars' ),
	promise = require( 'promise' );

module.exports = function( data ) {
	
	return new promise( function( onOk, onErr ) {

		try {

			if( data.model && data.dataHBS ) {
			
				data.dataDOM = handlebars.compile( data.dataHBS.trim() )( data.model );

				onOk( data );
			} else if( !data.dataHBS ) {

				onErr( new Error( 'no handlebars data passed' ) );
			} else {

				onErr( new Error( 'no model defined in data' ) );
			}
		} catch( e ) {

			onErr( e );
		}
	});
};	
