var http = require('http');
var util = require('util');
var querystring = require('querystring');
var database = require('mysql');

http.createServer(function(req, res) {
		{
			res.writeHead(200, {
				'Content-type': 'text/plain;charset=utf-8'
			});
			//定义一个get变量，用于暂存请求体的信息
			var get = '';

			//通过req的data监听函数，监听到后执行一个方法：每当接收到请求体数据，就累加到get
			req.on('data', function(chunk) {
				post += chunk;
			});

			//在end事件触发后，通过querystring.pares将get解析为真正的get请求格式，然后向客户端返回
			req.on('end', function() {
				//解析
				post = querystring.Parser(post);
				//响应头部
				res.writeHead(200, {
					'Content-type': 'text/html;charset=utf-8'
				});

				//提交数据给数据库
				if(post.new_title && post.new_type && post.new_pic) {
					//这里链接数据库提交数据给数据库
					var mysql = require('mysql');
					var connection = mysql.createConnection({
						host: '192.168.229.134',
						user: 'root',
						password: 'Diorhomme2005!',
						database: 'NEWS'
					});
					connection.connect();
					var sqlcmd = "insert into NEWS_INFO (new_title,new_type,new_pic,new_date) values (?,?,?,?)";
					var sqlparams = [post.new_title, post.new_type, post.new_pic, now()];

					connection.query(sqlcmd, sqlparams, function(err, result) {
						if(err) {
							alert(err.Message);
						}
						console.log("------INSERT SUCCESS-------");
						console.log("INSERT INFOMATION:" + result);
						console.log("---------------------------");
					})
				}
				res.end();
			})
		}).listen(9090, '127.0.0.1');