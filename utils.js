Element.prototype.addClass = function(newClass){
	if(this.className.indexOf(newClass)<0){
		this.className = this.className+" "+newClass;
	}
};
Element.prototype.removeClass = function(delClass){
	var index = this.className.indexOf(delClass),
	cN = this.className;
	if(index>=0){
		this.className = cN.substring(0,index)+" "+cN.substring((index+delClass.length),cN.length);
	}
}

var main = document.getElementById('main');


