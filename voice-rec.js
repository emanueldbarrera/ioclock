var VoiceRec = (function(){
	var startBtn = document.getElementById('start'),
	stopBtn = document.getElementById('stop'),
	final_span = document.getElementById('transcription'),
	interim_span = document.getElementById('intern'),
	recognition = new webkitSpeechRecognition();

	recognition.continuous = false;
	recognition.interimResults = true;
	recognition.lang = 'es-AR';
	//recognition.lang = 'en-GB';
	recognition.start();

	stopBtn.onclick = function(){
		recognition.stop();
	};
	recognition.onerror = function(event) {
	    if (event.error == 'no-speech') {
	      console.log('info_no_speech');
	      ignore_onend = false;
	    }
	    if (event.error == 'audio-capture') {
	      console.log('info_no_microphone');
	      ignore_onend = false;
	    }
	    if (event.error == 'not-allowed') {
	      if (event.timeStamp - start_timestamp < 100) {
	        console.log('info_blocked');
	      } else {
	        console.log('info_denied');
	      }
	      ignore_onend = false;
	    }
  	};
	var two_line = /\n\n/g;
	var one_line = /\n/g;
	function linebreak(s) {
	  return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
	}
	var first_char = /\S/;
	function capitalize(s) {
		  return s.replace(first_char, function(m) { return m.toUpperCase(); });
	}
	var final_transcript = '';
    var currentWord = "hola";
	
	  recognition.onresult = function(event) {
	  	/*console.log("exxxx");
	  	var interim_transcript = '';*/
	    for (var i = event.resultIndex; i < event.results.length; ++i) {
	    	var thisword = event.results[i][0].transcript.toLowerCase();
	    	if(thisword.indexOf("hola") >= 0 && currentWord === "hola"){
	    		main.addClass('container--active');
	    		Materialize.toast('Hoooooola! :)', 3000);
	    		Speech.talk("Hola");
				$('.clockycontainer').css('background-image', "url('svg/despiertonegro.png')");
	    		currentWord = "agenda";
	    	} else if(thisword.indexOf("agenda") >= 0 && currentWord === "agenda"){
	    		Materialize.toast("¿Cuándo?", 3000);
	    		Speech.talk("¿Cuándo?");
				$('.clockycontainer').css('background-image', "url('svg/asombro.png')");
	    		currentWord = "para";
	    	} else if(thisword.indexOf("para") >= 0 && currentWord === "para"){
	    		Materialize.toast("¿Qué debo recordar?", 3000);
	    		Speech.talk("¿Qué debo recordar?");
				$('.clockycontainer').css('background-image', "url('svg/todobiennegro.png')");
	    		currentWord = "limpiar";
	    	} else if(thisword.indexOf("limpiar") >= 0 && currentWord === "limpiar"){
	    		Materialize.toast("¡Hecho! ;)", 3000);
	    		Speech.talk("¡Hecho!");
				$('.clockycontainer').css('background-image', "url('svg/CheckN.png')");
	    		currentWord = "agenda";
	    		var fecha = new Date();
	    		fecha.setSeconds(fecha.getSeconds()+5);
	    		comm.agendar("Limpiar la pieza", fecha);
	    	}
	    	/*} else {
	    		//console.log(event.results[i][0].transcript.toLowerCase());
	    	}*/
	      /*if (event.results[i].isFinal) {
	        final_transcript += event.results[i][0].transcript;
	      } else {
	        interim_transcript += event.results[i][0].transcript;
	      }*/
	    }
	    /*final_transcript = capitalize(final_transcript);
	    final_span.innerHTML = linebreak(final_transcript);
	    interim_span.innerHTML = linebreak(interim_transcript);
	    console.log(event.results);*/
	  };
	  recognition.onend = function(event){
	  	final_transcript = '';
	  	console.log("end");
	  	recognition.start();
	  }

});