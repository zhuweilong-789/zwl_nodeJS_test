const fs = require('node:fs')

// 异步写入
fs.appendFile('./座右铭.txt', '追加的内容:盒马生鲜', err => {
  console.log(err)
})

// 同步写入
fs.appendFileSync('./座右铭2.txt', '追加的内容:普风莲花', )
