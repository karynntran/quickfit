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
	// shouldComponentUpdate: function(nextProps, nextState) {
 //  		return nextProps
 //  		// return nextProps.id !== this.props.id;
	// },
	// componentWillUnmount: function() {
	// 	this.serverRequest.abort();
	// },

	render:function(){
		return(
			<div className="row">
				<section className="col-md-6">
					<div classID="select-exercise" className="section-header">Select your exercise</div>
					<ul className="exercise-categories">
						<li>Arms</li>
						<li>Legs</li>
						<li>Abs</li>
					</ul>
				</section>

				<section className="col-md-6">
					<div classID="add-exercises" className="section-header">Add Exercise</div>
					<AddExercise exercise={this.state.dataSet}/>
				</section>

				<section className="col-md-6">
					<div classID="all-exercises" className="section-header" id="exerciselist">All Exercises</div>
					<ExerciseList exercise={this.state.dataSet}/>
				</section>
			</div>
		)
	}
})