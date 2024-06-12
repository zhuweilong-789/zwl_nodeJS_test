const express = require('express')

const app = express()
const fs = require('fs')
const path = require('path')

function bar(req, res, nuxt){
  if(req.query.code === '521'){
    nuxt()
  }else{
    res.send('该路由没有带参数')
  }
}

app.get('/home', (req, res) => {
  res.send('首页')
})

// 后台路由需要带参数查询，设置路由中间件
app.get('/admin', bar, (req, res) => {
  res.send('admin首页')
})

app.get('/setting', bar, (req, res)=> {
  res.send('admin首页,后台设置')
})

app.all('*', (req, res)=> {
  res.send('404')
})

app.listen(3000, ()=>{
  console.log('服务启动')
})