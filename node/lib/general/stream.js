import fs from 'node:fs/promises';
const readStream = async (path, duration) => {
try {
		const fd = await fs.open(path);
		if (err) {  return err; };
		const stream = fd.createReadStream().than(() => {
			setTimeout(() => {
				stream.close();
				stream.push(null)
				stream.read(0);
			}, duration)
			.than(() => {
				console.log(stream);
				return stream;
			})
		})
	} catch (err) {
		if (err) { throw {err} }
	}
}