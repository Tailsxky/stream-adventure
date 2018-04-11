var split = require('split');
var through2 = require('through2');
var i = 0;
process.stdin.pipe(split()).pipe(through2(function(line,_,next){
    if(i%2===0){
    this.push(line.toString().toLowerCase() + '\n');
    i+=1;
    next();
    }
    else{
    this.push(line.toString().toUpperCase() + '\n');
        i+=1;
        next();    
    
    }
})).pipe(process.stdout);