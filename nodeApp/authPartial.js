var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.render('/views/usr/index.html');
})

/*
Blizzard authentication code
upon request
*/
app.get('/auth/bnet',
    passport.authenticate('bnet'));
 
app.get('/auth/bnet/callback',
    passport.authenticate('bnet', { failureRedirect: '/' }),
    function(req, res){
        res.redirect('/');
    });


var server = app.listen(8081, function() {

	var host = server.address().address
	var port = server.address().port

	console.log("Example app listening at http://%s:%s", host, port)
})