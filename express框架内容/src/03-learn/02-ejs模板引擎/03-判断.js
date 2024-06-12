const resu = true

const ejs = require('ejs')

const fs = require('fs')

const html = fs.readFileSync('./03-index.html').toString()

// 使用ejs语法
const result = ejs.render(html, {far: resu})

console.log(result)