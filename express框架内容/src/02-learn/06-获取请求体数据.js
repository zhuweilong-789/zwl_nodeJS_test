/**
 * 场景:
 * 当是get请求返回login登录页面
 * 当时post请求获取表单中的用户名和密码
 */

const express =  require('express')

const app = express()


const bodyParser = require("body-parser");

// 解析json
const jsonParser = bodyParser.json()
// 解析queryString类型
const urlencodeParser = bodyParser.urlencoded({extended: false})

app.get('/login', (req,res)=>{
  console.log(__dirname)
  res.sendFile(__dirname + '/login.html')
})

app.post('/login', urlencodeParser,(req,res)=>{
  console.log(req.body)
})

app.listen(3000, ()=>{
  console.log('启动')
})