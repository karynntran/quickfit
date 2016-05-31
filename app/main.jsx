var React = require("react"),
	ReactDOM = require("react-dom"),
	FitnessList = require("./components/FitnessList.jsx"),
	fitnessStore = require("./stores/fitnessStore"),
	_fitness = fitnessStore.getFitness();


fitnessStore.onChange(function(fitness){
    _fitness = fitness;
    render();
});

function render(){
    ReactDOM.render(<FitnessList fitness={_fitness} />, document.getElementById("container"));    
}

render();