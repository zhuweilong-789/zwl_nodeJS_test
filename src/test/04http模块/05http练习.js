const http = require('http')

// 创建服务对象
const server = http.createServer((req, res) => {
  let url = new URL(req.url, 'http://127.0.0.1:3000')
  res.writeHead(200, { 'Content-Type': 'text/plain;charset=UTF-8' });
  if(url.pathname === '/login'){
    res.end('登录页面')
  }else{
    res.end('other')
  }
})

server.listen(3000, '127.0.0.1', ()=> {
  console.log('Listening on 127.0.0.1:3000');
})
