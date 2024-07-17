function sessionCount(req, res) {
    req.session.count = (req.session.count || 0) + 1
    res.send('viewed ' + req.session.count + 'times\n')    
}
