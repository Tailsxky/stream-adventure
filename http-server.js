var through = require('through2');
var http = require('http');

var write = function(buf, _, next){
    this.push(buf.toString().toUpperCase());
    next();
}

var end = function(done) {
    done();
}

var server = http.createServer(function(req,res){
    if(req.method === 'POST'){
        req.pipe(through(write,end)).pipe(res);
    }
    else {
        res.end('need a Post');
    }
});


server.listen(process.argv[2]);