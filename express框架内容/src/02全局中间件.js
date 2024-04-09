const express = require('express')

const app = express()
const fs = require('fs')
const path = require('path')


//路由中间件函数
function zhongjian(req, res, nuxt){
  let {url, ip} = req
  fs.appendFileSync(path.resolve(__dirname, './ass.txt'), `${url} +++ ${ip}\r\n`)
  nuxt()
}

// 调用中间件函数
app.use(zhongjian)

app.get('/home', (req, res)=> {
  res.send('前台首页')
})

app.get('/admin', (req, res)=> {
  res.send('后台首页')
})

app.all('*',(req, res) => {
  res.send('404')
})

app.listen(3000, () => {
  console.log('服务启动了')
})
