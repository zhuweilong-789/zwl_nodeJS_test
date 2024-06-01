const http = require('http')
const url = require('url')

// 创建服务对象
const server = http.createServer((req, res) => {
  // 设置响应状态码
  res.statusCode = 204
  // 设置响应描述
  res.statusMessage = '响应描述'
  /*
  响应体两个方法一个write,一个end，end只能执行一次，另一个可以多个
   */
})

server.listen(3000, '127.0.0.1', ()=> {
  console.log('Listening on 127.0.0.1:3000');
})
