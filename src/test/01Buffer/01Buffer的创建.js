/**
 * 创建Buffer对象的方式, 01Buffer的创建.js
 * Buffer对象用于表示固定长度的字节序列，一个字节是8bit，这里操作的是内存所以他有更好的效益
 */
const {Buffer} = require('node:buffer')

//1.通过alloc
let buf = Buffer.alloc(10)
console.log(buf)

//2.allocUnsafe
let buf2 = Buffer.allocUnsafe(10)
console.log(buf2)

//3.form
let buf3 = Buffer.from('zwl')
// 这里转ascII表之后转16进制
console.log(buf3)
