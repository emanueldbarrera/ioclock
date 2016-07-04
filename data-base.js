var DataBase = (function(){
	var item = 'tasks',
	allTasks = [];
	function save(tasks){
		localStorage.setItem(item,JSON.stringify(tasks));
	}
	function get(){
		/*var tasks = localStorage.getItem(item);
		console.log(tasks);	
		if(tasks){
			tasks = JSON.parse(localStorage.getItem(item));
			for(var i =0;i<tasks.length;i++){
				tasks[i].date = new Date(tasks[i].date);
			}
		}else{
			tasks =[];
		}*/

		return allTasks;
	}
	function update(task){
		allTasks.push(task);
		/*task.date = task.date.toString();
		if(get()){
			save(get().push(task));
		}else{
			save([task]);
		}*/
	}
	return{
		save:function(tasks){
			return save(tasks);
		},
		get:function(){
			return get();
		},
		update:function(task){
			return update(task);
		}
	}
});

db = new DataBase();