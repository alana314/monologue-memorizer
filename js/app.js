$(document).ready(function(){
	var i = 1;
	$('.monologueenter').text(localStorage.monologue);
	if(typeof(localStorage.monologue) != 'undefined')
	{
		var sentences = localStorage.monologue.split(/[.|\!|?]/);
	}else
	var sentences = '';
	if(typeof(sentences[0]) != 'undefined')
	{
		$('.monologue').append(sentences[0] + ". ");
	}

	$('button.save').click(function(){
		localStorage.monologue = $('.monologueenter').val();
		if(typeof(sentences[0]) != 'undefined')
		{
			$('.monologue').append(sentences[0] + ". ");
		}
	});

	$('button.reset').click(function(){
		localStorage.monologue = '';
		$('.monologueenter, .monologue').text('');
	});

	$('.monologue').click(function(){
		var monologue = localStorage.monologue.replace(/(?:\r\n|\r|\n)/g, '<br>');
		sentences = monologue.split(/[.|\!|?]/);
		if(typeof(sentences[i]) != 'undefined')
		{
			$('.monologue').append(sentences[i] + ". ");
			i++;
		}else
		{
			i = 0;
			$('.monologue').text('');
		}

	});
	$('button.restart').click(function(){
		i = 1;
		$('.monologue').text('');
	});
});
