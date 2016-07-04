var Commands = (function(){
	function agendar(name,date){
		var task = {
			name : name,
			date : date
		}

		db.update(task);
	}
	function recordar(task,day){
		var date = new Date();
		if(day==='mañana'){
		    var tomorrow = new Date();
		    tomorrow.setDate(date.getDate()+1);
		}
	}
	function areEqual(today,date){
		return (today.getDate()===date.getDate()&&today.getHours()===date.getHours()&&today.getMinutes()===date.getMinutes()&&today.getSeconds()===date.getSeconds());
	}
	function removeTask(tasks,i){
		tasks.splice(i,1);
	}
	function getTasks(){
		var tasks = db.get(),
		today = new Date();
		for(var i = 0 ; i<tasks.length;i++){
			//console.log('hola');
			if(areEqual(today,tasks[i].date)){
				console.log('hola2');
				Speech.talk(tasks[i].name);
				removeTask(tasks,i);
				$('.clockycontainer').css('background-image', "");
	    		main.removeClass('container--active');
			} else {
				console.log('no hay nada papu');
			}
		}
	}
	setInterval(getTasks,100);
	return{
		agendar:function(task,date){
			return agendar(task,date);
		}
	}
});

var comm = new Commands();