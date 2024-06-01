const fs = require('fs')

// 流读取
const liuRead = fs.createReadStream('./观书有感.txt')

// 监听读取的文件
liuRead.on("data", (data)=> {
  console.log(data.toString())
})

// 监听打算开文件
liuRead.on('open', (fd) => {
  console.log('文件被打开了', fd)
})

// 监听打算开文件
liuRead.on('end', () => {
  console.log('文件读取结束')
})

// 监听打算开文件
liuRead.on('close', () => {
  console.log('关闭读取')
})

