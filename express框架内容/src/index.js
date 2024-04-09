const express = require('express')

const app = express()

// 创建路由
app.get('/home', (req, res) => {
  res.end('hello express')
})

// 首页路由
app.get('/', (req, res) => {
  // 设置响应头
  res.set({
    'Content-Type': 'text/plain;charset=uft-8'
  })
  res.end('hello 我是首页')
})

// 首页路由
app.get('/:id', (req, res) => {
  console.log('获取的id',req.params.id)
  // 设置响应头
  res.set({
    'Content-Type': 'text/plain;charset=uft-8'
  })
  res.end('hello 我是带id查询的接口')
})

// 创建一个home的post
app.post('/home', (req, res) => {
  res.end('这是一个post请求')
})

app.listen(3000, () => {
  console.log('服务启动了')
})
