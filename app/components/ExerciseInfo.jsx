var React = require("react"),
	actions = require("../actions/ExerciseActions");;

module.exports = React.createClass({
    getInitialState: function() {
        return {
            info: null
        };
    },
    deleteExercise: function(e){
        e.preventDefault();
        actions.deleteExercise(this.props.info);
    },
    render:function(){
        console.log(this.props.info);
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