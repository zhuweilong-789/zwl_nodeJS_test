const express = require('express')

const app = express()


//静态资源文件
app.use(express.static(__dirname + '../public'))

//路由中间件函数
function zhongjianly(req, res, nuxt){
  let {url, ip, query} = req
  console.log(query)
  console.log('路径',__dirname + '../public')
  if(query.code === '521'){
    nuxt()
  }else{
    res.send('参数错误')
  }
}


app.get('/home',zhongjianly, (req, res)=> {
  res.send('前台首页')
})

app.get('/admin', zhongjianly, (req, res)=> {
  res.send('后台首页')
})

app.all('*',(req, res) => {
  res.send('404')
})

app.listen(3000, () => {
  console.log('服务启动了')
})
