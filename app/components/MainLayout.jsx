var React = require("react"),
	ExerciseList = require("./ExerciseList.jsx"),
	AddExercise = require("./AddExercise.jsx"),
	ExerciseList = require("../components/ExerciseList.jsx"),
	_exercise=[];

module.exports = React.createClass({
	render:function(){
		return(
			<div className="row">
				<div className="col-md-6">
					<AddExercise />
				</div>
				<div className="col-md-6" id="exlisttest">
					<ExerciseList exercise={_exercise}/>
				</div>
				<div className="col-md-6">
					Select your exercise
				</div>
			</div>
		)
	}
})