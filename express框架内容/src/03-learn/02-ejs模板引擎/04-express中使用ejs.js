const express = require('express')
const path = require("path");

const app = express()

// 设置模板引擎
app.set('view engine', 'ejs')

//设置模板文件存放位置
app.set('views', path.resolve(__dirname + '/views'))
app.get('/home', (req, res)=>{

  let title = 'zhuweilong'

  res.render('home', {title})
})

app.listen(3000, ()=>{
  console.log('启动成功')
})