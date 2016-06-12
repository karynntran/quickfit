var $ = require("jquery");
var promise = require("es6-promise");
var resourceUrl = "http://localhost:7777/api/exercise";

module.exports = {
    addExercise: function (exercise) {
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl,
                data: JSON.stringify(exercise),
                method: "POST",
                dataType: "json",
                contentType: "application/json",
                success: resolve,
                error: reject
            });
        });
    },
    getExercise: function () {
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl,
                method: "GET",
                dataType: "json",
                success: resolve,
                error: reject
            });
        });
    },
    deleteExercise: function (exercise) {
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl + "/" + exercise._id,
                method: "DELETE",
                dataType: "json",
                success: resolve,
                error: reject
            });
        });
    }
}