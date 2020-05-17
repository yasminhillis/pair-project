$('select').change(function() {
	if( $( "select option:selected" ).text() === 'excellent' ){
		var div = $('<div>' + 'hello' + '</di>' )
		$('#exc').append(div);
	}
})
