const schedule = require('node-schedule');

const rule = new schedule.RecurrenceRule();
rule.minute = 60;

const job = schedule.scheduleJob(rule, function() {
	console.log(Date.now())
	console.log('Test Successful!')
})