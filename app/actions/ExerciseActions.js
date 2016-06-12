var dispatcher = require("../dispatcher");

module.exports = {
	addExercise:function(exercise){
		dispatcher.dispatch({
			exercise:exercise,
			type:"exercise:addExercise"
		});
	},
	deleteExercise:function(exercise){
		dispatcher.dispatch({
			exercise:exercise,
			type:"exercise:deleteExercise"
		});
	}
	
}