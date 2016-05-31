var dispatcher = require("../dispatcher");

module.exports = {
	addFitness:function(fitness){
		dispatcher.dispatch({
			fitness:fitness,
			type:"fitness:addFitness"
		});
	},
	deleteFitness:function(fitness){
		dispatcher.dispatch({
			fitness:fitness,
			type:"fitness:deleteFitness"
		});
	}
}