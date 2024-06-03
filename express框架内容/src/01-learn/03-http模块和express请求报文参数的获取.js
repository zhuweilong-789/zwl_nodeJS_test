
const http = require('http')
const url = require('url')

const app = http.createServer((req, res)=> {
  res.setHeader('Content-Type','text/plain;charset=utf8');
  const urlObj = url.parse(req.url, true)
  console.log('url数据对象', urlObj)
  let pathname = urlObj.pathname;
  let path = urlObj.path
  let method = req.method.toUpperCase();
  let params = urlObj.query;
  console.log(method)
  if(method === 'GET'){

      if(path === '/home'){
        res.end('2222')
      }else if(path === '/home/:path'){
        res.end('test')
      }else if(path === '/home?name'){

      }else{
        res.end('404')
      }
  }
})

app.listen(3000,  ()=> {
  console.log('启动了')
})


/**
 * express获取请求参数
 * @type {e | (() => Express)}
 */
const express = require('express')

const app2 = express()

app2.get('/request', (req,res)=>{
  console.log(req.path)
  console.log(req.url)
  console.log(req.method)
  console.log(req.httpVersion)
  console.log(req.query)
  console.log(req.ip)
  // 也是一种请求方法
  console.log(req.get('host'))
})
app2.listen(3001, ()=>{
  console.log('express启动')
})

