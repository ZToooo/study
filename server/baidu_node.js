var http=require('http');

http.createServer(function(req,res){
	res.writeHead(200,{
		'Content-type':'text/plain'
	});
	res.end("Hello baidu.nodejs\n");
}).listen(9090,'127.0.0.1');
