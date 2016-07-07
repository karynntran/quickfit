var dispatcher = require("../dispatcher"),
	exerciseService = require("../services/exerciseService"),
    ExerciseList = require("../components/ExerciseList.jsx");


function ExerciseStore() {
	var listeners = [];

    function onChange(listener) {
        getExercise(listener);
        listeners.push(listener);
        this.setState;
    }
    
    function getExercise(cb){
        exerciseService.getExercise().then(function (res) {
            cb(res);
        });
    }

    function addExercise(exercise) {
        exerciseService.addExercise(exercise).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function deleteExercise(exercise) {
        exerciseService.deleteExercise(exercise).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function triggerListeners() {
        getExercise(function (res) {
            listeners.forEach(function (listener) {
                listener(res);
            });
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "exercise") {
            switch (split[1]) {
                case "addExercise":
                    addExercise(payload.exercise);
                    break;
                case "deleteExercise":
                    deleteExercise(payload.exercise);
                    break;
            }
        }
    });

    return {
        onChange: onChange,
    }
}

module.exports = ExerciseStore();