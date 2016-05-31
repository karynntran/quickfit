var React = require("react"),
	FitnessInfo = require("./FitnessInfo.jsx"),
	AddFitness = require("./AddFitness.jsx");;

module.exports = React.createClass({
	render:function(){
		return(
			<div className="row">
				<div className="col-md-6">
					<AddFitness />
				</div>
				<div className="col-md-6">
					{
						this.props.fitness.map(function(s,index){
							return(
								<FitnessInfo info={s} key={"fitness"+index} />
							)
						})
					}
				</div>
			</div>
		)
	}
})