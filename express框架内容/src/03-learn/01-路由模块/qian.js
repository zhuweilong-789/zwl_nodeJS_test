const express = require('express')

// 创建路由对象
const router = express.Router()

router.get('/home', (req, res) => {
  res.send('首页')
})


router.get('/searion', (req, res) => {
  res.send('搜索')
})

module.exports = router;