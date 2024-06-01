const http = require('http')
const fs = require("fs");

// 创建服务对象
const server = http.createServer((req, res) => {

  const {pathname} = new URL(req.url, 'http://127.0.0.1')
  const root = __dirname + '/path'
  const filepath = root + pathname

  fs.readFile(filepath, (err, data) => {
    res.end(data)
  })
})

server.listen(3000, '127.0.0.1', ()=> {
  console.log('Listening on 127.0.0.1:3000');
})
