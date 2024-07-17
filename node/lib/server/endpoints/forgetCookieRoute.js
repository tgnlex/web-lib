

app.get('/cookie/forget', function(req, res){
    res.clearcookie('my-cookie');
    res.redirect('back');
});
