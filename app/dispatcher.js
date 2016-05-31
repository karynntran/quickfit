var Guid = require("guid"),
	listeners = {};

function dispatch(payload) {
	for (var id in listeners){
		listeners[id](payload);
	}
}

function register(cb) {
	var id = Guid.create();
	listeners[id] = cb;
}

module.exports =  {
	register: register,
	dispatch: dispatch
}