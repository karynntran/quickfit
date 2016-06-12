var mongoose = require("mongoose");
var Fitness = require("../data/fitness");
var _ = require("underscore");

var router = require("express").Router();
router.route("/fitness/:id?").get(getFitness).post(addFitness).delete(deleteFitness);

function getFitness(req, res) {
    Fitness.find(function (err, fitness) {
        if (err)
            res.send(err);
        else
            res.json(fitness);
    });
}

function addFitness(req, res) {
    var fitness = new Fitness(_.extend({}, req.body));
    fitness.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(fitness);
    });
}

function deleteFitness(req, res) {
    var id = req.params.id;
    Fitness.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}

module.exports = router;