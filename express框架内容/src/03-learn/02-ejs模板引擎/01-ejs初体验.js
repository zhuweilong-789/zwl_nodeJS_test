// 为实现业务数据和模板分离
const ejs = require('ejs')

const fs = require('fs')

let china = '中国'

const str = fs.readFileSync('./01-index.html').toString()

// 使用ejs语法
const result = ejs.render(str, {china:china})

console.log(result)