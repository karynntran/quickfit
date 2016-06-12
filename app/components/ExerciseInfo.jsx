var React = require("react"),
	actions = require("../actions/ExerciseActions");;

module.exports = React.createClass({
    deleteExercise: function(e){
        e.preventDefault();
        actions.deleteExercise(this.props.info);
    },
    render:function(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.info.exerciseType}
                    <span className="pull-right text-uppercase delete-button" onClick={this.deleteExercise}>&times;</span>
                </div>
                <div className="panel-body">{this.props.info.exerciseName}</div>
            </div>
        )
    }
})