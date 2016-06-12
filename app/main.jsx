var React = require("react"),
	ReactDOM = require("react-dom"),
	FitnessList = require("./components/FitnessList.jsx"),
	fitnessStore = require("./stores/fitnessStore"),
	_fitness = [],
	getFitnessCallback = function(fitness){
		_schools = schools;
		render();
	};


fitnessStore.onChange(getFitnessCallback);

function render(){
    ReactDOM.render(<FitnessList fitness={_fitness} />, document.getElementById("container"));    
}

render();