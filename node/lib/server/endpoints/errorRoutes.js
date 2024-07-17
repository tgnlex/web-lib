app.get('/404', (req, res, next) => {
  let err = new Error('Resource not found.')
  console.log(err)
  res.status(404)
});

app.get('/403', (req, res, next) => {
    let err = new Error('Request not allowed!')
    console.log(err)
    res.status(403)

});

app.get('/418', (req, res, next) => {
    let err = new Error('Im a teapot!')
})

app.get('/500', function(req, res, next){
    let err = new Error('Server error has occured')
    err.status = 500;
    console.log(err)
    res.status(500)
});

