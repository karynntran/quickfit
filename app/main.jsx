var React = require("react"),
	ReactDOM = require("react-dom"),
	MainLayout = require("./components/MainLayout.jsx"),
	exerciseStore = require("./stores/exerciseStore"),
	getExerciseCallback = function(exercise){
		_exercise = exercise;
		getExerciseList();
	},
	ExerciseList = require("./components/ExerciseList.jsx"),		
	_exercise=[];
	exerciseStore.onChange(getExerciseCallback);

function init(){
	ReactDOM.render(<MainLayout/>, document.getElementById("container"));
}

function getExerciseList(){
    // ReactDOM.render(<ExerciseList exercise={_exercise} />, document.getElementById("exlisttest"));    
    // ExerciseList.render();
};

init();