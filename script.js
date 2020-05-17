$('select').change(function() {
	if( $( "select option:selected" ).text() === 'excellent' ){
		alert('Good to know!!')
	}

})

var content = $('textarea').val()

$('button').click(function(){
	console.log('hi')

	if( $( "select option:selected" ).text() === 'excellent' ){

	var div = $('<div></di>');
	div.css('border', '2px solid #ccc')
	div.css('padding', '7px 7px 7px 7px')
	div.css('margin', '5px 5px 5px 5px')
	div.css('box-shadow', '0px 8px 16px 0px rgba(0,0,0,0.2)')
	div.css('background-color', 'rgba(255, 255, 153, 0.5)')
	div.text($('textarea').val())

	$('#exc').append(div);
	$('textarea').val(' ')

} else if ($( "select option:selected" ).text() === 'good' ) {
	var div = $('<div></di>');
	div.css('border', '2px solid #ccc')
	div.css('padding', '7px 7px 7px 7px')
	div.css('margin', '5px 5px 5px 5px')
	div.css('box-shadow', '0px 8px 16px 0px rgba(0,0,0,0.2)')
	div.css('background-color', 'rgb(153, 255, 153, 0.4)')
	// div.css('disply', 'inline')
	div.text($('textarea').val())

	$('#gd').append(div);
	$('textarea').val(' ')
} else if ($( "select option:selected" ).text() === 'down' ) {
	var div = $('<div id=""></di>');
	div.css('border', '2px solid #ccc')
	div.css('padding', '7px 7px 7px 7px')
	div.css('margin', '5px 5px 5px 5px')
	div.css('background-color', 'rgb(255, 204, 203, 0.5)')
	div.text($('textarea').val())

	$('#dn').append(div);
	$('textarea').val(' ')
} else if($('textarea').val() === ''){
	alert('you should type something to be posted')
}
})
