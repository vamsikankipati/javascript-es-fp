
// Solution for Asynchronous programming - alternative to callbacks and events
const promise = new Promise(function(resolve, reject) {
	if(success) {
		resove(value);
	} else {
		reject(error);
	}
});
