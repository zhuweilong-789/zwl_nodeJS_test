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
app.get('/:id.html', (req, res) => {
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

// 一般响应和其他响应
app.get('/respost', (req, res)=> {
  /**
   * node中的http模块
   */
  res.status(208)
  res.set('zwl', 'zhuweilong');
  res.end('响应体');
})

app.listen(3000, () => {
  console.log('服务启动了')
})
