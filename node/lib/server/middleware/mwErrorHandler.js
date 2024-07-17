const errorHandler = (req, res, next) => {
    req.status(404)

    res.format({
        html: function() {
            res.redirect('/404', {url: req.url ])
        },
        json: function () {
            res.json{( error: 'Not found')}
        }, 
        default: function () {
        res.type('txt').send('Not found')
    }
  })
};





