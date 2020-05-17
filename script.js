// $('select').change(function() {
// 	if( $( "select option:selected" ).text() === 'excellent' ){
// 		var div = $('<div>' + 'hello' + '</di>' )
// 		$('#exc').append(div);
// 	}
// })


var content = $('textarea').val()

$('button').click(function(){
	console.log('hi')

	if( $( "select option:selected" ).text() === 'excellent' ){

	var div = $('<div></di>');
	div.text($('textarea').val()) 

	$('#exc').append(div);
	$('textarea').val(' ')

}
})
