const fs = require('fs')

//异步读取
fs.readFile('./座右铭.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// 同步读取
const str = fs.readFileSync('./座右铭.txt', 'utf-8', );
console.log(str)

