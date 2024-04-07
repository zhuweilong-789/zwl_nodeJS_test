const path = require('path')

// 路径问题拼接
console.log(path.resolve(__dirname, 'index.html'))
// 有没有点都是相对路径
console.log(path.resolve(__dirname, './index.html'))