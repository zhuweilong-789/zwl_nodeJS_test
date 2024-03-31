const fs = require('fs')

//同步读取文件写入文件
const rd = fs.readFileSync('./profile/资料1')
fs.writeFileSync('./profile/资料2.txt', rd)

// 流写入
const rs = fs.createReadStream('./profile/资料1')
const ws = fs.createWriteStream('./profile/资料3.txt')

// 边读边写
rs.on('data', chunk => {
  ws.write(chunk)
})