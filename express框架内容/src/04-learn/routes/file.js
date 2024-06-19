var express = require('express');
var router = express.Router();


// 文件上传路径
router.get('/file', function(req, res, next) {
  res.send('8888')
});

//处理文件上传
router.post('/file', function(req, res, next) {
  res.send('成功')
});

module.exports = router;
