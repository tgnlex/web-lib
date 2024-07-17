const datetime = require('node-datetime')

function getDate () {
		const dt = datetime.create();
		const ft = dt.format('m/d/Y|H:M:S')

		console.log (ft)
		return ft;
}
