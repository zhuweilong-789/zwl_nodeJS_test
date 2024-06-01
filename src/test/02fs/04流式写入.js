const fs = require('fs')

const ws = fs.createWriteStream('./观书有感.txt')

ws.write('11111\r\n')
ws.write('22222\r\n')
ws.write('33333\r\n')
ws.write('44444\r\n')

ws.close()
