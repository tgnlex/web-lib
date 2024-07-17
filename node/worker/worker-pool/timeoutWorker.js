import workerpool from 'workerpool'
function timeout(delay) {
	return new Promise(function(resolve, reject) {
		setTimeout(resolve, delay);
	})
}

workerpool.worker({
	timeout: timeout,
});	