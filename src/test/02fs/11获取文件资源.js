const fs = require('fs')

// 获取文件资源
fs.stat('./path', (err, stats) => {
  console.log(err, stats)
  // 查看是否是文件
  stats.isFile()
  // 查看是否是文件夹
  stats.isDirectory()
})