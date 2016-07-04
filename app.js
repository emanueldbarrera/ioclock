var MicListener = (function(){

	function listen(){

	}
	
	function stopListen(){

	}
	listen();
});
var ListenSpeech = (function(){

});
var TaskManager = (function(){
	function createGoogleCalendarEvent(){

	}
	function createAlarm(){

	}
});
/*default
:
false
lang
:
"es-ES"
localService
:
false
name
:
"Google español"
voiceURI
:
"Google español"*/
window.onload = function(){
	new VoiceRec();
	/*window.speech.then(function(){
		var com = new Commands();
		//new Speech('Hola, mi nombre es cloky.');
		var ahora = new Date();
		var enUnMinuto = new Date();
		enUnMinuto.setSeconds(ahora.getSeconds()+5);
		
		com.agendar('Prueba',enUnMinuto);
	},
	function(){

	});*/
};

