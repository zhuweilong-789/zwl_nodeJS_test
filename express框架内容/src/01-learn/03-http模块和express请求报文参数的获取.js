const http = require('http')
const app = http.createServer((req, res)=> {
  console.log(req.url,req.method)
})
266
app.listen(3000,  ()=> {
  console.log('启动了')
})

const express = require('express')

const app2 = express()

app2.listen(3001)

