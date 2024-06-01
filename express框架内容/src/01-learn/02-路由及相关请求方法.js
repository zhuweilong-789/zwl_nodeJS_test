const express = require('express')

const app = express()

//根目录请求
app.get('/', (req, res)=>{
  res.setHeader("content-type", "text/html;charset-8")
  res.end('根目录')
})

app.get('/home', (req, res)=>{
  res.setHeader("content-type", "text/html;charset-8")
  res.end('get请求')
})

app.post('/home/post', (req, res)=>{
  res.setHeader("content-type", "text/html;charset-8")
  res.end('post请求')
})

app.all('/test', (req, res)=>{
  res.setHeader("content-type", "text/html;charset-8")
  res.end('all的test所有请求返回')
})


app.all('*', (req, res)=>{
  res.setHeader("content-type", "text/html;charset-8")
  res.end('匹配所有不满足返回404')
})


app.listen(3000, ()=> {
  console.log('3000服务启动')
})