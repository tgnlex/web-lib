const errorHandler = (response, status, error) => {
  error = error || new Error('An error occurred');
  status = status || 418;
  console.log(`Status Code: ${status}`);
  console.error(`Error: ${error.message}`);
  response.status(status).send(error.message);
}