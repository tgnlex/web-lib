const errorHandler = (res, err, status) => {
  console.error(err);
  res.status(status).send(err.message);
}

