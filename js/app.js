
document.addEventListener("DOMContentLoaded", function(event) {
	var i = 2
	
	document.querySelector('.monologueenter').value = localStorage.monologue

	
	if(typeof(localStorage.monologue) != 'undefined')
	{
		var sentences = localStorage.monologue.split(/([.|\!|?])/)
	}else
	var sentences = ''
	if(typeof(sentences[0]) != 'undefined' && typeof(sentences[1]) != 'undefined')
	{
		document.querySelector('.monologue').append(sentences[0] + sentences[1] + ' ')
	}

	document.querySelector('button.save').addEventListener('click', () => {
		localStorage.monologue = $('.monologueenter').val()
		sentences = localStorage.monologue.split(/([.|\!|?])/)
		i = 2
		if(typeof(sentences[0]) != 'undefined' && sentences[1] != 'undefined')
		{
			document.querySelector('.monologue').append(sentences[0] + sentences[1] + " ")
		}

		//add text "saved" to .savemessage
		document.querySelector('.savemessage').innerHTML = 'Saved, now tap on the text below'
	})

	document.querySelector('button.reset').addEventListener('click', () => {
		localStorage.monologue = ''
		document.querySelector('.monologueenter, .monologue').value = ''
	})

	document.querySelector('#sentence').addEventListener('change', () => {
		restart()
	})

	document.querySelector('#word').addEventListener('change', () => {
		restart()
	})

	document.querySelector('#linebreak').addEventListener('change', () => {
		restart()
	})

	const restart = () => {
		if (document.querySelector('#sentence').checked) {
			i = 2
			document.querySelector('.monologue').innerHTML = ''
			var monologue = localStorage.monologue.replace(/(?:\r\n|\r|\n)/g, '<br>')
			sentences = monologue.split(/([.|\!|?])/)
			if (typeof (sentences[0]) != 'undefined' && typeof (sentences[1]) != 'undefined') {
				$('.monologue').text('').append(sentences[0] + sentences[1] + " ")
			}
		}
		else if (document.querySelector('#word').checked) {
			i = 0
			var monologue = localStorage.monologue.replace(/(?:\r\n|\r|\n)/g, '<br/>')
			var words = monologue.split(/\s/)
			document.querySelector('.monologue').innerHTML = words[i] + " "
			i = 1
		}
		else if (document.querySelector('#linebreak').checked) {
			i = 0
			var monologue = localStorage.monologue.replace(/(?:\r\n|\r|\n)/g, '<br/>')
			var lines = monologue.split(/\<br\/\>/)
			document.querySelector('.monologue').innerHTML = lines[i] + "<br/>"
			i = 1
		}
	}

	//onClick of .monologue without jquery
	document.querySelector('.monologue').addEventListener('click', () => {
		//if #sentence is checked
		if(document.querySelector('#sentence').checked)
		{
			var monologue = localStorage.monologue.replace(/(?:\r\n|\r|\n)/g, '<br>')
			var sentences = monologue.split(/([.|\!|?])/)
			sentences = sentences.filter(function (n) { return n != "" })
			if (typeof (sentences[i]) != 'undefined') {
				document.querySelector('.monologue').append(sentences[i])
				if (typeof (sentences[i + 1] != 'undefined')) {
					if (['.', '!', '?'].includes(sentences[i + 1])) {
						document.querySelector('.monologue').append(sentences[i + 1] + " ")
						i += 2
					} else {
						document.querySelector('.monologue').append(" ")
						i += 1
					}
				}else{
					i = 2
					document.querySelector('.monologue').innerHTML = sentences[0] + sentences[1] + " "
				}
			} else //reset
			{
				i = 2
				document.querySelector('.monologue').innerHTML = sentences[0] + sentences[1] + " "
			}
		}else if(document.querySelector('#word').checked)
		{
			var monologue = localStorage.monologue.replace(/(?:\r\n|\r|\n)/g, '<br/>')
			var words = monologue.split(/\s/)
			words = words.filter(function (n) { return n != "" })
			if (typeof (words[i]) != 'undefined') {
				document.querySelector('.monologue').innerHTML = document.querySelector('.monologue').innerHTML + words[i] + " "
				i++
			} else //reset
			{
				i = 0
				document.querySelector('.monologue').innerHTML = words[i] + "<br/>"
				i++
				console.log("reset")
			}
		}else //line breaks
		{
			var monologue = localStorage.monologue.replace(/(?:\r\n|\r|\n)/g, '<br/>')
			var lines = monologue.split(/\<br\/\>/)
			lines = lines.filter(function (n) { return n != "" })
			if (typeof (lines[i]) != 'undefined') {
				document.querySelector('.monologue').innerHTML = document.querySelector('.monologue').innerHTML + lines[i] + "<br/>"
				i++
			} else //reset
			{
				i = 0
				document.querySelector('.monologue').innerHTML = lines[i] + "<br/>"
				i++
				console.log("reset")
			}
		}
	})

	$('button.restart').click(function(){
		restart()
	})


})