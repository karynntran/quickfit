var React = require("react"),
	actions = require("../actions/ExerciseActions");

module.exports = React.createClass({
	getInitialState:function(){
		return {
			dataSet: ''
		}
	},
	addExercise:function(e){
		e.preventDefault();
		actions.addExercise(this.state);
	},
	handleInputChange:function(e){
		e.preventDefault();
	    var name = e.target.name;
	    var newState = this.state;
	    newState[name] = e.target.value;
	},
	render:function(){
		return(
            <form className="form" onSubmit={this.addExercise}>
                <div className="form-group">
                    <label className="control-label" htmlFor="type">Exercise Type:</label>
                    <input type="text" className="form-control" id="type" name="exerciseType" value={this.state.exerciseType} onChange={this.handleInputChange} placeholder="Exercise Type" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="exercise">Exercise Name:</label>
                    <input type="text" className="form-control" id="exercise" name="exerciseName" value={this.state.exerciseName} onChange={this.handleInputChange} placeholder="Exercise" />                    
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Add Exercise</button>
                </div>
            </form>
		)
	}

})