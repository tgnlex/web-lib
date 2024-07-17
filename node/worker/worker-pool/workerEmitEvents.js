const workerpool = require('workerpool');

function eventExample(delay) {
	workerpool.workerEmit({
	  status: `[WORKER]: Task in progress...`
	});

	workerpool.workerEmit({
	 status: `[WORKER]: Task Completed.`
	});
	return true;
}

workerpool.worker({
	eventExample: eventExample,
});