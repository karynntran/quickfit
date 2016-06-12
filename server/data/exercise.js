var mongoose = require("mongoose");
var exerciseSchema = mongoose.Schema({
    exerciseType: String,
    exerciseName: String
});

module.exports = mongoose.model("exercise", exerciseSchema);