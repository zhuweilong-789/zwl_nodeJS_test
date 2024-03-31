const fs = require("fs")

/**
 * fs模块在写路径的时候不带这个写相对路径，相对路径不是根据文件所在位置去改动的
 * 二是根据打开的命令行终端去相对的
 */
console.log(__dirname)