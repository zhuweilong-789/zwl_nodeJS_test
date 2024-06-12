const express = require('express')

const app = express()
const fs = require('fs')
const path = require('path')

//全局中间件函数
function far(req, res, next){
  const {url, ip} = req
  fs.appendFileSync(path.resolve(__dirname, './acc.log'), `${url} ${ip}\r\n`)
  // 后续调用
  next()
}

app.use(far)

app.get('/home', (req, res) => {
  res.send('首页')
})

app.get('/admin', (req, res) => {
  res.send('admin首页')
})

app.all('*', (req, res)=> {
  res.send('404')
})

app.listen(3000, ()=>{
  console.log('服务启动')
})