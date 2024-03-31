const fs = require('fs')

// 创建文件夹
fs.mkdir('./path',call => {
  console.log(call)
});

// 读取文件夹
fs.readdir('./path', (err, files) => {
  console.log(err, files)
})

// 删除文件夹
fs.rmdir('./path', err => {
  
})