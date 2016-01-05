//hello.js
//var http=require('http');
/*function foo(request,response){
	response.writeHead(200);
	response.write('Hello,World');
	response.end();
	}*/
	var server=http.createServer();
	server.on('request',function(req,res){
	});
	server.on('close',function(req,res){
	});
var app=http.createServer(function (request,response){
	response.writeHead(200);
	response.write('Hello,World');
	//response.end();
setTimeout(function(){
	response.write('Hello is done');
	response.end();
},5000);
	//response.end();
	}).listen(8080);
console.log("listening on 8080...");