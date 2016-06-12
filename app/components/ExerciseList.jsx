var React = require("react"),
	ExerciseInfo = require("./ExerciseInfo.jsx"),
	AddExercise = require("./AddExercise.jsx");

module.exports = React.createClass({
	render:function(){
		return(
			<div className="row">
				<div className="col-md-6">
					{
						this.props.exercise.map(function(s,index){
							return(
								<ExerciseInfo info={s} key={"exercise"+index} />
							)
						})
					}
				</div>
			</div>
		)
	}
})