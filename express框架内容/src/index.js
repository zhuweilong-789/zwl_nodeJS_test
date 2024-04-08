const express = require('express')

const app = express()

// 创建路由
app.get('/home', (req, res) => {
  res.end('hello express')
})

// 首页路由
app.get('/', (req, res) => {
  res.end('hello 我是首页')
})

app.listen(3000, () => {
  console.log('服务启动了')
})