//hello-2.js
var http=require('http');
var server=http.createServer().listen(8080);
server.on('request',function(req,res){
	 		console.log('request:',req.method,req.url);
					console.log('status',res.statusCode);
	});
server.on('request',function(req,res){
	res.writeHead(200);
	res.write("hello");
	res.end('The end');
	});
	
	server.on('listening',function(){
		console.log('listen on 8080...');
	})