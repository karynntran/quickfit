var React = require("react"),
	actions = require("../actions/FitnessActions");;

module.exports = React.createClass({
    deleteFitness: function(e){
        e.preventDefault();
        actions.deleteFitness(this.props.info);
    },
    render:function(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.info.exerciseType}
                    <span className="pull-right text-uppercase delete-button" onClick={this.deleteFitness}>&times;</span>
                </div>
                <div className="panel-body">{this.props.info.exerciseName}</div>
            </div>
        )
    }
})