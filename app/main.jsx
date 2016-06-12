var React = require("react"),
	ReactDOM = require("react-dom"),
	ExerciseList = require("./components/ExerciseList.jsx"),
	exerciseStore = require("./stores/exerciseStore"),
	_exercise = [],
	getExerciseCallback = function(exercise){
		_exercise = exercise;
		render();
	};

exerciseStore.onChange(getExerciseCallback);

function render(){
    ReactDOM.render(<ExerciseList exercise={_exercise} />, document.getElementById("container"));    
}