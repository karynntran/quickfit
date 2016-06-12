var dispatcher = require("../dispatcher"),
	fitnessService = require("../services/fitnessService");


function FitnessStore() {
	var listeners = [];

    function onChange(listener) {
        getFitness(listener);
        listeners.push(listener);
    }
    
    function getFitness(cb){
        fitnessService.getFitness().then(function (res) {
            cb(res);
        });
    }

    function addFitness(fitness) {
        fitnessService.addFitness(fitness).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function deleteFitness(fitness) {
        fitnessService.deleteFitness(fitness).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function triggerListeners() {
        getFitness(function (res) {
            listeners.forEach(function (listener) {
                listener(res);
            });
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "fitness") {
            switch (split[1]) {
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
        onChange: onChange
    }
}

module.exports = FitnessStore();