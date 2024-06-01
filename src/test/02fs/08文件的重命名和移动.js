const fs = require('fs')

// 调用rename方法
fs.rename('./profile/重命名.txt', './profile/润宇.txt', err => {
  console.log(err)
})

// 同步方法
fs.renameSync('./profile/重命名.txt', './profile/润宇2.txt')

/**
 * 重命名和移动其实是一样的
 */