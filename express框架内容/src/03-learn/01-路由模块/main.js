const express = require('express')

const app = express()

const qian = require('./qian.js')
const hou = require('./hou.js')

app.use(qian)
app.use(hou)

app.listen(3000, () => {
  console.log('启动')
})