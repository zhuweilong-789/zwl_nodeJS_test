const express = require('express')

const app = express()

app.get('/response', (req, res) => {
  // express支持原生的响应方式
  // res.statusCode = 404
  // res.statusMessage = 'zhuiweilong'
  // res.end('hello')

  //express框架的设置
  res.status(500)
  res.set('aaa', 'bbb')
  // 框架本身的方法设置了uft-8编码
  res.send('你好，zhuweilong')
})

app.listen(3000, ()=>{
  console.log('服务启动')
})