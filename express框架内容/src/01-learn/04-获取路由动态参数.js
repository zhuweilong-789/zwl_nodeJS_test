const express = require('express')

const app = express()

app.get('/user/:id', (req, res) => {
  // 返回？后面带的参数
  console.log(req.query)
  // 返回路由路径的参数
  console.log(req.params)
  res.end('shop')
})

app.listen(3000, () => {
  console.log('启动')
})