angular.module("toDoApp",[])
.controller("todocontroller",todo);
function todo() {
	this.editMode=false;
	this.todos = [
	"Java","Angular","Spring"
	];
		this.addNewToDo = function(){
			this.todos.push(this.newtodo);
			this.newtodo="";
		}
		this.changeEditMode = function(){
			this.editMode = !this.editMode;
		}
		this.deleteToDo = function(index){
			this.todos.splice(index,1);
		}
}
	