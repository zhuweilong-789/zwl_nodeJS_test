const express = require('express')

const app = express()

app.use((req, res, nuxt)=>{
  let referer = req.get('referer')
  if(referer){
    let url = new URL(referer)
    const hostname = url.hostname
    if(hostname !== '127.0.0.1'){
      res.send('404')
      return
    }
  }
  nuxt()
})

// 静态资源中间件， 看两个执行顺序，先执行的先解释
app.use(express.static(__dirname + '/public'))

app.listen(3000, ()=>{
  console.log('服务启动')
})