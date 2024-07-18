const reqTime = (req, res, next) => {
	req.timestamp = Date.now()
  req.datetime = Date.toLocaleString();
  console.info(`Request: ${req.datetime}`);
}
