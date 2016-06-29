var React = require("react"),
	$ = require("jquery"),
	ExerciseList = require("./ExerciseList.jsx"),
	AddExercise = require("./AddExercise.jsx"),
	ExerciseList = require("../components/ExerciseList.jsx"),
	_exercise=[];

module.exports = React.createClass({
	getInitialState: function() {
		return {
			dataSet: null,
		};
	},
	componentDidMount: function() {
		this.serverRequest = $.get('http://localhost:7777/api/exercise', function (result) {
		    this.setState({
				dataSet: result
		    });
		}.bind(this));
	},
	// componentWillUnmount: function() {
	// 	this.serverRequest.abort();
	// },

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
				<div className="col-md-6" id="exerciselist">
					<ExerciseList exercise={this.state.dataSet}/>
				</div>
			</div>
		)
	}
})