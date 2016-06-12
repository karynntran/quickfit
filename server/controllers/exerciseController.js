var mongoose = require("mongoose");
var Exercise = require("../data/exercise");
var _ = require("underscore");

var router = require("express").Router();
router.route("/exercise/:id?").get(getExercise).post(addExercise).delete(deleteExercise);

function getExercise(req, res) {
    Exercise.find(function (err, exercise) {
        if (err)
            res.send(err);
        else
            res.json(exercise);
    });
}

function addExercise(req, res) {
    var exercise = new Exercise(_.extend({}, req.body));
    exercise.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(exercise);
    });
}

function deleteExercise(req, res) {
    var id = req.params.id;
    Exercise.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}

module.exports = router;