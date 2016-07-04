var Speech = (function(){
	var speech_voices,msg,prom;
	
	function initVoice(resolve){
		msg = new SpeechSynthesisUtterance();
		msg.voice = speech_voices[6];
		msg.voiceURI = 'Google Español';
		msg.volume = 1; // 0 to 1
		msg.rate = 1; // 0.1 to 10
		msg.pitch = 2; //0 to 2
		
		msg.lang = 'es-ES';
		resolve();
	}

	prom = new Promise(function(resolve,reject){
		if ('speechSynthesis' in window) {
			speech_voices = window.speechSynthesis.getVoices();
			window.speechSynthesis.onvoiceschanged = function() {
				speech_voices = window.speechSynthesis.getVoices();
				if(speech_voices.length>0){
					console.log(speech_voices);
					initVoice(resolve);
				}
			};
		}
	});
	window.speech = prom;
	
	function talk(str){
		console.log(str);
		msg.text = str;
		speechSynthesis.speak(msg);
	};
	function onError(log){
		console.log(log);
	}
	return {
		talk:function(str){
			return talk(str);
		}
	};
})();