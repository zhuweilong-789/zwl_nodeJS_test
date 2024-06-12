const express = require('express')

const app = express()
const fs = require('fs')
const path = require('path')




/**
 * 静态资源的注意点
 *
 * 因为默认是访问ip地址下的index.html，所以那个写前面那个就执行
 * 如果静态资源和路由一样那个在前面那个就执行
 * 路由一般执行动态操作
 */
app.get('/index.html', (req, res) => {
  res.send('我先执行，接口')
})

// 静态资源中间件， 看两个执行顺序，先执行的先解释
app.use(express.static(__dirname + '/public'))


app.all('*', (req, res)=> {
  res.send('404')
})


app.listen(3000, ()=>{
  console.log('服务启动')
})