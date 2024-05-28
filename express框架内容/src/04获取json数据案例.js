const express = require('express')

const app = express()

const jsonDate = require('./json/singer.json')
console.log('数据', jsonDate)
const {users} = jsonDate

app.get("/singer/:id.html", (req, res) => {
  // 获取请求的参数, req下面有很多请求参数的属性
})

app.listen(3000, () => {
  console.log('服务启动了')
})
