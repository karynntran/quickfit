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
					<h1>Select your exercise</h1>
					<ul className="exercise-categories">
						<li>Arms</li>
						<li>Legs</li>
						<li>Abs</li>
					</ul>
				</div>

				<div className="col-md-6">
					<h1>See all exercises here</h1>
					<AddExercise />
				</div>
				<div className="col-md-6" id="exlisttest">
					<ExerciseList exercise={_exercise}/>
				</div>
			</div>
		)
	}
})