var random = function(array){
  var randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

var x = ['In the middle of winter I at last discovered that there was in me an invincible summer', 'Great things never come from comfort zones', 'The harder you work for something, the greater you\'ll feel when you achieve it', "Don’t Let Yesterday Take Up Too Much Of Today"]

$('select').change(function(){

	$('select option:selected')
	var div = $('<div id="qoute"></div>')
	div.text(random(x))
	$('#text-area').append(div)
	div.css('z-index', '2')
	div.css('cursor', 'pointer')
	div.css('width', '100%')
	div.css('height', '100%')
	div.css('position', 'fixed')
	div.css('background-color', 'rgba(0,0,0,0.5)')
	div.css('top', '0')
	div.css('left', '0')
	div.css('bottom', '0')
	div.css('right', '0')
	div.css('padding-top', '269px')
	div.css('color', '#fff')
	div.css('font-size', '31px')
	div.click(off)
})

function off(){
  $("#qoute").remove();
}


// $('select').change(function() {
	// if( $( "select option:selected" ).text() === 'excellent' ){
		// alert(random(x))
	// }

// })

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
