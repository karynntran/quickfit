var dispatcher = require("../dispatcher");

function FitnessStore() {
	var listeners = [],
		fitness = [
			{exerciseType:"arms", exerciseName:"pushups"},
    		{exerciseType:"legs", exerciseName:"squats"},
    		{exerciseType:"abs", exerciseName:"crunches"}
		];

	function getFitness(){
		return fitness;
	}

	function onChange(listener) {
		listeners.push(listener);
	}

	function addFitness(fitnessEl){
		fitness.push(fitnessEl);
		triggerListeners();
	}

	function deleteFitness(fitnessEl){
		var _index;
		fitness.map(function (s, index) {
			if (s.type === fitness.exerciseType) {
				_index = index;
			}
		});
		fitness.splice(_index, 1);
		triggerListeners();
	}

	function triggerListeners(){
		listeners.forEach(function(listener){
			listener(fitness);
		})
	}

	dispatcher.register(function (payload) {
		var split = payload.type.split(":");
		if (split[0] === "fitness") {
			switch(split[1]) {
				case "addFitness":
					addFitness(payload.fitness);
					break;
				case "deleteFitness":
					deleteFitness(payload.fitness);
					break;
			}
		}
	});

	return {
		getFitness:getFitness,
		onChange: onChange
	}
}

module.exports = FitnessStore();