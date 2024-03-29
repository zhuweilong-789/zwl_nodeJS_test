const {Buffer} = require('node:buffer')
const buf = Buffer.from([105,106,107])
// 转换为字符串
console.log(buf.toString())
// 这个toString是转换为二进制
console.log(buf[0].toString(2))

