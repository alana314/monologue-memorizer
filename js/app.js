$(document).ready(function(){
	var i = 2;
	$('.monologueenter').text(localStorage.monologue);
	if(typeof(localStorage.monologue) != 'undefined')
	{
		var sentences = localStorage.monologue.split(/([.|\!|?])/);
	}else
	var sentences = '';
	if(typeof(sentences[0]) != 'undefined' && typeof(sentences[1]) != 'undefined')
	{
		$('.monologue').append(sentences[0] + sentences[1] + ' ');
	}

	$('button.save').click(function(){
		localStorage.monologue = $('.monologueenter').val();
		sentences = localStorage.monologue.split(/([.|\!|?])/);
		i = 2;
		if(typeof(sentences[0]) != 'undefined' && sentences[1] != 'undefined')
		{
			$('.monologue').text('').append(sentences[0] + sentences[1] + " ");
		}
		$('.savemessage').text("Saved, now tap on text below");
	});

	$('button.reset').click(function(){
		localStorage.monologue = '';
		$('.monologueenter, .monologue').text('');
	});

	$('.monologue').click(function(){
		var monologue = localStorage.monologue.replace(/(?:\r\n|\r|\n)/g, '<br>');
		sentences = monologue.split(/([.|\!|?])/);
		if(typeof(sentences[i]) != 'undefined' && typeof(sentences[i + 1] != 'undefined'))
		{
			$('.monologue').append(sentences[i] + sentences[i + 1] + ' ');
			i+=2;
		}else
		{
			i = 2;
			$('.monologue').text('');
		}

	});

	$('button.restart').click(function(){
		i = 2;
		$('.monologue').text('');
		var monologue = localStorage.monologue.replace(/(?:\r\n|\r|\n)/g, '<br>');
		sentences = monologue.split(/([.|\!|?])/);
		if(typeof(sentences[0]) != 'undefined' && typeof(sentences[1]) != 'undefined')
		{
			$('.monologue').text('').append(sentences[0] + sentences[1] + " ");
		}
	});
});

