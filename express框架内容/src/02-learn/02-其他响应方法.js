const express = require('express')

const app = express()

app.get('/response', (req, res) => {
  //重定向
  res.redirect('http://baidu.com')
  //下载
  // res.download('./filePath')
  // //响应json
  // res.json()
  // //响应文件内容
  // res.sendFile( __dirname+'./index.html')
})

app.listen(3000, ()=>{
  console.log('服务启动')
})