var handlebars = require( 'handlebars' );

module.exports = function( data ) {

	var template = handlebars.compile( data );

	return function( toTemplate ) {

		var rVal = function( passto ) {

			if( passto )
				return passto( rVal.value );
			else
				return rVal.value;
		};

		rVal.value = template( toTemplate );

		return rVal;
	}
};