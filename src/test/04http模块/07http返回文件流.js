const http = require('http')
const fs = require('fs')

// 创建服务对象
const server = http.createServer((req, res) => {
  const file = fs.readFileSync(__dirname + '/login.html')
  console.log(__dirname)
  res.end(file);
})

server.listen(3000, '127.0.0.1', ()=> {
  console.log('Listening on 127.0.0.1:3000');
})
