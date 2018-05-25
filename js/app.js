$(document).ready(function(){
	var i = 1;
	$('.monologueenter').text(localStorage.monologue);
	var sentences = localStorage.monologue.split(/[.|\!|?]/);
	if(typeof(sentences[0]) != 'undefined')
	{
		$('.monologue').append(sentences[0] + ". ");
	}

	$('button.save').click(function(){
		localStorage.monologue = $('.monologueenter').val();
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

