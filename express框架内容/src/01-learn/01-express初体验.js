//Express框架建立在node.js内置的http模块上。http模块生成服务器的原始代码如下

const http = require('http')

const app = http.createServer((req,res) => {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hello world! node http");
})

app.listen(3000, ()=> {
  console.log('http服务启动')
})


// express写法
const express = require('express');
const app2 = express();

app2.get('/', function (req, res) {
  res.send('Hello world! express');
});

app2.listen(3000, ()=> {
  console.log('express服务启动')
})