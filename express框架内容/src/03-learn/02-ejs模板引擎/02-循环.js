const xy = ['唐僧','孙悟空', '猪八戒', '白龙马']

const ejs = require('ejs')

const fs = require('fs')

const html = fs.readFileSync('./02-index.html').toString()

// 使用ejs语法
const result = ejs.render(html, {xy})

console.log(result)