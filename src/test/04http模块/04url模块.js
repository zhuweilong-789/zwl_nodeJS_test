const http = require('http')
const url = require('url')

// 创建服务对象
const server = http.createServer((req, res) => {
  // let reaa = url.parse(req.url, true)
  // console.log('请求：',req)
  // console.log(reaa)
  /*
  上面的方法已弃用
   */
  let url = new URL(req.url, 'http://127.0.0.1:3000')
  console.log(url)
  console.log(url.searchParams.getAll("name"))
  res.end('url')
})

server.listen(3000, '127.0.0.1', ()=> {
  console.log('Listening on 127.0.0.1:3000');
})
