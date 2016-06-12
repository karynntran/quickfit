var mongoose = require("mongoose");
var fitnessSchema = mongoose.Schema({
    exerciseType: String,
    exerciseName: String
});

module.exports = mongoose.model("fitness", fitnessSchema);