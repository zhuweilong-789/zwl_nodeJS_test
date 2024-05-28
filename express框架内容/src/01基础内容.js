const express = require('express')

const app = express()

app.get("/home", (req, res) => {
  // 获取请求的参数, req下面有很多请求参数的属性
  console.log(req.path)
  console.log(req.query)
})

app.listen(3000, () => {
  console.log('服务启动了')
})
