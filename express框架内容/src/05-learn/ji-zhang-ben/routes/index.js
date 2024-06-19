var express = require('express');
var router = express.Router();

// 记账本列表
router.get('/account', function(req, res, next) {
  res.send('账本列表')
});

// 添加记录
router.post('/account/create', function(req, res, next) {
  res.send('添加列表')
});


module.exports = router;
