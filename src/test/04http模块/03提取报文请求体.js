const http = require('http')

// 创建服务对象
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  let body = ''
  req.on("data", (chunk)=> {
    body += chunk
  })
  req.on('end', ()=> {
    console.log(body)
    res.end('Hello World!\n');
  })
})

server.listen(3000, '127.0.0.1', ()=> {
  console.log('Listening on 127.0.0.1:3000');
})
